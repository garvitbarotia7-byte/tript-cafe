import { ArrowRight } from 'lucide-react';
import { featuredDishes } from '@/data/content';
import { InkArt } from '../InkArt';
import { Reveal } from '../Reveal';
import { ArtLayer } from '../ArtLayer';

export function Highlights() {
  return (
    <section id="highlights" className="relative bg-cream-100 py-24 md:py-26">
      <ArtLayer
        items={[
          { variant: 'waves', left: '50%', top: '3%', className: 'h-12 w-40 -translate-x-1/2 opacity-37 md:h-16 md:w-56', rotate: 0 },
          // { variant: 'leaf', right: '4%', top: '10%', className: 'h-16 w-16 opacity-37 md:h-20 md:w-20', rotate: 12 },
          // { variant: 'leaf', right: '8%', top: '12%', className: 'h-16 w-16 opacity-37 md:h-20 md:w-20', rotate: 12 },
          { variant: 'leaf', right: '4%', top: '16%', className: 'h-32 opacity-37', rotate: -30 },
          { variant: 'sun', left: '4%', bottom: '15%', className: 'h-16 w-16 opacity-37 md:h-24 md:w-24', rotate: 0 },
          // 
          // middle
          {variant: 'sunAlt', right: '2%', top: '52%', className: 'h-16 w-16 opacity-37 md:h-20 md:w-20', rotate: 0},
          {variant: 'border', left: '-1%', top: '42%', className: 'h-48 w-48 opacity-37', rotate: 90},
          // bottom right
          // { variant: 'leaf', right: '2%', bottom: '10%', className: 'h-16 w-16 opacity-37 md:h-20 md:w-20', rotate: -12 },
          // { variant: 'leaf', right: '8%', bottom: '8%', className: 'h-16 w-16 opacity-37 md:h-20 md:w-20', rotate: -12 },
          // { variant: 'sun', left: '4%', bottom: '10%', className: 'h-16 w-16 opacity-37 md:h-24 md:w-24', rotate: 0 },
          // top left 
          { variant: 'figure', left: '2%', top: '2%', className: 'h-44 opacity-37', rotate: 0 },
          { variant: 'palm', right: '8%', bottom: '0%', className: 'h-16 w-12 opacity-37 md:h-24 md:w-16', rotate: 0 },

        ]}
      />
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">From Our Kitchen</p>
            <h2 className="mt-4 text-4xl text-ink-900 md:text-5xl">A few things we love</h2>
            {/* <InkArt variant="waves" className="mt-5 h-5 w-40 text-clay-400" /> */}
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featuredDishes.map((dish, i) => (
            <Reveal key={dish.name} delay={i * 90}>
              <article className="card-soft group h-full overflow-hidden transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_50px_-25px_rgba(83,45,26,0.3)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {dish.tag && (
                    <span className="absolute left-4 top-4 rounded-full bg-cream-50/90 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.14em] text-clay-600 backdrop-blur">
                      {dish.tag}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl text-ink-900">{dish.name}</h3>
                    <strong className="shrink-0 font-display text-lg text-clay-600">{dish.price}</strong>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-ink-700/80">{dish.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={120}>
          <div className="mt-14 flex justify-center">
            <a href="./#/menu" className="btn-ghost hover:gap-3 flex items-center gap-2 text-sm font-medium text-clay-600 transition-all duration-300">
              View Full Menu
              <ArrowRight size={16} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
