const logoUrl = "https://www.figma.com/api/mcp/asset/396e3568-a5f2-4c8c-9899-cdf4081d4cfa";

const navItems = [
  "Отраслевые решения",
  "Интеграции",
  "Приложение",
  "Отзывы",
];

export default function Header() {
  return (
    <header className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.01)] relative flex gap-[56px] items-center px-[95px] py-[24px] sticky top-0 z-50 w-full">
      {/* Logo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={logoUrl}
        alt="Planeta ERP"
        className="h-[40px] w-auto shrink-0"
        style={{ aspectRatio: "300/75" }}
      />

      {/* Nav */}
      <nav className="absolute left-1/2 -translate-x-1/2 flex gap-[56px] items-center text-center">
        {navItems.map((item) => (
          <a
            key={item}
            href="#"
            className="font-medium text-[16px] text-[#2e3345] whitespace-nowrap"
          >
            {item}
          </a>
        ))}
      </nav>

      {/* Buttons */}
      <div className="ml-auto flex gap-[8px] items-center shrink-0">
        <button className="backdrop-blur-[3px] border-[1.5px] border-[#e9edf4] px-[24px] py-[12px] rounded-[24px] font-medium text-[14px] text-[#2e3345] whitespace-nowrap">
          Войти
        </button>
        <button className="bg-[#6788ec] px-[24px] py-[12px] rounded-[24px] font-medium text-[14px] text-white whitespace-nowrap">
          Демо-показ
        </button>
      </div>
    </header>
  );
}
