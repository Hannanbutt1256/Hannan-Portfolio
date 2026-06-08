import { useParams, Link, Navigate } from "react-router-dom";
import { projects } from "../data/site";
import { Headline, Eyebrow } from "../ui";

const wrap = "mx-auto w-full max-w-[1440px] px-6 md:px-16";

function SectionLabel({ n, title }) {
  return (
    <div className="flex items-baseline gap-4">
      <span className="font-sans text-base font-medium tracking-[0.14em] text-bone/45">{n}</span>
      <h2 className="display text-3xl md:text-4xl">{title}</h2>
    </div>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return <Navigate to="/work" replace />;

  const project = projects[index];
  const next = projects[(index + 1) % projects.length];

  return (
    <article>
      {/* Hero */}
      <header className={`${wrap} pb-14 pt-16 md:pt-16`}>
        <div className="mb-12 flex items-center gap-3 md:mb-16">
          <Link to="/work" className="flex items-center gap-2 text-bone/55 hover:text-bone">
            <span className="text-teal">←</span>
            <span className="font-sans text-[0.8rem] font-medium uppercase tracking-[0.14em]">Back to Work</span>
          </Link>
          <span className="font-sans text-[0.8rem] font-medium uppercase tracking-[0.14em] text-bone/30">
            / Case Study {project.n}
          </span>
        </div>

        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between md:gap-12">
          <div className="max-w-[900px]">
            <Eyebrow>{project.title}</Eyebrow>
            <Headline
              solid={project.headline.solid}
              outline={project.headline.outline}
              className="mt-6 text-[3.4rem] leading-[0.88] md:text-[8.2rem]"
              stroke="1.6px"
            />
          </div>
          <p className="max-w-[360px] font-sans text-lg leading-relaxed text-bone/80 md:pb-3 md:text-xl">
            {project.problemStatement}
          </p>
        </div>
      </header>

      {/* Image band — grayscale, dimmed, ink scrim. Hard bone seam top + bottom. */}
      <div className="relative h-[260px] w-full overflow-hidden border-y border-bone bg-raised md:h-[520px]">
        <img
          src={`/projects/${project.slug}.jpg`}
          alt={`${project.title} visual`}
          loading="lazy"
          className="h-full w-full object-cover"
          style={{ filter: "grayscale(1) brightness(0.68) contrast(1.06)" }}
        />
        <div className="absolute inset-0 bg-ink/25" />
      </div>

      {/* Meta */}
      <div className={`${wrap} flex flex-col pt-10 md:flex-row md:pt-11`}>
        {project.meta.map((m, i) => (
          <div
            key={m.k}
            className={`flex flex-col gap-2.5 border-t hairline py-5 md:border-t-0 md:py-0 ${
              i < project.meta.length - 1 ? "md:border-r md:hairline md:pr-10" : ""
            } ${i > 0 ? "md:pl-10" : ""} md:flex-1`}
          >
            <span className="font-sans text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-bone/45">{m.k}</span>
            <span className="font-sans text-[1.05rem] text-bone">{m.v}</span>
          </div>
        ))}
      </div>

      {/* The Problem */}
      <section className={`${wrap} flex flex-col gap-10 pt-24 md:flex-row md:gap-16`}>
        <div className="md:w-[380px] md:shrink-0">
          <SectionLabel n="01" title="The Problem" />
        </div>
        <div className="max-w-[760px]">
          <p className="font-sans text-xl leading-9 text-bone md:text-2xl md:leading-[2.4rem]">{project.problem[0]}</p>
          {project.problem.slice(1).map((p, i) => (
            <p key={i} className="mt-7 font-sans text-[1.15rem] leading-8 text-bone/80">{p}</p>
          ))}
        </div>
      </section>

      {/* How I Built It */}
      <section className={`${wrap} flex flex-col gap-10 pt-24 md:flex-row md:gap-16`}>
        <div className="md:w-[380px] md:shrink-0">
          <SectionLabel n="02" title="How I Built It" />
        </div>
        <div className="max-w-[760px]">
          {project.build.map((p, i) => (
            <p key={i} className={`font-sans text-[1.2rem] leading-9 text-bone/80 ${i > 0 ? "mt-6" : ""}`}>{p}</p>
          ))}
        </div>
      </section>

      {/* The Swarm (only when present) */}
      {project.swarm.length > 0 && (
        <section className={`${wrap} pt-14`}>
          <div className="flex items-center justify-between border-t hairline pt-6">
            <span className="font-sans text-[0.95rem] font-semibold uppercase tracking-[0.2em] text-bone/55">The Swarm</span>
            <span className="font-sans text-[0.95rem] font-medium uppercase tracking-[0.16em] text-bone/45">
              {project.swarm.length} Specialist Agents
            </span>
          </div>
          <div className="grid md:grid-cols-2">
            {project.swarm.map((a, i) => (
              <div
                key={a.n}
                className={`border-b hairline py-8 ${i % 2 === 0 ? "md:pr-10" : "md:border-l md:hairline md:pl-10"}`}
              >
                <span className="font-sans text-sm font-medium text-teal">{a.n}</span>
                <h3 className="mt-2.5 font-sans text-xl font-semibold text-bone">{a.name}</h3>
                <p className="mt-1.5 font-sans text-base text-bone/80">{a.role}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Results */}
      <section className={`${wrap} pt-24`}>
        <SectionLabel n="03" title="Results" />
        <p className="mb-12 mt-3.5 font-sans text-base text-bone/55">{project.resultsNote}</p>
        {project.results.map((r, i) => (
          <div
            key={i}
            className="flex flex-col gap-3 border-t hairline py-7 last:border-b md:flex-row md:items-baseline md:gap-12"
          >
            <span className="display shrink-0 text-4xl md:w-[420px] md:text-[4rem]">{r.stat}</span>
            <span className="font-sans text-[1.05rem] leading-7 text-bone/80 md:text-xl">{r.note}</span>
          </div>
        ))}
      </section>

      {/* Stack + limitation */}
      <section className={`${wrap} flex flex-col gap-10 pt-24 md:flex-row md:gap-16`}>
        <div className="md:w-[380px] md:shrink-0">
          <SectionLabel n="04" title="Stack" />
        </div>
        <div className="max-w-[760px]">
          <div className="flex flex-wrap gap-3">
            {project.stack.map((t) => (
              <span key={t} className="border border-bone/30 px-4 py-2.5 font-sans text-[0.95rem] font-medium text-bone">
                {t}
              </span>
            ))}
          </div>
          {project.limitation && (
            <div className="mt-9 flex gap-4 border-l-2 border-teal bg-raised px-6 py-5">
              <span className="shrink-0 pt-0.5 font-sans text-[0.8rem] font-semibold uppercase tracking-[0.16em] text-teal">Note</span>
              <span className="font-sans text-[1.05rem] leading-7 text-bone/80">{project.limitation}</span>
            </div>
          )}
          {project.links.length > 0 && (
            <div className="mt-9 flex flex-wrap gap-4">
              {project.links.map((l) => (
                <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="btn-line">
                  {l.label} <span className="text-teal">↗</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Next project */}
      <Link
        to={`/work/${next.slug}`}
        className="group mt-24 block border-t hairline"
      >
        <div className={`${wrap} flex items-center justify-between py-16 md:py-20`}>
          <div>
            <span className="font-sans text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-bone/45">Next Project</span>
            <h2 className="display mt-3 text-3xl md:text-[3.4rem] md:leading-none">{next.title}</h2>
          </div>
          <span className="text-3xl text-teal transition-transform group-hover:translate-x-2 md:text-5xl">→</span>
        </div>
      </Link>
    </article>
  );
}
