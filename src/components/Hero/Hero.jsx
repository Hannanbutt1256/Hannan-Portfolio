import { useState } from "react";
import { portfolioData } from "../../data/portfolio";
import { GithubIcon, LinkedInIcon, KaggleIcon } from "../../common/icons";
import ResumePreview from "../ResumePreview/ResumePreview";

function Hero() {
  const { hero } = portfolioData;
  const [showResume, setShowResume] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex min-h-[100dvh] items-center px-6 pb-32 pt-24 sm:py-32"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="flex flex-col gap-6 sm:gap-8">
          <span className="glass glass-pill self-start px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-text-muted">
            {hero.subHeadline}
          </span>

          <h1 className="font-display text-4xl font-bold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl">
            Hi, I'm {hero.name}
          </h1>

          <h2 className="font-sans text-base text-text-muted sm:text-xl">
            {hero.role}
          </h2>

          <p className="max-w-2xl text-sm leading-relaxed text-text-muted sm:text-base">
            {hero.summary}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-2 sm:gap-4">
            <button
              type="button"
              className="btn-accent"
              onClick={() => setShowResume(true)}
            >
              View Resume
            </button>
            <a href="#contact" className="btn-glass">
              Contact Me
            </a>

            <div className="glass glass-pill flex w-full items-center justify-center gap-1 px-2 py-2 sm:ml-auto sm:w-auto sm:gap-2">
              <a
                href={hero.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
              >
                <LinkedInIcon />
              </a>
              <a
                href={hero.socialLinks.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
              >
                <GithubIcon />
              </a>
              <a
                href={hero.socialLinks.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Kaggle"
                className="grid h-9 w-9 place-items-center rounded-pill text-text-muted transition hover:bg-glass-hi hover:text-text"
              >
                <KaggleIcon />
              </a>
            </div>
          </div>
        </div>
      </div>

      {showResume && (
        <ResumePreview
          resumeLink={hero.resumeLink}
          onClose={() => setShowResume(false)}
        />
      )}
    </section>
  );
}

export default Hero;
