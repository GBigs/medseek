import { FileQuestion, Lightbulb, ScanSearch, ShieldCheck } from "lucide-react";
import { useMemo, useState } from "react";

import type { JourneyOption } from "@/src/types/landing";

type JourneyCardTabsProps = {
  options: JourneyOption[];
};

export function JourneyCardTabs({ options }: JourneyCardTabsProps) {
  const [selected, setSelected] = useState<"students" | "doctors">("students");

  const current = useMemo(() => {
    if (options.length === 0) {
      return null;
    }

    const index = selected === "students" ? 0 : 1;
    return options[index] ?? options[0];
  }, [options, selected]);

  if (!current) {
    return null;
  }

  return (
    <article className="journey-surface">
      <header className="journey-surface-tabs" role="tablist" aria-label="Perfil de uso">
        <button
          aria-selected={selected === "students"}
          className={selected === "students" ? "journey-surface-tab journey-surface-tab-active" : "journey-surface-tab"}
          onClick={() => setSelected("students")}
          role="tab"
          type="button"
        >
          {options[0]?.tabLabel ?? "Estudantes"}
        </button>
        <button
          aria-selected={selected === "doctors"}
          className={selected === "doctors" ? "journey-surface-tab journey-surface-tab-active" : "journey-surface-tab"}
          onClick={() => setSelected("doctors")}
          role="tab"
          type="button"
        >
          {options[1]?.tabLabel ?? "Médicos"}
        </button>
      </header>

      <div className="journey-surface-body-shell">
        <div className="journey-surface-body">
          <section className="journey-primary">
            <p className="journey-primary-subtitle">{current.subtitle}</p>
            <h3>{current.title}</h3>
            <p className="journey-primary-summary">{current.summary}</p>
          </section>

          <section className="journey-secondary" aria-label="Recursos do perfil">
            {current.features.map((feature, index) => (
              <article className="journey-feature" key={feature.title}>
                <div className="journey-feature-icon">
                  {index === 0 ? <FileQuestion size={18} /> : null}
                  {index === 1 ? <Lightbulb size={18} /> : null}
                  {index === 2 ? <ScanSearch size={18} /> : null}
                  {index > 2 ? <ShieldCheck size={18} /> : null}
                </div>
                <div className="journey-feature-copy">
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                </div>
              </article>
            ))}
          </section>
        </div>
      </div>
    </article>
  );
}

