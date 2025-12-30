import { neon } from "@neondatabase/serverless";

export const handler = async () => {
  try {
    const sql = neon(process.env.DATABASE_URL);
    const result = await sql`SELECT NOW()`;

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        time: result[0].now,
      }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
      }),
    };
  }
};
