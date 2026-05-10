import SkillList from "../../common/SkillList";
import { portfolioData } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24 sm:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <h2 className="mb-12 font-display text-3xl font-bold sm:text-4xl">
          Skills
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {portfolioData.skills.map((category, index) => (
            <div key={index} className="glass p-6">
              <h3 className="mb-4 font-display text-sm font-semibold uppercase tracking-[0.18em] text-text-muted">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((skill, idx) => (
                  <SkillList key={idx} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
