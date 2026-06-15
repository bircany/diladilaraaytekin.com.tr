import { Check, MessageCircle, Heart, GraduationCap, ClipboardCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const pskTopics = ["Kaygı süreçleri", "Duygu düzenleme güçlükleri", "Öz güven sorunları", "Kimlik gelişimi", "Aile ve akran ilişkileri", "Akademik stres", "Motivasyon sorunları", "Gelecek kaygısı", "Mükemmeliyetçilik", "Erteleme davranışı", "Performans baskısı", "Sınav kaygısı"];

const ykslgsTopics = ["Kişiselleştirilmiş çalışma planları", "Haftalık birebir takip görüşmeleri", "Deneme sınavı analizleri", "Akademik performans değerlendirmesi", "Hedef belirleme ve takip", "Zaman yönetimi çalışmaları", "Verimli çalışma alışkanlıkları", "Dikkat ve odaklanma desteği", "Aile ile süreç iş birliği"];

const Services = () => (
  <div className="space-y-0">
    {/* Section 1: Psikolojik Danışmanlık */}
    <section id="psychological" className="section-shell bg-background border-b border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:text-left animate-blur-in">
          <p className="section-kicker">Hizmet Alanları</p>
          <h2 className="section-title text-gradient-dark">Psikolojik Danışmanlık</h2>
          <p className="section-copy mx-auto lg:mx-0">Ergen ve genç yetişkinlerin duygusal, sosyal ve gelişimsel zorluklarla baş etmelerini destekleyen danışmanlık hizmeti.</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sol Kolon - Görsel (Mobil'de ilk, Desktop'ta ilk/sol) */}
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/40 shadow-card backdrop-blur-sm aspect-[3/4] w-full max-w-[420px] mx-auto lg:mx-0 order-1 lg:order-1 reveal-left">
            <img
              src="/3.jpg"
              alt="Psikolojik Danışmanlık - Dila Dilara Aytekin"
              className="h-full w-full object-cover transition-transform duration-700 scale-[1.12] hover:scale-[1.18]"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/80 p-4 shadow-soft backdrop-blur-md text-center">
              <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-primary-dark">Bireysel Görüşmeler</span>
              <h4 className="mt-0.5 font-heading text-base font-bold text-foreground">Ergen & Genç Yetişkin</h4>
            </div>
          </div>

          {/* Sağ Kolon - Detaylar (Mobil'de ikinci, Desktop'ta ikinci/sağ) */}
          <div className="space-y-5 order-2 lg:order-2 reveal-right">
            <div className="space-y-4">
              {/* Kart 1: Ergen ve Genç Yetişkin Danışmanlığı */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">Ergen ve Genç Yetişkin Danışmanlığı</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    Ergenlik dönemi ve genç yetişkinlik sürecinde karşılaşılan yaşam geçişleri, kimlik gelişimi, gelecek kaygısı ve karar verme süreçleri üzerine odaklanan bireysel psikolojik danışmanlık görüşmeleridir.
                  </p>
                </div>
              </div>

              {/* Kart 2: Sınav Kaygısı ve Performans Süreçleri */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">Sınav Kaygısı ve Performans Süreçleri</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    Sınav dönemlerinde öğrencilerin yaşadığı kaygı, başarısızlık korkusu, mükemmeliyetçilik ve motivasyon kaybı gibi akademik performansı doğrudan etkileyen psikolojik faktörler üzerine çalışılır.
                  </p>
                </div>
              </div>
            </div>

            {/* Kart 3: Çalışılan Konular */}
            <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary-dark mb-3.5">Çalışılan Konular</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {pskTopics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2: Eğitim Danışmanlığı */}
    <section id="educational" className="section-shell bg-secondary/25">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center lg:text-left reveal">
          <p className="section-kicker">Akademik Takip</p>
          <h2 className="section-title text-gradient-dark">Eğitim Danışmanlığı</h2>
          <p className="section-copy mx-auto lg:mx-0">YKS ve LGS sürecindeki öğrencilerin akademik gelişimlerini ve süreç yönetimi becerilerini desteklemeye yönelik profesyonel takip çalışmaları.</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Sol Kolon - Detaylar (Mobil'de ikinci, Desktop'ta ilk/sol) */}
          <div className="space-y-5 order-2 lg:order-1 reveal-left">
            <div className="space-y-4">
              {/* Kart 1: YKS Eğitim Danışmanlığı */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <ClipboardCheck className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">YKS Eğitim Danışmanlığı</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    YKS hazırlık sürecindeki lise ve mezun grubu öğrenciler için kişiselleştirilmiş ders çalışma planlarının hazırlanması, haftalık deneme analizleri ve akademik hedef takibini içeren sistemli bir süreçtir.
                  </p>
                </div>
              </div>

              {/* Kart 2: LGS Eğitim Danışmanlığı */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base sm:text-lg font-bold text-foreground">LGS Eğitim Danışmanlığı</h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    LGS sürecindeki ortaokul öğrencilerinin verimli çalışma alışkanlıkları kazanması, dikkat ve odaklanma desteği, motivasyon takibi ve bu süreçte aile ile kurulan yakın iş birliğini kapsar.
                  </p>
                </div>
              </div>
            </div>

            {/* Kart 3: Süreç Kapsamında Neler Yapıyoruz? */}
            <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25">
              <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-primary-dark mb-3.5">Süreç Kapsamında Neler Yapıyoruz?</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2.5">
                {ykslgsTopics.map((topic) => (
                  <div key={topic} className="flex items-center gap-2.5 text-xs font-semibold text-foreground/80">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    <span>{topic}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sağ Kolon - Görsel (Mobil'de ilk, Desktop'ta ikinci/sağ) */}
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/40 shadow-card backdrop-blur-sm aspect-[3/4] w-full max-w-[420px] mx-auto lg:mx-0 order-1 lg:order-2 reveal-right">
            <img
              src="/4.jpg"
              alt="Eğitim Danışmanlığı - Dila Dilara Aytekin"
              className="h-full w-full object-cover transition-transform duration-700 scale-[1.12] hover:scale-[1.18]"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/80 p-4 shadow-soft backdrop-blur-md text-center">
              <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-primary-dark">Akademik Takip</span>
              <h4 className="mt-0.5 font-heading text-base font-bold text-foreground">YKS & LGS Süreçleri</h4>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Görüşme Bilgilendirme Banner */}
    <section className="bg-background py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 rounded-[2rem] border border-primary/10 bg-secondary/35 p-8 text-center sm:p-10 md:flex-row md:text-left">
          <div>
            <h4 className="font-heading text-lg font-bold text-foreground">Süreç ve Görüşme Planlaması</h4>
            <p className="mt-1 text-sm text-foreground/60">Görüşmelerimizin sıklığı ve içeriği, ihtiyacınıza uygun şekilde kişiye özel planlanır.</p>
          </div>
          <a
            href="https://wa.me/905312353886"
            target="_blank"
            rel="noreferrer"
            onClick={() => trackContactConversion("whatsapp", "services_cta")}
            className="w-full shrink-0 md:w-auto"
          >
            <Button className="btn-cta w-full md:w-auto py-6">
              <MessageCircle className="mr-2 h-5 w-5" /> Detaylı Bilgi & WhatsApp İletişim
            </Button>
          </a>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
