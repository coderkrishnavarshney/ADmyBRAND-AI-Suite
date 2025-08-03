import { Hero } from '../sections/Hero';
import { Features } from '../sections/Features';
import { Pricing } from '../sections/Pricing';
import { Testimonials } from '../sections/Testimonials';
import { FAQ } from '../sections/FAQ';
import { Contact } from '../sections/Contact';
import { Footer } from '../sections/Footer';

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </>
  );
}
