import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

// The card LinkedIn, Slack, WhatsApp etc. show when someone shares the site.
export const alt = "Krish Ahir — Software Engineering student in Berlin";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const fontDir = join(process.cwd(), "app/fonts/og");
const [michroma, mono, sans] = await Promise.all([
  readFile(join(fontDir, "michroma-400.woff")),
  readFile(join(fontDir, "jetbrains-mono-500.woff")),
  readFile(join(fontDir, "instrument-sans-600.woff")),
]);

const ACCENT = "#f5f5f5";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: "#101010",
          color: "#f5f5f5",
          borderTop: `8px solid ${ACCENT}`,
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: "JetBrains Mono",
            fontSize: 22,
            letterSpacing: 4,
            color: "#8f8f8f",
          }}
        >
          <span>SOFTWARE ENGINEERING · B.SC.</span>
          <span>BERLIN, DE</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Michroma", fontSize: 128, lineHeight: 1.1, letterSpacing: 4 }}>
          <span>KRISH</span>
          <span style={{ color: "#8f8f8f" }}>AHIR</span>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontFamily: "Instrument Sans",
            fontSize: 30,
          }}
        >
          <span style={{ maxWidth: 760 }}>Full-stack, AI and cloud projects. Looking for a 6+ month internship.</span>
          <span style={{ fontFamily: "JetBrains Mono", fontSize: 24, color: ACCENT }}>krriss.cloud</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Michroma", data: michroma, weight: 400, style: "normal" },
        { name: "JetBrains Mono", data: mono, weight: 500, style: "normal" },
        { name: "Instrument Sans", data: sans, weight: 600, style: "normal" },
      ],
    },
  );
}
