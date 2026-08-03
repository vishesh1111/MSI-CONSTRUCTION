import { neon } from "@neondatabase/serverless";

function getDbUrl(): string {
  const url = process.env.DATABASE_URL;
  if (!url) {
    throw new Error("DATABASE_URL environment variable is not set");
  }
  return url;
}

export function getDb() {
  return neon(getDbUrl());
}

export async function query(sqlStr: string, params: unknown[] = []) {
  const sql = getDb();
  return sql.query(sqlStr, params);
}

export const INIT_SQL = `
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
);

CREATE INDEX IF NOT EXISTS idx_inquiries_status ON inquiries(status);
CREATE INDEX IF NOT EXISTS idx_inquiries_created_at ON inquiries(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_inquiries_source ON inquiries(source);
`;
