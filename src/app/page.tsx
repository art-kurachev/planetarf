import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Integrations from "@/components/Integrations";
import Features from "@/components/Features";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Header />
      {/* Hero с декоративным фоном */}
      <section className="relative overflow-visible pt-8 sm:pt-12 lg:pt-14 pb-14 sm:pb-20 lg:pb-28">
        {/* Декоративные эллипсы */}
        <div className="absolute top-0 left-0 w-[1109px] h-[1109px] rounded-full bg-[#dbe7fb] opacity-20 blur-[160px] pointer-events-none z-0" />
        <div className="absolute top-[-272px] right-0 w-[871px] h-[871px] rounded-full bg-[#dbe7fb] opacity-10 blur-[160px] pointer-events-none z-0" />
        <div className="relative z-10">
          <Hero />
        </div>
      </section>
      <section className="py-14 sm:py-20 lg:py-28">
        <Integrations />
      </section>
      <section className="py-14 sm:py-20 lg:py-28">
        <Features />
      </section>
      <section className="py-14 sm:py-20 lg:py-28">
        <Testimonials />
      </section>
      <Footer />
    </main>
  );
}
