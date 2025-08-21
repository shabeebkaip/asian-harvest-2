import React from "react";
import { AboutUs, Header, Products, ContactUs, Footer, Packages } from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);


export default function App() {
  React.useEffect(() => {
    // Initialize GSAP ScrollTrigger refresh after all components load
    ScrollTrigger.refresh();
    // Add smooth scroll behavior
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
    });
  }, []);

  return (
    <div className="overflow-hidden scroll-smooth">
      <Header />
      <AboutUs />
      <Products />
      <Packages />
      <ContactUs />
      <Footer />
    </div>
  );
}