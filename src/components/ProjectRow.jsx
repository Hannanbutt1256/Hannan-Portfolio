import { Link } from "react-router-dom";

// Editorial project row used on Home (preview) and Work (full list).
export default function ProjectRow({ project, showFeatured = true }) {
  return (
    <Link
      to={`/work/${project.slug}`}
      className="group flex items-center gap-6 border-t hairline py-8 transition-colors hover:bg-bone/[0.03] md:gap-10"
    >
      <span className="w-10 shrink-0 font-sans text-base font-medium tracking-[0.14em] text-bone/45 md:w-16">
        {project.n}
      </span>

      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h3 className="display text-2xl md:text-[2.6rem] md:leading-none">{project.title}</h3>
          {showFeatured && project.featured && (
            <span className="font-sans text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-teal border border-teal/50 px-2.5 py-1">
              Featured
            </span>
          )}
        </div>
        <p className="mt-3 font-sans text-[0.95rem] text-bone/80 md:text-base">
          {project.tagline}
        </p>
      </div>

      <span className="hidden w-[330px] shrink-0 font-sans text-[0.8rem] font-medium uppercase tracking-[0.10em] text-bone/55 lg:block">
        {project.tags.join("  ·  ")}
      </span>

      <span className="w-8 shrink-0 text-right text-xl text-teal transition-transform group-hover:translate-x-1 md:w-10">
        →
      </span>
    </Link>
  );
}
