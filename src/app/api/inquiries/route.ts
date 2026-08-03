import { NextRequest, NextResponse } from "next/server";
import { query } from "@/lib/db";
import { verifyToken, extractToken } from "@/lib/auth";

// POST - Submit a new inquiry (public - from forms)
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { source, fullName, email, phone, projectType, location, message } = body;

    // Validation
    if (!source || !fullName || !email) {
      return NextResponse.json(
        { error: "Missing required fields: source, fullName, email" },
        { status: 400 }
      );
    }

    if (!["inquiry_modal", "contact_form"].includes(source)) {
      return NextResponse.json(
        { error: "Invalid source. Must be 'inquiry_modal' or 'contact_form'" },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email address" },
        { status: 400 }
      );
    }

    const result = await query(
      `INSERT INTO inquiries (source, full_name, email, phone, project_type, location, message, status, created_at, updated_at)
       VALUES ($1, $2, $3, $4, $5, $6, $7, 'new', NOW(), NOW())
       RETURNING id, created_at`,
      [source, fullName, email, phone || null, projectType || null, location || null, message || null]
    );

    return NextResponse.json(
      { success: true, id: result[0].id, createdAt: result[0].created_at },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error creating inquiry:", error);
    return NextResponse.json(
      { error: "Failed to submit inquiry. Please try again." },
      { status: 500 }
    );
  }
}

// GET - Fetch all inquiries (admin only)
export async function GET(request: NextRequest) {
  try {
    // Auth check
    const token = extractToken(request.headers.get("authorization"));
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Query params for filtering
    const { searchParams } = new URL(request.url);
    const status = searchParams.get("status");
    const source = searchParams.get("source");
    const search = searchParams.get("search");
    const sortBy = searchParams.get("sortBy") || "created_at";
    const sortOrder = searchParams.get("sortOrder") || "DESC";

    // Validate sort parameters
    const allowedSortFields = ["created_at", "full_name", "email", "status", "source"];
    const safeSortBy = allowedSortFields.includes(sortBy) ? sortBy : "created_at";
    const safeSortOrder = sortOrder.toUpperCase() === "ASC" ? "ASC" : "DESC";

    let sql = "SELECT * FROM inquiries WHERE 1=1";
    const params: unknown[] = [];
    let paramIndex = 1;

    if (status && status !== "all") {
      sql += ` AND status = $${paramIndex}`;
      params.push(status);
      paramIndex++;
    }

    if (source && source !== "all") {
      sql += ` AND source = $${paramIndex}`;
      params.push(source);
      paramIndex++;
    }

    if (search) {
      sql += ` AND (full_name ILIKE $${paramIndex} OR email ILIKE $${paramIndex} OR phone ILIKE $${paramIndex} OR location ILIKE $${paramIndex})`;
      params.push(`%${search}%`);
      paramIndex++;
    }

    sql += ` ORDER BY ${safeSortBy} ${safeSortOrder}`;

    const rows = await query(sql, params);

    // Get stats
    const statsResult = await query(`
      SELECT 
        COUNT(*) as total,
        COUNT(*) FILTER (WHERE status = 'new') as new_count,
        COUNT(*) FILTER (WHERE status = 'contacted') as contacted_count,
        COUNT(*) FILTER (WHERE status = 'in_progress') as in_progress_count,
        COUNT(*) FILTER (WHERE status = 'closed') as closed_count,
        COUNT(*) FILTER (WHERE created_at >= CURRENT_DATE) as today_count
      FROM inquiries
    `);

    return NextResponse.json({
      inquiries: rows,
      stats: statsResult[0],
    });
  } catch (error) {
    console.error("Error fetching inquiries:", error);
    return NextResponse.json(
      { error: "Failed to fetch inquiries" },
      { status: 500 }
    );
  }
}
