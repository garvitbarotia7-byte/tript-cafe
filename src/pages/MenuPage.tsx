import { ArrowLeft } from 'lucide-react';
import { menu, featuredDishes } from '@/data/content';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { InkArt } from '@/components/InkArt';
import { Reveal } from '@/components/Reveal';

export function MenuPage() {
  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar variant="menu" />

      <header className="relative overflow-hidden bg-ink-900 pt-36 pb-24 text-cream-50">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow !text-clay-300">The Full Menu</p>
            <h1 className="mt-4 font-display text-6xl md:text-7xl">
              Eat well, <span className="italic text-clay-300">Stay awhile</span>
            </h1>
            <InkArt variant="waves" className="mt-6 h-6 w-52 text-cream-50/40" />
            <p className="mt-6 max-w-lg text-base leading-relaxed text-cream-100/80">
              Everything is made in-house, each day. Seasonal tweaks happen often —
              ask your server what's fresh today.
            </p>
          </Reveal>
        </div>
      </header>

      <section className="py-20 md:py-28">
        <div className="container-wide grid gap-16 md:grid-cols-2 md:gap-20">
          {menu.map((cat, i) => (
            <Reveal key={cat.title} delay={(i % 2) * 100}>
              <div>
                <div className="flex items-baseline justify-between border-b border-ink-900/15 pb-3">
                  <h2 className="text-3xl text-ink-900">{cat.title}</h2>
                  <span className="font-script text-xl text-clay-500">{cat.note}</span>
                </div>
                <ul className="mt-6 space-y-7">
                  {cat.items.map((item) => (
                    <li key={item.name} className="group">
                      <div className="flex items-baseline justify-between gap-4">
                        <h3 className="text-lg text-ink-900 transition-colors group-hover:text-clay-600">
                          {item.name}
                        </h3>
                        <span className="flex-1 border-b border-dashed border-ink-900/15" />
                        <span className="font-display text-lg text-clay-600">{item.price}</span>
                      </div>
                      <p className="mt-1 text-sm text-ink-700/70">{item.description}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream-100 py-20 md:py-24">
        <div className="container-wide">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <p className="eyebrow">Staff Favourites</p>
              <h2 className="mt-4 text-3xl text-ink-900 md:text-4xl">What we're pouring</h2>
              <InkArt variant="bird" className="mt-5 h-10 w-24 text-clay-400" />
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featuredDishes.slice(0, 3).map((dish, i) => (
              <Reveal key={dish.name} delay={i * 90}>
                <article className="card-soft overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl text-ink-900">{dish.name}</h3>
                      <span className="font-display text-lg text-clay-600">{dish.price}</span>
                    </div>
                    <p className="mt-2 text-sm text-ink-700/80">{dish.description}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-wide flex flex-col items-center gap-6 text-center">
          <Reveal>
            <h2 className="text-3xl text-ink-900 md:text-4xl">Hungry yet?</h2>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <a href="./#reserve" className="btn-primary">Reserve a Table</a>
              <a href="./" className="btn-ghost">
                <ArrowLeft size={16} />
                Back home
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}
