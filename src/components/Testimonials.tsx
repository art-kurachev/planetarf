const avatar1 = "https://www.figma.com/api/mcp/asset/98649603-4477-4cf4-be37-632983203c4c";
const avatar2 = "https://www.figma.com/api/mcp/asset/b6d08d95-22b6-4005-a8bf-301291f81b32";
const avatar3 = "https://www.figma.com/api/mcp/asset/7b96c264-6b67-49cf-b622-2bafc84b8620";
const avatar4 = "https://www.figma.com/api/mcp/asset/f49b365b-7614-42bf-afea-509acb6ebcc4";
const avatar5 = "https://www.figma.com/api/mcp/asset/11f5e18f-4580-4c0a-adea-6a79bd34dd4d";
const avatar6 = "https://www.figma.com/api/mcp/asset/a363909f-1e83-4033-9d74-db26588e7f2b";

const clientLogos = ["RS", "bestcon", "ПОКЛОННАЯ №7", "MID ЖИЛОЙ КОМПЛЕКС", "ВРЕМЯ", "БОЛЬШАЯ СЕМЕРКА"];

export default function Testimonials() {
  return (
    <div className="flex flex-col gap-[40px] items-center w-full max-w-[1224px] mx-auto">
      {/* Заголовок */}
      <div className="flex flex-col gap-[8px] items-center w-full">
        <div className="bg-[#dbe7fb] px-[16px] py-[8px] rounded-[24px]">
          <p className="font-medium text-[14px] text-[#6788ec]">Отзывы и кейсы</p>
        </div>
        <p className="font-normal text-[56px] text-[#2e3345] text-center leading-[1.2]">
          Что говорят клиенты
        </p>
        <p className="font-normal text-[20px] text-[#909abb] text-center leading-[1.2]">
          Реальные результаты от строительных компаний, УК и агентств недвижимости
        </p>
      </div>

      {/* Bento grid */}
      <div className="flex flex-col gap-[24px] w-full">
        {/* Row 1: 3 колонки, 3-я высокая */}
        <div className="grid grid-cols-3 gap-[24px]">
          {/* Карточка 1 */}
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[32px] flex flex-col gap-[24px]">
            <p className="font-normal text-[16px] text-[#2e3345] leading-[1.6]">
              «Planeta ERP позволила нам объединить снабжение, бюджетирование и документооборот в
              одной системе. Время согласования счётов сократилось с 3 дней до нескольких часов»
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
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[32px] flex flex-col gap-[24px]">
            <p className="font-normal text-[16px] text-[#2e3345] leading-[1.6]">
              «Раньше сводные отчёты по объектам готовились вручную и занимали весь понедельник.
              Теперь дашборд обновляется автоматически — руководство видит актуальную картину в
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
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[32px] flex flex-col justify-between row-span-2">
            <p className="font-normal text-[16px] text-[#2e3345] leading-[1.6]">
              «Интеграция с нашей 1С прошла без остановки работы. Данные по поставщикам, договорам
              и оплатам синхронизируются автоматически»
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
          <div className="bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[32px] flex flex-col justify-between col-span-2 h-[236px]">
            <p className="font-normal text-[16px] text-[#2e3345] leading-[1.6]">
              «СКУД-модуль закрыл давнюю проблему с учётом рабочего времени на объектах. Теперь у
              нас точные данные по каждому сотруднику без ручной сверки»
            </p>
            <div className="flex gap-[8px] items-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={avatar4} alt="Андрей К." className="size-[44px] rounded-full" />
              <div>
                <p className="font-medium text-[16px] text-[#2e3345]">Андрей К.</p>
                <p className="text-[12px] text-[#909abb]">Директор по строительству</p>
              </div>
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex gap-[24px] h-[236px]">
          <div className="flex-1 bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[32px] flex flex-col justify-between">
            <p className="font-normal text-[16px] text-[#2e3345] leading-[1.6]">
              «Система помогла выстроить контроль над закупками: видим остатки на складах, статус
              заявок и плановые сроки поставок. Перерасход материалов снизился на 18%»
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
          <div className="flex-1 bg-[#f8fafc] border border-[#e9edf4] rounded-[32px] p-[32px] flex flex-col justify-between">
            <p className="font-normal text-[16px] text-[#2e3345] leading-[1.6]">
              «Planeta ERP — это не просто CRM, это операционная система для стройки. Мы управляем
              12 объектами одновременно и не теряем ни одной детали»
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
      </div>

      {/* Marquee логотипы клиентов */}
      <div className="w-full overflow-hidden">
        <div className="flex animate-marquee" style={{ width: "max-content" }}>
          {[...clientLogos, ...clientLogos].map((logo, i) => (
            <div
              key={i}
              className="flex items-center justify-center rounded-[16px] mx-[16px] flex-shrink-0 bg-[#f8fafc] border border-[#e9edf4]"
              style={{ width: "200px", height: "64px" }}
            >
              <span className="font-semibold text-[13px] text-[#616f9e]">{logo}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
