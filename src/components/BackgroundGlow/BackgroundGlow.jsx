function BackgroundGlow() {
  return (
    <>
      {/* SVG filter defs — referenced by .glass via backdrop-filter: url(#liquid-glass).
          feTurbulence + feDisplacementMap creates lens-like edge refraction —
          this is the "liquid" in Liquid Glass that pure backdrop-blur can't fake. */}
      <svg
        aria-hidden
        className="pointer-events-none fixed left-0 top-0 h-0 w-0"
      >
        <defs>
          <filter id="liquid-glass">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.008"
              numOctaves="2"
              seed="5"
              result="noise"
            />
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
          </filter>
        </defs>
      </svg>

      {/* Cool steel-blue atmospheric wallpaper — same heavy-blur + screen-blend
          recipe but the palette stays strictly in slate/steel/midnight territory.
          No warm tones, no rose, no magenta. Reads as "dark workshop / IDE / night
          sky" — masculine, technical, professional. Glass refracts cool tonal
          shifts and a subtle blue cast. */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      >
        <div
          className="absolute -top-[15%] -left-[10%] h-[70vh] w-[70vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #283645 0%, transparent 65%)",
            filter: "blur(80px)",
            mixBlendMode: "screen",
            opacity: 0.70,
          }}
        />
        <div
          className="absolute -top-[8%] right-[5%] h-[60vh] w-[55vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #1d3550 0%, transparent 65%)",
            filter: "blur(85px)",
            mixBlendMode: "screen",
            opacity: 0.70,
          }}
        />
        <div
          className="absolute top-[35%] left-[10%] h-[65vh] w-[60vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #1f2840 0%, transparent 65%)",
            filter: "blur(95px)",
            mixBlendMode: "screen",
            opacity: 0.70,
          }}
        />
        <div
          className="absolute top-[40%] right-[5%] h-[60vh] w-[55vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #1c3848 0%, transparent 65%)",
            filter: "blur(90px)",
            mixBlendMode: "screen",
            opacity: 0.65,
          }}
        />
        <div
          className="absolute -bottom-[15%] left-[20%] h-[60vh] w-[60vw] rounded-full"
          style={{
            background:
              "radial-gradient(circle at center, #2c3540 0%, transparent 65%)",
            filter: "blur(85px)",
            mixBlendMode: "screen",
            opacity: 0.65,
          }}
        />

        {/* Faint canvas-tooth grain over the washes — adds painterly texture so
            the blooms don't read as pure CSS gradient. Overlay blend keeps grain
            visible on both light blooms and the dark base. */}
        <div
          className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)'/></svg>\")",
          }}
        />
      </div>
    </>
  );
}

export default BackgroundGlow;
