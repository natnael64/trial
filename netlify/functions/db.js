import { neon } from "@neondatabase/serverless";

export const handler = async () => {
  const sql = neon(process.env.DATABASE_URL);

  const result = await sql`SELECT NOW()`;

  return {
    statusCode: 200,
    body: JSON.stringify(result),
  };
};