"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");

  const handleOpenDemo = useCallback((email?: string) => {
    setPrefillEmail(email ?? "");
    setIsDemoModalOpen(true);
  }, []);

  useEffect(() => {
    // Disable browser scroll restoration so refresh always starts at top.
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }, []);

  return (
    <main className="bg-white min-h-screen">
      <Header onOpenDemo={() => handleOpenDemo()} />
      {/* Hero с декоративным фоном */}
      <section id="app" className="relative overflow-visible scroll-mt-28 pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-20 lg:pb-28">
        {/* Декоративные эллипсы */}
        <div className="absolute top-0 left-0 w-[1109px] h-[1109px] rounded-full bg-[#dbe7fb] opacity-20 blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[-272px] right-0 w-[871px] h-[871px] rounded-full bg-[#dbe7fb] opacity-10 blur-[160px] pointer-events-none z-0" />
        <div className="relative z-10">
          <Hero onOpenDemo={() => handleOpenDemo()} />
        </div>
      </section>
      <section id="integrations" className="scroll-mt-28 py-14 sm:py-20 lg:py-28">
        <Integrations onOpenDemo={() => handleOpenDemo()} />
      </section>
      <section id="features" className="scroll-mt-28 py-14 sm:py-20 lg:py-28">
        <Features />
      </section>
      <section id="testimonials" className="scroll-mt-28 py-14 sm:py-20 lg:py-28">
        <Testimonials />
      </section>
      <Footer />
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefillEmail={prefillEmail}
      />
    </main>
  );
}
