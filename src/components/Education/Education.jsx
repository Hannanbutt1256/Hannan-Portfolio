import { portfolioData } from "../../data/portfolio";

const Education = () => {
  return (
    <section id="education" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl space-y-16">
        <div>
          <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">
            Education
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {portfolioData.education.map((edu, index) => (
              <article key={index} className="glass p-6">
                <h3 className="font-display text-lg font-semibold">
                  {edu.institution}
                </h3>
                <p className="mt-1 text-text-muted">{edu.degree}</p>
                <p className="mt-2 text-xs text-text-subtle">{edu.duration}</p>
                <span className="glass-lo glass-pill mt-4 inline-block px-3 py-1 text-xs text-accent">
                  {edu.grade}
                </span>
              </article>
            ))}
          </div>
        </div>

        <div>
          <h2 className="mb-8 font-display text-3xl font-bold sm:text-4xl">
            Certifications
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {portfolioData.certifications.map((cert, index) => (
              <article key={`cert-${index}`} className="glass p-6">
                <h3 className="font-display text-lg font-semibold">
                  {cert.title}
                </h3>
                <p className="mt-1 text-text-muted">{cert.issuer}</p>
                <p className="mt-2 text-xs text-text-subtle">{cert.date}</p>
                {cert.details && (
                  <p className="mt-3 text-sm leading-relaxed text-text-muted">
                    {cert.details}
                  </p>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
