import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Pinehollow Studios — an independent software studio.";

// "The lean" mark, brand gradient, as a data URI for the card header.
const markSvg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <defs>
    <linearGradient id="beam" x1="0" y1="0" x2="0.4" y2="1">
      <stop offset="0%" stop-color="#B0F1FF"/>
      <stop offset="100%" stop-color="#D6F5FF"/>
    </linearGradient>
  </defs>
  <rect x="14" y="5" width="15" height="52" rx="7.5" transform="rotate(22 21.5 31)" fill="url(#beam)"/>
  <rect x="34" y="15" width="14.5" height="42" rx="7.25" transform="rotate(-24 41.25 36)" fill="url(#beam)" opacity="0.85"/>
</svg>
`.trim();

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

export default async function OgImage() {
  const [extraBold, medium] = await Promise.all([
    font("Manrope-ExtraBold.ttf"),
    font("Manrope-Medium.ttf"),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 72,
          backgroundColor: "#060A0F",
          backgroundImage:
            "radial-gradient(620px 400px at 50% 38%, rgba(127,228,255,0.16), transparent 65%), radial-gradient(900px 520px at 50% 70%, rgba(42,74,94,0.5), transparent 70%)",
          color: "#F1F5F2",
          fontFamily: "Manrope",
          position: "relative",
        }}
      >
        {/* pill masthead */}
        <div
          style={{
            position: "absolute",
            top: 56,
            display: "flex",
            alignItems: "center",
            gap: 14,
            padding: "12px 22px 12px 16px",
            border: "1px solid rgba(241,245,242,0.14)",
            borderRadius: 999,
            fontSize: 20,
            fontWeight: 800,
            letterSpacing: "0.06em",
          }}
        >
          <img width={28} height={28} src={`data:image/svg+xml;utf8,${encodeURIComponent(markSvg)}`} alt="" />
          PINEHOLLOW
        </div>

        {/* headline */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            maxWidth: 940,
            fontSize: 96,
            lineHeight: 1,
            letterSpacing: "-0.04em",
            fontWeight: 800,
            textAlign: "center",
          }}
        >
          <span style={{ display: "flex" }}>We make software</span>
          <span style={{ display: "flex", gap: 22 }}>
            <span>we&apos;d want to</span>
            <span style={{ color: "#7FE4FF" }}>use.</span>
          </span>
        </div>

        {/* foot strip */}
        <div
          style={{
            position: "absolute",
            bottom: 56,
            display: "flex",
            alignItems: "center",
            gap: 28,
            fontSize: 20,
            fontWeight: 500,
            color: "rgba(241,245,242,0.55)",
          }}
        >
          <span>pinehollow.studio</span>
          <span style={{ width: 5, height: 5, borderRadius: 99, background: "rgba(241,245,242,0.4)" }} />
          <span>Now building Vestige, a golf app</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Manrope", data: extraBold, weight: 800, style: "normal" },
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
