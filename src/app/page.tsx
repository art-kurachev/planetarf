"use client";

import { useCallback, useEffect, useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import DemoRequestModal from "@/components/DemoRequestModal";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://planetarf.ru";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [prefillEmail, setPrefillEmail] = useState("");
  const [isDemoModalInitialSuccess, setIsDemoModalInitialSuccess] = useState(false);

  const handleOpenDemo = useCallback((email?: string) => {
    setPrefillEmail(email ?? "");
    setIsDemoModalInitialSuccess(false);
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

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Planeta ERP",
    url: siteUrl,
    logo: `${siteUrl}/favicon.svg`,
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+7-910-466-95-25",
        contactType: "sales",
        areaServed: "RU",
        availableLanguage: ["ru"],
      },
    ],
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Planeta ERP",
    url: siteUrl,
    inLanguage: "ru-RU",
  };

  return (
    <main className="bg-white min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <Header onOpenDemo={() => handleOpenDemo()} />
      {/* Hero с декоративным фоном */}
      <section id="app" className="relative overflow-x-clip overflow-y-visible scroll-mt-28 pt-[56px] sm:pt-12 lg:pt-14 pb-[56px] sm:pb-20 lg:pb-28">
        {/* Декоративные эллипсы */}
        <div className="absolute top-0 left-0 w-[1109px] h-[1109px] rounded-full bg-[#dbe7fb] opacity-50 blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[-272px] right-0 w-[871px] h-[871px] rounded-full bg-[#dbe7fb] opacity-50 blur-[160px] pointer-events-none z-0" />
        <div className="relative z-10">
          <Hero onOpenDemo={() => handleOpenDemo()} />
        </div>
      </section>
      <div id="integrations" className="scroll-mt-28 py-[56px] sm:py-20 lg:py-28">
        <Integrations onOpenDemo={() => handleOpenDemo()} />
      </div>
      <section id="features" className="scroll-mt-28 py-[56px] sm:py-20 lg:py-[56px]">
        <Features />
      </section>
      <section id="testimonials" className="scroll-mt-28 pt-[40px] pb-[56px] sm:py-20 lg:py-28">
        <Testimonials />
      </section>
      <Footer
        onSubmitEmail={(email) => {
          setPrefillEmail(email);
          setIsDemoModalInitialSuccess(true);
          setIsDemoModalOpen(true);
        }}
      />
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
        prefillEmail={prefillEmail}
        initialSuccess={isDemoModalInitialSuccess}
      />
    </main>
  );
}
