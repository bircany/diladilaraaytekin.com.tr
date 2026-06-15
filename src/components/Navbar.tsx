import { useState } from "react";
import { Menu, Phone, X, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const navItems = [
  { name: "Ana Sayfa", href: "#hero" },
  { name: "Hakkımda", href: "#about" },
  { name: "Psikolojik Danışmanlık", href: "#psychological" },
  { name: "Eğitim Danışmanlığı", href: "#educational" },
  { name: "Atölyeler & Grup", href: "#workshops" },
  { name: "Yaklaşımım", href: "#approach" },
  { name: "Yazılarım", href: "#articles" },
  { name: "İletişim", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-primary/10 bg-background/90 backdrop-blur-xl">
      {/* Sliding Marquee Top Announcement Bar */}
      <a
        href="https://wa.me/905312353886"
        target="_blank"
        rel="noreferrer"
        onClick={() => trackContactConversion("whatsapp", "top_marquee")}
        className="block bg-primary/20 py-2.5 text-center text-xs font-bold text-primary-dark overflow-hidden border-b border-primary/10 hover:bg-primary/30 transition-colors cursor-pointer"
      >
        <div className="animate-marquee whitespace-nowrap inline-block">
          <span className="inline-block mx-4">🎉 Samsun Atakum'da Yüz Yüze ve Online Danışmanlık • Detaylı Bilgi ve Randevu İçin Hemen WhatsApp'tan Yazın veya Arayın: <b>0 (531) 235 38 86</b></span>
          <span className="inline-block mx-4">🎉 Samsun Atakum'da Yüz Yüze ve Online Danışmanlık • Detaylı Bilgi ve Randevu İçin Hemen WhatsApp'tan Yazın veya Arayın: <b>0 (531) 235 38 86</b></span>
        </div>
      </a>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">
        <a href="#hero" className="group block" aria-label="Ana sayfa">
          <span className="block font-heading text-base sm:text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary-dark">Dila Dilara Aytekin</span>
          <span className="block text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">Psikolojik Danışman | Eğitim Danışmanı</span>
        </a>

        <div className="hidden items-center gap-2.5 xl:gap-5 xl:flex">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} className="text-xs xl:text-[13px] font-bold tracking-wide text-foreground/75 transition-colors hover:text-primary-dark whitespace-nowrap">
              {item.name}
            </a>
          ))}
        </div>

        <div className="hidden xl:flex items-center gap-2 xl:gap-3 shrink-0">
          <a 
            href="https://www.instagram.com/psk.dan.diladilaraytekin?igsh=MXY0NHdxbTlua2NzaQ==" 
            target="_blank" 
            rel="noreferrer" 
            className="flex h-10 w-10 items-center justify-center rounded-full border border-primary/20 bg-white/50 text-foreground transition-all hover:bg-primary hover:text-white"
            onClick={() => trackContactConversion("instagram", "navbar_desktop")}
            title="Instagram Profilim"
          >
            <Instagram className="h-5 w-5 text-primary-dark hover:text-inherit" />
          </a>
          <a href="tel:+905312353886" onClick={() => trackContactConversion("phone", "navbar_desktop")} className="shrink-0">
            <Button size="sm" className="btn-cta text-xs">
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              Randevu Al
            </Button>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen((value) => !value)}
          className="rounded-full p-2 text-foreground xl:hidden"
          aria-label="Menüyü aç veya kapat"
          aria-expanded={isOpen}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-primary/10 bg-background px-4 pb-5 pt-3 xl:hidden">
          {navItems.map((item) => (
            <a key={item.name} href={item.href} onClick={() => setIsOpen(false)} className="block rounded-xl px-3 py-3 font-medium text-foreground hover:bg-secondary">
              {item.name}
            </a>
          ))}
          <div className="mt-4 flex gap-2">
            <a
              href="https://www.instagram.com/psk.dan.diladilaraytekin?igsh=MXY0NHdxbTlua2NzaQ=="
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-xl border border-primary/20 bg-white/50 px-4 py-3 text-sm font-semibold text-foreground w-1/2"
              onClick={() => trackContactConversion("instagram", "navbar_mobile")}
            >
              <Instagram className="h-4 w-4 text-primary" /> Instagram
            </a>
            <a href="tel:+905312353886" className="w-1/2" onClick={() => trackContactConversion("phone", "navbar_mobile")}>
              <Button className="btn-cta w-full py-5"><Phone className="mr-2 h-4 w-4" />Randevu Al</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
