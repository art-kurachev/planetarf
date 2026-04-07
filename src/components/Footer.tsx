"use client";

import { useState } from "react";

const imgBg = "https://www.figma.com/api/mcp/asset/86391a72-e3d5-4dc2-904a-4b57f7df5231";
const imgLogo = "https://www.figma.com/api/mcp/asset/5e1996ad-28a2-4584-9916-24a1f2135a85";
const imgTelegram = "https://www.figma.com/api/mcp/asset/40b20909-a4cc-403d-9cb6-ff5361359eb5";
const imgDownload = "https://www.figma.com/api/mcp/asset/e74bf0ae-6d13-4cdf-805f-35cfe3a0814e";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/c6f22121-ce19-433d-b7fc-0d79e0b368c5";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col w-full px-[24px]">
      {/* CTA секция */}
      <div className="relative h-[601px] w-full rounded-t-[56px] overflow-clip flex flex-col items-center justify-center px-[456px] py-[56px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />
        <div className="relative flex flex-col gap-[32px] items-center w-full">
          {/* Логотип — иконка pl */}
          <div className="flex flex-col gap-[8px] items-center w-full">
            <div className="relative size-[80px]">
              <div className="absolute inset-[-2.5%_-11.25%_-40%_-11.25%]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={imgLogo} alt="Planeta ERP" className="block max-w-none size-full" />
              </div>
            </div>
            {/* Заголовок */}
            <div className="flex flex-col h-[134px] items-start w-[1056px]">
              <p className="font-normal text-[56px] text-[#2e3345] text-center leading-[1.2] w-full">
                Получите демонстрацию
                <br />
                под вашу отрасль
              </p>
            </div>
          </div>
          {/* Форма email */}
          <div className="bg-white border border-[#e9edf4] flex gap-[16px] items-center pl-[24px] pr-[4px] py-[4px] rounded-[56px] w-[452px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Рабочая почта"
              className="flex-1 text-[14px] text-[#2e3345] opacity-60 outline-none bg-transparent overflow-hidden text-ellipsis whitespace-nowrap"
            />
            <button className="bg-[#6788ec] px-[24px] py-[16px] rounded-[32px] text-white font-medium text-[14px] leading-[16px] whitespace-nowrap">
              Записаться
            </button>
          </div>
          {/* Контакты */}
          <div className="flex gap-[32px] items-start justify-center text-[#1e212b] w-full">
            <div className="flex flex-col gap-[4px] items-end whitespace-nowrap">
              <p className="text-[22px]">+7 (910) 466-95-25</p>
              <p className="text-[18px] opacity-60">info@digitonic.ru</p>
            </div>
            <div className="flex flex-col gap-[4px] items-start">
              <p className="text-[22px] whitespace-nowrap">Москва, Ленинградский проспект, 31а стр1</p>
              <p className="text-[18px] opacity-60">(м. Динамо, Петровский парк)</p>
            </div>
          </div>
          {/* Кнопки */}
          <div className="flex gap-[8px] items-center justify-center w-full">
            <button className="bg-[#1e212b] rounded-[28px] size-[56px] flex items-center justify-center relative">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgTelegram} alt="Telegram" className="absolute size-[24px] left-[14px] top-[17px]" />
            </button>
            <button className="bg-[#1e212b] flex gap-[8px] items-center justify-center pl-[32px] pr-[24px] py-[16px] rounded-[28px] text-white font-medium text-[16px] whitespace-nowrap">
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
      <div className="flex items-center justify-between px-[56px] py-[24px] w-full">
        <div className="flex flex-row items-center self-stretch">
          <div className="aspect-[300/75] h-full relative">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgFooterLogo} alt="Digitonic" className="absolute block max-w-none size-full" />
          </div>
        </div>
        <p className="font-normal text-[18px] text-[#2e3345] opacity-80 leading-[1.6] overflow-hidden text-ellipsis whitespace-nowrap">
          © 2020 - 2026 Digital Агенство «digitonic»
        </p>
      </div>
    </div>
  );
}
