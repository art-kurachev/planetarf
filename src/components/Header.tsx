"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import styles from "@/components/Header.module.css";

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
      className={`${styles.header} ${isScrolled ? styles.headerScrolled : styles.headerTop}`}
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
      <div className={styles.inner}>
        {/* Logo */}
        <Link href="/" className={styles.logoLink} aria-label="На главную">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={logoUrl}
            alt="Planeta ERP"
            className={styles.logo}
            style={{ aspectRatio: "300/75" }}
          />
        </Link>

        {/* Nav */}
        <nav className={styles.nav}>
          {navItems.map((item) => (
            <button
              type="button"
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              className={styles.navButton}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Buttons */}
        <div className={styles.actions}>
          <button className={styles.loginButton}>
            Войти
          </button>
          <button
            type="button"
            onClick={onOpenDemo}
            className={styles.demoButton}
          >
            Демо-доступ
          </button>
        </div>
      </div>
    </motion.header>
  );
}
