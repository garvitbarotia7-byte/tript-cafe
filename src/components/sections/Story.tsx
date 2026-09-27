import { InkArt } from '../InkArt';
import { Reveal } from '../Reveal';
import { ArtLayer } from '../ArtLayer';

export function Story() {
  return (
    <section id="story" className="relative overflow-hidden py-24 md:py-32">
      <ArtLayer
        items={[
          { variant: 'sun', left: '4%', top: '10%', className: 'h-16 w-16 opacity-37 md:h-28 md:w-28', rotate: 0 },
          { variant: 'drum', right: '12%', top: '8%', className: 'opacity-37 h-52 md:h-64 sm:h-52', rotate: 0 },
          { variant: 'pottery', left: '69%', bottom: '7%', className: 'h-24 w-28 opacity-37 md:h-40 md:w-44', rotate: 0 },
          // { variant: 'waves', right: '-3%', bottom: '0%', className: 'h-20 w-44 opacity-37 md:h-28 md:w-64', rotate: 180 },
        ]}
      />

      <div className="container-wide relative z-10 grid items-center gap-12 md:grid-cols-2 md:gap-16">
        <Reveal>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/29833130/pexels-photo-29833130.jpeg?auto=compress&cs=tinysrgb&h=900&w=720"
              alt="Café counter with espresso machine and warm bread display"
              className="aspect-[4/5] w-full rounded-[2rem] object-cover shadow-[0_30px_60px_-30px_rgba(83,45,26,0.4)]"
            />
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-cream-100 p-5 shadow-lg md:block">
              <p className="font-script text-2xl text-clay-600">since 2025</p>
              <p className="text-xs uppercase tracking-[0.2em] text-ink-700/60">Jaipur</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div>
            <p className="eyebrow">Our Story</p>
            <InkArt variant="sprig" className="mt-4 h-10 w-12 text-clay-400" />
            <h2 className="mt-4 text-4xl text-ink-900 md:text-5xl">
              Two kitchens, <br />
              <span className="text-clay-600">one table.</span>
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-ink-700">
              <p>
                Tript began as a small idea — that the warmth of a North Indian kitchen
                and the calm ritual of a Western café could share the same room. A place
                where a masala chai sits happily beside a flat white.
              </p>
              <p>
                We brew slowly, cook from scratch, and let the light do the rest. Come for
                the coffee, stay for the corner table by the window.
              </p>
            </div>
            <p className="mt-8 font-script text-2xl text-clay-600">— the <strong className="italic">तृप्त</strong> team</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
