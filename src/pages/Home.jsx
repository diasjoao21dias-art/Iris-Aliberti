import React from "react";
import Navbar from "@/components/agronomist/Navbar";
import Hero from "@/components/agronomist/Hero";
import Services from "@/components/agronomist/Services";
import Credibility from "@/components/agronomist/Credibility";
import Contact from "@/components/agronomist/Contact";
import Footer from "@/components/agronomist/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#fdfcf9] text-[#1a3d2e] font-body antialiased">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Credibility />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
