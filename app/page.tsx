import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/home/Hero";
import Platform from "@/components/home/Platform";
import Developer from "@/components/home/Developer";
import Enterprise from "@/components/home/Enterprise";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Nativee Vision */}
      <Hero />

      {/* Nativee Products */}
      <Platform />

      {/* How Nativee Works */}
      <Developer />

      {/* Who Nativee Is For */}
      <Enterprise />

      {/* Final Call To Action */}
      <CTA />

      <Footer />
    </>
  );
}