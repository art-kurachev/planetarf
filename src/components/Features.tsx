const imgPhone = "https://www.figma.com/api/mcp/asset/f9153bda-2c26-4036-8e28-faa58c54d873";
const imgGooglePlay = "https://www.figma.com/api/mcp/asset/d6798f15-a477-45d0-8190-b95aeeadacbc";
const imgAppStore = "https://www.figma.com/api/mcp/asset/32458ecc-9fc4-479a-9f29-cd363709a332";

export default function Features() {
  return (
    <div className="flex gap-[56px] items-start justify-center w-full max-w-[1224px] mx-auto h-[582px]">
      {/* Левая часть — телефон */}
      <div className="flex-1 h-[582px] relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imgPhone}
          alt="Мобильное приложение"
          className="absolute w-[1277px] h-[1277px] top-[-401px] left-[-329px] object-cover"
        />
      </div>
      {/* Правая часть */}
      <div className="flex flex-col items-start justify-between py-[56px] w-[680px] self-stretch">
        <div className="flex flex-col gap-[8px]">
          <div className="bg-[#dbe7fb] px-[16px] py-[8px] rounded-[24px] self-start">
            <p className="font-medium text-[14px] text-[#6788ec]">Система всегда под рукой</p>
          </div>
          <p className="font-normal text-[40px] text-[#2e3345] leading-[1.2] w-[491px]">
            Контроль процессов — даже когда вы не в офисе
          </p>
          <p className="font-normal text-[18px] text-[#616f9e] leading-[1.4]">
            Отслеживайте статусы, получайте обновления и будьте в курсе текущей ситуации по
            рабочим вопросам. Подходит для повседневного использования, когда важно быстро
            понять, что происходит и где требуется внимание.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] w-[416px]">
          <p className="font-normal text-[22px] text-[#6788ec] leading-[1.2]">
            Согласуйте, отслеживайте статусы и получайте уведомления
          </p>
          <div className="flex gap-[8px]">
            <div className="bg-[#eff1f8] flex gap-[8px] items-center p-[12px] rounded-[16px]">
              <div className="flex flex-col gap-[2px]">
                <p className="font-normal text-[14px] text-[#909abb] leading-[16px]">Загрузить в</p>
                <p className="font-medium text-[16px] text-[#2e3345] leading-[18px]">App Store</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgAppStore} alt="App Store" className="size-[36px]" />
            </div>
            <div className="bg-[#eff1f8] flex gap-[8px] items-center p-[12px] rounded-[16px]">
              <div className="flex flex-col gap-[2px]">
                <p className="font-normal text-[14px] text-[#909abb] leading-[16px]">Доступно в</p>
                <p className="font-medium text-[16px] text-[#2e3345] leading-[18px]">Google Play</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgGooglePlay} alt="Google Play" className="size-[36px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
