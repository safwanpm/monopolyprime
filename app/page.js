import AboutPage from "@/components/About";
import AboutSection from "@/components/AboutSection";
import Contact from "@/components/Contact";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Properties from "@/components/Properties";
import SearchBar from "@/components/SearchBar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";


export default function Home() {
  return (
    <>
    <Navbar/>
   <Hero/>
   {/* <SearchBar/> */}
   <Properties/>
   {/* <AboutSection/> */}
   <AboutPage/>
   <Services/>
   <Testimonials/>
   {/* <CTA/>/ */}
   <Contact/>
   <Footer/>

    </>
  );
}
