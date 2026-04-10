"use client";

import { FormEvent, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";
import styles from "@/components/Footer.module.css";

const imgBg = "/figma-assets/86391a72-e3d5-4dc2-904a-4b57f7df5231.png";
const imgLogo = "/figma-assets/5e1996ad-28a2-4584-9916-24a1f2135a85.svg";
const imgTelegram = "/figma-assets/40b20909-a4cc-403d-9cb6-ff5361359eb5.svg";
const imgDownload = "/figma-assets/e74bf0ae-6d13-4cdf-805f-35cfe3a0814e.svg";
const imgFooterLogo = "/figma-assets/c6f22121-ce19-433d-b7fc-0d79e0b368c5.svg";

type FooterProps = {
  onSubmitEmail?: (email: string) => Promise<void> | void;
};

export default function Footer({ onSubmitEmail }: FooterProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleEmailChange = (value: string) => {
    // Simple email mask: lowercase, no spaces/cyrillic, single @.
    const normalized = value
      .toLowerCase()
      .replace(/\s+/g, "")
      .replace(/[^a-z0-9@._%+-]/g, "");

    const atIndex = normalized.indexOf("@");
    if (atIndex === -1) {
      setEmail(normalized);
      return;
    }

    const localPart = normalized.slice(0, atIndex);
    const domainPart = normalized.slice(atIndex + 1).replace(/@/g, "");
    setEmail(`${localPart}@${domainPart}`);
  };

  const isEmailValid = useMemo(() => {
    const normalized = email.trim();
    if (!normalized) return false;
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized);
  }, [email]);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isEmailValid || isSubmitting) return;
    setIsSubmitting(true);
    try {
      if (onSubmitEmail) {
        await onSubmitEmail(email.trim());
      } else {
        await new Promise((resolve) => setTimeout(resolve, 450));
      }
      setEmail("");
      setIsSubmitted(true);
      window.setTimeout(() => setIsSubmitted(false), 2200);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      id="contact"
      className={styles.root}
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* CTA секция */}
      <motion.div
        className={styles.ctaSection}
        variants={itemReveal}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgBg}
          alt=""
          className={styles.bgImage}
        />
        <div className={styles.content}>
          {/* Логотип — иконка pl */}
          <div className={styles.logoBlock}>
            <div className={styles.logoWrap}>
              <div className={styles.logoOffset}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgLogo} alt="Planeta ERP" className={styles.logoImage} />
              </div>
            </div>
            {/* Заголовок */}
            <div className={styles.titleWrap}>
              <p className={styles.title}>
                Получите демонстрацию
                <br />
                под&nbsp;вашу отрасль
              </p>
            </div>
          </div>
          {/* Форма email */}
          <form
            className={styles.form}
            onSubmit={handleSubmit}
          >
            <input
              type="email"
              value={email}
              onChange={(e) => handleEmailChange(e.target.value)}
              placeholder="Рабочая почта"
              inputMode="email"
              autoCapitalize="none"
              autoCorrect="off"
              spellCheck={false}
              className={styles.input}
            />
            <button
              type="submit"
              disabled={!isEmailValid || isSubmitting}
              className={styles.submitButton}
            >
              {isSubmitting ? "Отправляем..." : isSubmitted ? "Отправлено" : "Записаться"}
            </button>
          </form>
          {/* Контакты */}
          <div className={styles.contacts}>
            <div className={`${styles.contactCol} ${styles.contactPhone}`}>
              <p className={styles.contactPrimary}>+7 (910) 466-95-25</p>
              <p className={styles.contactSecondary}>info@digitonic.ru</p>
            </div>
            <div className={`${styles.contactCol} ${styles.contactAddress}`}>
              <p className={styles.contactPrimary}>Москва, Ленинградский проспект, 31а стр1</p>
              <p className={styles.contactSecondary}>(м.&nbsp;Динамо, Петровский парк)</p>
            </div>
          </div>
          {/* Кнопки */}
          <div className={styles.actionButtons}>
            <button className={styles.hiddenButton}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgTelegram} alt="Telegram" />
            </button>
            <button className={styles.hiddenButton}>
              Презентация
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgDownload} alt="" />
            </button>
          </div>
        </div>
      </motion.div>
      {/* Нижняя строка */}
      <motion.div
        className={styles.bottom}
        variants={itemReveal}
      >
        <div className={styles.footerLogoWrap}>
          <div className={styles.footerLogoAspect}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgFooterLogo} alt="Digitonic" className={styles.footerLogo} />
          </div>
        </div>
        <p className={styles.footerText}>
          © 2020 - 2026 Digital Агенство «digitonic»
        </p>
      </motion.div>
    </motion.div>
  );
}
