import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import { testimonials } from '@/data/content';
import { InkArt } from '../InkArt';
import { Reveal } from '../Reveal';
import { ArtLayer } from '../ArtLayer';

export function Testimonials() {
  const [active, setActive] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const dragStartX = useRef<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setActive((v) => (v + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(id);
  }, []);

  const handleScrollReviews = (event: WheelEvent) => {
    if (!sectionRef.current) return;

    const rect = sectionRef.current.getBoundingClientRect();
    const inView = rect.top < window.innerHeight && rect.bottom > 0;

    if (!inView) return;

    event.preventDefault();

    setActive((current) => {
      if (event.deltaY > 0) {
        return (current + 1) % testimonials.length;
      }
      return (current - 1 + testimonials.length) % testimonials.length;
    });
  };

  const moveReview = (direction: 1 | -1) => {
    setActive((current) => (current + direction + testimonials.length) % testimonials.length);
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLElement>) => {
    dragStartX.current = event.clientX;
    setDragOffset(0);
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return;
    setDragOffset(event.clientX - dragStartX.current);
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLElement>) => {
    if (dragStartX.current === null) return;

    const deltaX = event.clientX - dragStartX.current;
    if (Math.abs(deltaX) > 80) {
      moveReview(deltaX < 0 ? 1 : -1);
    }

    dragStartX.current = null;
    setDragOffset(0);
  };

  const handlePointerLeave = () => {
    dragStartX.current = null;
    setDragOffset(0);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const onWheel = (event: WheelEvent) => handleScrollReviews(event);
    const onKeyDown = (event: KeyboardEvent) => {
      if (document.activeElement !== section) return;

      if (event.key === 'ArrowRight') {
        event.preventDefault();
        moveReview(1);
      }

      if (event.key === 'ArrowLeft') {
        event.preventDefault();
        moveReview(-1);
      }
    };

    section.addEventListener('wheel', onWheel, { passive: false });
    section.addEventListener('keydown', onKeyDown);

    return () => {
      section.removeEventListener('wheel', onWheel);
      section.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      tabIndex={0}
      className="relative overflow-hidden bg-clay-600 py-10 text-cream-50 outline-none md:py-14"
    >
      <ArtLayer
        items={[
          { variant: 'tribal', left: '3%', top: '14%', className: 'h-24 w-16 opacity-20 md:h-28 md:w-20', rotate: 0 },
          { variant: 'sunAlt', right: '5%', bottom: '10%', className: 'h-16 w-16 opacity-15 md:h-20 md:w-20', rotate: 0 },
        ]}
      />
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow !text-clay-200">Kind Words</p>
            <h2 className="mt-4 text-4xl md:text-5xl">From our regulars</h2>
            <InkArt variant="swirl" className="mt-5 h-6 w-32 text-cream-50/50" />
          </div>
        </Reveal>

        <div className="mx-auto mt-8 max-w-3xl">
          <div
            className="relative min-h-[230px] cursor-grab select-none active:cursor-grabbing sm:min-h-[200px]"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
            onPointerCancel={handlePointerLeave}
          >
            {testimonials.map((t, i) => (
              <figure
                key={t.name}
                style={{
                  transform: i === active ? `translate3d(${dragOffset}px, 0, 0)` : 'translate3d(0, 0, 0)',
                  transition: dragStartX.current === null ? 'transform 0.45s ease, opacity 0.7s ease' : 'none',
                }}
                className={`absolute inset-0 flex flex-col items-center text-center ${
                  i === active
                    ? 'opacity-100 translate-y-0'
                    : 'pointer-events-none opacity-0 translate-y-4'
                }`}
              >
                <Quote size={28} className="text-clay-200" />
                <blockquote className="mt-6 font-display text-xl leading-relaxed text-cream-50/90 md:text-2xl">
                  "{t.quote}"
                </blockquote>
                <figcaption className="mt-8">
                  <p className="text-sm font-medium uppercase tracking-[0.18em] text-cream-50">
                    {t.name}
                  </p>
                  <p className="mt-1 text-xs text-cream-100/70">{t.detail}</p>
                </figcaption>
              </figure>
            ))}
          </div>

          <div className="mt-10 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                aria-label={`Show testimonial ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-cream-50' : 'w-3 bg-cream-50/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
