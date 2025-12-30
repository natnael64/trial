import { neon } from "@neondatabase/serverless";

export const handler = async (event) => {
  const { text } = JSON.parse(event.body);

  const sql = neon(process.env.DATABASE_URL);

  await sql`INSERT INTO messages (text) VALUES (${text})`;

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
