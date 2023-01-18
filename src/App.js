import React from "react";
import { AboutUs, Header, Products, ContactUs, Footer, Packages } from "./components";
import "./App.css"  // This is the CSS file for the App component  

export default function App() {
  return (
    <div className="overflow-hidden scroll-smooth">
      <Header />
      <AboutUs />
      <Products />
      <Packages />
      <ContactUs />
      <Footer />
    </div>
  )
}