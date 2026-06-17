import React, { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Instagram, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";
import { toast } from "sonner";

const contactItems = [
  { icon: Phone, label: "Telefon", value: "0 (531) 235 38 86", href: "tel:+905312353886" },
  { icon: MessageCircle, label: "WhatsApp", value: "0 (531) 235 38 86", href: "https://wa.me/905312353886" },
  { icon: Instagram, label: "Instagram", value: "@psk.dan.diladilaraytekin", href: "https://www.instagram.com/psk.dan.diladilaraytekin?igsh=MXY0NHdxbTlua2NzaQ==" },
  { icon: Mail, label: "E-posta", value: "psk.dan.diladilaraytekin@gmail.com", href: "mailto:psk.dan.diladilaraytekin@gmail.com" },
  { icon: MapPin, label: "Adres (Çağ Psikoloji)", value: "Körfez Mahallesi Atakum Bulvarı No:21/11 A Blok Kat:1 Daire:11 Atakum / Samsun" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "Ergen Danışmanlığı",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error("Lütfen adınızı ve telefon numaranızı doldurun.");
      return;
    }

    trackContactConversion("form", "contact_section");
    
    // Construct WhatsApp message
    const waText = `Merhaba Dila Hanım, web sitenizden ulaşıyorum:

*Ad Soyad:* ${formData.name}
*Telefon:* ${formData.phone}
*Seçilen Hizmet:* ${formData.service}
*Mesaj:* ${formData.message || "Belirtilmedi"}`;
    
    const waUrl = `https://wa.me/905312353886?text=${encodeURIComponent(waText)}`;
    
    toast.success("Randevu talebiniz oluşturuldu, WhatsApp'a yönlendiriliyorsunuz...");
    
    setTimeout(() => {
      window.open(waUrl, "_blank");
    }, 1000);
  };

  return (
    <section id="contact" className="section-shell bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="contact-panel relative overflow-hidden rounded-[2.5rem] px-6 py-12 sm:px-12 lg:px-16 lg:py-16">
          <div className="relative grid items-start gap-12 lg:grid-cols-[1fr_1.1fr]">
            {/* Sol Kolon - İletişim Bilgileri */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div>
                  <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">İletişim & Randevu</p>
                  <h2 className="mb-6 max-w-xl text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                    <span className="text-gradient-dark pb-1 px-1 inline-block">Kendinize ayıracağınız bir</span>
                    <span className="text-gradient-dark pb-1 px-1 block sm:inline-block">görüşmeyle başlayın.</span>
                  </h2>
                  <p className="max-w-xl text-sm leading-relaxed text-foreground/75 sm:text-base">
                    Danışmanlık süreci, atölye takvimi ve randevu planlaması hakkında bilgi almak için telefon, Instagram veya WhatsApp üzerinden doğrudan iletişime geçebilir ya da yandaki formu doldurabilirsiniz.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactItems.map((item) => {
                    const content = (
                      <div className="group flex items-center gap-4 rounded-2xl border border-white/70 bg-white/60 p-4 transition-all hover:-translate-y-0.5 hover:bg-white/85 sm:p-5">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
                          <item.icon className="h-5 w-5" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[10px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{item.label}</span>
                          <span className="mt-0.5 block break-words font-semibold text-foreground text-sm sm:text-base">{item.value}</span>
                        </span>
                      </div>
                    );
                    const conversionType = item.label === "Telefon" ? "phone" : item.label === "WhatsApp" ? "whatsapp" : item.label === "Instagram" ? "instagram" : item.label === "E-posta" ? "email" : null;
                    return (
                      <div key={item.label} className="w-full">
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noreferrer" className="block" onClick={() => conversionType && trackContactConversion(conversionType, "contact_card")}>
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

            {/* Sağ Kolon - Randevu ve İletişim Formu */}
            <div className="rounded-[2rem] border border-white/60 bg-white/40 p-6 sm:p-8 shadow-soft backdrop-blur-sm">
              <h3 className="font-heading text-xl font-bold text-foreground mb-6">Randevu & Bilgi Formu</h3>
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-1.5">Adınız Soyadınız</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Adınızı ve soyadınızı yazın"
                    className="w-full rounded-xl border border-primary/20 bg-white/80 px-4 py-3 text-sm placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-1.5">Telefon Numaranız</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="05xx xxx xx xx"
                    className="w-full rounded-xl border border-primary/20 bg-white/80 px-4 py-3 text-sm placeholder:text-foreground/40 focus:border-primary focus:outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="service" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-1.5">İlgilendiğiniz Alan</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-primary/20 bg-white/80 px-4 py-3 text-sm focus:border-primary focus:outline-none appearance-none"
                  >
                    <option value="Ergen Danışmanlığı">Ergen Danışmanlığı</option>
                    <option value="Yetişkin Danışmanlığı">Yetişkin Danışmanlığı</option>
                    <option value="YKS Eğitim Danışmanlığı">YKS Eğitim Danışmanlığı</option>
                    <option value="LGS Eğitim Danışmanlığı">LGS Eğitim Danışmanlığı</option>
                    <option value="Sınav Kaygısı ve Stres Yönetimi">Sınav Kaygısı ve Stres Yönetimi</option>
                    <option value="Atölye ve Grup Çalışmaları">Atölye ve Grup Çalışmaları</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-foreground/80 uppercase tracking-wider mb-1.5">Mesajınız (Opsiyonel)</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Eklemek istediğiniz notu yazın..."
                    className="w-full rounded-xl border border-primary/20 bg-white/80 px-4 py-3 text-sm placeholder:text-foreground/40 focus:border-primary focus:outline-none resize-none"
                  />
                </div>
                <Button type="submit" className="btn-cta w-full py-6 flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" /> Formu WhatsApp ile Gönder
                </Button>
              </form>
            </div>
          </div>

          {/* En Son - Google Maps Haritası */}
          <div className="mt-12 overflow-hidden rounded-[2rem] border border-white/60 bg-white/40 p-3 shadow-soft">
            <div className="mb-3 px-3 flex flex-wrap justify-between items-center gap-2">
              <div>
                <h4 className="font-heading text-base font-bold text-foreground">Çağ Psikoloji (Samsun Atakum)</h4>
                <p className="text-xs text-foreground/60">Körfez Mahallesi Atakum Bulvarı No:21/11 A Blok Kat:1 Daire:11 Atakum / Samsun</p>
              </div>
              <a 
                href="https://www.google.com/maps/place/%C3%87a%C4%9F+Psikoloji/@41.3713443,36.2252439,17z/data=!3m1!4b1!4m6!3m5!1s0x40887ff283c267b9:0xe7dc52a28ec21bc9!8m2!3d41.3713444!4d36.2301094!16s%2Fg%2F11rq12jvyf" 
                target="_blank" 
                rel="noreferrer" 
                className="text-xs font-bold text-primary-dark hover:underline"
              >
                Google Haritalar'da Aç ↗
              </a>
            </div>
            <iframe
              src="https://maps.google.com/maps?q=%C3%87a%C4%9F%20Psikoloji%20Atakum%20Samsun&t=&z=16&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="350"
              style={{ border: 0, borderRadius: "1.5rem" }}
              allowFullScreen={true}
              loading="lazy"
              title="Çağ Psikoloji Samsun Atakum Google Haritası"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
