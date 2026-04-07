const imgPhone = "/figma-assets/af7198e7-498c-44e0-a30f-a51ab0a9c2be.png";
const imgGooglePlay = "/figma-assets/3143c6af-eef9-4576-9746-42f5f1a19e63.svg";
const imgAppStore = "/figma-assets/1db8887b-7531-4859-a14c-9f424416efc7.svg";

export default function Features() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start justify-center w-full max-w-[1224px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* Левая часть — телефон (без overflow-hidden, чтоб телефон не обрезался) */}
      <div className="w-full lg:flex-[1_0_0] min-h-[320px] lg:min-h-[582px] relative z-0">
        <div className="absolute left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-[-329px] w-[840px] h-[520px] lg:size-[1277px] top-[-120px] lg:top-[-401px] -z-10 pointer-events-none">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgPhone}
            alt="Мобильное приложение"
            className="absolute right-0 bottom-0 max-w-none object-cover size-full"
          />
        </div>
      </div>
      {/* Правая часть */}
      <div className="flex flex-col items-start justify-between py-4 lg:py-14 lg:pl-8 w-full lg:w-[680px] self-stretch gap-8">
        <div className="flex flex-col gap-[8px] items-start w-full">
          <div className="bg-[#dbe7fb] px-[16px] py-[8px] rounded-[24px] self-start">
            <p className="font-medium text-[14px] text-[#6788ec]">Система всегда под рукой</p>
          </div>
          <p className="font-normal text-[clamp(1.9rem,5vw,2.5rem)] text-[#2e3345] leading-[1.2] max-w-[491px]">
            Контроль процессов — даже когда вы не в офисе
          </p>
          <p className="font-normal text-[18px] text-[#616f9e] leading-[1.4]">
            Отслеживайте статусы, получайте обновления и будьте в курсе текущей ситуации по
            рабочим вопросам. Подходит для повседневного использования, когда важно быстро
            понять, что происходит и где требуется внимание.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] items-start w-full max-w-[416px]">
          <p className="font-normal text-[22px] text-[#6788ec] leading-[1.2]">
            Согласуйте, отслеживайте статусы и получайте уведомления
          </p>
          <div className="flex flex-col sm:flex-row gap-[8px] w-full">
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
