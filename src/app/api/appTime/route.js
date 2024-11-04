import { activeWindow } from "get-windows";
import { NextResponse } from "next/server";

let appUsageMap = new Map();
let lastCheckTime = Date.now();

export async function GET() {
  try {
    const windowInfo = await activeWindow();
    const currentTime = Date.now();

    if (windowInfo && windowInfo.owner?.name) {
      const appName = windowInfo.owner.name;
      const key = appName;
      const timeElapsed = currentTime - lastCheckTime;

      const usageData = appUsageMap.get(key);
      if (usageData) {
        usageData.timeSpent += timeElapsed;
      } else {
        appUsageMap.set(key, { name: appName, timeSpent: timeElapsed });
      }
    }

    lastCheckTime = currentTime;

    const appUsage = Array.from(appUsageMap.values())
      .map((app) => ({
        name: app.name,
        timeSpent: parseFloat((app.timeSpent / 1000).toFixed(2)),
      }))
      .sort((a, b) => b.timeSpent - a.timeSpent)
      .slice(0, 5);

    return NextResponse.json(appUsage);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Błąd podczas zbierania danych o aktywnych oknach." },
      { status: 500 }
    );
  }
}
