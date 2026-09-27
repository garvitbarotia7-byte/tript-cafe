import { ArrowRight } from 'lucide-react';
import { InkArt } from '../InkArt';
import { ArtLayer } from '../ArtLayer';

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.pexels.com/photos/12570668/pexels-photo-12570668.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800"
          alt="Warm sunlit café interior with wooden surfaces and soft shadows"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink-900/55 via-ink-900/25 to-ink-900/65" />
      </div>

      {/* <ArtLayer
        items={[
          { variant: 'sunAlt', left: '8%', top: '10%', className: 'h-20 w-20 opacity-40 md:h-28 md:w-28', rotate: -8 },
          { variant: 'palm', right: '6%', bottom: '18%', className: 'h-20 w-20 opacity-30 md:h-28 md:w-28', rotate: 12 },
        ]}
      /> */}

      <div className="container-wide relative z-10 py-32">
        <div className="max-w-2xl animate-fadeUp">
          <p className="eyebrow !text-clay-200">Moments of satisfaction</p>

          <h1 className="mt-5 font-display text-6xl leading-[0.95] text-cream-50 sm:text-7xl md:text-8xl">
            Tript
            <span className="text-clay-300">.</span>
          </h1>

          <p className="mt-6 max-w-md  text-clay-100/90 leading-relaxed">
            Fresh coffee, Indian classics to Contienental delights, and a quiet corner to stay awhile.
          </p>

          {/* add open hours info */}
          <div className="mt-4 eyebrow">
              {/* font style for font weight set to large */}
            <p className="text-clay-100 text-base">

              <span className="font-medium text-cream-50">Open: </span> Mon-Sun 12:00PM - 2:00AM
            </p>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a href="#reserve" className="btn-primary">
              Reserve a Table
            </a>
            <a
              href="./#/menu"
              className="btn-ghost !border-cream-50/30 !text-cream-50 hover:!border-clay-300 hover:!text-clay-200"
            >
              View Full Menu
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-cream-50/60">
        <InkArt variant="waves" className="h-6 w-28 animate-floatY" />
      </div>
    </section>
  );
}
