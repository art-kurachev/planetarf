"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
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
  const prefersReducedMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const ellipseLeftY = useTransform(scrollY, [0, 800], [0, 40]);
  const ellipseRightY = useTransform(scrollY, [0, 800], [0, -30]);

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
    <main className="homeMain">
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
      <section id="app" className="heroSection">
        {/* Декоративные эллипсы */}
        <motion.div
          className="heroBgLeft"
          style={{ y: prefersReducedMotion ? 0 : ellipseLeftY }}
        />
        <motion.div
          className="heroBgRight"
          style={{ y: prefersReducedMotion ? 0 : ellipseRightY }}
        />
        <div className="heroContent">
          <Hero onOpenDemo={() => handleOpenDemo()} />
        </div>
      </section>
      <div id="integrations" className="contentSection integrationsSection">
        <Integrations onOpenDemo={() => handleOpenDemo()} />
      </div>
      <section id="features" className="contentSection featuresSection">
        <Features />
      </section>
      <section id="testimonials" className="testimonialsSection">
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
