import { about } from "../data/site";
import { Headline, Eyebrow } from "../ui";
import PortraitCircle from "../components/PortraitCircle";

const wrap = "mx-auto w-full max-w-[1440px] px-6 md:px-16";

export default function About() {
  return (
    <section className={`${wrap} pb-24 pt-16 md:pb-28 md:pt-24`}>
      <Eyebrow>{about.eyebrow}</Eyebrow>
      <Headline
        solid={about.headline.solid}
        outline={about.headline.outline}
        className="mt-6 text-[3.4rem] leading-[0.9] md:text-[8rem]"
        stroke="1.6px"
      />

      <div className="mt-16 flex flex-col gap-16 md:flex-row md:gap-20">
        {/* Left rail */}
        <div className="w-full shrink-0 md:w-[380px]">
          <PortraitCircle className="h-[320px] w-[320px]" />
          <dl className="mt-9">
            {about.facts.map((f) => (
              <div key={f.k} className="flex items-center justify-between border-t hairline py-[18px] last:border-b">
                <dt className="font-sans text-[0.8rem] font-medium uppercase tracking-[0.14em] text-bone/45">{f.k}</dt>
                <dd className={`font-sans text-base ${f.spark ? "text-teal" : "text-bone"}`}>{f.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Story */}
        <div className="max-w-[680px]">
          {about.story.map((para, i) => (
            <p
              key={i}
              className={
                i === 0
                  ? "font-sans text-[1.4rem] leading-[2.3rem] text-bone"
                  : "mt-7 font-sans text-[1.15rem] leading-8 text-bone/80"
              }
            >
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* How I work */}
      <div className="mt-24">
        <Eyebrow className="block border-t hairline pt-7">How I Work</Eyebrow>
        <div className="mt-12 grid gap-10 md:grid-cols-4 md:gap-0">
          {about.principles.map((p, i) => (
            <div
              key={p.title}
              className={`md:px-10 ${i === 0 ? "md:pl-0" : ""} ${i < about.principles.length - 1 ? "md:border-r md:hairline" : "md:pr-0"}`}
            >
              <h3 className="display text-3xl">{p.title}</h3>
              <p className="mt-4 font-sans text-base leading-relaxed text-bone/80">{p.copy}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
