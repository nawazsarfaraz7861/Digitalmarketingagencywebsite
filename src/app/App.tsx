import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ClientLogos } from './components/ClientLogos';
import { Services } from './components/Services';
import { About } from './components/About';
import { CaseStudies } from './components/CaseStudies';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="size-full">
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