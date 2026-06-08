import { projects, workIntro } from "../data/site";
import { Headline, Eyebrow } from "../ui";
import ProjectRow from "../components/ProjectRow";

const wrap = "mx-auto w-full max-w-[1440px] px-6 md:px-16";

export default function Work() {
  return (
    <section className={`${wrap} pb-24 pt-16 md:pb-28 md:pt-24`}>
      <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div className="max-w-[840px]">
          <Eyebrow>{workIntro.eyebrow}</Eyebrow>
          <Headline
            solid={workIntro.headline.solid}
            outline={workIntro.headline.outline}
            className="mt-6 text-[3.4rem] leading-[0.9] md:text-[8rem]"
            stroke="1.6px"
          />
          <p className="mt-9 max-w-[560px] font-sans text-base leading-relaxed text-bone/80 md:text-[1.25rem]">
            {workIntro.intro}
          </p>
        </div>
        <span className="font-sans text-base font-medium tracking-[0.16em] text-bone/45 md:pb-3">
          0{projects.length} PROJECTS
        </span>
      </div>

      <div className="mt-14">
        {projects.map((p) => (
          <ProjectRow key={p.slug} project={p} />
        ))}
        <div className="border-t hairline" />
      </div>
    </section>
  );
}
