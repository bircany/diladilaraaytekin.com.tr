import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const contactItems = [
  { icon: Phone, label: "Telefon", value: "0 (507) 031 40 41", href: "tel:+905070314041" },
  { icon: Mail, label: "E-posta", value: "bogualp.cagatay@hotmail.com", href: "mailto:bogualp.cagatay@hotmail.com" },
  { icon: MapPin, label: "Konum", value: "Altınordu / Ordu" },
];

const Contact = () => (
  <section id="contact" className="section-shell bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="contact-panel relative overflow-hidden rounded-[2.5rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16 animate-blur-in">
        <div className="relative grid items-center gap-12 lg:grid-cols-[1fr_.9fr]">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">İletişim</p>
            <h2 className="mb-6 max-w-xl text-3xl font-bold leading-tight text-gradient-dark sm:text-5xl">Kendinize ayıracağınız bir görüşmeyle başlayın.</h2>
            <p className="max-w-xl text-base leading-7 text-foreground/65 sm:text-lg">Danışmanlık süreci ve randevu planlaması hakkında bilgi almak için telefon, e-posta veya WhatsApp üzerinden iletişime geçebilirsiniz.</p>
            <a href="https://wa.me/905070314041" target="_blank" rel="noreferrer" className="mt-8 inline-block">
              <Button size="lg" className="btn-cta" onClick={() => trackContactConversion("whatsapp", "contact_cta")}><MessageCircle className="mr-2 h-5 w-5" />WhatsApp'tan Yazın</Button>
            </a>
          </div>

          <div className="space-y-6">
            {contactItems.map((item) => {
              const content = (
                <div className="group flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 p-4 transition-all hover:-translate-y-0.5 hover:bg-white/85 sm:p-5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground"><item.icon className="h-5 w-5" /></span>
                  <span className="min-w-0">
                    <span className="block text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">{item.label}</span>
                    <span className="mt-1 block break-words font-semibold text-foreground">{item.value}</span>
                  </span>
                </div>
              );
              const conversionType = item.label === "Telefon" ? "phone" : item.label === "E-posta" ? "email" : null;
              return (
                <div key={item.label} className="w-full">
                  {item.href ? (
                    <a href={item.href} className="block" onClick={() => conversionType && trackContactConversion(conversionType, "contact_card")}>
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
