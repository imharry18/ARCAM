/**
 * The Arcam Project - Premium Digital Agency Homepage
 * EST. 2026 | Timeless By Design
 */

import Navigation from './components/common/Navigation';
import Preloader from './components/ui/Preloader';
import Hero from './components/ui/Hero';
import Projects from './components/ui/Projects';
import Services from './components/ui/Services';
import Process from './components/ui/Process';
import WhyChooseUs from './components/ui/WhyChooseUs';
import FinalCTA from './components/ui/FinalCTA';
import Contact from './components/ui/Contact';
import Footer from './components/ui/Footer';
import Marquee from './components/ui/Marquee';

export default function Home() {
  const CAPABILITIES = ['Bespoke Engineering', 'Cinematic Motion', 'Elite UX Design', 'High-Velocity Performance', 'Strategic Architecture', 'AI Integration', 'Digital Legacy'];
  const VALUES = ['Uncompromising Quality', 'Surgical Precision', 'Avant-Garde Aesthetics', 'Timeless Innovation', 'High-Impact Outcomes'];

  return (
    <main className="overflow-x-hidden bg-black selection:bg-[#E7B366] selection:text-black">
      <Preloader />
      <Navigation />
      
      <Hero />
      
      <Marquee items={CAPABILITIES} speed={40} />
      
      <Projects />
      
      <Marquee items={VALUES} speed={50} reverse />
      
      <Services />
      
      <Process />
      
      <WhyChooseUs />
      
      <Contact />
      
      <FinalCTA />
      
      <Footer />
    </main>
  );
}
