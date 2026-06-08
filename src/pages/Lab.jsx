import { lab, identity } from "../data/site";
import { Headline, Eyebrow } from "../ui";
import ReelCard from "../components/ReelCard";

const wrap = "mx-auto w-full max-w-[1440px] px-6 md:px-16";

export default function Lab() {
  return (
    <section className={`${wrap} pb-20 pt-16 md:pt-24`}>
      {/* Header */}
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[900px]">
          <Eyebrow>{lab.eyebrow}</Eyebrow>
          <Headline
            solid={lab.headline.solid}
            outline={lab.headline.outline}
            className="mt-6 text-[3.2rem] leading-[0.9] md:text-[8rem]"
            stroke="1.6px"
          />
        </div>
        <p className="max-w-[380px] font-sans text-base leading-relaxed text-bone/80 md:pb-3 md:text-[1.25rem]">
          {lab.intro}
        </p>
      </div>

      <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t hairline pt-7">
        <span className="font-sans text-sm font-semibold uppercase tracking-[0.16em] text-bone/45">
          Brands &amp; Tools
        </span>
        {lab.brands.map((b) => (
          <span key={b} className="font-sans text-base font-medium tracking-[0.02em] text-bone">
            {b}
          </span>
        ))}
      </div>

      {/* Reel grid */}
      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        {lab.reels.map((r) => (
          <ReelCard key={r.n} reel={r} />
        ))}
      </div>

      {/* Follow strip */}
      <a
        href={identity.social.instagram}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-20 flex items-center justify-between border-t hairline py-16"
      >
        <div>
          <span className="font-sans text-sm font-semibold uppercase tracking-[0.18em] text-bone/45">
            New Work Every Week
          </span>
          <h2 className="display mt-3 text-4xl md:text-[3.5rem]">FOLLOW THE BUILD</h2>
        </div>
        <span className="btn-line">
          @hannanlabs <span className="text-teal">↗</span>
        </span>
      </a>
    </section>
  );
}
