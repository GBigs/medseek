"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import type { Testimonial } from "@/src/types/landing";

type TestimonialsCarouselProps = {
  items: Testimonial[];
};

export function TestimonialsCarousel({ items }: TestimonialsCarouselProps) {
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
    <div className="testimonials-carousel-wrap">
      <button aria-label="Ver testimonials anteriores" className="testimonials-carousel-arrow" onClick={goPrev} type="button">
        <ChevronLeft size={18} />
      </button>
      <div className="testimonials-carousel" ref={carouselRef}>
        {items.map((item, currentIndex) => (
          <article
            className="testimonial"
            key={item.author}
            ref={(node) => {
              itemRefs.current[currentIndex] = node;
            }}
          >
            <p className="testimonial-quote">{item.quote}</p>
            <p className="testimonial-author">{item.author}</p>
            <p className="testimonial-role">{item.role}</p>
          </article>
        ))}
      </div>
      <button aria-label="Ver próximos testimonials" className="testimonials-carousel-arrow" onClick={goNext} type="button">
        <ChevronRight size={18} />
      </button>
    </div>
  );
}
