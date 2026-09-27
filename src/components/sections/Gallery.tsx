import { galleryImages } from '@/data/content';
import { Reveal } from '../Reveal';
import { ArtLayer } from '../ArtLayer';

const spans = [
  'row-span-2',
  '',
  '',
  'row-span-2',
  '',
  '',
  'row-span-2',
  '',
];

export function Gallery() {
  return (
    <section id="gallery" className="relative py-24 md:py-32">
      <ArtLayer
        items={[
          { variant: 'sun', left: '4%', top: '10%', className: 'h-16 w-16 opacity-37 md:h-24 md:w-24', rotate: 0 },
          { variant: 'leaf', right: '4%', top: '16%', className: 'h-16 w-16 opacity-37 md:h-20 md:w-20', rotate: 12 },
          { variant: 'border', left: '50%', top: '0%', className: 'h-12 w-56 -translate-x-1/2 opacity-37 md:h-20 md:w-80', rotate: 0 },
          { variant: 'elephant', right: '5%', bottom: '0%', className: 'h-16 w-12 opacity-37 md:h-24 md:w-16', rotate: 0 },
          // big tribal svg
          // { variant: 'tribal', right: '25%', bottom: '0%', className: 'h-56 w-56 opacity-37', rotate: 0 },
        ]}
      />
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">The Café in Frames</p>
            <h2 className="mt-4 text-4xl text-ink-900 md:text-5xl">Light, corners & cups</h2>
          </div>
        </Reveal>

        <div className="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 md:grid-cols-4 md:auto-rows-[220px]">
          {galleryImages.map((src, i) => (
            <Reveal
              key={src}
              delay={i * 60}
              className={spans[i % spans.length]}
            >
              <div
                className={`group relative h-full w-full overflow-hidden rounded-2xl ${
                  spans[i % spans.length] ? 'row-span-2' : ''
                }`}
              >
                <img
                  src={src}
                  alt={`Tript café gallery frame ${i + 1}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-ink-900/0 transition-colors duration-500 group-hover:bg-ink-900/10" />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
