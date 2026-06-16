import { useState, useEffect } from "react";
import { BookOpen, Download, Share2, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { trackContactConversion } from "@/lib/googleTag";

interface Article {
  id: string;
  title: string;
  excerpt: string;
  docUrl: string;
  imgUrl: string;
  readTime: string;
  paragraphs: string[];
}

const articles: Article[] = [
  {
    "id": "zihni-susturmak-mumkun-mu",
    "title": "Zihni Susturmak Mümkün mü",
    "excerpt": "Zihni susturmaya çalışmak, gökyüzündeki bulutları durdurmaya çalışmak gibidir. Savaşmadan, bastırmadan sadece fark etmek mümkün mü?",
    "docUrl": "/zihni-susturmak-mumkun-mu.docx",
    "imgUrl": "/7.jpg",
    "readTime": "3 dk okuma",
    "paragraphs": [
      "Zihni Susturmak Mümkün mü? (Ve Belki de Gereken Bu Değildir)",
      "“Zihnimi susturamıyorum…”\n “Düşünceler hiç durmuyor…”\n “Keşke aklımdaki her şeyi kapatıp sessiz kalabilsem…”",
      "Bu cümleler sana tanıdık geliyor mu? Eğer geliyorsa, bilmeni isterim ki bu deneyim çok insani. Zihnimiz, bizi korumaya çalışan bir anlatıcı gibi sürekli konuşur. Ama bazen sesi o kadar yükselir ki, bizim kendi sesimiz duyulmaz olur.",
      "Zihin Sessizleşmek Zorunda Değil",
      "Belki de en büyük yanılgı burada başlıyor: Zihnin susması gerektiğini sanmak. Ama zihni susturmaya çalışmak, gökyüzündeki bulutları durdurmaya çalışmak gibi.\nOysa ACT bize başka bir yol öneriyor:Savaşmadan, bastırmadan, kontrol etmeye çalışmadan… sadece fark etmek.",
      "Düşünceler orada olabilir.\n Ama onlar sen değilsin.\n Ve sen, düşündüklerinin çok daha ötesindesin.",
      "Zihinle Değil, Değerlerinle İlerlemek",
      "ACT yaklaşımı, “zihni sustur” demez. Onun yerine der ki:\n “Zihnin ne söylerse söylesin, sen yine de değerlerin yönünde hareket edebilirsin.”",
      "Örneğin:\n Zihnin “Yetersizsin!” diyebilir.\n Ama sen o an, cesaretini toplayıp yine de adım atabilirsin.\n İşte bu, gerçek özgürlüktür.\n Zihnin ne dediği değil, senin neyi seçtiğindir önemli olan.",
      "Savaş Değil, Alan Açmak",
      "Zihni susturmaya çalışmak çoğu zaman daha çok sıkışmaya neden olur. Oysa ACT’ın sunduğu yaklaşım başka bir şeydir: “Zihnim konuşabilir. Ben yine de kendi hayatıma yön verebilirim.” Bu güç, sakinlikten değil, esneklikten gelir. Ve bu esneklik; kendine nazikçe yaklaşmaktan doğar.",
      "Sen de Zihnini Susturamıyorsan…",
      "Merak etme.Susturmak zorunda değilsin.Sadece fark etmek, nazikçe eşlik etmek ve içsel gürültüye rağmen yaşamaya devam etmek bile çok şey değiştirir.",
      "Eğer zihnindeki sesler seni yoruyorsa, birlikte yeni bir yaklaşım geliştirebiliriz. Savaşmadan, bastırmadan…Sadece kendine bir alan açarak."
    ]
  },
  {
    "id": "act-ile-sefkat-gelistirme",
    "title": "ACT ile Şefkat Geliştirme: Kendine Yumuşakça Yaklaşmak",
    "excerpt": "Gerçek şefkat, önce kendine yöneltilen yumuşak bir bakıştır. ACT ile acıya alan açarak kendimize bir dost gibi yaklaşabiliriz.",
    "docUrl": "/act-ile-sefkat-gelistirme.docx",
    "imgUrl": "/revize.jpeg",
    "readTime": "4 dk okuma",
    "paragraphs": [
      "ACT ile Şefkat Geliştirme: Kendine Yumuşakça Yaklaşmak",
      "Hayatta hepimiz zaman zaman zor duygularla, ağır iç seslerle ve karmaşık düşüncelerle karşı karşıya kalırız. Bu zamanlarda en çok ihtiyaç duyduğumuz şey, çoğu zaman bir çözüm değil; bir yumuşama, bir anlayış, bir nefeslik alandır.",
      "İşte ACT da tam bu noktada devreye girer. Bu yaklaşım, acıya karşı savaşmak yerine ona nazikçe yaklaşmayı, zor duygularla birlikte yaşamayı ve değerlerle yön bulmayı öğretir ve bu yolculuğun merkezinde çoğu zaman gözden kaçan ama en güçlü kaynaklardan biri vardır: Şefkat.",
      "Şefkat Ne Değildir, Ne Olabilir?",
      "Şefkat, çoğu zaman yalnızca başkalarına gösterilen bir anlayış gibi görülür. Ama gerçek şefkat, önce kendine yöneltilen yumuşak bir bakıştır.  ACT’a göre şefkat; acıyı bastırmak ya da geçmesini beklemek değil, acıyla orada kalabilmeyi seçmektir. Zorlayıcı düşünceler ve duygularla yüzleşirken bile, kendine iyi bir dost gibi yaklaşabilmeyi mümkün kılar.",
      "Acıya Alan Açmak: Kaçmak Yerine Kalmak",
      "Korkular, kaygılar, pişmanlıklar ya da kırgınlıklar…ACT, bu zorlayıcı deneyimlerin hayatın doğal bir parçası olduğunu kabul ederek; onlarla savaşmak yerine, onlara yumuşak bir alan açmayı önerir. Böylece acı, bir düşman değil; hayatın öğretmenlerinden biri haline gelir.",
      "İçsel Eleştiriyle Nazik Bir Diyalog Kurmak",
      "Zihnimiz bazen bizden çok şey bekler, yeterince iyi olmadığımızı söyler, eleştirir, küçümser. Bu içsel sesle savaşmak yerine, onu fark edip nazikçe yanıt vermeyi öğrenmek mümkündür.",
      "“Seni duyuyorum ama ben, değerlerim doğrultusunda ilerlemeyi seçiyorum.”\n demek, içsel çatışmaları yumuşatır ve kişiyi kendine yaklaştırır.",
      "Psikolojik Esnekliğin Kalbinde Şefkat Var",
      "Zorluklarla birlikte değerlerimizle uyumlu yaşamaya devam edebilme becerisi, yani psikolojik esneklik, ACT’ın temel hedefidir ve bu esnekliği besleyen en güçlü kaynaklardan biri de şefkattir. Kendimize anlayış gösterebildiğimizde, yaşamın tüm iniş çıkışlarında daha dengeli, daha esnek ve daha anlamlı bir yolculuk mümkün olur.",
      "Şefkat Bir Başlangıçtır",
      "Şefkat geliştirmek, zorlukları inkâr etmek değildir. Tam tersine, yaşadıklarımızla birlikte kalabilmeyi öğrenmektir. ACT ile bu mümkün."
    ]
  },
  {
    "id": "act-ve-kaygi",
    "title": "ACT ve Kaygı",
    "excerpt": "Kaygı, insan olmanın doğal bir parçasıdır. Zihnimizdeki fırtınayla savaşmak yerine esnek bir ilişki kurarak dans edebilir miyiz?",
    "docUrl": "/act-ve-kaygi.docx",
    "imgUrl": "/9.jpg",
    "readTime": "5 dk okuma",
    "paragraphs": [
      "ACT ve Kaygı Yönetimi: İçsel Fırtınayla Nazikçe Dans Etmek",
      "Kaygı, insan olmanın doğal bir parçasıdır. Bizi tehlikelere karşı korumaya çalışan bir alarm sistemi gibidir. Ancak bazen bu alarm gereğinden fazla çalışır, küçük kıvılcımlar büyük yangınlara dönüşür. Tam da bu noktada, psikolojik esneklik geliştirmeye odaklanan bir yaklaşım olan Kabul ve Adanmışlık Modeli (ACT - Acceptance and Commitment Therapy), kaygıya karşı değil, onunla birlikte yol almayı öğreterek, daha anlamlı ve özgür bir yaşamın kapılarını aralar.",
      "Kaygıyı Anlamak: Düşman mı, Rehber mi?",
      "Kaygı; bedenimizin gelecekteki olası tehditlere karşı harekete geçmeye hazırlanmasıdır. Kısa süreli ve ölçülü olduğunda hayat kurtarıcı olabilir. Ancak yoğunlaştığında, kronikleştiğinde ve bizi kısıtladığında yaşam kalitemizi ciddi şekilde etkileyebilir. İşlevsellikte düşüş, sosyal geri çekilme, uyku ve dikkat problemleri, panik ataklar gibi birçok belirtilerle kendini gösterir.",
      "Kaygıdan Kaçmak Mümkün mü?",
      "Pek çok yöntem, kaygıyı bastırmayı, kontrol etmeyi ya da tamamen yok etmeyi amaçlar. Oysa bu çaba, çoğu zaman zihinsel bir kısır döngüyü başlatır. “Düşünmemeliyim, hissetmemeliyim” diyerek verdiğimiz savaş, içsel deneyimlerimizi daha da yoğunlaştırır. Kontrol etmeye çalıştıkça, kaygı büyür.",
      "ACT Yaklaşımı: Kontrolden Kabul’e, Katı Zihinden Esnek Zihne",
      "ACT modeli, kaygıyı bastırmak yerine onunla birlikte yaşamayı öğrenmeyi hedefler. Bu yöntem, kişinin içsel deneyimlerini yok saymadan, onlara yer açarak yaşamını değerleri doğrultusunda sürdürebilmesini destekler. Kaygıyla dans etmek derken kast edilen tam da budur: Onu bastırmak değil, ritmine uyum sağlayarak özgürce hareket edebilmek.",
      "ACT'ın temel bileşenleri şunlardır:",
      "Kabul (Acceptance): Kaygıyı yok etmeye çalışmak yerine, onun varlığını fark edip ona alan açmak.",
      "Bilişsel Ayrışma (Cognitive Defusion): Zihinden geçen düşünceleri mutlak gerçeklik olarak değil, sadece düşünceler olarak tanımak.",
      "Anda Kalma (Being Present): Kaygının sizi geçmişe ya da geleceğe savurmasına izin vermeden şimdide kalabilmek.",
      "Değerlerle Yönelme (Values): Kaygıya rağmen sizin için anlamlı olan yönleri keşfetmek ve onlara sadık kalmak.",
      "Adanmış Eylem (Committed Action): Kaygı oradayken bile, değerlerinize uygun davranışları hayata geçirmek.",
      "Bilimsel Dayanaklar: ACT Etkili mi?",
      "Evet! ACT yaklaşımının özellikle anksiyete bozuklukları, sosyal fobi, panik atak ve genel kaygı durumlarında etkili olduğunu gösteren çok sayıda araştırma mevcut.\nACT’ın hem kısa hem uzun vadede psikolojik esneklik, yaşam kalitesi ve kaygı belirtilerinde anlamlı iyileşmeler sağladığı ortaya konmuştur. Ayrıca ACT, klasik bilişsel davranışçı yöntemlerle kıyaslandığında, özellikle deneyimlerle başa çıkma becerilerini güçlendirmede öne çıkmaktadır.",
      "ACT ile Kaygı Yönetimi İçin Küçük, Gerçekçi Adımlar",
      "Düşüncelerinizle Aranıza Mesafe Koyun: “Bu sadece bir düşünce” demekle başlayabilirsiniz.",
      "Farkındalık Egzersizleri Yapın: Nefesinize, bedeninize ve şu ana nazikçe dikkat vermek; zihinsel fırtınaları dindirebilir.",
      "Değerlerinize Sarılın: Kaygının sesi yükselse bile, sizin için anlamlı olan şeylerden sapmadan ilerleyin.",
      "Her Gün Küçük Bir Adım: Kaygının gölgesinde de yürüyebilirsiniz. Önemli olan adanmışlığınız.",
      "Bireysel Destek: Kaygıyla Yeni Bir İlişki Kurmak",
      "Bazen içsel fırtınalarla tek başımıza baş etmek zor olabilir. ACT temelli bireysel destek, size özel ilerleyen, yargılayıcı olmayan, şefkatli ve bilimsel temelli bir rehberlik sunar. Birlikte, kaygınızla savaşmadan ama onunla el ele yürümeyi öğrenebiliriz. Kaygının yüküyle yalnız kalmak zorunda değilsiniz. ACT yaklaşımı, kontrol etmekten yorgun düşenlere, anlamlı bir yaşam için yeni bir yol sunar. Değişim için ilk adım, içsel deneyimlerinizi fark etmek ve onlarla ilişkinizi dönüştürmektir."
    ]
  },
  {
    "id": "ebeveyn-olurken-kendini-unutma",
    "title": "Ebeveyn Olurken Kendini Unutma: Yetişkinliğin Sessiz Yükü ve Kendine Şefkat",
    "excerpt": "Çocukları büyütürken içimizdeki çocuğu ihmal ediyor muyuz? Ebeveynliğin sessiz yükü altında kendimize şefkat göstermek.",
    "docUrl": "/ebeveyn-olurken-kendini-unutma.docx",
    "imgUrl": "/10.jpg",
    "readTime": "4 dk okuma",
    "paragraphs": [
      "Ebeveyn Olurken Kendini Unutma: Yetişkinliğin Sessiz Yükü ve Kendine Şefkat",
      "“İyi bir anne/baba olmak için kendimi unuttum…” Bu cümle size de tanıdık mı geliyor?",
      "Çocuklarımızı büyütmeye çalışırken, kendi içimizde kalan çocuğu çoğu zaman ihmal ediyoruz. Ebeveynlik, eşsiz bir yolculuk; sevgiyle yoğrulmuş ama zaman zaman yüklerle dolu. Bu yolculukta, çoğu zaman başkalarının ihtiyaçlarını önceleyip kendi duygularımızı, yorgunluklarımızı, isteklerimizi arka plana atıyoruz.",
      "Ama şu soru çok kıymetli:\n “Benim halim nasıl?”",
      "Yetişkin Olmak, Yük Taşımak Değildir",
      "Yetişkinlik genellikle “güçlü olmak, çözüm üretmek, duyguları bastırmak” gibi rollerle tanımlanır. Ancak bu tanımın içinde, duygularını görmezden gelen, ihtiyaçlarını susturan bir birey kalır.",
      "ACT bize şunu öğretir:\n Duygular bastırılmak için değil, fark edilip yaşanmak için vardır.\n Kendimize şefkat göstermek zayıflık değil, içsel gücün ta kendisidir.",
      "Kendinle Bağlantıda mısın? Küçük Bir Farkındalık Egzersizi",
      "Gelin, şimdi bir an duralım:",
      "Bugün kendin için ne yaptın?\nEn son ne zaman sadece nefes aldığını fark ettin?\nNe zamandır yorgunsun ama güçlü görünmeye çalışıyorsun?",
      "ACT yaklaşımı, farkındalığı artırarak değer odaklı bir yaşamı destekler. Ebeveynlik rolünün ötesinde senin de bir hayatın, hayallerin, sınırların var. Kendini hatırlamak, sadece sana değil; çocuğuna da daha sağlıklı bir örnek sunar.",
      "Kendine Şefkat Göstermek Niçin Bu Kadar Önemli?",
      "Çünkü sen de bir insansın. Yorulabilirsin, düşebilirsin, bilemeyebilirsin.\nÇünkü çocuğuna en büyük armağan, kendi duygularıyla barışık bir ebeveyndir.\nÇünkü sağlıklı bir ilişki, bireylerin kendilerini unutmadığı yerde başlar.\nUnutma, kendine verdiğin her izin; çocuğuna da izin verir.",
      "Ebeveynliğin Sessiz Kahramanı Sensin",
      "Kendini unutma. Yalnızca bir anne/baba değil, aynı zamanda bir insansın. Senin iyilik hâlin, çocuğunun dünyasını da iyileştirir ve bu yolculukta yalnız değilsin."
    ]
  },
  {
    "id": "kabul-ve-adanmislik-terapisi-act",
    "title": "Kabul ve Adanmışlık (ACT) Yaklaşımı:",
    "excerpt": "ACT, zihnin gürültüsünde kendine yön bulmanı sağlayan şefkatli bir yaklaşımdır. Hayatı anlamlı kılacak 6 temel esneklik süreci.",
    "docUrl": "/kabul-ve-adanmislik-terapisi-act.docx",
    "imgUrl": "/11.jpg",
    "readTime": "6 dk okuma",
    "paragraphs": [
      "Kabul ve Adanmışlık (ACT) Yaklaşımı: Zihnin Gürültüsünde Kendine Bir Yol Açmak",
      "Günümüz insanı, zihninde geçmişin yankılarıyla ve geleceğin belirsizliğiyle boğuşurken bir yandan da “şimdi”de kalmaya çalışıyor. Sürekli bir şeyleri düzeltmeye, hissettiklerini bastırmaya ya da kontrol etmeye çalışan bir zihne hapsolmuş haldeyiz. Bu çabanın sonunda çoğu zaman yorgun, tükenmiş ve kendimize yabancı hissediyoruz.",
      "İşte tam bu noktada Kabul ve Adanmışlık (ACT) yaklaşımı devreye giriyor. ACT, sadece teorik bir model değil; insanın kendi içsel hikâyesine alan açmasını sağlayan, şefkatli, bilimsel ve dönüştürücü bir yaklaşım. Amacı, acıyı yok etmek değil; o acıyla birlikte daha anlamlı ve değer odaklı bir yaşam kurmak. Çünkü hayat, yalnızca keyifli anlardan değil; cesaretle karşılanan zorluklardan da inşa edilir. ACT bize bu cesareti verir.",
      "ACT Nedir?",
      "ACT (Acceptance and Commitment Therapy), psikolojik acıdan kaçınmak yerine onunla birlikte yaşama cesareti kazandıran bir psikolojik yaklaşımdır. ACT, zorlayıcı duygu, düşünce ve bedensel hisleri kontrol etmek ya da bastırmak yerine, onlarla birlikte yaşamayı öğrenmeye odaklanır. ACT’ın temel amacı, bireyin içsel deneyimleriyle savaşmadan, yaşamında önemli ve anlamlı olan yöne doğru adım atabilmesini sağlamaktır.",
      "1980’lerin sonlarında Steven C. Hayes ve arkadaşları tarafından geliştirilen bu yaklaşım, insan davranışlarını dil, düşünce ve bağlam üzerinden açıklayan İlişkisel Çerçeve Teorisi (RFT)’ne dayanır.",
      "ACT’ın kalbinde psikolojik esneklik yer alır. Bu, kişinin zorlayıcı duygu, düşünce ve durumlar karşısında değerleri doğrultusunda esnek ve anlamlı tepkiler verebilme kapasitesidir. Yani: “Zihnimin söyledikleriyle birlikte, ben ne yöne gitmek istiyorum?” sorusuna verilen cesur yanıttır.",
      "ACT’ın Temel Yapıtaşları: Altı Süreçle Değişim",
      "ACT’ın sunduğu psikolojik esnekliği geliştirebilmek için altı temel süreç üzerine çalışılır. Bu süreçler bir zincir gibi birbirine bağlıdır ve insanın kendisiyle daha sağlıklı, farkında ve anlamlı bir ilişki kurmasını sağlar:",
      "1. Kabul (Acceptance)",
      "Rahatsız edici duygu ve düşünceleri bastırmak ya da yok etmeye çalışmak yerine, onlara yargısızca alan açmak.\n “Bu duygu burada olabilir… ve ben yine de devam edebilirim.”",
      "2. Bilişsel Ayrışma (Cognitive Defusion)",
      "Zihnin sunduğu her düşünceyi mutlak gerçek gibi yaşamak yerine, onları düşünce olarak görmek.\n“Zihnim şu anda bana ‘yetersizim’ diyor… Bu, onun eski alışkanlığı.”",
      "3. Anda Kalmak (Being Present)",
      "Zihnin geçmişe ya da geleceğe kaçışından sıyrılıp, duyular yoluyla şimdiki ana yerleşmek.\n“Şu an buradayım. Nefesimdeyim. Bedenimdeyim.”",
      "4. Kendini Gözlemleyen Benlik (Self-as-Context)",
      "Kendimizi sadece tanımlar, roller ya da başarılar üzerinden değil, bütün deneyimlerin tanığı olarak görebilmek.\n“Ben, sadece düşünen değil, düşüneni gözlemleyebilenim.”",
      "5. Değerler (Values)",
      "Gerçekten neyin önemli olduğunu fark etmek ve bu farkındalıkla yön belirlemek.\n “Benim için önemli olan ne? Ne uğruna yürümeye değer?”",
      "6. Adanmış Eylem (Committed Action)",
      "Değerlerle uyumlu küçük ama anlamlı adımlar atmak. Söylemden çıkıp, eyleme geçmek.\n“Zihnim itiraz etse de, bu adımı atıyorum çünkü bu bana göre kıymetli.”",
      "ACT Neden Farklı?",
      "ACT, kişiyi “bozuk” ya da “düzeltilmesi gereken biri” olarak görmez. Acının, insan olmanın doğasında olduğunu kabul eder. Bu nedenle terapötik süreçte “bunu düşünmeyi bırak” denmez; bunun yerine, “Bu düşünceyle birlikte, seni değerli olana yaklaştıracak ne yapabilirsin?” diye sorulur.",
      "Bu yaklaşım, yalnızca semptomlara değil; kişinin yaşamıyla, değerleriyle ve içsel kaynaklarıyla yeniden bağ kurmasına odaklanır. Çünkü bazen ihtiyacımız olan şey; duygularımızı susturmak değil, onlara eşlik ederek yol alabilmeyi öğrenmektir.",
      "Bilimsel Dayanaklar ve Etkinliği",
      "ACT’ın etkinliği, yüzlerce bilimsel çalışmayla desteklenmiştir. Özellikle son yıllarda yapılan araştırmalar aşağıdaki alanlarda ACT’ın güçlü sonuçlar verdiğini göstermektedir:",
      "Kaygı ve Depresyon\n Obsesif Kompulsif Bozukluk (OKB)\n Travma Sonrası Stres Bozukluğu (TSSB)\n Bağımlılıklar\n Kronik Ağrı ve Psikosomatik Rahatsızlıklar\n İlişki sorunları ve kimlik arayışları\n Tükenmişlik ve stres yönetimi",
      "Özellikle sosyal anksiyete ve kronik hastalıklarla yaşayan bireylerde ACT; duygusal esnekliği, yaşam kalitesini ve değer temelli davranışları artırmada oldukça etkili bulunmuştur.\n\nACT, yalnızca “iyi hissetmeyi” değil, hayatı olduğu haliyle kabul edip anlamlı yaşamayı hedefler. Çünkü hayat; kontrol edemediğimiz düşünceler, değişken duygular ve bazen zorlayıcı deneyimlerle doludur. ACT yaklaşımı, bu gerçeği reddetmek yerine onunla birlikte yaşamayı öğrenmenin yollarını sunar.",
      "Kime Yöneliktir?",
      "ACT yaklaşımı, ergenlerden yetişkinlere geniş bir yaş aralığına hitap eder. Özellikle kaygı, depresyon, travma sonrası zorluklar, stres yönetimi, özgüven problemleri ve yaşamda yön bulmakta zorlanan bireyler için destekleyici bir çerçeve sunar.",
      "ACT’ın  Hayattaki Yeri",
      "ACT yalnızca psikolojik danışma odasında değil, yaşamın birçok alanında başarıyla uygulanmaktadır:",
      "Okullarda: Sınav kaygısı, dikkat sorunları, özgüven eksikliği yaşayan öğrencilerle\nİş Yerlerinde: Tükenmişlik yaşayan profesyonellerle, değer temelli kariyer planlamalarında\nSağlık Sisteminde: Kanser, diyabet gibi kronik hastalıklarla yaşayan bireylerin psikolojik destek süreçlerinde\n Dijital Platformlarda: Online danışmanlık, mobil uygulamalar, grup çalışmaları vb.",
      "Bu çok yönlülük, ACT’ın sadece semptom odaklı bir yaklaşım değil; bütüncül bir yaşam rehberi olduğunu gösteriyor.",
      "Birlikte Yola Çıkmak",
      "ACT ile çalışmak; sadece semptomları hafifletmek değil, kendinle yeniden bağ kurmaktır. Eğer şu sıralar hayatında sıkışmış, yönünü kaybetmiş ya da iç sesinle barışmakta zorlanıyor hissediyorsan bil ki yalnız değilsin.",
      "ACT yaklaşımıyla birlikte, senin için anlamlı olan yöne doğru adım adım ilerleyebiliriz.",
      "“Yol acısız olmayabilir ama yön sana aitse, attığın her adım daha güçlü olur.”"
    ]
  },
  {
    "id": "online-psikolojik-destek",
    "title": "Online Psikolojik Destek: Ekranın Ötesine Geçen Şefkatli Bir Yolculuk",
    "excerpt": "Ekranın ötesinde kalpten kalbe bir temas kurmak. Evinizin rahatlığında, size özel şefkatli bir online danışmanlık süreci.",
    "docUrl": "/online-psikolojik-destek.docx",
    "imgUrl": "/15.jpg",
    "readTime": "4 dk okuma",
    "paragraphs": [
      "Online Psikolojik Destek: Ekranın Ötesine Geçen Şefkatli Bir Yolculuk",
      "Zaman hızla akıyor. Günlük yaşam, zihinlerde dalga dalga düşüncelerle dolu. İç sesin kimi zaman fısıltıyla, kimi zaman çığlıkla konuşuyor ve sen, tüm bu seslerin arasında bir durup nefes almak istiyorsun belki de…",
      "İşte tam bu noktada, yüz yüze gelmeden de kalpten kalbe bir temasın mümkün olduğunu hatırlatmak isterim. Çünkü destek, illa bir oda içinde olmak zorunda değil. Bazen bir ekran da şefkatli bir eşlik alanı olabilir.",
      "ACT Yaklaşımıyla: Olduğun Yerde, Olduğun Hâlinde",
      "ACT yaklaşımı; \"sorunu çözmeye\" değil, yaşamın iniş çıkışlarına alan açmaya, değerlerine yönelmeye ve zihinsel esnekliği geliştirmeye odaklanır. Burada amaç; duygularla savaşmak değil, onlara karşı nazikçe durabilmeyi öğrenmektir. ACT; kişinin kendi iç dünyasına saygıyla yaklaşan, yargıdan uzak ve şefkatle tanıklık eden bir yolculuktur.",
      "Evinin Rahatlığında, Senin Ritimlerinle",
      "Online görüşmeler, kişinin kendi alanında, kendi ritminde ilerlemesini sağlar. Bazı insanlar için bu alan daha güvenli, daha içten ve daha derin bir temas yaratır. Sessizliklerin bile anlam bulabildiği, duyguların rahatça var olabildiği bir yer...Kendine yaklaşmak mümkün.",
      "Ekranın Ardında Gerçek Bir Temas Var mı?",
      "Bu belki de en çok sorulan sorulardan biri ve cevabım şu: Evet. Hem de en derininden.",
      "Çünkü ACT’ta önemli olan “nerede” değil, “nasıl” eşlik edildiğidir. Yargısız bir duruşla, kalpten bir varlıkla, anda ve yanında bir şekilde…Bazen sadece ‘buradayım’ demek bile yeterlidir.",
      "Sana Özel Bir Yol Haritası",
      "Her görüşme, senin ihtiyaçlarına ve iç dünyana göre şekillenir.\n Süreç boyunca:",
      "Farkındalık egzersizleri\nYaşama yön verecek değer çalışmaları\nŞefkatli metaforlar",
      "Dijital kaynaklarla desteklenen küçük uygulamalar\nVe sana özel eşlik notlarıyla ilerliyoruz.",
      "Amaç; bir yöntemi sana uydurmak değil, seni kendi yöntemini keşfetmeye davet etmek.",
      "Neyi Fark Edersin Bilmem Ama…",
      "Bir noktada, küçük bir iç ses yükselir:",
      "“Ben böyle olmak zorunda değilim…”\n “Kendime başka türlü yaklaşabilirim…”\n “Bu kadar savaşmak zorunda kalmadan da yaşayabilirim…”",
      "İşte o an, dönüşüm başlar. Ve o dönüşümün içinde yalnız kalmak zorunda değilsin."
    ]
  }
];

export default function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  // Auto-open article from query parameter
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const articleId = params.get("article");
    if (articleId) {
      const found = articles.find((a) => a.id === articleId);
      if (found) {
        setSelectedArticle(found);
      }
    }
  }, []);

  const handleShare = (article: Article, e: React.MouseEvent) => {
    e.stopPropagation();
    const shareUrl = `${window.location.origin}/?article=${article.id}#articles`;
    
    if (navigator.share) {
      navigator.share({
        title: article.title,
        text: article.excerpt,
        url: shareUrl,
      }).catch(() => {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareUrl);
        toast.success("Makale linki kopyalandı!");
      });
    } else {
      navigator.clipboard.writeText(shareUrl);
      toast.success("Makale linki kopyalandı!");
    }
    trackContactConversion("form", `share_${article.id}`);
  };

  return (
    <section id="articles" className="section-shell bg-background border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center animate-blur-in">
          <p className="section-kicker">Kaynaklar & Yazılar</p>
          <h2 className="section-title text-gradient-dark mx-auto">Yazılarım & Makaleler</h2>
          <p className="section-copy mx-auto">
            Kabul ve Adanmışlık (ACT) yaklaşımı, mindfulness, kaygı ve kendine şefkat temalarında kaleme aldığım makaleleri okuyabilir ve döküman olarak indirebilirsiniz.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 animate-blur-in [animation-delay:150ms]">
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex flex-col justify-between overflow-hidden rounded-[2rem] border border-primary/10 bg-card shadow-soft transition-all duration-500 hover:-translate-y-1 hover:border-primary/30 hover:shadow-card"
            >
              <div>
                {/* Görsel */}
                <div className="relative aspect-[3/2.2] w-full overflow-hidden bg-secondary/30">
                  <img
                    src={article.imgUrl}
                    alt={article.title}
                    className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${article.id === 'act-ile-sefkat-gelistirme' ? 'object-top' : ''}`}
                    loading="lazy"
                  />
                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-dark backdrop-blur-sm">
                    {article.readTime}
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-6">
                  <h3 className="mb-3 font-heading text-lg font-bold leading-tight text-foreground transition-colors group-hover:text-primary-dark sm:text-xl">
                    {article.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-foreground/60 line-clamp-3">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              {/* Butonlar */}
              <div className="flex items-center gap-2 border-t border-primary/5 bg-secondary/15 p-4">
                <Button
                  onClick={() => setSelectedArticle(article)}
                  className="flex-1 rounded-xl bg-foreground text-background hover:bg-primary-dark hover:text-white py-5 text-xs font-bold transition-all duration-300"
                >
                  <BookOpen className="mr-2 h-3.5 w-3.5" /> Oku
                </Button>
                <a
                  href={article.docUrl}
                  download
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-white text-foreground/75 transition-all hover:border-primary hover:bg-primary hover:text-white"
                  title="Döküman Olarak İndir"
                  onClick={() => trackContactConversion("phone", `download_${article.id}`)}
                >
                  <Download className="h-4 w-4" />
                </a>
                <button
                  onClick={(e) => handleShare(article, e)}
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-primary/20 bg-white text-foreground/75 transition-all hover:border-primary hover:bg-primary hover:text-white"
                  title="Paylaş"
                >
                  <Share2 className="h-4 w-4" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Makale Okuma Modalı */}
      {selectedArticle && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedArticle(null)}
          />

          {/* Modal Content */}
          <div className="relative flex max-h-[85vh] w-full max-w-3xl flex-col overflow-hidden rounded-[2.5rem] border border-white/80 bg-white shadow-card animate-blur-in">
            {/* Header */}
            <div className="flex items-center justify-between border-b border-primary/10 bg-gradient-to-r from-primary/10 to-primary/5 p-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dark">
                  {selectedArticle.readTime}
                </span>
                <h3 className="font-heading text-lg font-bold text-foreground sm:text-xl lg:text-2xl mt-1 leading-tight">
                  {selectedArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedArticle(null)}
                className="rounded-full p-2 text-foreground/50 transition-colors hover:bg-black/5 hover:text-foreground"
                aria-label="Kapat"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Body */}
            <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-5 text-base leading-8 text-foreground/75">
              <div className="aspect-[3/1.8] w-full overflow-hidden rounded-2xl bg-secondary/30 mb-6 border border-primary/5">
                <img
                  src={selectedArticle.imgUrl}
                  alt={selectedArticle.title}
                  className={`h-full w-full object-cover ${selectedArticle.id === 'act-ile-sefkat-gelistirme' ? 'object-top' : ''}`}
                />
              </div>
              {selectedArticle.paragraphs.map((p, idx) => {
                // Highlight titles/headings inside the document
                const isHeading = p.trim().length < 80 && (
                  p.includes(":") || 
                  (p === p.toUpperCase() && p.trim() !== "") || 
                  idx === 0 ||
                  p.startsWith("1.") ||
                  p.startsWith("2.") ||
                  p.startsWith("3.") ||
                  p.startsWith("4.") ||
                  p.startsWith("5.") ||
                  p.startsWith("6.") ||
                  (p.split(" ").length < 6 && !p.endsWith("."))
                );
                
                if (idx === 0) return null; // Already shown in title
                
                if (isHeading) {
                  return (
                    <h4 key={idx} className="font-heading text-lg font-bold text-foreground pt-4 border-b border-primary/5 pb-1">
                      {p}
                    </h4>
                  );
                }
                return (
                  <p key={idx} className="whitespace-pre-line">
                    {p}
                  </p>
                );
              })}
            </div>

            {/* Footer */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-primary/10 bg-white p-6">
              <p className="text-xs font-semibold text-muted-foreground">Psikolojik Danışman Dila Dilara Aytekin</p>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={selectedArticle.docUrl}
                  download
                  className="flex-1 sm:flex-none"
                  onClick={() => trackContactConversion("phone", `download_${selectedArticle.id}`)}
                >
                  <Button variant="outline" className="w-full rounded-xl border-primary/20 hover:border-primary text-foreground py-4">
                    <Download className="mr-2 h-4 w-4" /> Word İndir
                  </Button>
                </a>
                <a
                  href="https://wa.me/905312353886"
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 sm:flex-none"
                  onClick={() => trackContactConversion("whatsapp", `article_cta_${selectedArticle.id}`)}
                >
                  <Button className="w-full rounded-xl bg-foreground text-background hover:bg-primary-dark hover:text-white py-4">
                    <MessageCircle className="mr-2 h-4 w-4" /> Randevu Al
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
