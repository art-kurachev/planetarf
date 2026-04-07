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
      <section className="relative overflow-hidden pt-[56px] pb-[120px]">
        {/* Декоративные эллипсы */}
        <div className="absolute top-0 left-0 w-[1109px] h-[1109px] rounded-full bg-[#dbe7fb] opacity-15 blur-[160px] pointer-events-none" />
        <div className="absolute top-[-272px] right-0 w-[871px] h-[871px] rounded-full bg-[#dbe7fb] opacity-10 blur-[160px] pointer-events-none" />
        <Hero />
      </section>
      <section className="py-[120px]">
        <Integrations />
      </section>
      <section className="py-[120px]">
        <Features />
      </section>
      <section className="py-[120px]">
        <Testimonials />
      </section>
      <Footer />
    </main>
  );
}
