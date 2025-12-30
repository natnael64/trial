import { neon } from "@neondatabase/serverless";

export const handler = async (event) => {
  try {
    // Read data sent from frontend
    const { text } = JSON.parse(event.body);

    if (!text) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: "Text is required" }),
      };
    }

    const sql = neon(process.env.DATABASE_URL);

    const result = await sql`
      INSERT INTO messages (text)
      VALUES (${text})
      RETURNING id, text, created_at;
    `;

    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        data: result[0],
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
