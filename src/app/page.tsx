import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Filmography from "@/components/Filmography";
import Gallery from "@/components/Gallery";
import Awards from "@/components/Awards";
import FanMessage from "@/components/FanMessage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Filmography />
        <Gallery />
        <Awards />
        <FanMessage />
      </main>
      <Footer />
    </>
  );
}
