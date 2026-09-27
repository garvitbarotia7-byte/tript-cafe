import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-ink-900 text-cream-100">
      <div className="container-wide py-16 md:py-3">
        <InkArt variant="dashes" className="mb-12 h-5 w-full text-clay-400/60" />

        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-display text-3xl tracking-tight text-cream-50">
              Tript<span className="text-clay-400">.</span>
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream-100/70">
              A neighbourhood café where North Indian roots meet Western café rituals.
              Fresh coffee, and food made with care.
            </p>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm text-cream-100/80 transition-colors hover:text-clay-300"
            >
              <Instagram size={18} />
              <a href="https://instagram.com/tript.cafe" target="_blank" rel="noopener noreferrer">
                @tript.cafe
              </a>
            </a>
          </div>

          <div>
            <p className="eyebrow !text-clay-400">Visit</p>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-clay-400" />
                <a href="https://share.google/mpfDxMPaeyFltps4L" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Sector 76, Pratap Nagar, Jaipur, Rajasthan 302033
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-clay-400" />
                <a href="https://share.google/y6Wa81b4OCOFyErbl" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  Sector 10, Pratap Nagar, Jaipur, Rajasthan 302033
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-clay-400" />
                <a href="tel:+918740850681" className="hover:underline">
                +91 87408 50681
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-clay-400" />
                <a href="mailto:hello@tript.cafe" className="hover:underline">
                  hello@tript.cafe
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="eyebrow !text-clay-400">Explore</p>
            <ul className="mt-4 space-y-3 text-sm text-cream-100/70">
              <li>
                <a href="#gallery" className="transition-colors hover:text-clay-300">
                  Gallery
                </a>
              </li>
              <li>
                <a href="./#/menu" className="transition-colors hover:text-clay-300">
                  Full Menu
                </a>
              </li>
              <li>
                <a href="#story" className="transition-colors hover:text-clay-300">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#reserve" className="transition-colors hover:text-clay-300">
                  Reserve a Table
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-cream-100/10 pt-6 text-xs text-cream-100/50 sm:flex-row">
          <p>© {new Date().getFullYear()} Tript Café. Made with care.</p>
          <p>Jaipur · India</p>
        </div>
      </div>
    </footer>
  );
}
