import { useEffect, useRef, type ReactNode } from 'react';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

/**
 * Wraps children and fades them up when they scroll into view.
 * Uses IntersectionObserver, applied once.
 */
export function Reveal({ children, className = '', delay = 0 }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const target = entry.target as HTMLElement;
            target.style.animationDelay = `${delay}ms`;
            target.classList.add('is-visible');
            observer.unobserve(target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={`reveal ${className}`}>
      {children}
    </div>
  );
}
