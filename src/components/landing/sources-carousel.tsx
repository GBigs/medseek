"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { BookReference } from "@/src/types/landing";

type SourcesCarouselProps = {
  items: BookReference[];
};

export function SourcesCarousel({ items }: SourcesCarouselProps) {
  const [index, setIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLElement | null>>([]);

  const lastIndex = Math.max(items.length - 1, 0);

  useEffect(() => {
    const carousel = carouselRef.current;
    const current = itemRefs.current[index];
    if (!carousel || !current) {
      return;
    }

    carousel.scrollTo({
      left: current.offsetLeft,
      behavior: "smooth",
    });
  }, [index]);

  const goPrev = () => {
    setIndex((current) => (current <= 0 ? lastIndex : current - 1));
  };

  const goNext = () => {
    setIndex((current) => (current >= lastIndex ? 0 : current + 1));
  };

  return (
    <div className="sources-carousel-wrap">
      <button aria-label="Ver áreas anteriores" className="sources-carousel-arrow" onClick={goPrev} type="button">
        <ChevronLeft size={20} />
      </button>
      <div className="sources-carousel" ref={carouselRef}>
        {items.map((book, currentIndex) => (
          <article
            className="source-card"
            key={`${book.area}-${book.mainSource}`}
            ref={(node) => {
              itemRefs.current[currentIndex] = node;
            }}
          >
            <div className="source-cover-placeholder">
              <span>
                capa do
                <br />
                livro aqui
              </span>
            </div>
            <div className="source-card-content">
              <h3 className="source-main">{book.mainSource}</h3>
              <p className="source-meta">
                <span>
                  <strong>Edição:</strong> {book.edition}
                </span>
                <span>
                  <strong>Área:</strong> {book.area}
                </span>
              </p>
            </div>
          </article>
        ))}
      </div>
      <button aria-label="Ver próximas áreas" className="sources-carousel-arrow" onClick={goNext} type="button">
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
