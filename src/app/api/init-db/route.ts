import { NextRequest, NextResponse } from "next/server";
import { getDb } from "@/lib/db";
import { verifyToken, extractToken } from "@/lib/auth";

export async function POST(request: NextRequest) {
  try {
    const token = extractToken(request.headers.get("authorization"));
    if (!token || !verifyToken(token)) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const sql = getDb();

    // Create table
    await sql.query(`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        source VARCHAR(50) NOT NULL,
        full_name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        phone VARCHAR(50),
        project_type VARCHAR(100),
        location VARCHAR(255),
        message TEXT,
        status VARCHAR(50) DEFAULT 'new',
        created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
        updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
      )
    `);

    // Create indexes separately
    await sql.query(`CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status)`);
    await sql.query(`CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC)`);
    await sql.query(`CREATE INDEX IF NOT EXISTS idx_inquiries_source ON inquiries(source)`);

    return NextResponse.json({
      success: true,
      message: "Database tables initialized successfully",
    });
  } catch (error) {
    console.error("Error initializing database:", error);
    return NextResponse.json(
      { error: "Failed to initialize database" },
      { status: 500 }
    );
  }
}
