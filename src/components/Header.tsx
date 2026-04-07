const logoUrl = "/figma-assets/396e3568-a5f2-4c8c-9899-cdf4081d4cfa.svg";

const navItems = [
  "Отраслевые решения",
  "Интеграции",
  "Приложение",
  "Отзывы",
];

type HeaderProps = {
  onOpenDemo: () => void;
};

export default function Header({ onOpenDemo }: HeaderProps) {
  return (
    <header className="backdrop-blur-[12px] bg-[rgba(255,255,255,0.75)] relative px-[95px] py-4 lg:py-6 sticky top-0 z-50 w-full">
      <div className="flex items-center gap-4 w-full">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoUrl}
          alt="Planeta ERP"
          className="h-[40px] w-auto shrink-0"
          style={{ aspectRatio: "300/75" }}
        />

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-14 text-center absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="font-medium text-[16px] text-[#2e3345] whitespace-nowrap transition-all duration-200 hover:text-[#6788ec] hover:-translate-y-px"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="ml-auto hidden sm:flex gap-2 items-center shrink-0">
          <button className="backdrop-blur-[3px] border-[1.5px] border-[#e9edf4] px-4 py-2 lg:px-6 lg:py-3 rounded-[24px] font-medium text-[14px] text-[#2e3345] whitespace-nowrap transition-all duration-200 hover:bg-[#f3f7ff] hover:border-[#c4d3ef] hover:-translate-y-[2px] hover:shadow-[0px_10px_20px_rgba(103,136,236,0.16)] active:translate-y-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40">
            Войти
          </button>
          <button
            type="button"
            onClick={onOpenDemo}
            className="bg-[#6788ec] px-4 py-2 lg:px-6 lg:py-3 rounded-[24px] font-medium text-[14px] text-white whitespace-nowrap transition-all duration-200 hover:bg-[#4f74e2] hover:-translate-y-[2px] hover:shadow-[0px_12px_24px_rgba(103,136,236,0.32)] active:translate-y-0 active:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6788ec]/40"
          >
            Демо-показ
          </button>
        </div>

        <button
          className="ml-auto sm:hidden inline-flex items-center justify-center rounded-[12px] border border-[#e9edf4] p-2 text-[#2e3345]"
          aria-label="Открыть меню"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M4 7h16M4 12h16M4 17h16" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
}
