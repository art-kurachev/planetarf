"use client";

import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";

const imgIntegrations = "/figma-assets/itegra.svg";

type IntegrationsProps = {
  onOpenDemo: () => void;
};

export default function Integrations({ onOpenDemo }: IntegrationsProps) {

  return (
    <motion.div
      className="flex flex-col lg:flex-row items-center gap-6 lg:gap-0 w-full max-w-[1224px] mx-auto px-0 sm:px-6 lg:px-8"
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* Левая часть */}
      <motion.div
        className="order-2 lg:order-1 flex flex-col items-center lg:items-start justify-between gap-8 lg:gap-10 py-2 lg:py-8 w-full lg:w-[563px] px-6 lg:px-0"
        variants={itemReveal}
      >
        <div className="flex flex-col gap-4 items-center lg:items-start text-center lg:text-left">
          <div className="bg-[#dbe7fb] px-[16px] py-[8px] rounded-[24px] w-fit">
            <p className="font-medium text-[14px] text-[#6788ec] w-fit">Экосистема интеграций</p>
          </div>
          <p className="font-normal text-[28px] lg:text-[clamp(1.75rem,4vw,2rem)] text-[#2e3345] leading-[1.2] max-w-[504px]">
            Работает с теми инструментами, которые у&nbsp;вас уже есть
          </p>
          <p className="font-normal text-[14px] text-[#2e3345] leading-[1.4]">
            Платформа подключается к&nbsp;1С, CRM, мессенджерам и&nbsp;сервисам учёта{" "}
            — без замены существующей инфраструктуры и&nbsp;дорогостоящих доработок.
          </p>
          <p className="font-normal text-[20px] text-[#2e3345] leading-[1.2]">
            15+ готовых интеграций.
            <br />
            Подключение от&nbsp;1&nbsp;дня.
          </p>
        </div>
        <button
          type="button"
          onClick={onOpenDemo}
          className="bg-[#6788ec] px-[24px] py-[16px] rounded-[24px] text-white font-medium text-[16px] leading-[16px] cursor-pointer shadow-[0px_9px_9px_rgba(103,136,236,0.16)] transition-all duration-200 hover:bg-[#4f74e2] hover:-translate-y-[2px] hover:shadow-[0px_16px_28px_rgba(103,136,236,0.34)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40"
        >
          Записаться на&nbsp;демо-показ
        </button>
      </motion.div>
      {/* Правая часть — интеграционная схема */}
      <motion.div
        className="order-1 lg:order-2 relative w-full max-w-[620px] aspect-[1366/1046] pointer-events-none"
        variants={itemReveal}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgIntegrations}
          alt="Интеграции"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
}
