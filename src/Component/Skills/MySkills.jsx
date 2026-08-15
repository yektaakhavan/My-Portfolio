import { skillsData, categoryLabels } from "../../data/skills";

const levelDot = {
  advanced: "bg-gold",
  intermediate: "bg-lilac",
  beginner: "bg-lilac/40",
};

function MySkills() {
  const categories = ["frontend", "tools", "soft"];

  return (
    <section id="skills" className="mb-20">
      <h2 className="mb-10 text-center text-3xl font-bold text-gold sm:text-4xl">
        Skills
      </h2>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {categories.map((cat) => {
          const items = skillsData.filter((s) => s.category === cat);
          if (items.length === 0) return null;

          return (
            <div
              key={cat}
              className="rounded-2xl bg-gradient-to-br from-ink-light to-plum p-6 shadow-[0_6px_20px_rgba(126,88,204,0.6)] transition hover:-translate-y-1 hover:shadow-[0_10px_28px_rgba(126,88,204,0.85)]"
            >
              <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-gold-soft">
                <span className="h-1.5 w-6 rounded-full bg-gold" />
                {categoryLabels[cat]}
              </h3>
              <div className="flex flex-col gap-2">
                {items.map(({ name, level, icon: Icon, color }) => (
                  <div
                    key={name}
                    className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-3.5 py-2.5 transition hover:-translate-y-0.5 hover:border-white/25 hover:bg-white/10"
                  >
                    <span
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
                      style={{ backgroundColor: `${color}22` }}
                    >
                      <Icon className="text-lg" style={{ color }} />
                    </span>
                    <span className="flex-1 text-sm font-medium text-lilac-soft">
                      {name}
                    </span>
                    <span
                      title={level}
                      className={`h-2 w-2 shrink-0 rounded-full ${levelDot[level.toLowerCase()]}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MySkills;
