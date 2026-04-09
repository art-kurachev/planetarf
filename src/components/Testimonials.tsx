import { motion } from "framer-motion";
import { containerReveal, itemReveal, revealViewport } from "@/components/motion";

const avatar1 = "/figma-assets/98649603-4477-4cf4-be37-632983203c4c.png";
const avatar2 = "/figma-assets/b6d08d95-22b6-4005-a8bf-301291f81b32.png";
const avatar3 = "/figma-assets/7b96c264-6b67-49cf-b622-2bafc84b8620.png";
const avatar4 = "/figma-assets/f49b365b-7614-42bf-afea-509acb6ebcc4.png";
const avatar5 = "/figma-assets/11f5e18f-4580-4c0a-adea-6a79bd34dd4d.png";
const avatar6 = "/figma-assets/a363909f-1e83-4033-9d74-db26588e7f2b.png";

const clientLogos = [
  { src: "/logos/lobachevskiy.png", alt: "ЖК Лобачевский" },
  { src: "/logos/bolshaya-semerka.png", alt: "Большая Семерка" },
  { src: "/logos/poklonnaya7.png", alt: "Поклонная №7" },
  { src: "/logos/dar.png", alt: "DAR" },
  { src: "/logos/krylatkiy.png", alt: "ЖК Крылатский" },
  { src: "/logos/solos.png", alt: "SOLOS" },
  { src: "/logos/rakurs.png", alt: "RAKURS" },
  { src: "/logos/mid.png", alt: "MID Жилой Комплекс" },
  { src: "/logos/bestcon.png", alt: "Bestcon" },
  { src: "/logos/vremya.png", alt: "Время" },
];

