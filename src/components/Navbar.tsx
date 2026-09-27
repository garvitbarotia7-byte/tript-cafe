import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavLink {
  label: string;
  href: string;
}

const homeLinks: NavLink[] = [
  { label: 'Gallery', href: '/#gallery' },
  { label: 'Menu Highlights', href: '/#highlights' },
  { label: 'Story', href: '/#story' },
  { label: 'Visit', href: '/#visit' },
  // { label: 'Reserve', href: '/#reserve' },
];

const menuLinks: NavLink[] = [{ label: 'Home', href: '/' }];

export function Navbar({ variant = 'home' }: { variant?: 'home' | 'menu' }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = variant === 'home' ? homeLinks : menuLinks;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    if (href.startsWith('/#')) {
      const id = href.slice(2);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        return;
      }
    }
    window.location.href = href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/85 backdrop-blur-md shadow-[0_1px_30px_-20px_rgba(28,25,22,0.4)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="container-wide flex items-center justify-between py-4 md:py-5">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();
            handleNav('/');
          }}
          className={`font-display text-2xl tracking-tight transition-colors duration-300 ${
            scrolled ? 'text-ink-900' : 'text-cream-50'
          }`}
        >
          Tript
          <span className="text-clay-500">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {links.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNav(link.href)}
              className={`text-[13px] font-medium uppercase tracking-[0.16em] transition-colors duration-300 ${
                scrolled
                  ? 'text-ink-700 hover:text-clay-600'
                  : 'text-cream-100/90 hover:text-white'
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNav('/#reserve')}
            className="btn-primary !py-2.5 !px-6"
          >
            Reserve
          </button>
        </div>

        <button
          className={`md:hidden ${scrolled ? 'text-ink-900' : 'text-cream-50'}`}
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden">
          <div className="container-wide flex flex-col gap-3 bg-cream-50/95 pb-6 pt-2 backdrop-blur-md">
            {links.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href)}
                className="py-2 text-left text-sm font-medium uppercase tracking-[0.16em] text-ink-700"
              >
                {link.label}
              </button>
            ))}
            <button onClick={() => handleNav('/#reserve')} className="btn-primary mt-2">
              Reserve a Table
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
