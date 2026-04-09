"use client";

import { type KeyboardEvent, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";

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

export default function Hero({ onOpenDemo }: HeroProps) {
  const cardsScrollerRef = useRef<HTMLDivElement | null>(null);
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
      if (window.innerWidth >= 640) return;
      if (Math.abs(event.deltaY) <= Math.abs(event.deltaX)) return;

      const maxLeft = scroller.scrollWidth - scroller.clientWidth;
      if (maxLeft <= 0) return;

      event.preventDefault();
      scroller.scrollLeft = Math.max(0, Math.min(maxLeft, scroller.scrollLeft + event.deltaY));
    };

    scroller.addEventListener("wheel", onWheel, { passive: false });
    return () => {
      scroller.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <motion.div
      className="flex flex-col gap-10 lg:gap-[120px] items-center w-full max-w-[1224px] mx-auto px-0 lg:px-8"
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* Верхний блок: бейдж + заголовок + CTA */}
      <motion.div
        className="flex flex-col gap-6 lg:gap-8 items-center w-full py-0 px-6"
        variants={itemReveal}
        initial="hidden"
        whileInView="show"
        viewport={revealViewport}
      >
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Бейдж */}
          <motion.div
            className="border-[1.5px] border-[#94b7f4] flex items-center justify-center px-[24px] py-[8px] rounded-[24px]"
            variants={introReveal}
            custom={0.05}
          >
            <p className="font-medium text-[14px] lg:text-[16px] text-[#6788ec]">Planeta ERP</p>
          </motion.div>
          {/* H1 */}
          <motion.p
            className="font-normal text-[28px] sm:text-[clamp(2rem,6vw,3.5rem)] text-[#2e3345] text-center leading-[1.2] lg:leading-[1.15]"
            variants={introReveal}
            custom={0.16}
          >
            Единая цифровая экосистема{" "}
            <br className="hidden lg:block" />
            для&nbsp;управления крупным бизнесом
          </motion.p>
          {/* Subtitle */}
          <motion.p
            className="font-normal text-[16px] sm:text-[clamp(1rem,3.5vw,1.5rem)] text-[#616f9e] text-center leading-[1.4] lg:leading-[1.35] max-w-[840px] px-6"
            variants={introReveal}
            custom={0.26}
          >
            Контроль процессов, денег и&nbsp;сроков в&nbsp;одной системе
          </motion.p>
        </div>
        {/* CTA */}
        <motion.div className="flex flex-col gap-[8px] items-center" variants={introReveal} custom={0.36}>
          <button
            type="button"
            onClick={onOpenDemo}
            className="hero-cta-shimmer bg-[#6788ec] px-[24px] py-[16px] rounded-[24px] shadow-[0px_9px_9px_rgba(103,136,236,0.16)] text-white font-medium text-[16px] leading-[16px] transition-all duration-200 hover:bg-[#4f74e2] hover:-translate-y-[2px] hover:shadow-[0px_16px_28px_rgba(103,136,236,0.34)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40"
          >
            Записаться на&nbsp;демо-показ
          </button>
          <p className="text-[12px] text-[#616f9e]">Это займет не&nbsp;более 15&nbsp;минут</p>
        </motion.div>
      </motion.div>

      <motion.div className="flex flex-col gap-[24px] items-start w-full" variants={itemReveal}>
        <div className="flex flex-col gap-[8px] items-center w-full px-6 text-center">
          <p className="font-normal text-[32px] lg:text-[48px] text-[#2e3345] leading-[1.2]">
            Кому подойдет экосистема Планета
          </p>
          <p className="font-normal text-[16px] lg:text-[20px] text-[#909abb] leading-[1.2]">
            Выберите свой сегмент — покажем, как платформа решает именно ваши задачи
          </p>
        </div>

        {/* 4 карточки */}
        <motion.div
          ref={cardsScrollerRef}
          className="hide-scrollbar flex sm:grid sm:grid-cols-2 xl:grid-cols-4 gap-[8px] w-full overflow-x-auto overflow-y-hidden snap-none sm:snap-x sm:snap-mandatory pl-4 pr-4 sm:overflow-visible touch-pan-x overscroll-x-contain [-webkit-overflow-scrolling:touch]"
          variants={containerReveal}
        >
        {/* Карточка 1: Инвестиционно-строительные */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onOpenDemo}
          onKeyDown={handleCardKeyDown}
          className="snap-start shrink-0 w-[300px] sm:w-auto group cursor-pointer bg-white border border-[#e9edf4] rounded-[24px] flex flex-col justify-between gap-[24px] pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 xl:hover:-translate-y-[8px] xl:hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] xl:hover:border-transparent xl:hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]"
          variants={cardReveal}
        >
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px] text-[#2e3345] leading-[1.2]">
              Инвестиционно-
              <br />
              строительные компании
            </p>
            <div className="flex flex-wrap gap-[4px]">
              {["Снабжение", "Оплаты", "Сроки", "Контроль стройки", "Поставки"].map((t) => (
                <span
                  key={t}
                  className="bg-[#f4f6fa] px-[8px] py-[4px] rounded-[8px] text-[12px] text-[#616f9e] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-[#e9edf4] h-[237px] rounded-tl-[12px] w-[276px] sm:w-[540px] relative overflow-hidden shrink-0 shadow-[-45px_-27px_32px_0px_rgba(122,133,168,0.03),-20px_-12px_23px_0px_rgba(122,133,168,0.05)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img2}
              alt=""
              className="block w-full h-full object-cover object-left-top"
            />
          </div>
        </motion.div>

        {/* Карточка 2: УК ЖКХ */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onOpenDemo}
          onKeyDown={handleCardKeyDown}
          className="snap-start shrink-0 w-[300px] sm:w-auto group cursor-pointer bg-white border border-[#e9edf4] rounded-[24px] flex flex-col justify-between gap-[24px] pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 xl:hover:-translate-y-[8px] xl:hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] xl:hover:border-transparent xl:hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]"
          variants={cardReveal}
        >
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px] text-[#2e3345] leading-[1.2]">
              Управляющие
              <br />
              компании (ЖКХ)
            </p>
            <div className="flex flex-wrap gap-[4px]">
              {["Заявки", "Аварии", "SLA", "Обслуживание"].map((t) => (
                <span
                  key={t}
                  className="bg-[#f4f6fa] px-[8px] py-[4px] rounded-[8px] text-[12px] text-[#616f9e] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          {/* Phone mockup */}
          <div className="flex h-[236px] items-start justify-center relative shrink-0 w-full">
            <div className="h-[236px] relative shrink-0 w-[218px]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img3}
                alt="Мобильное приложение"
                className="absolute bottom-0 left-0 w-full h-auto origin-bottom scale-[1.15] object-contain pointer-events-none drop-shadow-[-45px_-27px_32px_rgba(122,133,168,0.03)]"
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
          className="snap-start shrink-0 w-[300px] sm:w-auto group cursor-pointer bg-white border border-[#e9edf4] rounded-[24px] flex flex-col justify-between gap-[24px] pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 xl:hover:-translate-y-[8px] xl:hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] xl:hover:border-transparent xl:hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]"
          variants={cardReveal}
        >
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px] text-[#2e3345] leading-[1.2]">
              Агентства недвижимости
              <br />и&nbsp;Департаменты продаж
            </p>
            <div className="flex flex-wrap gap-[4px]">
              {["Лиды", "Сделки", "Звонки", "Воронка", "Клиенты"].map((t) => (
                <span
                  key={t}
                  className="bg-[#f4f6fa] px-[8px] py-[4px] rounded-[8px] text-[12px] text-[#616f9e] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-[#e9edf4] h-[237px] rounded-tl-[12px] w-[276px] sm:w-[540px] relative overflow-hidden shrink-0 shadow-[-45px_-27px_32px_0px_rgba(122,133,168,0.03),-20px_-12px_23px_0px_rgba(122,133,168,0.05)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img5}
              alt=""
              className="block w-full h-full object-cover object-left-top"
            />
          </div>
        </motion.div>

        {/* Карточка 4: Корпоративный */}
        <motion.div
          role="button"
          tabIndex={0}
          onClick={onOpenDemo}
          onKeyDown={handleCardKeyDown}
          className="snap-start shrink-0 w-[300px] sm:w-auto group cursor-pointer bg-white border border-[#e9edf4] rounded-[24px] flex flex-col justify-between gap-[24px] pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 xl:hover:-translate-y-[8px] xl:hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] xl:hover:border-transparent xl:hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]"
          variants={cardReveal}
        >
          <div className="flex flex-col gap-[12px]">
            <p className="text-[18px] text-[#2e3345] leading-[1.2]">
              Корпоративный сектор
              <br />и&nbsp;Сервисные компании
            </p>
            <div className="flex flex-wrap gap-[4px]">
              {["Согласования", "Процессы", "Задачи", "Документы"].map((t) => (
                <span
                  key={t}
                  className="bg-[#f4f6fa] px-[8px] py-[4px] rounded-[8px] text-[12px] text-[#616f9e] font-medium"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
          <div className="border border-[#e9edf4] h-[237px] rounded-tl-[12px] w-[276px] sm:w-[540px] relative overflow-hidden shrink-0 shadow-[-45px_-27px_32px_0px_rgba(122,133,168,0.03),-20px_-12px_23px_0px_rgba(122,133,168,0.05)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img6}
              alt=""
              className="block w-full h-full object-cover object-left-top"
            />
          </div>
        </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
