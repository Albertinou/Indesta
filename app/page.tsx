import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";
import VideoHeroSection from "./components/VideoHeroSection";
import Maps from "./components/Maps";
import Footer from "./components/Footer";

export const fetchCache = 'force-no-store'

export default function Home() {
  return (
    <div className="bg-white">
      <VideoHeroSection />
      {/* <Hero /> */}
      <AboutUs />
      <Newest />
      <ContactForm />
      <Maps />
      <Footer />
    </div>
  );
}
