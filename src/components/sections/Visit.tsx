import { Clock, MapPin, Phone } from 'lucide-react';
import { InkArt } from '../InkArt';
import { Reveal } from '../Reveal';
import { ArtLayer } from '../ArtLayer';

const locations = [
  {
    title: 'Trpit Restro & Cafe',
    address: 'Sector 76, Pratap Nagar, Jaipur, Rajasthan 302033',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7121.79995414167!2d75.81229929357912!3d26.81131330000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc937832b5ec3%3A0x44e3180fadcfe8bb!2sTript%20Restro%20%26%20Cafe!5e0!3m2!1sen!2sin!4v1790502280395!5m2!1sen!2sin  ',
  },
  {
    title: 'Tript Cafe',
    address: 'Sector 10, Pratap Nagar, Jaipur, Rajasthan 302033',
    map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3561.320953207046!2d75.8177954!3d26.7979073!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc900477eef6d%3A0x8dd08689728a5bc3!2sTript%20Cafe!5e0!3m2!1sen!2sin!4v1790502212756!5m2!1sen!2sin',
  },
];

export function Visit() {
  return (
    <section id="visit" className="relative py-24 md:py-32">
      <ArtLayer
        items={[
          { variant: 'tribal', right: '2%', bottom: '0%', className: 'h-32 w-28 opacity-37 md:h-48 md:w-40', rotate: 0 },
          // { variant: 'elephant', left: '2%', top: '4%', className: 'h-24 opacity-37', rotate: 0 },
          // { variant: 'pottery', left: '3%', top: '4%', className: 'h-24 opacity-37', rotate: 0 },
          { variant: 'fish', left: '1%', top: '5%', className: 'h-24 opacity-37', rotate: -12 },
          { variant: 'pottery', right: '2%', top: '18%', className: 'h-24 opacity-37', rotate: 0},
          // { variant: 'fish', left: '2%', top: '18%', className: 'h-12 w-20 opacity-37 md:h-16 md:w-28', rotate: -10 },
        ]}
      />
      <div className="container-wide relative z-10">
        <Reveal>
          <div className="flex flex-col items-center text-center">
            <p className="eyebrow">Find Us</p>
            <h2 className="mt-4 text-4xl text-ink-900 md:text-5xl">Come sit a while</h2>
            <InkArt variant="dashes" className="mt-5 h-4 w-44 text-clay-400" />
          </div>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {locations.map((location, index) => (
            <Reveal key={location.title} delay={index * 120}>
              <div>
                <div className="overflow-hidden rounded-[1.5rem]">
                  <iframe
                    title={`${location.title} café location map`}
                    src={location.map}
                    className="h-[260px] w-full border-0 md:h-[320px]"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-4">
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-clay-500" />
                    <p className="eyebrow">{location.title}</p>
                  </div>
                  <p className="mt-2 whitespace-pre-line text-base leading-relaxed text-ink-700">{location.address}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2">
          <Reveal delay={120}>
            <div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="text-clay-500" />
                <p className="eyebrow">Hours</p>
              </div>
              <p className="mt-3 text-base text-ink-700">Opening Hours:  12 PM to 2 AM</p>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="text-clay-500" />
                <p className="eyebrow">Contact</p>
              </div>
              <p className="mt-3 flex flex-wrap items-center gap-x-2 text-base leading-relaxed text-ink-700">
                <a href="tel:+918740850681" className="hover:underline">+91 87408 50681</a>
                <span className="text-clay-500">•</span>
                <a href="mailto:hello@tript.cafe" className="hover:underline">hello@tript.cafe</a>
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
