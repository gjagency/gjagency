// lib/db.ts
import { Pool } from "pg";

// Singleton para la conexión a PostgreSQL
let pool: Pool | null = null;

export function getPool() {
  if (!pool) {
    pool = new Pool({
      connectionString: process.env.DATABASE_URL,
      ssl:
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : false,
    });
  }
  return pool;
}

export async function query(text: string, params?: unknown[]) {
  const pool = getPool();
  const result = await pool.query(text, params);
  return result;
}
