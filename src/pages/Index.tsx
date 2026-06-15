import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Workshops from "@/components/Workshops";
import Approach from "@/components/Approach";
import FlexibilitySimulator from "@/components/FlexibilitySimulator";
import Articles from "@/components/Articles";
import Contact from "@/components/Contact";
import { Link } from "react-router-dom";

const Index = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -60px 0px",
        threshold: 0.08,
      }
    );

    const revealElements = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    revealElements.forEach((el) => observer.observe(el));

    return () => {
      revealElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
      
      {/* Vurucu Söz Bölümü */}
      <section className="bg-secondary/25 py-16 text-center animate-blur-in [animation-delay:450ms]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="relative py-8">
            <span className="absolute -top-8 left-1/2 -translate-x-1/2 font-heading text-9xl font-extrabold text-primary/15 select-none leading-none">“</span>
            <blockquote className="relative font-heading text-xl font-bold italic leading-relaxed text-primary-dark sm:text-2xl lg:text-3xl">
              “Zorlayıcı düşünceler, sınav kaygısı, motivasyon düşüklüğü ve geleceğe dair belirsizlikler… Bunların hepsi bir 'sorun' değil, birlikte çalışılabilecek insani deneyimlerdir. Amaç; duyguları ortadan kaldırmak değil, onlarla birlikte daha esnek, daha güçlü ve daha yönlü bir yaşam kurabilmektir.”
            </blockquote>
            <p className="mt-6 text-xs font-bold uppercase tracking-[0.25em] text-foreground/60">Psikolojik Danışman Dila Dilara Aytekin</p>
          </div>
        </div>
      </section>

      <About />
      <Services />
      <FlexibilitySimulator />
      <Workshops />
      <Approach />
      <Articles />
      <Contact />
    </main>
    <footer className="border-t border-primary/10 bg-foreground py-8 text-background">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 text-center text-sm sm:px-6 md:flex-row md:text-left lg:px-8">
        <p>© 2026 Psikolojik Danışman Dila Dilara Aytekin</p>
        <div className="flex flex-wrap items-center justify-center gap-6 text-background/60">
          <span>Atakum / Samsun</span>
          <a href="https://www.instagram.com/psk.dan.diladilaraytekin?igsh=MXY0NHdxbTlua2NzaQ==" target="_blank" rel="noreferrer" className="transition-colors hover:text-white">Instagram</a>
          <Link to="/gizlilik" className="transition-colors hover:text-white">Gizlilik</Link>
        </div>
      </div>
    </footer>
  </div>
  );
};

export default Index;
