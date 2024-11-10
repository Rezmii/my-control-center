import { NextResponse } from "next/server";
import { exec } from "child_process";
import path from "path";

// Zaktualizowana ścieżka do skryptu Python
const scriptPath = path.resolve("src", "scripts", "script.py");

export async function GET(request) {
  return new Promise((resolve, reject) => {
    exec(`python ${scriptPath}`, (error, stdout, stderr) => {
      if (error) {
        console.error(`Błąd wykonania skryptu: ${error.message}`);
        return reject(
          NextResponse.json(
            { error: "Błąd wykonania skryptu Python" },
            { status: 500 }
          )
        );
      }
      if (stderr) {
        console.error(`Błąd skryptu: ${stderr}`);
        return reject(
          NextResponse.json({ error: "Błąd skryptu Python" }, { status: 500 })
        );
      }

      // Zakładając, że skrypt zwraca dane w formacie JSON
      try {
        const result = JSON.parse(stdout); // Parsowanie wyników
        resolve(NextResponse.json(result)); // Zwracanie wyników
      } catch (parseError) {
        console.error("Błąd parsowania JSON:", parseError);
        reject(
          NextResponse.json(
            { error: "Błąd parsowania danych" },
            { status: 500 }
          )
        );
      }
    });
  });
}
