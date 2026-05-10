import { portfolioData } from "../../data/portfolio";

const Experience = () => {
  return (
    <section id="experience" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-12 font-display text-3xl font-bold sm:text-4xl">
          Experience
        </h2>

        <div className="space-y-6">
          {portfolioData.experience.map((exp, index) => (
            <article key={index} className="glass p-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="font-display text-xl font-semibold">
                    {exp.role}
                  </h3>
                  <p className="mt-1 text-text-muted">
                    {exp.company}
                    <span className="text-text-subtle"> · {exp.location}</span>
                  </p>
                </div>
                <span className="glass-lo glass-pill px-3 py-1 text-xs text-text-muted">
                  {exp.duration}
                </span>
              </div>

              <ul className="mt-5 list-inside list-disc space-y-2 text-text-muted marker:text-accent">
                {exp.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
