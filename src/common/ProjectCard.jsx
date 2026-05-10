import { GithubIcon, KaggleIcon, ExternalLinkIcon } from "./icons";

function ProjectCard({ links, title, description, techUsed, isFeatured = false }) {
  return (
    <article className="glass group flex flex-col gap-4 p-6 transition duration-300 hover:-translate-y-1 hover:[background-color:var(--color-glass-hi)]">
      <div className="flex items-start justify-between gap-3">
        <h3 className="font-display text-lg font-semibold">{title}</h3>
        {isFeatured && (
          <span className="glass-lo glass-pill px-2.5 py-0.5 text-[10px] uppercase tracking-wider text-text">
            Featured
          </span>
        )}
      </div>

      <p className="text-sm leading-relaxed text-text-muted">{description}</p>

      {techUsed && techUsed.length > 0 && (
        <div className="mt-1 flex flex-wrap gap-2">
          {techUsed.map((tech, index) => (
            <span
              key={index}
              className="rounded-pill border border-border bg-glass-lo px-2.5 py-1 text-xs text-text-muted"
            >
              {tech}
            </span>
          ))}
        </div>
      )}

      <div className="mt-auto flex items-center gap-3 pt-2">
        {links?.github && (
          <a
            href={links.github}
            target="_blank"
            rel="noreferrer"
            title="GitHub"
            className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
          >
            <GithubIcon size={18} />
          </a>
        )}
        {links?.kaggle && (
          <a
            href={links.kaggle}
            target="_blank"
            rel="noreferrer"
            title="Kaggle"
            className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
          >
            <KaggleIcon size={18} />
          </a>
        )}
        {links?.demo && (
          <a
            href={links.demo}
            target="_blank"
            rel="noreferrer"
            title="Live Demo"
            className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
          >
            <ExternalLinkIcon size={18} />
          </a>
        )}
        {links?.site && (
          <a
            href={links.site}
            target="_blank"
            rel="noreferrer"
            title="Visit Site"
            className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
          >
            <ExternalLinkIcon size={18} />
          </a>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
