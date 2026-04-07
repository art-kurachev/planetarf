"use client";

import { useState } from "react";

const imgBg = "https://www.figma.com/api/mcp/asset/cabb7bce-206f-4ea2-9653-15bf7ad0762f";
const imgLogo = "https://www.figma.com/api/mcp/asset/03196a1b-1aea-41f0-a234-a7ea77cc0109";
const imgTelegram = "https://www.figma.com/api/mcp/asset/60deff3b-f02d-4c51-a9f7-86514d2fadea";
const imgDownload = "https://www.figma.com/api/mcp/asset/8d7ca907-b81f-4be8-8ffe-429d82cbfcb4";
const imgFooterLogo = "https://www.figma.com/api/mcp/asset/d730e7cc-6cd7-422d-b323-2051c6e7782a";

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <div className="flex flex-col w-full">
      {/* CTA секция */}
      <div className="relative h-[601px] w-full rounded-t-[56px] overflow-hidden flex flex-col items-center justify-center px-[456px] py-[56px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover rounded-t-[56px]"
        />
        <div className="relative flex flex-col gap-[32px] items-center w-full">
          {/* Лого */}
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={imgLogo} alt="Planeta ERP" className="h-[80px]" />
          </div>
          {/* Заголовок */}
          <p className="font-normal text-[56px] text-[#2e3345] text-center leading-[1.2]">
            Получите демонстрацию
            <br />
            под вашу отрасль
          </p>
          {/* Форма email */}
          <div className="bg-white border border-[#e9edf4] flex gap-[16px] items-center pl-[24px] pr-[4px] py-[4px] rounded-[56px] w-[452px]">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Рабочая почта"
              className="flex-1 text-[14px] text-[#2e3345] opacity-60 outline-none bg-transparent"
            />
            <button className="bg-[#6788ec] px-[24px] py-[16px] rounded-[32px] text-white font-medium text-[14px]">
              Записаться
            </button>
          </div>
          {/* Контакты */}
          <div className="flex gap-[32px] text-[#1e212b]">
            <div className="flex flex-col gap-[4px] items-end">
              <p className="text-[22px]">+7 (910) 466-95-25</p>
              <p className="text-[18px] opacity-60">info@digitonic.ru</p>
            </div>
            <div className="flex flex-col gap-[4px]">
              <p className="text-[22px]">Москва, Ленинградский проспект, 31а стр1</p>
              <p className="text-[18px] opacity-60">(м. Динамо, Петровский парк)</p>
            </div>
          </div>
          {/* Кнопки */}
          <div className="flex gap-[8px] items-center">
            <button className="bg-[#1e212b] rounded-[28px] size-[56px] flex items-center justify-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgTelegram} alt="Telegram" className="size-[24px]" />
            </button>
            <button className="bg-[#1e212b] flex gap-[8px] items-center pl-[32px] pr-[24px] py-[16px] rounded-[28px] text-white font-medium text-[16px]">
              Презентация
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgDownload} alt="" className="size-[24px]" />
            </button>
          </div>
        </div>
      </div>
      {/* Нижняя строка */}
      <div className="flex items-center justify-between px-[56px] py-[24px] w-full">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgFooterLogo}
          alt="Digitonic"
          className="h-[29px]"
          style={{ aspectRatio: "300/75" }}
        />
        <p className="font-normal text-[18px] text-[#2e3345] opacity-80 leading-[1.6]">
          © 2020 - 2026 Digital Агенство «digitonic»
        </p>
      </div>
    </div>
  );
}
