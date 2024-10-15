import { google } from "googleapis";
import fs from "fs";
import path from "path";
import { NextResponse } from "next/server";

function getStartOfWeek() {
  const now = new Date();
  const dayOfWeek = now.getUTCDay(); // Pobiera dzień tygodnia (0-6, gdzie 0 to niedziela)
  const diff = now.getUTCDate() - dayOfWeek + (dayOfWeek === 0 ? -6 : 1); // Oblicz pierwszy dzień tygodnia (poniedziałek)
  const startOfWeek = new Date(now.setUTCDate(diff));
  startOfWeek.setUTCHours(0, 0, 0, 0); // Ustawienie czasu na początek dnia
  return startOfWeek;
}

function getEndOfWeek() {
  const startOfWeek = getStartOfWeek();
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setUTCDate(startOfWeek.getUTCDate() + 6); // Ustaw koniec na niedzielę
  endOfWeek.setUTCHours(23, 59, 59, 999); // Ustawienie czasu na koniec dnia
  return endOfWeek;
}

export async function GET() {
  try {
    const keyPath = path.join(
      process.cwd(),
      "config/my-control-center-ad42973bbbe5.json"
    );
    const key = JSON.parse(fs.readFileSync(keyPath, "utf8"));

    // Utwórz autoryzację JWT z kluczem prywatnym konta serwisowego
    const auth = new google.auth.JWT(key.client_email, null, key.private_key, [
      "https://www.googleapis.com/auth/calendar.readonly",
    ]);

    // Inicjalizacja API Kalendarza
    const calendar = google.calendar({ version: "v3", auth });

    // Ustawienie zakresu czasowego na obecny tydzień
    const timeMin = getStartOfWeek().toISOString();
    const timeMax = getEndOfWeek().toISOString();

    // Pobieranie wydarzeń z kalendarza
    const events = await calendar.events.list({
      calendarId: "bartoszrezmer20@gmail.com",
      timeMin,
      timeMax,
      maxResults: 10,
      singleEvents: true,
      orderBy: "startTime",
    });

    // Zwróć dane wydarzeń jako JSON
    return NextResponse.json(events.data.items);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Something went wrong while fetching calendar data." },
      { status: 500 }
    );
  }
}
