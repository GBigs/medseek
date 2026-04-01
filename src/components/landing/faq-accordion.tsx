import { ChevronDown, CircleHelp } from "lucide-react";
import { useState } from "react";

import type { FaqItem } from "@/src/types/landing";

type FaqAccordionProps = {
  items: FaqItem[];
};

export function FaqAccordion({ items }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="faq-list">
      {items.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <article className={isOpen ? "faq-item faq-item-open" : "faq-item"} key={faq.question}>
            <button
              aria-expanded={isOpen}
              className="faq-trigger"
              onClick={() => setOpenIndex((current) => (current === index ? -1 : index))}
              type="button"
            >
              <span className="faq-trigger-left">
                <CircleHelp size={16} />
                <span>{faq.question}</span>
              </span>
              <ChevronDown className={isOpen ? "faq-chevron faq-chevron-open" : "faq-chevron"} size={16} />
            </button>

            {isOpen ? <p>{faq.answer}</p> : null}
          </article>
        );
      })}
    </div>
  );
}

