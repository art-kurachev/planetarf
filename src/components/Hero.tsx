"use client";

import { type KeyboardEvent, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";
import styles from "@/components/Hero.module.css";

const img2 = "/figma-assets/hero-segment-3-new.png";
const img3 = "/figma-assets/hero-segment-2.png";
const img5 = "/figma-assets/hero-segment-1-new.png";
const img6 = "/figma-assets/hero-segment-4-new.png";

type HeroProps = {
  onOpenDemo: () => void;
};

const cardReveal = {
  hidden: { opacity: 1 },
  show: { opacity: 1 },
} as const;

const introReveal = {
  hidden: { opacity: 0, y: 24 },
  show: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay,
      duration: 0.65,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const heroStats = [
  { value: "в 3–5 раз", label: "ускорьте бизнес-процессы" },
  { value: "до 30%", label: "сократите расходы" },
  { value: "на 50%", label: "автоматизируйте рутину" },
  { value: "100%", label: "контроль и прозрачность" },
] as const;

export default function Hero({ onOpenDemo }: HeroProps) {
  const cardsScrollerRef = useRef<HTMLDivElement | null>(null);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartScrollLeftRef = useRef(0);
  const didDragRef = useRef(false);
  const handleCardKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      onOpenDemo();
    }
  };

  useEffect(() => {
    const scroller = cardsScrollerRef.current;
    if (!scroller) return;

    const onWheel = (event: WheelEvent) => {
      const maxLeft = scroller.scrollWidth - scroller.clientWidth;
      if (maxLeft <= 0) return;

      const delta = Math.abs(event.deltaX) > Math.abs(event.deltaY) ? event.deltaX : event.deltaY;
      event.preventDefault();
      event.stopPropagation();
      scroller.scrollLeft = Math.max(0, Math.min(maxLeft, scroller.scrollLeft + delta));
    };

    const onPointerDown = (event: PointerEvent) => {
      if (event.pointerType !== "mouse") return;

      const maxLeft = scroller.scrollWidth - scroller.clientWidth;
      if (maxLeft <= 0) return;

      isDraggingRef.current = true;
      didDragRef.current = false;
      dragStartXRef.current = event.clientX;
      dragStartScrollLeftRef.current = scroller.scrollLeft;
      scroller.classList.add("cursor-grabbing");
      scroller.setPointerCapture(event.pointerId);
    };

    const onPointerMove = (event: PointerEvent) => {
      if (!isDraggingRef.current) return;

      const deltaX = event.clientX - dragStartXRef.current;
      if (Math.abs(deltaX) > 3) didDragRef.current = true;

      const nextLeft = dragStartScrollLeftRef.current - deltaX;
      const maxLeft = scroller.scrollWidth - scroller.clientWidth;
      scroller.scrollLeft = Math.max(0, Math.min(maxLeft, nextLeft));
    };

    const stopDragging = () => {
      isDraggingRef.current = false;
      scroller.classList.remove("cursor-grabbing");
    };

    const onClickCapture = (event: MouseEvent) => {
      if (!didDragRef.current) return;
      event.preventDefault();
      event.stopPropagation();
      didDragRef.current = false;
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    scroller.addEventListener("pointerdown", onPointerDown);
    scroller.addEventListener("pointermove", onPointerMove);
    scroller.addEventListener("pointerup", stopDragging);
    scroller.addEventListener("pointercancel", stopDragging);
    scroller.addEventListener("lostpointercapture", stopDragging);
    scroller.addEventListener("click", onClickCapture, true);
    return () => {
      scroller.removeEventListener("wheel", onWheel);
      scroller.removeEventListener("pointerdown", onPointerDown);
      scroller.removeEventListener("pointermove", onPointerMove);
      scroller.removeEventListener("pointerup", stopDragging);
      scroller.removeEventListener("pointercancel", stopDragging);
      scroller.removeEventListener("lostpointercapture", stopDragging);
      scroller.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  return (
    <motion.div
      className={styles.root}
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* Верхний блок: бейдж + заголовок + CTA */}
      <motion.div
        className={styles.intro}
        variants={itemReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className={styles.introContent}>
          {/* Бейдж */}
          <motion.div
            className={styles.badge}
            variants={introReveal}
            custom={0.05}
          >
            <p className={styles.badgeText}>Planeta ERP</p>
          </motion.div>
          {/* H1 */}
          <motion.p
            className={styles.title}
            variants={introReveal}
            custom={0.16}
          >
            Единая цифровая экосистема{" "}
            <br className={styles.desktopBreak} />
            для&nbsp;управления крупным бизнесом
          </motion.p>
          <motion.div
            className={styles.statsWrap}
            variants={introReveal}
            custom={0.26}
          >
            <div className={styles.statsGrid}>
              {heroStats.map((stat, index) => (
                <div key={stat.value} className={styles.statItemWrap}>
                  <motion.div
                    className={styles.statItem}
                    variants={introReveal}
                    custom={0.36 + index * 0.06}
                  >
                    <p className={styles.statValue}>
                      {stat.value}
                    </p>
                    <p className={styles.statLabel}>
                      {stat.label}
                    </p>
                  </motion.div>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Subtitle */}
          <motion.p
            className={styles.subtitle}
            variants={introReveal}
            custom={0.4}
          >
            Контроль процессов, денег и&nbsp;сроков в&nbsp;одной системе
          </motion.p>
        </div>
        {/* CTA */}
        <motion.div className={styles.ctaBlock} variants={introReveal} custom={0.62}>
          <button
            type="button"
            onClick={onOpenDemo}
            className={`hero-cta-shimmer ${styles.ctaButton}`}
          >
            Записаться на&nbsp;демо-показ
          </button>
          <p className={styles.ctaHint}>Это займет не&nbsp;более 15&nbsp;минут</p>
        </motion.div>
      </motion.div>

      <motion.div className={styles.segmentsRoot} variants={itemReveal}>
        <div className={styles.segmentsHeader}>
          <p className={styles.segmentsTitle}>
            Кому подойдет экосистема Планета
          </p>
          <p className={styles.segmentsSubtitle}>
            Выберите свой сегмент — покажем, как платформа решает именно ваши задачи
          </p>
        </div>

        {/* 4 карточки */}
        <motion.div
          ref={cardsScrollerRef}
          className={`hide-scrollbar ${styles.cardsScroller}`}
          variants={containerReveal}
        >
        {/* Карточка 1: Инвестиционно-строительные */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onOpenDemo}
          onKeyDown={handleCardKeyDown}
          className={styles.card}
          variants={cardReveal}
        >
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              Инвестиционно-
              <br />
              строительные компании
            </p>
            <div className={styles.chips}>
              {["Снабжение", "Оплаты", "Сроки", "Контроль стройки", "Поставки"].map((t) => (
                <span
                  key={t}
                  className={styles.chip}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.screenFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img2}
              alt=""
              className={styles.screenImage}
            />
          </div>
        </motion.div>

        {/* Карточка 2: УК ЖКХ */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onOpenDemo}
          onKeyDown={handleCardKeyDown}
          className={styles.card}
          variants={cardReveal}
        >
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              Управляющие
              <br />
              компании (ЖКХ)
            </p>
            <div className={styles.chips}>
              {["Заявки", "Аварии", "SLA", "Обслуживание"].map((t) => (
                <span
                  key={t}
                  className={styles.chip}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Phone mockup */}
          <div className={styles.phoneWrap}>
            <div className={styles.phoneInner}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img3}
                alt="Мобильное приложение"
                className={styles.phoneImage}
              />
            </div>
          </div>
        </motion.div>

        {/* Карточка 3: Агентства недвижимости */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onOpenDemo}
          onKeyDown={handleCardKeyDown}
          className={styles.card}
          variants={cardReveal}
        >
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              Агентства недвижимости
              <br />и&nbsp;Департаменты продаж
            </p>
            <div className={styles.chips}>
              {["Лиды", "Сделки", "Звонки", "Воронка", "Клиенты"].map((t) => (
                <span
                  key={t}
                  className={styles.chip}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.screenFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img5}
              alt=""
              className={styles.screenImage}
            />
          </div>
        </motion.div>

        {/* Карточка 4: Корпоративный */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onOpenDemo}
          onKeyDown={handleCardKeyDown}
          className={styles.card}
          variants={cardReveal}
        >
          <div className={styles.cardContent}>
            <p className={styles.cardTitle}>
              Корпоративный сектор
              <br />и&nbsp;Сервисные компании
            </p>
            <div className={styles.chips}>
              {["Согласования", "Процессы", "Задачи", "Документы"].map((t) => (
                <span
                  key={t}
                  className={styles.chip}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className={styles.screenFrame}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img6}
              alt=""
              className={styles.screenImage}
            />
          </div>
        </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
