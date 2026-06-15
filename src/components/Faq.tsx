import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { trackContactConversion } from "@/lib/googleTag";

const questions = [
  {
    question: "Hangi alanlarda psikolojik danışmanlık desteği sunuluyor?",
    answer: "Ergen ve yetişkin danışmanlığı, YKS/LGS eğitim danışmanlığı, sınav kaygısı ve stres yönetimi, ACT (Kabul ve Adanmışlık Terapisi), mindfulness temelli çalışmalar ile Attentioner Dikkat Programı ve MOXO Dikkat Testi alanlarında destek sunulmaktadır.",
  },
  {
    question: "İlk görüşme nasıl ilerliyor?",
    answer: "İlk görüşmede başvuru nedeniniz, ihtiyaçlarınız ve süreçten beklentileriniz ele alınır. Görüşmelerin kapsamı ve izlenecek yol, kişiye özgü biçimde birlikte planlanır.",
  },
  {
    question: "MOXO Dikkat Testi kimler için uygulanır?",
    answer: "MOXO; dikkat, zamanlama, dürtüsellik ve hareketlilik performansını değerlendirmeye yardımcı olan bilgisayar tabanlı bir testtir. Uygulamanın uygunluğu ön görüşmede değerlendirilir.",
  },
  {
    question: "Samsun'da yüz yüze görüşme için nasıl randevu alınır?",
    answer: "Samsun Atakum'daki (Çağ Psikoloji) görüşmeler veya online danışmanlık hizmeti için telefon veya WhatsApp üzerinden iletişime geçebilirsiniz. Uygun gün ve saat, karşılıklı olarak planlanır.",
  },
];

const Faq = () => (
  <section id="faq" className="section-shell bg-background">
    <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[.75fr_1.25fr] lg:px-8">
      <div className="animate-blur-in">
        <p className="section-kicker">Merak Edilenler</p>
        <h2 className="section-title text-gradient-dark">Danışmanlık süreci hakkında sık sorulan sorular.</h2>
        <p className="section-copy">Samsun'da psikolojik danışmanlık, dikkat değerlendirmesi ve randevu süreciyle ilgili temel bilgileri burada bulabilirsiniz.</p>
        
        {/* FAQ Sidebar CTA */}
        <div className="mt-8 rounded-2xl border border-primary/10 bg-secondary/35 p-6">
          <h4 className="font-heading text-base font-bold text-foreground">Aklınıza takılan başka bir konu mu var?</h4>
          <p className="mt-1 text-xs text-foreground/60">Süreç ve görüşme detayları hakkında bilgi edinmek için bize doğrudan sorabilirsiniz.</p>
          <a
            href="https://wa.me/905312353886"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContactConversion("whatsapp", "faq_cta")}
            className="mt-4 block w-full"
          >
            <Button size="sm" className="btn-cta w-full py-5 text-xs">
              <MessageCircle className="mr-2 h-4 w-4" /> Bize WhatsApp'tan Sorun
            </Button>
          </a>
        </div>
      </div>
      <Accordion type="single" collapsible className="space-y-3 animate-blur-in [animation-delay:150ms]">
        {questions.map((item, index) => (
          <AccordionItem key={item.question} value={`item-${index}`} className="rounded-2xl border border-primary/15 bg-white/65 px-5 shadow-soft transition-all duration-300 hover:border-primary/45">
            <AccordionTrigger className="text-left font-heading text-base font-bold text-foreground hover:no-underline sm:text-lg">{item.question}</AccordionTrigger>
            <AccordionContent className="pr-4 text-sm leading-7 text-foreground/65 sm:text-base">{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default Faq;
