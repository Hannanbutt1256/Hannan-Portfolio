// Dark, on-brand Instagram card: grayscale cover + play button. Opens the
// reel/post on Instagram in a new tab (official embeds can't be dark-themed).
export default function ReelCard({ reel }) {
  const cover = reel.cover || (reel.n ? `/lab/cover-${reel.n}.jpg` : null);
  const isLink = Boolean(reel.embedUrl);
  const Wrapper = isLink ? "a" : "div";
  const wrapperProps = isLink
    ? { href: reel.embedUrl, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper {...wrapperProps} className="group flex flex-col">
      <div className="relative aspect-[4/5] w-full overflow-hidden border hairline bg-raised">
        {cover ? (
          <img
            src={cover}
            alt={reel.title}
            loading="lazy"
            className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-[1.03] group-hover:grayscale-0"
          />
        ) : null}
        <div className="absolute inset-0 bg-ink/30 transition-opacity duration-500 group-hover:opacity-60" />

        <span className="absolute left-4 top-4 z-10 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-bone/70">
          {reel.type || "Reel"} · {reel.n}
        </span>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full border-[1.5px] border-bone/60 bg-ink/20 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
            <span className="ml-1 text-lg text-bone">▶</span>
          </div>
        </div>

        {isLink && (
          <div className="absolute inset-x-4 bottom-4 flex items-center gap-1.5">
            <span className="font-sans text-[0.7rem] font-medium uppercase tracking-[0.14em] text-bone/70">
              View on Instagram
            </span>
            <span className="text-teal">↗</span>
          </div>
        )}
      </div>

      <h3 className="mt-5 font-sans text-lg font-semibold text-bone">{reel.title}</h3>
      <p className="mt-2 font-sans text-[0.95rem] leading-relaxed text-bone/80">{reel.caption}</p>
      <p className="mt-3 font-sans text-[0.85rem] font-medium text-teal">{reel.hashtags}</p>
    </Wrapper>
  );
}
