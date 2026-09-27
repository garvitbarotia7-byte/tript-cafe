import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Hero } from '@/components/sections/Hero';
import { Story } from '@/components/sections/Story';
import { Highlights } from '@/components/sections/Highlights';
import { Gallery } from '@/components/sections/Gallery';
import { Testimonials } from '@/components/sections/Testimonials';
import { Visit } from '@/components/sections/Visit';
import { Reserve } from '@/components/sections/Reserve';
import { MenuPage } from '@/pages/MenuPage';

function isMenuRoute() {
  const path = window.location.pathname.toLowerCase();
  return path === '/menu' || path === '/menu/' || path.endsWith('/menu');
}

function App() {
  if (isMenuRoute()) {
    return <MenuPage />;
  }

  return (
    <div className="min-h-screen bg-cream-50">
      <Navbar variant="home" />
      <main>
        <Hero />
        <Gallery />
        <Highlights />
        <Story />
        <Testimonials />
        <Visit />
        <Reserve />
      </main>
      <Footer />
    </div>
  );
}

export default App;
