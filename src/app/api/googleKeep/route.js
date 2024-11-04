import { google } from "googleapis";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    // Autoryzacja
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/keep.readonly"],
    });

    // Inicjalizacja API Google Keep
    const keep = google.keep({ version: "v1", auth });

    // Pobieranie notatek
    const notesResponse = await keep.notes.list();
    const notes = notesResponse.data.notes || [];

    // Zwróć dane notatek jako JSON
    return NextResponse.json(notes);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Błąd podczas pobierania notatek z Google Keep." },
      { status: 500 }
    );
  }
}
