import Image from "next/image";
import Hero from "./components/Hero";
import Newest from "./components/Newest";
import ContactForm from "./components/ContactForm";
import AboutUs from "./components/AboutUs";

export const fetchCache = 'force-no-store'

export default function Home() {
  return (
    <div className="bg-white pb-6 sm:pb-8 lg:pb-12">
      <Hero />
      <AboutUs />
      <Newest />
      <ContactForm />
    </div>
  );
}
