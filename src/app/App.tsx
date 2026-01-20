import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';
import { BackToTop } from './components/BackToTop';

export default function App() {
  return (
    <div className="size-full">
      <ScrollProgress />
      <BackToTop />
      <Navbar />
      <Hero />
      <ClientLogos />
      <Services />
      <About />
      <CaseStudies />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}