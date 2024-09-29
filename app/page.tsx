
import Newest from "./components/Newest";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";
import VideoHeroSection from "./components/VideoHeroSection";
import Footer from "./components/Footer";
import { GMap } from "./components/GMap";

export const fetchCache = 'force-no-store'

export default function Home() {
  return (
    <div className="bg-white">
      <VideoHeroSection />
      <AboutUs />
      <Newest />
      <ContactForm />
      <GMap />
      <Footer />
    </div>
  );
}
