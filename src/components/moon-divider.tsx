export default function MoonDivider() {
  return (
    <div className="mx-auto flex max-w-xl items-center gap-4 px-4" aria-hidden>
      <span className="h-px flex-1 bg-gradient-to-r from-transparent to-gold/40" />
      <svg width="120" height="16" viewBox="0 0 120 16" className="text-gold">
        {/* new moon */}
        <circle cx="10" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
        {/* waxing crescent */}
        <path d="M 34 4 a 4 4 0 1 0 0 8 a 3 4 0 1 1 0 -8 z" fill="currentColor" opacity="0.8" />
        {/* full moon */}
        <circle cx="60" cy="8" r="4" fill="currentColor" />
        {/* waning crescent */}
        <path d="M 86 4 a 4 4 0 1 1 0 8 a 3 4 0 1 0 0 -8 z" fill="currentColor" opacity="0.8" />
        {/* new moon */}
        <circle cx="110" cy="8" r="4" fill="none" stroke="currentColor" strokeWidth="1" opacity="0.6" />
      </svg>
      <span className="h-px flex-1 bg-gradient-to-l from-transparent to-gold/40" />
    </div>
  );
}
