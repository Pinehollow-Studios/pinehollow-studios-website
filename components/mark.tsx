/**
 * Pinehollow brand mark — "the lean": two rounded beams leaning into each
 * other. The rear beam is translucent so the overlap reads as depth.
 * Drawn on a 64u grid. Geometry is mirrored in app/icon.tsx,
 * app/apple-icon.tsx and app/opengraph-image.tsx (which need SVG strings).
 */
export const MARK_BEAMS = {
  front: { x: 14, y: 5, width: 15, height: 52, rx: 7.5, rotate: "rotate(22 21.5 31)" },
  back: { x: 34, y: 15, width: 14.5, height: 42, rx: 7.25, rotate: "rotate(-24 41.25 36)" },
} as const;

interface PinehollowMarkProps {
  size?: number;
  /** Mono colour; the rear beam renders at reduced opacity. */
  colour?: string;
  className?: string;
}

export function PinehollowMark({ size = 64, colour = "currentColor", className }: PinehollowMarkProps) {
  const f = MARK_BEAMS.front;
  const b = MARK_BEAMS.back;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
      style={{ flexShrink: 0 }}
    >
      <rect x={f.x} y={f.y} width={f.width} height={f.height} rx={f.rx} transform={f.rotate} fill={colour} />
      <rect x={b.x} y={b.y} width={b.width} height={b.height} rx={b.rx} transform={b.rotate} fill={colour} opacity={0.55} />
    </svg>
  );
}
