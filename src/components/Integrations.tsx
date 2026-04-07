const imgIntegrations = "https://www.figma.com/api/mcp/asset/be453586-ac61-47ff-be55-780cc31a9561";

export default function Integrations() {
  return (
    <div className="flex items-center justify-between w-full max-w-[1224px] mx-auto h-[504px]">
      {/* Левая часть */}
      <div className="flex flex-col h-full items-start justify-between py-[56px] w-[563px]">
        <div className="flex flex-col gap-[16px]">
          <div className="bg-[#dbe7fb] px-[16px] py-[8px] rounded-[24px]">
            <p className="font-medium text-[14px] text-[#6788ec]">Экосистема интеграций</p>
          </div>
          <p className="font-normal text-[32px] text-[#2e3345] leading-[1.2] w-[504px]">
            Работает с теми инструментами, которые у вас уже есть
          </p>
          <p className="font-normal text-[14px] text-[#2e3345] leading-[1.4]">
            Платформа подключается к 1С, CRM, мессенджерам и сервисам учёта
            <br />— без замены существующей инфраструктуры и дорогостоящих доработок.
          </p>
          <p className="font-normal text-[20px] text-[#2e3345] leading-[1.2]">
            15+ готовых интеграций.
            <br />
            Подключение от 1 дня.
          </p>
        </div>
        <button className="bg-[#6788ec] px-[24px] py-[16px] rounded-[24px] text-white font-medium text-[16px]">
          Записаться на демо-показ
        </button>
      </div>
      {/* Правая часть — интеграционная схема */}
      <div className="relative h-full" style={{ aspectRatio: "1366/1046" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgIntegrations}
          alt="Интеграции"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
