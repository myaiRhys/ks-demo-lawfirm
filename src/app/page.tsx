import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import PracticeAreas from "@/components/PracticeAreas";
import Attorneys from "@/components/Attorneys";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <hr />
      <About />
      <PracticeAreas />
      <Attorneys />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
