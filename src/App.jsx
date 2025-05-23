import { Analytics } from "@vercel/analytics/react";
import Hero from "./sections/Hero";
import About from "./sections/About";
import TechStack from "./sections/TechStack";
import CarouselProject from "./sections/CarouselProject";
import Testimonials from "./sections/Testimonials";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import Loader from "../src/ui/Loader";
import SideBar from "../src/ui/SideBar";
import NavBar from "../src/ui/NavBar";

function App() {
  return (
    <div>
      <Loader />
      <SideBar />
      <NavBar />
      <Hero />
      <About />
      <TechStack />
      <CarouselProject />
      <Testimonials />
      <Contact />
      <Footer />
      <Analytics />
    </div>
  );
}

export default App;
