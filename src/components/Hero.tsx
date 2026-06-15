import { ArrowDown, ArrowUpRight, Instagram, MapPin, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const Hero = () => (
  <section id="hero" className="hero-gradient relative min-h-screen overflow-hidden pt-36 sm:pt-40 lg:pt-44">
    <div className="hero-orb hero-orb-one" />
    <div className="hero-orb hero-orb-two" />
    <div className="relative mx-auto grid min-h-[calc(100vh-6rem)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-24">
      <div className="text-center lg:text-left order-2 lg:order-1">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-primary/25 bg-white/55 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-primary-dark shadow-soft backdrop-blur animate-blur-in">
          <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
          Samsun | Online & Yüz Yüze
        </div>
        <p className="mb-3 font-heading text-base font-semibold text-primary-dark sm:text-lg animate-blur-in [animation-delay:100ms]">Psikolojik Danışman | Eğitim Danışmanı</p>
        <h1 className="mb-7 text-5xl font-bold leading-[1.25] text-foreground sm:text-6xl lg:text-7xl animate-blur-in [animation-delay:200ms] py-1">
          <span className="text-gradient-dark py-1 px-1 inline-block">Dila Dilara</span>
          <span className="mt-1 block text-gradient-primary py-1 px-1">Aytekin</span>
        </h1>
        <p className="mx-auto mb-9 max-w-2xl text-base leading-8 text-foreground/70 sm:text-lg lg:mx-0 animate-blur-in [animation-delay:300ms]">
          Ergenler, yetişkinler ve sınav sürecindeki öğrenciler için psikolojik danışmanlık, eğitim danışmanlığı ve atölye çalışmaları ile psikolojik esneklik ve akademik gelişimi birlikte destekleyen bütüncül bir yaklaşım sunuyorum.
        </p>
        <div className="flex flex-col justify-center gap-3 sm:flex-row lg:justify-start animate-blur-in [animation-delay:400ms] flex-wrap">
          <a href="https://wa.me/905312353886" target="_blank" rel="noreferrer" onClick={() => trackContactConversion("whatsapp", "hero")}>
            <Button size="lg" className="btn-cta w-full sm:w-auto">
              <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp ile İletişim
            </Button>
          </a>
          <a href="https://www.instagram.com/psk.dan.diladilaraytekin?igsh=MXY0NHdxbTlua2NzaQ==" target="_blank" rel="noreferrer" onClick={() => trackContactConversion("instagram", "hero")}>
            <Button variant="outline" size="lg" className="btn-outline-cta w-full sm:w-auto border-accent/30 hover:border-accent hover:text-accent-dark">
              <Instagram className="mr-2 h-5 w-5 text-accent" /> Instagram'da Takip Et
            </Button>
          </a>
          <a href="#about">
            <Button variant="outline" size="lg" className="btn-outline-cta w-full sm:w-auto">
              Daha Fazla Bilgi <ArrowUpRight className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
      </div>

      <div className="relative mx-auto w-full max-w-[390px] animate-blur-in [animation-delay:350ms] lg:mr-0 order-1 lg:order-2">
        {/* Background glow orbs behind the image */}
        <div className="absolute -left-10 -top-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute -right-10 -bottom-10 h-64 w-64 rounded-full bg-primary/15 blur-3xl" />
        
        {/* Stylized photo frame */}
        <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/40 shadow-card backdrop-blur-sm aspect-[3/4.2] w-full">
          <img
            src="/1.jpg"
            alt="Psikolojik Danışman Dila Dilara Aytekin"
            className="h-full w-full object-cover transition-transform duration-700 scale-[1.12] hover:scale-[1.18]"
            loading="eager"
          />
          {/* Glassmorphic caption overlay at the bottom */}
          <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/75 p-4 shadow-soft backdrop-blur-md text-center">
            <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-primary-dark">Psikolojik Danışman & Eğitim Danışmanı</span>
            <h4 className="mt-0.5 font-heading text-base font-bold text-foreground">Dila Dilara Aytekin</h4>
          </div>
        </div>
      </div>
    </div>
    <a href="#about" className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 text-primary-dark lg:block" aria-label="Aşağı kaydır">
      <ArrowDown className="animate-bounce" />
    </a>
  </section>
);

export default Hero;
