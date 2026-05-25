import dynamic from 'next/dynamic';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

const CursorGlow = dynamic(() => import('./components/CursorGlow'), { ssr: false });
const SmoothScroll = dynamic(() => import('./components/SmoothScroll'), { ssr: false });

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative bg-[#050508] min-h-screen">
        <CursorGlow />
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </SmoothScroll>
  );
}
