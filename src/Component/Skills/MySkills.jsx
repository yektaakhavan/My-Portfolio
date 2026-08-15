import { useState } from "react";
import { skillsData, skillFilters, categoryLabels } from "../../data/skills";

const levelLabel = {
  advanced: "Advanced",
  intermediate: "Intermediate",
  beginner: "Beginner",
};

function MySkills() {
  const [filter, setFilter] = useState("all");

  const filteredSkills =
    filter === "all" ? skillsData : skillsData.filter((s) => s.category === filter);

  return (
    <section id="skills" className="mb-20 text-center">
      <h2 className="mb-8 text-3xl font-bold text-gold sm:text-4xl">Skills</h2>

      <div className="mb-8 flex flex-wrap justify-center gap-2.5">
        {skillFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`rounded-full border px-4 py-1.5 text-xs font-bold uppercase tracking-wide transition ${
              filter === f
                ? "border-gold bg-gold text-ink shadow-[0_0_10px_rgba(225,198,153,0.5)]"
                : "border-white/15 bg-white/5 text-lilac-soft hover:border-white/30 hover:bg-white/10"
            }`}
          >
            {f === "all" ? "All" : categoryLabels[f]}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6">
        {filteredSkills.map(({ name, level, icon: Icon, color }) => (
          <div
            key={name}
            title={levelLabel[level.toLowerCase()]}
            className="group relative flex flex-col items-center gap-2 overflow-hidden rounded-xl bg-gradient-to-br from-ink-light to-plum px-2 py-4 shadow-[0_4px_14px_rgba(126,88,204,0.5)] transition hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(126,88,204,0.8)]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-[3px]"
              style={{ backgroundColor: color }}
            />
            <Icon className="text-3xl" style={{ color }} />
            <span className="px-1 text-center text-[0.72rem] font-semibold leading-tight text-lilac-soft">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MySkills;
