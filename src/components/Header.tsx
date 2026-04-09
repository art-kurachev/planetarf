"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";

const logoUrl = "/figma-assets/396e3568-a5f2-4c8c-9899-cdf4081d4cfa.svg";

const navItems = [
  { label: "Отраслевые решения", sectionId: "app" },
  { label: "Интеграции", sectionId: "integrations" },
  { label: "Приложение", sectionId: "features" },
  { label: "Отзывы", sectionId: "testimonials" },
];

type HeaderProps = {
  onOpenDemo: () => void;
};

export default function Header({ onOpenDemo }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const target = document.getElementById(sectionId);
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 px-4 sm:px-6 lg:px-[95px] py-3 lg:py-4 z-50 w-full transition-[background-color,backdrop-filter] duration-200 ${
        isScrolled ? "backdrop-blur-[12px] bg-[rgba(255,255,255,0.75)]" : "bg-transparent backdrop-blur-0"
      }`}
      style={{ willChange: "transform" }}
      initial={prefersReducedMotion ? false : { y: -120 }}
      animate={prefersReducedMotion ? undefined : { y: 0 }}
      transition={
        prefersReducedMotion
          ? undefined
          : {
              delay: 0.5,
              duration: 0.6,
              ease: [0.22, 1, 0.36, 1],
            }
      }
    >
      <div className="flex items-center gap-4 w-full max-w-[1730px] mx-auto">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt="Planeta ERP"
          className="h-[32px] lg:h-[40px] w-auto shrink-0"
          style={{ aspectRatio: "300/75" }}
        />

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-14 text-center absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              className="font-medium text-[16px] text-[#2e3345] whitespace-nowrap transition-all duration-200 hover:text-[#6788ec] hover:-translate-y-px"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Buttons */}
        <div className="ml-auto flex gap-2 items-center shrink-0">
          <button className="hidden sm:block [background:unset] [background-color:unset] backdrop-blur-[3px] border-[1.5px] border-[#c7cdd6] px-4 py-2 lg:px-6 lg:py-3 rounded-[24px] font-medium text-[14px] text-[#2e3345] whitespace-nowrap transition-all duration-200 hover:bg-[#f3f7ff] hover:border-[#c4d3ef] hover:-translate-y-[2px] hover:shadow-[0px_10px_20px_rgba(103,136,236,0.16)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40">
            Войти
          </button>
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#6788ec] px-4 py-2 lg:px-6 lg:py-3 rounded-[24px] font-medium text-[14px] text-white whitespace-nowrap transition-all duration-200 hover:bg-[#4f74e2] hover:-translate-y-[2px] hover:shadow-[0px_12px_24px_rgba(103,136,236,0.32)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40"
          >
            Демо-доступ
          </button>
        </div>
      </div>
    </motion.header>
  );
}
