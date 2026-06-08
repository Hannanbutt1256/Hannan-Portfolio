import { Link } from "react-router-dom";
import { home, featuredHomeProjects, lab, contact, identity } from "../data/site";
import { Headline, Eyebrow, FadeUp } from "../ui";
import PortraitCircle from "../components/PortraitCircle";
import ProjectRow from "../components/ProjectRow";
import ReelCard from "../components/ReelCard";

const wrap = "mx-auto w-full max-w-[1440px] px-6 md:px-16";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className={`${wrap} flex flex-col gap-12 pb-24 pt-16 md:flex-row md:items-start md:justify-between md:gap-16 md:pb-28 md:pt-24`}>
        <div className="flex max-w-[840px] flex-col items-start">
          <Eyebrow>{home.eyebrow}</Eyebrow>
          <span className="mt-8 font-sans text-xl text-bone/80 md:text-2xl">{home.kicker}</span>
          <Headline
            solid={home.headline.solid}
            outline={home.headline.outline}
            className="mt-3 text-[2.8rem] leading-[0.92] md:text-[7.4rem]"
          />
          <p className="mt-10 max-w-[600px] font-sans text-base leading-relaxed text-bone/80 md:text-[1.3rem] md:leading-[2.1rem]">
            {home.intro}
          </p>
          <Link to="/work" className="btn-line mt-10">
            {home.cta}
            <span className="text-teal">→</span>
          </Link>
        </div>

        <div className="flex shrink-0 flex-col items-start gap-4">
          <PortraitCircle className="h-[300px] w-[300px] md:h-[360px] md:w-[360px]" />
          <span className="font-sans text-sm font-medium tracking-[0.12em] text-bone/45">
            {identity.name.toUpperCase()} · {identity.location}
          </span>
        </div>
      </section>

      {/* What I do */}
      <section className={`${wrap} pb-24 md:pb-28`}>
        <div className="flex items-center justify-between border-t hairline pt-7">
          <Eyebrow>What I Do</Eyebrow>
          <span className="font-sans text-base font-medium tracking-[0.18em] text-bone/45">01 — 03</span>
        </div>
        <div className="mt-10 grid gap-12 md:mt-16 md:grid-cols-3 md:gap-0">
          {home.services.map((s, i) => (
            <FadeUp
              key={s.n}
              delay={i * 80}
              className={`md:px-12 ${i === 0 ? "md:pl-0" : ""} ${i < home.services.length - 1 ? "md:border-r md:hairline" : "md:pr-0"}`}
            >
              <span className="font-sans text-base font-medium tracking-[0.18em] text-bone/45">{s.n}</span>
              <h3 className="display mt-5 text-4xl">{s.title}</h3>
              <p className="mt-5 font-sans text-[1.1rem] leading-relaxed text-bone/80">{s.copy}</p>
            </FadeUp>
          ))}
        </div>
      </section>

      {/* Selected work */}
      <section className={`${wrap} pb-24 md:pb-28`}>
        <div className="mb-12 flex items-end justify-between md:mb-14">
          <div>
            <Eyebrow>Selected Work</Eyebrow>
            <Headline solid="BUILT TO " outline="SHIP" className="mt-5 text-5xl md:text-[4.5rem]" stroke="1.4px" />
          </div>
          <Link to="/work" className="pb-2 font-sans text-[0.95rem] font-medium uppercase tracking-[0.16em] text-bone/55 hover:text-bone">
            View All →
          </Link>
        </div>
        <div>
          {featuredHomeProjects.map((p) => (
            <ProjectRow key={p.slug} project={p} />
          ))}
          <div className="border-t hairline" />
        </div>
      </section>

      {/* Lab teaser */}
      <section className={`${wrap} pb-24 md:pb-28`}>
        <div className="flex flex-col gap-6 border-t hairline pt-7 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[760px]">
            <Eyebrow>AI Creative Lab</Eyebrow>
            <Headline solid="SHOT WITH " outline="NO CAMERA" className="mt-5 text-5xl md:text-[4.5rem]" stroke="1.4px" />
            <p className="mt-7 max-w-[620px] font-sans text-[1.05rem] leading-relaxed text-bone/80">{lab.intro}</p>
          </div>
          <Link to="/lab" className="pb-2 font-sans text-[0.95rem] font-medium uppercase tracking-[0.16em] text-bone/55 hover:text-bone">
            Explore The Lab →
          </Link>
        </div>
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {lab.reels.slice(0, 3).map((r) => (
            <ReelCard key={r.n} reel={r} />
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className={`${wrap} border-t hairline pb-24 pt-20 md:pb-24`}>
        <div className="flex flex-col gap-12 md:flex-row md:justify-between md:gap-16">
          <div className="max-w-[720px]">
            <Eyebrow>Stay In Touch</Eyebrow>
            <Headline solid={contact.headline.solid} outline={contact.headline.outline} className="mt-6 text-[3.4rem] leading-[0.9] md:text-[6rem]" />
            <p className="mt-9 max-w-[560px] font-sans text-[1.1rem] leading-relaxed text-bone/80 md:text-[1.25rem]">
              Got a system to build, a workflow to automate, or an ad that needs to look like a film? Let's talk.
            </p>
          </div>
          <div className="md:min-w-[380px]">
            {contact.channels.slice(0, 3).map((c) => (
              <a
                key={c.k}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between border-t hairline py-6 last:border-b hover:text-bone"
              >
                <span className="font-sans text-sm font-medium uppercase tracking-[0.16em] text-bone/55">{c.k}</span>
                <span className="font-sans text-lg text-bone">{c.v}</span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