export default function Testimonials() {
  return (
    <motion.div
      className="flex flex-col gap-10 items-center w-full max-w-[1224px] mx-auto px-4 lg:px-8"
      variants={containerReveal}
      initial="hidden"
      whileInView="show"
      viewport={revealViewport}
    >
      {/* Заголовок */}
      <motion.div className="flex flex-col gap-[8px] items-center w-full" variants={itemReveal}>
        <div className="bg-[#dbe7fb] px-[16px] py-[8px] rounded-[24px]">
          <p className="font-medium text-[14px] text-[#6788ec]">Отзывы и&nbsp;кейсы</p>
        </div>
        <p className="font-normal text-[28px] lg:text-[clamp(2rem,6vw,3.5rem)] text-[#2e3345] text-center leading-[1.2]">
          Что говорят клиенты
        </p>
        <p className="font-normal text-[18px] lg:text-[18px] text-[#909abb] text-center leading-[20px]">
          Реальные результаты от&nbsp;строительных компаний, УК и&nbsp;агентств недвижимости
        </p>
      </motion.div>

      {/* Bento grid */}
      <motion.div className="flex flex-col gap-4 md:gap-4 w-full" variants={itemReveal}>
        {/* Row 1: 3 колонки, 3-я высокая */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          {/* Карточка 1 */}
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[24px] lg:p-[32px] flex flex-col justify-between gap-[24px]">
            <p className="font-normal text-[14px] lg:text-[16px] text-[#2e3345] leading-[1.6]">
              «Planeta ERP позволила нам объединить снабжение, бюджетирование и&nbsp;документооборот в
              одной системе. Время согласования счётов сократилось с&nbsp;3&nbsp;дней до&nbsp;нескольких часов»
            </p>
            <div className="flex gap-[8px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar1} alt="Михаил Д." className="size-[44px] rounded-full" />
              <div>
                <p className="font-medium text-[16px] text-[#2e3345]">Михаил Д.</p>
                <p className="text-[12px] text-[#909abb]">Финансовый директор</p>
              </div>
            </div>
          </div>
          {/* Карточка 2 */}
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[24px] lg:p-[32px] flex flex-col justify-between gap-[24px]">
            <p className="font-normal text-[14px] lg:text-[16px] text-[#2e3345] leading-[1.6]">
              «Раньше сводные отчёты по&nbsp;объектам готовились вручную и&nbsp;занимали весь понедельник.
              Теперь дашборд обновляется автоматически — руководство видит актуальную картину в&nbsp;
              любой момент»
            </p>
            <div className="flex gap-[8px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar2} alt="Ирина С." className="size-[44px] rounded-full" />
              <div>
                <p className="font-medium text-[16px] text-[#2e3345]">Ирина С.</p>
                <p className="text-[12px] text-[#909abb]">Руководитель ПЭО</p>
              </div>
            </div>
          </div>
          {/* Карточка 3 — высокая, row-span-2 */}
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[24px] lg:p-[32px] flex flex-col justify-between gap-[24px] md:col-span-2 xl:col-span-1 xl:row-span-2">
            <p className="font-normal text-[14px] lg:text-[16px] text-[#2e3345] leading-[1.6]">
              «Интеграция с&nbsp;нашей 1С прошла без&nbsp;остановки работы. Данные по&nbsp;поставщикам, договорам
              и&nbsp;оплатам синхронизируются автоматически»
            </p>
            <div className="flex gap-[8px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar3} alt="Алексей В." className="size-[44px] rounded-full" />
              <div>
                <p className="font-medium text-[16px] text-[#2e3345]">Алексей В.</p>
                <p className="text-[12px] text-[#909abb]">IT-директор</p>
              </div>
            </div>
          </div>
          {/* Карточка 4 — col-span-2 */}
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[24px] lg:p-[32px] flex flex-col justify-between gap-[24px] md:col-span-2 xl:h-[236px]">
            <p className="font-normal text-[14px] lg:text-[16px] text-[#2e3345] leading-[1.6]">
              «СКУД-модуль закрыл давнюю проблему с&nbsp;учётом рабочего времени на&nbsp;объектах. Теперь у&nbsp;
              нас точные данные по&nbsp;каждому сотруднику без&nbsp;ручной сверки»
            </p>
            <div className="flex gap-[8px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar4} alt="Андрей К." className="size-[44px] rounded-full" />
              <div>
                <p className="font-medium text-[16px] text-[#2e3345]">Андрей К.</p>
                <p className="text-[12px] text-[#909abb]">Директор по&nbsp;строительству</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xl:h-[236px]">
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[24px] lg:p-[32px] flex flex-col justify-between gap-[24px]">
            <p className="font-normal text-[14px] lg:text-[16px] text-[#2e3345] leading-[1.6]">
              «Система помогла выстроить контроль над закупками: видим остатки на&nbsp;складах, статус
              заявок и&nbsp;плановые сроки поставок. Перерасход материалов снизился на&nbsp;18%»
            </p>
            <div className="flex gap-[8px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar5} alt="Наталья Р." className="size-[44px] rounded-full" />
              <div>
                <p className="font-medium text-[16px] text-[#2e3345]">Наталья Р.</p>
                <p className="text-[12px] text-[#909abb]">Руководитель отдела снабжения</p>
              </div>
            </div>
          </div>
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[24px] lg:p-[32px] flex flex-col justify-between gap-[24px]">
            <p className="font-normal text-[14px] lg:text-[16px] text-[#2e3345] leading-[1.6]">
              «Planeta ERP — это не&nbsp;просто CRM, это операционная система для&nbsp;стройки. Мы управляем
              12&nbsp;объектами одновременно и&nbsp;не&nbsp;теряем ни&nbsp;одной детали»
            </p>
            <div className="flex gap-[8px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar6} alt="Ашот А." className="size-[44px] rounded-full" />
              <div>
                <p className="font-medium text-[16px] text-[#2e3345]">Ашот А.</p>
                <p className="text-[12px] text-[#909abb]">Генеральный директор</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Marquee логотипы клиентов */}
      <motion.div
        className="w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]"
        variants={itemReveal}
      >
        <div className="flex w-max gap-[16px] animate-marquee pr-[16px]">
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-[16px] flex-shrink-0 px-[28px]"
              style={{ height: "64px" }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={logo.src}
                alt={logo.alt}
                className="max-h-[34px] w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
