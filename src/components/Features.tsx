const imgPhone = "https://www.figma.com/api/mcp/asset/af7198e7-498c-44e0-a30f-a51ab0a9c2be";
const imgGooglePlay = "https://www.figma.com/api/mcp/asset/3143c6af-eef9-4576-9746-42f5f1a19e63";
const imgAppStore = "https://www.figma.com/api/mcp/asset/1db8887b-7531-4859-a14c-9f424416efc7";

export default function Features() {
  return (
    <div className="flex gap-[56px] items-start justify-center w-full max-w-[1224px] mx-auto h-[582px]">
      {/* Левая часть — телефон (без overflow-hidden, чтоб телефон не обрезался) */}
      <div className="flex-[1_0_0] h-[582px] min-h-px min-w-px relative">
        <div className="absolute left-[-329px] size-[1277px] top-[-401px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgPhone}
            alt="Мобильное приложение"
            className="absolute right-0 bottom-0 max-w-none object-cover size-full"
          />
        </div>
      </div>
      {/* Правая часть */}
      <div className="flex flex-col items-start justify-between py-[56px] w-[680px] self-stretch">
        <div className="flex flex-col gap-[8px] items-start w-full">
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
        <div className="flex flex-col gap-[12px] items-start w-[416px]">
          <p className="font-normal text-[22px] text-[#6788ec] leading-[1.2]">
            Согласуйте, отслеживайте статусы и получайте уведомления
          </p>
          <div className="flex gap-[8px]">
            <div className="bg-[#eff1f8] flex gap-[8px] items-center p-[12px] rounded-[16px]">
              <div className="flex flex-col gap-[2px] items-start justify-end">
                <p className="font-normal text-[14px] text-[#909abb] leading-[16px]">Загрузить в</p>
                <p className="font-medium text-[16px] text-[#2e3345] leading-[18px]">App Store</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgAppStore} alt="App Store" className="size-[36px]" />
            </div>
            <div className="bg-[#eff1f8] flex gap-[8px] items-center p-[12px] rounded-[16px]">
              <div className="flex flex-col gap-[2px] items-start justify-end">
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
