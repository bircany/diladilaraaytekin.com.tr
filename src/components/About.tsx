import { useState } from "react";
import { Check, GraduationCap, MessageCircle, Award, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const principles = ["Bireysel Yaklaşım", "Psikolojik Esneklik", "Akademik Takip", "Kabul ve Adanmışlık", "Gizlilik ve Güven", "Değer Odaklı Yaşam"];

const certifications = [
  { category: "Kabul ve Adanmışlık (ACT) Yaklaşımı", items: ["ACT – Temel Seviye Eğitimi", "ACT – Orta Seviye Eğitimi", "ACT – İleri Düzey Eğitimi", "ACT Uygulamalı Süpervizyon Eğitimi", "Süreç Odaklı Beceri ve ACT Eğitimi"] },
  { category: "Dikkat ve Performans Programları", items: ["MOXO Dikkat Performans Testi Uygulayıcı Eğitimi", "Attentioner Dikkat Programı Eğitimi"] },
  { category: "Psikolojik Değerlendirme & Projektif Testler", items: ["WISC-R Zeka Testi Eğitimi", "MMPI – Minnesota Çok Yönlü Kişilik Envanteri Eğitimi", "C.A.T. ve Louisa Duss Projektif Test Eğitimi", "TAT – Tematik Algı Testi Eğitimi"] },
  { category: "Diğer Eğitimler", items: ["Aile Danışmanlığı Uygulayıcı Eğitimi", "Mindfulness Temelli Psikolojik Danışma Beceri Eğitimi", "1. Modül Bilişsel Davranışçı Temelli Psikolojik Danışma Beceri Eğitimi", "Kısa Süreli Çözüm Odaklı Danışmanlık Uygulayıcı Eğitimi", "Kariyer Danışmanlığı ve Psikoeğitim Programları", "Temel Spor Psikolojisi Eğitimi", "Proje Hazırlama ve Proje Yönetimi Eğitimi"] }
];

const About = () => {
  const [showCerts, setShowCerts] = useState(false);

  return (
    <section id="about" className="section-shell overflow-hidden bg-secondary/35">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sol Kolon - Görsel ve Kısa Bilgi */}
          <div className="space-y-6 lg:sticky lg:top-28 reveal-left">
            <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/40 shadow-card backdrop-blur-sm aspect-[3/4] w-full max-w-[420px] mx-auto lg:mx-0">
              <img
                src="/2.jpg"
                alt="Dila Dilara Aytekin"
                className="h-full w-full object-cover object-[center_65%] transition-transform duration-700 origin-[50%_65%] scale-[1.7] hover:scale-[1.78]"
                loading="lazy"
              />
              <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/80 p-4 shadow-soft backdrop-blur-md flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <span className="block text-[10px] font-bold uppercase tracking-wider text-primary-dark">Lisans Eğitimi</span>
                  <h4 className="font-heading text-sm font-bold text-foreground">Ondokuz Mayıs Üniversitesi</h4>
                  <p className="text-[11px] text-foreground/75">Rehberlik ve Psikolojik Danışmanlık</p>
                </div>
              </div>
            </div>
            
          </div>

          {/* Sağ Kolon - Biyografi ve Sertifikalar */}
          <div className="space-y-6">
            <div className="reveal">
              <p className="section-kicker">Hakkımda</p>
              <h2 className="section-title text-gradient-dark">Bütüncül ve değer odaklı psikolojik destek.</h2>
            </div>
            
            <div className="space-y-4 text-base leading-relaxed text-foreground/80 sm:text-lg">
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 reveal-right [animation-delay:150ms]">
                <p>
                  Merhaba, ben <strong>Dila Dilara Aytekin</strong>. 2023 yılında Ondokuz Mayıs Üniversitesi Psikolojik Danışmanlık ve Rehberlik Bölümü’nden mezun oldum. Lisans dönemim boyunca uluslararası stajlar, sosyal sorumluluk projeleri ve akademik çalışmalarla kendimi çok yönlü geliştirme fırsatı buldum. Psikolojik danışman ve eğitim danışmanı olarak ergenler, yetişkinler ve sınav sürecindeki öğrencilerle çalışıyorum. Şu an aktif olarak <strong>Çağ Psikoloji</strong> bünyesinde ergen ve yetişkin bireylerle çalışmalarımı sürdürüyorum.
                </p>
              </div>
              
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 reveal-right [animation-delay:300ms]">
                <p>
                  Mesleki yaklaşımımın merkezinde, bireyin yalnızca yaşadığı zorlukları veya semptomları azaltmak değil; kendisi için anlamlı, değerli ve değerleri doğrultusunda bir yaşam inşa edebilmesini desteklemek yer alıyor. Özellikle <strong>Kabul ve Adanmışlık (ACT)</strong> yaklaşımı ve mindfulness tabanlı yaklaşımları danışmanlık süreçlerime entegre ederek, bireylerin zorlayıcı duygu ve düşünceler karşısında psikolojik esneklik geliştirmelerine yardımcı oluyorum.
                </p>
              </div>
              
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 reveal-right [animation-delay:450ms]">
                <p>
                  Özellikle YKS ve LGS hazırlık sürecindeki öğrencilerle yürüttüğüm çalışmalarda, akademik performans ile psikolojik iyi oluşun birbirinden ayrı düşünülemeyeceğine inanıyorum. Sınav dönemindeki kaygı, motivasyon düşüşü, erteleme davranışı, dikkat sorunları ve öz güven dalgalanmalarının akademik başarıyı doğrudan etkilediğini gözlemliyorum. Bu nedenle danışmanlık sürecini yalnızca bir “çalışma planı” olarak değil; akademik takip, deneme analizi ve hedef belirleme gibi süreçlerin yanı sıra stres yönetimi ve duygu düzenleme becerilerinin birlikte ele alındığı bütüncül bir yapı olarak yürütüyorum.
                </p>
              </div>
              
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 reveal-right [animation-delay:600ms]">
                <p>
                  Toplumsal fayda odaklı projelerde üstlendiğim koordinasyon görevleri ve aldığım güncel eğitimlerle kendimi sürekli yenilemeye; her danışanımın ihtiyaçlarına uygun, etik ilkelere bağlı ve kişiselleştirilmiş bir süreç sunmaya özen gösteriyorum. Kendinizle daha sağlıklı bir ilişki kurmak ve yaşamınızda değer odaklı, anlamlı adımlar atmak isterseniz, bu yolculukta size eşlik etmekten memnuniyet duyarım.
                </p>
              </div>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {principles.map((principle) => (
                <div key={principle} className="flex items-center gap-3 rounded-2xl border border-primary/10 bg-white/60 px-4 py-3.5 transition-all duration-300 hover:border-primary/30 hover:bg-white/90">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-sm font-semibold text-foreground/80">{principle}</span>
                </div>
              ))}
            </div>

            {/* Eğitimler & Sertifikalar Akordeonu */}
            <div className="mt-8">
              <button
                onClick={() => setShowCerts(!showCerts)}
                className="flex w-full items-center justify-between rounded-2xl border border-primary/20 bg-white/50 p-4 transition-all hover:bg-white/80"
              >
                <span className="flex items-center gap-3 font-heading text-base font-bold text-foreground">
                  <Award className="h-5 w-5 text-primary-dark" />
                  Aldığım Eğitimler ve Sertifikalar
                </span>
                {showCerts ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
              </button>

              {showCerts && (
                <div className="mt-3 space-y-4 rounded-2xl border border-primary/10 bg-white/40 p-5 animate-blur-in">
                  {certifications.map((category) => (
                    <div key={category.category} className="space-y-2">
                      <h4 className="font-heading text-sm font-bold text-primary-dark border-b border-primary/10 pb-1">{category.category}</h4>
                      <ul className="grid gap-1 sm:grid-cols-2 text-xs text-foreground/75 leading-relaxed pl-2 list-disc list-inside">
                        {category.items.map((item) => (
                          <li key={item} className="list-item">{item}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <a
                href="https://wa.me/905312353886"
                target="_blank"
                rel="noreferrer"
                onClick={() => trackContactConversion("whatsapp", "about_cta")}
                className="w-full sm:w-auto"
              >
                <Button className="btn-cta inline-flex w-full items-center justify-center gap-2 py-6 px-7 text-sm sm:w-auto">
                  <MessageCircle className="h-5 w-5" /> WhatsApp ile Randevu Al
                </Button>
              </a>
              <p className="text-sm font-semibold text-muted-foreground">Samsun Atakum • Online & Yüz Yüze</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
