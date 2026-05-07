// Decorative starfield — fixed seed so SSR and client match.
// Pure SVG + CSS twinkle; no JS, no client boundary needed.
const STARS = Array.from({ length: 60 }, (_, i) => {
  const seed = (i * 9301 + 49297) % 233280;
  const rand = (n: number) => ((seed * (n + 1)) % 233280) / 233280;
  return {
    cx: rand(1) * 100,
    cy: rand(2) * 100,
    r: 0.3 + rand(3) * 1.2,
    delay: rand(4) * 4,
    duration: 3 + rand(5) * 4,
    opacity: 0.3 + rand(6) * 0.6,
  };
});

export default function Starfield({ className = "" }: { className?: string }) {
  return (
    <svg
      className={`pointer-events-none absolute inset-0 h-full w-full ${className}`}
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      aria-hidden
    >
      {STARS.map((s, i) => (
        <circle
          key={i}
          cx={s.cx}
          cy={s.cy}
          r={s.r}
          fill="#c9a566"
          style={{
            animation: `twinkle ${s.duration}s ease-in-out ${s.delay}s infinite`,
            opacity: s.opacity,
          }}
        />
      ))}
    </svg>
  );
}
