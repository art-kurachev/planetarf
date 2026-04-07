"use client";

import { FormEvent, useMemo, useState } from "react";

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
    <div id="contact" className="flex flex-col w-full px-4 sm:px-6 scroll-mt-28">
      {/* CTA секция */}
      <div className="relative min-h-[540px] lg:min-h-[601px] w-full rounded-t-[32px] lg:rounded-t-[56px] overflow-clip flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-10 lg:py-14">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative flex flex-col gap-8 items-center w-full max-w-[1056px]">
          {/* Логотип — иконка pl */}
          <div className="flex flex-col gap-[8px] items-center w-full">
            <div className="relative size-[80px]">
              <div className="absolute inset-[-2.5%_-11.25%_-40%_-11.25%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgLogo} alt="Planeta ERP" className="block max-w-none size-full" />
              </div>
            </div>
            {/* Заголовок */}
            <div className="flex flex-col items-start w-full">
              <p className="font-normal text-[clamp(2rem,6vw,3.5rem)] text-[#2e3345] text-center leading-[1.2] w-full">
                Получите демонстрацию
                <br />
                под вашу отрасль
              </p>
            </div>
          </div>
          {/* Форма email */}
          <form
            className="bg-white border border-[#e9edf4] flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center p-1 rounded-[24px] sm:rounded-[56px] w-full max-w-[452px]"
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
              className="flex-1 text-[14px] px-4 py-2 text-[#2e3345] placeholder:text-[#2e3345]/60 outline-none bg-transparent overflow-hidden text-ellipsis whitespace-nowrap"
            />
            <button
              type="submit"
              disabled={!isEmailValid || isSubmitting}
              className="bg-[#6788ec] px-[24px] py-[14px] rounded-[20px] sm:rounded-[32px] text-white font-medium text-[14px] leading-[16px] whitespace-nowrap transition-all duration-200 hover:bg-[#4f74e2] hover:shadow-[0px_12px_24px_rgba(103,136,236,0.32)] active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40 disabled:opacity-60 disabled:cursor-not-allowed disabled:shadow-none"
            >
              {isSubmitting ? "Отправляем..." : isSubmitted ? "Отправлено" : "Записаться"}
            </button>
          </form>
          {/* Контакты */}
          <div className="flex flex-col md:flex-row gap-5 md:gap-8 items-center md:items-start justify-center text-[#1e212b] w-full text-center md:text-left">
            <div className="flex flex-col gap-[4px] items-center md:items-end whitespace-nowrap">
              <p className="text-[18px] md:text-[22px]">+7 (910) 466-95-25</p>
              <p className="text-[15px] md:text-[18px] opacity-60">info@digitonic.ru</p>
            </div>
            <div className="flex flex-col gap-[4px] items-center md:items-start">
              <p className="text-[18px] md:text-[22px]">Москва, Ленинградский проспект, 31а стр1</p>
              <p className="text-[15px] md:text-[18px] opacity-60">(м. Динамо, Петровский парк)</p>
            </div>
          </div>
          {/* Кнопки */}
          <div className="flex gap-[8px] items-center justify-center w-full">
            <button className="bg-[#1e212b] rounded-[28px] size-[56px] flex items-center justify-center relative transition-all duration-200 hover:bg-[#343b4f] hover:-translate-y-[2px] hover:shadow-[0px_10px_22px_rgba(30,33,43,0.35)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e212b]/30">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgTelegram} alt="Telegram" className="absolute size-[24px] left-[14px] top-[17px]" />
            </button>
            <button className="bg-[#1e212b] flex gap-[8px] items-center justify-center pl-[32px] pr-[24px] py-[16px] rounded-[28px] text-white font-medium text-[16px] whitespace-nowrap transition-all duration-200 hover:bg-[#343b4f] hover:-translate-y-[2px] hover:shadow-[0px_10px_22px_rgba(30,33,43,0.35)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1e212b]/30">
              Презентация
              <div className="overflow-clip size-[24px] relative">
                <div className="absolute inset-[12.5%]">
                  <div className="absolute inset-[-4.17%]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={imgDownload} alt="" className="block max-w-none size-full" />
                  </div>
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      {/* Нижняя строка */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 sm:px-6 lg:px-14 py-6 w-full">
        <div className="flex flex-row items-center self-stretch">
          <div className="aspect-[300/75] h-full relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgFooterLogo} alt="Digitonic" className="absolute block max-w-none size-full" />
          </div>
        </div>
        <p className="font-normal text-[14px] sm:text-[18px] text-[#2e3345] opacity-80 leading-[1.6] text-center sm:text-right">
          © 2020 - 2026 Digital Агенство «digitonic»
        </p>
      </div>
    </div>
  );
}
