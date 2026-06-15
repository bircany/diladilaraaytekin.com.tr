import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
  useEffect(() => {
    const previousTitle = document.title;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const previousDescription = description?.content;
    const previousCanonical = canonical?.href;
    document.title = "Gizlilik ve Çerez Politikası | Dila Dilara Aytekin";
    if (description) description.content = "Dila Dilara Aytekin web sitesi gizlilik, çerez ve Google Ads ölçüm bilgilendirmesi.";
    if (canonical) canonical.href = "https://diladilaraaytekin.com.tr/gizlilik";
    return () => {
      document.title = previousTitle;
      if (description && previousDescription) description.content = previousDescription;
      if (canonical && previousCanonical) canonical.href = previousCanonical;
    };
  }, []);

  return (
    <main className="min-h-screen bg-background px-4 py-16 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-3xl">
        <Link to="/" className="mb-10 inline-flex items-center gap-2 font-semibold text-primary-dark hover:underline"><ArrowLeft className="h-4 w-4" />Ana sayfaya dön</Link>
        <p className="section-kicker">Yasal Bilgilendirme</p>
        <h1 className="mb-8 text-4xl font-bold text-foreground sm:text-5xl">Gizlilik ve Çerez Politikası</h1>
        <div className="space-y-8 text-base leading-8 text-foreground/70">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">İletişim verileri</h2>
            <p>Sitedeki randevu ve bilgi formu aracılığıyla girdiğiniz veya telefon, WhatsApp ve e-posta üzerinden kendi isteğinizle paylaştığınız bilgiler yalnızca randevu talebinizi yanıtlamak, atölye bilgilendirmesi yapmak ve danışmanlık seanslarınızı planlamak amacıyla kullanılır.</p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Ölçüm ve reklam teknolojileri</h2>
            <p>Onay vermeniz halinde Google etiketi; site kullanımını, telefon bağlantısı ve WhatsApp düğmesi gibi iletişim etkileşimlerini ölçmek için kullanılabilir. Bu veriler Google Ads kampanyalarının performansını değerlendirmeye yardımcı olur. Onay vermediğinizde Google etiketi yüklenmez.</p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Çerez tercihi</h2>
            <p>Çerez seçiminiz tarayıcınızın yerel depolama alanında saklanır. Tarayıcı site verilerini temizleyerek tercihinizi sıfırlayabilirsiniz.</p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">Üçüncü taraf bağlantıları</h2>
            <p>WhatsApp ve e-posta bağlantıları ilgili üçüncü taraf hizmetlere yönlendirir. Bu hizmetlerin veri işleme uygulamaları kendi gizlilik politikalarına tabidir.</p>
          </section>
          <section>
            <h2 className="mb-3 text-2xl font-bold text-foreground">İletişim</h2>
            <p>Gizlilikle ilgili sorularınız için <a href="mailto:psk.dan.diladilaraytekin@gmail.com" className="font-semibold text-primary-dark underline">psk.dan.diladilaraytekin@gmail.com</a> adresinden iletişime geçebilirsiniz.</p>
          </section>
          <p className="border-t border-primary/15 pt-6 text-sm text-muted-foreground">Son güncelleme: 15 Haziran 2026</p>
        </div>
      </article>
    </main>
  );
};

export default Privacy;
