import React, { useEffect, useState } from "react";
import { AboutUs, Header, Products, ContactUs, Footer, Packages, LoadingSpinner } from "./components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./App.css";

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Initialize GSAP ScrollTrigger refresh after all components load
      ScrollTrigger.refresh();
      
      // Add smooth scroll behavior
      ScrollTrigger.config({
        autoRefreshEvents: "visibilitychange,DOMContentLoaded,load"
      });
    }
  }, [loading]);

  if (loading) {
    return <LoadingSpinner />;
  }

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