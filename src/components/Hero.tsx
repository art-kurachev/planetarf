"use client";

const img2 = "/figma-assets/52cc731f-9f1d-4238-9924-6b4367cebea6.png";
const img3 = "/figma-assets/hero-uk-card-phone-v2.png";
const img5 = "/figma-assets/51ea8e38-decf-41ba-9833-a498bbfde9ac.png";
const img6 = "/figma-assets/b4a92bfb-5241-4697-8089-05990e1f2d1e.png";

type HeroProps = {
  onOpenDemo: () => void;
};

export default function Hero({ onOpenDemo }: HeroProps) {

  return (
    <div className="flex flex-col gap-10 lg:gap-14 items-center w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Верхний блок: бейдж + заголовок + CTA */}
      <div className="flex flex-col gap-6 lg:gap-8 items-center w-full">
        <div className="flex flex-col gap-4 items-center w-full">
          {/* Бейдж */}
          <div className="border-[1.5px] border-[#94b7f4] flex items-center justify-center px-[24px] py-[8px] rounded-[24px]">
            <p className="font-medium text-[16px] text-[#6788ec]">Planeta ERP</p>
          </div>
          {/* H1 */}
          <p className="font-normal text-[clamp(2rem,6vw,3.5rem)] text-[#2e3345] text-center leading-[1.15]">
            Единая цифровая экосистема{" "}
            <br className="hidden lg:block" />
            для&nbsp;управления крупным бизнесом
          </p>
          {/* Subtitle */}
          <p className="font-normal text-[clamp(1rem,3.5vw,1.5rem)] text-[#616f9e] text-center leading-[1.35] max-w-[840px]">
            Контроль процессов, денег и&nbsp;сроков в&nbsp;одной системе
          </p>
        </div>
        {/* CTA */}
        <div className="flex flex-col gap-[8px] items-center">
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#6788ec] px-[24px] py-[16px] rounded-[24px] shadow-[0px_9px_9px_rgba(103,136,236,0.16)] text-white font-medium text-[16px] leading-[16px] transition-all duration-200 hover:bg-[#4f74e2] hover:-translate-y-[2px] hover:shadow-[0px_16px_28px_rgba(103,136,236,0.34)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40"
          >
            Записаться на демо-показ
          </button>
          <p className="text-[12px] text-[#616f9e]">Это займет не&nbsp;более 15&nbsp;минут</p>
        </div>
      </div>

      {/* 4 карточки */}
      <div className="flex gap-[8px] w-full overflow-x-auto snap-x snap-mandatory lg:overflow-visible lg:h-[403px]">
        {/* Карточка 1: Инвестиционно-строительные */}
        <div className="group shrink-0 w-[75vw] max-w-[300px] snap-start lg:flex-1 lg:w-auto lg:max-w-none bg-white border border-[#e9edf4] rounded-[24px] flex flex-col justify-between pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 hover:-translate-y-[24px] hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] hover:border-transparent hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]">
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
          <div className="border border-[#e9edf4] h-[237px] rounded-tl-[8px] w-[426px] relative overflow-hidden shrink-0 shadow-[-45px_-27px_32px_0px_rgba(122,133,168,0.03),-20px_-12px_23px_0px_rgba(122,133,168,0.05)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img2}
              alt=""
              className="absolute h-[187.92%] left-[0.03%] top-[-10.74%] w-[157.96%] max-w-none"
            />
          </div>
        </div>

        {/* Карточка 2: УК ЖКХ */}
        <div className="group shrink-0 w-[75vw] max-w-[300px] snap-start lg:flex-1 lg:w-auto lg:max-w-none bg-white border border-[#e9edf4] rounded-[24px] flex flex-col justify-between pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 hover:-translate-y-[24px] hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] hover:border-transparent hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]">
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
          <div className="flex items-center justify-center h-[236px] py-[12px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img3}
              alt="Мобильное приложение"
              className="h-full w-auto max-w-full object-contain drop-shadow-[0px_16px_28px_rgba(122,133,168,0.22)]"
            />
          </div>
        </div>

        {/* Карточка 3: Агентства недвижимости */}
        <div className="group shrink-0 w-[75vw] max-w-[300px] snap-start lg:flex-1 lg:w-auto lg:max-w-none bg-white border border-[#e9edf4] rounded-[24px] flex flex-col justify-between pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 hover:-translate-y-[24px] hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] hover:border-transparent hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]">
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
          <div className="border border-[#e9edf4] h-[237px] rounded-tl-[8px] w-[426px] relative overflow-hidden shrink-0 shadow-[-126px_-75px_41px_0px_rgba(122,133,168,0),-81px_-48px_38px_0px_rgba(122,133,168,0.01),-45px_-27px_32px_0px_rgba(122,133,168,0.03),-20px_-12px_23px_0px_rgba(122,133,168,0.05),-5px_-3px_13px_0px_rgba(122,133,168,0.06)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img2}
              alt=""
              className="absolute h-[146.82%] left-[0.07%] top-[-7.43%] w-[123.41%] max-w-none"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img5}
              alt=""
              className="absolute h-[211.22%] left-[0.01%] top-[0.17%] w-[228.65%] max-w-none"
            />
          </div>
        </div>

        {/* Карточка 4: Корпоративный */}
        <div className="group shrink-0 w-[75vw] max-w-[300px] snap-start lg:flex-1 lg:w-auto lg:max-w-none bg-white border border-[#e9edf4] rounded-[24px] flex flex-col pt-[24px] px-[24px] overflow-hidden relative transition-all duration-300 hover:-translate-y-[24px] hover:[background:radial-gradient(211%_141.42%_at_100%_100%,rgba(103,136,236,0)_0%,rgba(103,136,236,0.8)_100%),var(--bg-elevated,#F8FAFC)] hover:border-transparent hover:shadow-[0px_199px_56px_0px_rgba(103,136,236,0),0px_127px_51px_0px_rgba(103,136,236,0.03),0px_71px_43px_0px_rgba(103,136,236,0.09),0px_32px_32px_0px_rgba(103,136,236,0.16),0px_8px_17px_0px_rgba(103,136,236,0.18)]">
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
          <div className="flex-1" />
          <div className="border border-[#e9edf4] h-[237px] rounded-tl-[8px] w-[426px] relative overflow-hidden shrink-0 shadow-[-126px_-75px_41px_0px_rgba(122,133,168,0),-81px_-48px_38px_0px_rgba(122,133,168,0.01),-45px_-27px_32px_0px_rgba(122,133,168,0.03),-20px_-12px_23px_0px_rgba(122,133,168,0.05),-5px_-3px_13px_0px_rgba(122,133,168,0.06)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={img6}
              alt=""
              className="absolute h-[208.21%] left-[-37.69%] top-[-16.74%] w-[205.93%] max-w-none"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
