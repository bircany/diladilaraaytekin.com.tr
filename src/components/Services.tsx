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
          <div className="section-copy mx-auto lg:mx-0 space-y-4">
            <p>Ergenlik döneminden yetişkinlik sürecine kadar uzanan yaşam yolculuğunda bireylerin karşılaştıkları duygusal, bilişsel ve ilişkisel zorluklarla çalışmaktadır. Danışanlarının kendilerini daha yakından tanımalarına, psikolojik esneklik kazanmalarına, yaşamlarındaki güçlüklerle daha etkili başa çıkabilmelerine ve psikolojik iyi oluşlarını desteklemelerine yönelik psikolojik danışmanlık hizmeti sunmaktadır.</p>
            <p>Çalışmalarında bireyin ihtiyaçlarını merkeze alan, güvenli ve destekleyici bir danışmanlık süreci yürütmekte; kaygı, stres, öz güven, yaşam geçişleri, ilişki sorunları ve duygusal güçlükler gibi çeşitli alanlarda destek sağlamaktadır.</p>
          </div>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Sol Kolon - Görsel (Mobil'de ilk, Desktop'ta ilk/sol) */}
          <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/40 shadow-card backdrop-blur-sm aspect-[3/4] w-full max-w-[420px] mx-auto lg:mx-0 order-1 lg:order-1 reveal-left">
            <img
              src="/3.jpg"
              alt="Psikolojik Danışmanlık - Dila Dilara Aytekin"
              className="h-full w-full object-cover object-[center_65%] transition-transform duration-700 origin-[50%_65%] scale-[1.7] hover:scale-[1.78]"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/80 p-4 shadow-soft backdrop-blur-md text-center">
              <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-primary-dark">Bireysel Görüşmeler</span>
              <h4 className="mt-0.5 font-heading text-base font-bold text-foreground">Ergen & Yetişkin</h4>
            </div>
          </div>

          {/* Sağ Kolon - Detaylar (Mobil'de ikinci, Desktop'ta ikinci/sağ) */}
          <div className="space-y-5 order-2 lg:order-2 reveal-right">
            <div className="space-y-4">
              {/* Kart 1: Yetişkin Danışmanlığı */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Yetişkin Danışmanlığı</h3>
                  <div className="mt-1.5 text-sm sm:text-base text-foreground/80 leading-relaxed space-y-3">
                    <p>Yaşamın farklı dönemlerinde bireyler; ilişkiler, kariyer, aile yaşamı ve kişisel gelişim alanlarında çeşitli psikolojik zorluklarla karşılaşabilmektedir. Bu zorluklar zaman zaman kişinin yaşam doyumunu, işlevselliğini and ruhsal iyi oluşunu etkileyebilmektedir.</p>
                    <p>Yetişkinlere yönelik psikolojik danışmanlık çalışmalarında kaygı, stres, öz güven sorunları, yaşam geçişleri, ilişki problemleri, duygusal yükler, karar verme süreçleri ve günlük yaşamda karşılaşılan psikolojik güçlükler gibi alanlarda destek sağlamaktadır. Danışmanlık sürecinde bireyin ihtiyaçlarını merkeze alan, güvenli ve destekleyici bir yaklaşım benimseyerek kişilerin psikolojik esneklik kazanmalarına, kendilerini daha yakından tanımalarına ve ruhsal iyi oluşlarını güçlendirmelerine eşlik etmektedir.</p>
                  </div>
                </div>
              </div>

              {/* Kart 2: Sınav Kaygısı ve Performans Süreçleri */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Sınav Kaygısı ve Performans Süreçleri</h3>
                  <div className="mt-1.5 text-sm sm:text-base text-foreground/80 leading-relaxed space-y-3">
                    <p>Ergenlik ve yetişkinlik döneminde akademik hedefler, sınavlar ve gelecek planları bireyler üzerinde yoğun bir baskı oluşturabilmektedir. Bu süreçte yalnızca akademik performans değil, öğrencinin psikolojik iyi oluşu, motivasyonu ve duygusal dayanıklılığı da başarı üzerinde önemli bir rol oynamaktadır.</p>
                    <p>Sınav sürecindeki öğrencilere yönelik eğitim danışmanlığı çalışmalarında hedef belirleme, etkili çalışma alışkanlıkları geliştirme, zaman yönetimi, motivasyonu sürdürme, sınav kaygısıyla baş etme ve akademik süreci planlama konularında destek sunmaktadır. Amaç; öğrencilerin yalnızca sınava değil, aynı zamanda bu sürecin duygusal ve psikolojik yüklerine de sağlıklı bir şekilde hazırlanabilmelerine yardımcı olmaktır.</p>
                  </div>
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
          <p className="section-kicker">Sınav Sürecinde Akademik ve Psikolojik Destek</p>
          <h2 className="section-title text-gradient-dark">Psikolojik ve Akademik Destek</h2>
          <p className="section-copy mx-auto lg:mx-0">Öğrenciye Özel Takip ve Danışmanlık</p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Sol Kolon - Detaylar (Mobil'de ikinci, Desktop'ta ilk/sol) */}
          <div className="space-y-5 order-2 lg:order-1 reveal-left">
            <div className="space-y-4">
              {/* Kart 1: Psikolojik Danışmanlık ve Psikolojik Destek */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <Heart className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Psikolojik Danışmanlık ve Psikolojik Destek</h3>
                  <span className="block text-xs sm:text-sm font-bold text-primary-dark uppercase tracking-wider mt-1">Sınav sürecinde duygusal iyi oluş, psikolojik esneklik ve içsel denge desteği</span>
                  <div className="mt-2.5 text-sm sm:text-base text-foreground/80 leading-relaxed space-y-3">
                    <p>LGS ve YKS hazırlık sürecinde öğrencinin yalnızca akademik performansı değil, aynı zamanda duygusal dünyası ve içsel süreçleri de bütüncül bir yaklaşımla ele alınmaktadır. Bu süreçte öğrencinin sınav kaygısı, stres yönetimi, motivasyon dalgalanmaları ve erteleme davranışlarıyla baş etmesine destek olunur.</p>
                    <p>Aynı zamanda odaklanma güçlükleri, hedef belirleme süreci ve özellikle psikolojik esneklik becerisinin geliştirilmesi üzerinde durulur. Öğrencinin zorlayıcı düşünce ve duygularla karşılaştığında onlarla mücadele etmek yerine onları daha sağlıklı bir şekilde yönetebilmesi ve süreci sürdürebilmesi hedeflenir. Böylece öğrenci yalnızca akademik olarak değil, duygusal olarak da daha dengeli ve işlevsel bir süreç deneyimler.</p>
                  </div>
                </div>
              </div>

              {/* Kart 2: Eğitim Danışmanlığı ve Akademik Takip */}
              <div className="rounded-2xl border border-white/50 bg-white/40 p-5 sm:p-6 shadow-soft backdrop-blur-sm transition-all duration-300 hover:bg-white/60 hover:border-primary/25 flex gap-4 items-start">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark">
                  <GraduationCap className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground">Eğitim Danışmanlığı ve Akademik Takip</h3>
                  <span className="block text-xs sm:text-sm font-bold text-primary-dark uppercase tracking-wider mt-1">Planlama, düzen ve sürdürülebilir çalışma sistemi</span>
                  <div className="mt-2.5 text-sm sm:text-base text-foreground/80 leading-relaxed space-y-3">
                    <p>LGS ve YKS hazırlık sürecindeki öğrenciler için bireyselleştirilmiş akademik takip ve eğitim danışmanlığı hizmeti sunulmaktadır. Bu süreçte öğrencinin hedeflerine uygun bir çalışma planı oluşturulur, haftalık ve günlük düzenin sürdürülebilir hale gelmesi desteklenir.</p>
                    <p>Deneme sınavı analizleri üzerinden eksik kazanımlar belirlenir ve zaman yönetimi becerileri geliştirilerek verimli çalışma alışkanlığı kazandırılır. Süreç boyunca düzenli takip ve geri bildirimlerle öğrencinin akademik gelişimi yakından izlenir. Temel amaç, öğrencinin kendi potansiyeline uygun, sistemli ve sürdürülebilir bir çalışma düzeni kurmasını sağlamaktır.</p>
                  </div>
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
              className="h-full w-full object-cover transition-transform duration-700 scale-[1.5] hover:scale-[1.58]"
              loading="lazy"
            />
            <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/80 p-4 shadow-soft backdrop-blur-md text-center">
              <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-primary-dark">Sınav Süreci</span>
              <h4 className="mt-0.5 font-heading text-base font-bold text-foreground">Akademik & Psikolojik Destek</h4>
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
            <h4 className="font-heading text-lg font-bold text-foreground">Randevu Oluşturmak ve Bilgi Almak İçin</h4>
            <p className="mt-1 text-sm text-foreground/60">Danışmanlık süreçlerinin sıklığı ve içeriği, ihtiyacınıza uygun şekilde kişiye özel planlanır.</p>
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
