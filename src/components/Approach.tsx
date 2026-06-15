import { Sparkles, Brain, Compass, Eye } from "lucide-react";

const approaches = [
  {
    title: "Kabul ve Adanmışlık (ACT) Yaklaşımı",
    icon: Compass,
    desc: "Bireyin zorlayıcı düşünce ve duygularını ortadan kaldırmak veya bastırmak yerine, onlarla daha esnek bir ilişki kurmasını ve kendi yaşam değerleri doğrultusunda anlamlı adımlar atmasını hedefler."
  },
  {
    title: "Mindfulness Temelli Çalışmalar",
    icon: Sparkles,
    desc: "Şimdiki ana yargısız bir farkındalıkla odaklanmayı, dikkat, farkındalık ve zorlayıcı durumlar karşısında anda kalabilme becerilerini destekleyen bilimsel temelli uygulamalardır."
  },
  {
    title: "Attentioner Dikkat Geliştirme Programı",
    icon: Brain,
    desc: "7-18 yaş grubundaki çocuk ve ergenlerde odaklanma, sürdürülebilir dikkat, seçici dikkat ve bölünmüş dikkat becerilerini desteklemeye yönelik yapılandırılmış ve kanıta dayalı bir programdır."
  },
  {
    title: "MOXO Dikkat Performans Testi",
    icon: Eye,
    desc: "Dikkat, zamanlama, dürtüsellik ve hiperaktivite alanlarını çeldiriciler eşliğinde objektif olarak değerlendiren, bilgisayar tabanlı, uluslararası geçerliliğe sahip bir ölçme sistemidir."
  }
];

const Approach = () => (
  <section id="approach" className="section-shell bg-secondary/25">
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        
        {/* Sol Kolon - Yaklaşımlar Listesi */}
        <div className="space-y-8 order-2 lg:order-1 reveal-left">
          <div>
            <p className="section-kicker">Metodoloji</p>
            <h2 className="section-title text-gradient-dark">Yaklaşımım & Bilimsel Metotlar</h2>
            <p className="section-copy">
              Çalışmalarımda, bireyin ruhsal iyi oluşu ile akademik gelişimini birlikte destekleyen, etkililiği kanıtlanmış güncel yaklaşımlardan yararlanıyorum.
            </p>
          </div>

          <div className="space-y-6">
            {approaches.map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 rounded-2xl border border-primary/5 bg-white/50 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/20 hover:bg-white/80"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary-dark transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <item.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-base font-bold text-foreground">{item.title}</h3>
                  <p className="mt-1 text-sm text-foreground/60 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sağ Kolon - Görsel (6.jpg) */}
        <div className="relative overflow-hidden rounded-[2.5rem] border-4 border-white bg-white/40 shadow-card backdrop-blur-sm aspect-[3/4] w-full max-w-[400px] mx-auto lg:mr-0 order-1 lg:order-2 reveal-right">
          <img
            src="/6.jpg"
            alt="Yaklaşımım - Dila Dilara Aytekin"
            className="h-full w-full object-cover transition-transform duration-700 scale-[1.12] hover:scale-[1.18]"
            loading="lazy"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-[1.5rem] border border-white/40 bg-white/85 p-4 shadow-soft backdrop-blur-md text-center">
            <span className="block font-heading text-[10px] font-bold uppercase tracking-wider text-primary-dark">Danışmanlık Felsefesi</span>
            <h4 className="mt-0.5 font-heading text-base font-bold text-foreground">Psikolojik Esneklik</h4>
          </div>
        </div>

      </div>
    </div>
  </section>
);

export default Approach;
