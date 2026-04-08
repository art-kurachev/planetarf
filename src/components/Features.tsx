const imgPhone = "/figma-assets/frame-2087325872.svg";
const imgGooglePlay = "/figma-assets/3143c6af-eef9-4576-9746-42f5f1a19e63.svg";
const imgAppStore = "/figma-assets/1db8887b-7531-4859-a14c-9f424416efc7.svg";

export default function Features() {
  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-14 items-start justify-center w-full h-fit max-w-[1224px] mx-auto px-4 lg:px-8">
      {/* Левая часть — телефон */}
      <div className="w-full lg:flex-[1_0_0] relative z-0 flex justify-center lg:justify-center items-start">
        <div className="relative w-full max-w-[240px] lg:max-w-[280px] pointer-events-none origin-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={imgPhone}
            alt="Мобильное приложение"
            className="block w-full h-auto object-contain rounded-[36px]"
            style={{
              filter:
                "drop-shadow(0 10px 22px rgba(0, 0, 0, 0.06)) drop-shadow(0 39px 39px rgba(0, 0, 0, 0.05)) drop-shadow(0 88px 53px rgba(0, 0, 0, 0.03)) drop-shadow(0 157px 63px rgba(0, 0, 0, 0.01)) drop-shadow(0 246px 69px rgba(0, 0, 0, 0.00))",
            }}
          />
        </div>
      </div>
      {/* Правая часть */}
      <div className="flex flex-col items-center lg:items-start justify-between py-4 lg:py-10 lg:pl-8 px-6 w-full lg:w-[620px] self-stretch gap-8 lg:gap-20">
        <div className="flex flex-col gap-[8px] items-center lg:items-start w-full text-center lg:text-left">
          <div className="bg-[#dbe7fb] px-[16px] py-[8px] rounded-[24px] self-center lg:self-start">
            <p className="font-medium text-[14px] text-[#6788ec]">Система всегда под рукой</p>
          </div>
          <p className="font-normal text-[28px] lg:text-[clamp(1.9rem,5vw,2.5rem)] text-[#2e3345] leading-[1.2] max-w-[491px]">
            Контроль процессов — даже когда вы не&nbsp;в&nbsp;офисе
          </p>
          <p className="font-normal text-[16px] text-[#616f9e] leading-[1.4]">
            Отслеживайте статусы, получайте обновления и&nbsp;будьте в&nbsp;курсе текущей ситуации по
            рабочим вопросам. Подходит для повседневного использования, когда важно быстро
            понять, что происходит и&nbsp;где требуется внимание.
          </p>
        </div>
        <div className="flex flex-col gap-[12px] items-center lg:items-start w-full max-w-[416px]">
          <p className="font-normal text-[16px] lg:text-[22px] text-[#6788ec] leading-[1.2] text-center lg:text-left">
            Согласуйте, отслеживайте статусы и получайте уведомления
          </p>
          <div className="flex gap-[8px] w-full justify-center lg:justify-start">
            <div className="bg-[#eff1f8] flex gap-[8px] items-center p-[12px] rounded-[16px]">
              <div className="flex flex-col gap-[2px] items-start justify-end">
                <p className="font-normal text-[14px] text-[#909abb] leading-[16px]">Загрузить в&nbsp;</p>
                <p className="font-medium text-[16px] text-[#2e3345] leading-[18px]">App Store</p>
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={imgAppStore} alt="App Store" className="size-[36px]" />
            </div>
            <div className="bg-[#eff1f8] flex gap-[8px] items-center p-[12px] rounded-[16px]">
              <div className="flex flex-col gap-[2px] items-start justify-end">
                <p className="font-normal text-[14px] text-[#909abb] leading-[16px]">Доступно в&nbsp;</p>
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
