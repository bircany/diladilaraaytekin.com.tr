import { MessageCircle, Users, BookOpen, Heart, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

const workshopCategories = [
  {
    title: "YKS Atölyeleri",
    icon: BookOpen,
    desc: "YKS hazırlık sürecindeki öğrencilerin psikolojik esneliğini ve ders çalışma verimliliğini artıran grup çalışmaları.",
    items: [
      "Sınav kaygısı ile baş etme",
      "Motivasyon ve sürdürülebilir çalışma",
      "Deneme sınavı okuma becerisi",
      "Erteleme davranışı ile baş etme",
      "Hedef ve süreç yönetimi"
    ]
  },
  {
    title: "LGS Atölyeleri",
    icon: Users,
    desc: "LGS hazırlık sürecindeki ortaokul öğrencilerinin süreç yönetimi ve odaklanma becerilerini destekleyen atölyeler.",
    items: [
      "Ders çalışma alışkanlığı geliştirme",
      "Dikkat ve odaklanma becerileri",
      "Sınav sürecine psikolojik hazırlık",
      "Motivasyon geliştirme",
      "Süreçte aile iletişimi"
    ]
  },
  {
    title: "ACT ve Psikolojik Esneklik",
    icon: Heart,
    desc: "Zorlayıcı duygu ve düşüncelerle esnek bir ilişki kurarak değer odaklı bir yaşam yönü belirleme çalışmaları.",
    items: [
      "Düşüncelerle ilişkiyi yeniden kurma",
      "Kabul ve farkındalık çalışmaları",
      "Değerler üzerinden yön belirleme",
      "Psikolojik esneklik geliştirme",
      "İçsel süreçlerle çalışma"
    ]
  },
  {
    title: "Mindfulness ve Duygu Düzenleme",
    icon: Activity,
    desc: "Stres yönetimi, dikkat becerileri ve anda kalma pratikleri ile duygusal dengenin desteklenmesi.",
    items: [
      "Dikkat ve odaklanma becerileri",
      "Anda kalma (mindfulness) çalışmaları",
      "Stres ve gerginlik yönetimi",
      "Duygu farkındalığı",
      "Zihinsel sakinlik ve odak"
    ]
  }
];

const Workshops = () => (
  <section id="workshops" className="section-shell bg-background">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      {/* Başlık ve Tanıtım */}
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] mb-16">
        <div className="order-2 lg:order-1 reveal-left">
          <p className="section-kicker">Grup Çalışmaları</p>
          <h2 className="section-title text-gradient-dark">Atölyeler & Grup Çalışmaları</h2>
          <p className="section-copy">
            Atölye çalışmaları, bireysel danışmanlık sürecine ek olarak yürütülen yapılandırılmış grup çalışmalarından oluşur. Bu çalışmaların amacı, bireylerin hem kendi deneyimlerini fark etmeleri hem de ortak süreçler üzerinden öğrenme ve gelişim fırsatı elde etmeleridir.
          </p>
          <p className="mt-4 text-sm leading-relaxed text-foreground/70">
            Atölyeler; ergenler, genç yetişkinler ve sınav sürecindeki öğrenciler için farklı temalarda, dönemlik ve yapılandırılmış gruplarla gerçekleştirilir.
          </p>
        </div>
        
        {/* Atölye Görseli (5.PNG) */}
        <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/40 shadow-card backdrop-blur-sm aspect-[3/4] w-full max-w-[400px] mx-auto lg:mr-0 order-1 lg:order-2 reveal-right">
          <img
            src="/13.jpg"
            alt="Atölyeler ve Grup Çalışmaları - Dila Dilara Aytekin"
            className="h-full w-full object-cover transition-transform duration-700 scale-[1.22] hover:scale-[1.28]"
            loading="lazy"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/85 p-4 shadow-soft backdrop-blur-md text-center">
            <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-primary-dark">Grup Dinamiği</span>
            <h4 className="mt-0.5 font-heading text-base font-bold text-foreground">Etkileşimli Atölyeler</h4>
          </div>
        </div>
      </div>

      {/* Atölye Kartları Grid */}
      <div className="grid gap-6 sm:grid-cols-2">
        {workshopCategories.map((category) => (
          <article
            key={category.title}
            className="rounded-[2rem] border border-primary/10 bg-card p-6 sm:p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card flex flex-col justify-between reveal"
          >
            <div>
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary-dark">
                <category.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 font-heading text-xl font-bold text-foreground">{category.title}</h3>
              <p className="mb-6 text-sm text-foreground/60 leading-relaxed">{category.desc}</p>
              
              <div className="space-y-2.5">
                {category.items.map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary-dark">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                    </span>
                    <span className="text-xs font-semibold text-foreground/80 leading-tight">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* İletişim & Randevu Yönlendirmesi */}
      <div className="mt-12 text-center">
        <a
          href="https://wa.me/905312353886"
          target="_blank"
          rel="noreferrer"
          onClick={() => trackContactConversion("whatsapp", "workshops_cta")}
          className="inline-block"
        >
          <Button className="btn-cta py-6 px-8">
            <MessageCircle className="mr-2 h-5 w-5" /> Güncel Atölye Takvimi İçin Yazın
          </Button>
        </a>
      </div>
    </div>
  </section>
);

export default Workshops;
