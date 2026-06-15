import { useState, useEffect, useRef } from "react";
import { MessageCircle, X, Send, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

interface Message {
  id: string;
  sender: "user" | "bot";
  text: string;
}

const SUGGESTIONS = [
  { text: "Randevu nasıl alabilirim?", key: "randevu" },
  { text: "MOXO Dikkat Testi nedir?", key: "moxo" },
  { text: "Çalışma alanlarınız nelerdir?", key: "alan" },
  { text: "Konum ve iletişim bilgileriniz?", key: "iletisim" },
];

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "init-1",
      sender: "bot",
      text: "Merhaba! Ben Psikolojik Danışman & Eğitim Danışmanı Dila Dilara Aytekin'in dijital asistanıyım. Size danışmanlık süreçleri, YKS/LGS takipleri, MOXO dikkat testi veya randevular hakkında nasıl yardımcı olabilirim?",
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showNotification, setShowNotification] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messages.length > 1 && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isTyping]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowNotification(false);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenToggle = () => {
    setIsOpen(!isOpen);
    setShowNotification(false);
    if (!isOpen) {
      trackContactConversion("whatsapp", "ai_assistant_open");
    }
  };

  const getBotResponse = (input: string): string => {
    const text = input.toLowerCase();

    if (text.includes("randevu") || text.includes("görüşme") || text.includes("seans") || text.includes("randovu")) {
      return "Randevu planlamalarımızı doğrudan telefon veya WhatsApp üzerinden yapmaktayız. Sizin için en uygun gün ve saati belirlemek için aşağıdaki 'WhatsApp'tan Yaz' veya 'Doğrudan Ara' butonlarını kullanabilirsiniz. Telefon numaramız: 0 (531) 235 38 86.";
    }
    if (text.includes("moxo") || text.includes("dikkat") || text.includes("test") || text.includes("attentioner")) {
      return "MOXO Dikkat Performans Testi; dikkat, zamanlama, dürtüsellik ve hiperaktivite alanlarını değerlendiren bilgisayar tabanlı objektif bir testtir. Ayrıca 7-18 yaş grubu için Attentioner Dikkat Geliştirme Programı da uygulamaktayız. Detaylı bilgi ve test randevusu almak için doğrudan bize ulaşabilirsiniz.";
    }
    if (
      text.includes("alan") ||
      text.includes("hizmet") ||
      text.includes("destek") ||
      text.includes("ergen") ||
      text.includes("yetişkin") ||
      text.includes("bireysel") ||
      text.includes("kaygı") ||
      text.includes("sınav") ||
      text.includes("yks") ||
      text.includes("lgs")
    ) {
      return "Dila Dilara Aytekin; Ergen ve Genç Yetişkin Danışmanlığı, YKS ve LGS Eğitim Danışmanlığı (akademik planlama ve bireysel takip), Sınav Kaygısı ve Performans Yönetimi, ACT (Kabul ve Adanmışlık) temelli danışmanlık süreçleri ve atölye çalışmaları yürütmektedir.";
    }
    if (
      text.includes("konum") ||
      text.includes("adres") ||
      text.includes("nerede") ||
      text.includes("samsun") ||
      text.includes("atakum") ||
      text.includes("iletisim") ||
      text.includes("telefon") ||
      text.includes("numara") ||
      text.includes("ulaşım")
    ) {
      return "Ofisimiz (Çağ Psikoloji) Samsun Atakum'dadır: Körfez Mahallesi Atakum Bulvarı No:21/11 A Blok Kat:1 Daire:11 Atakum / Samsun. Görüşmelerimizi yüz yüze veya online olarak yürütüyoruz. İletişim numaramız: 0 (531) 235 38 86.";
    }
    if (text.includes("ücret") || text.includes("fiyat") || text.includes("bütçe") || text.includes("danışmanlık ücreti") || text.includes("seans")) {
      return "Psikolojik danışmanlık ve akademik takip ücretlerimiz görüşme türüne (bireysel danışmanlık, YKS/LGS takibi, dikkat testleri vb.) göre değişmektedir. Detaylı bilgi almak için lütfen WhatsApp üzerinden yazın ya da bizi arayın.";
    }

    return "Anlıyorum. Sorunuza en net ve detaylı yanıtı verebilmemiz için lütfen 0 (531) 235 38 86 numarasından bizi arayın ya da aşağıdaki butona tıklayarak doğrudan WhatsApp'tan mesaj yazın. En kısa sürede geri dönüş sağlayacağız.";
  };

  const handleSendMessage = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const newUserMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: textToSend,
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      const botReply = getBotResponse(textToSend);
      const newBotMessage: Message = {
        id: `bot-${Date.now()}`,
        sender: "bot",
        text: botReply,
      };
      setMessages((prev) => [...prev, newBotMessage]);
      setIsTyping(false);
    }, 900);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end font-body">
      {/* Bildirim Balonu */}
      {showNotification && !isOpen && (
        <div className="mb-3 mr-2 animate-bounce rounded-2xl border border-primary/20 bg-white px-4 py-3 shadow-card transition-all">
          <p className="text-xs font-semibold text-foreground/80">Merhaba! Sorularınız için buradayım. 👋</p>
        </div>
      )}

      {/* Sohbet Penceresi */}
      {isOpen && (
        <div className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-[2rem] border border-white/80 bg-white/95 shadow-card backdrop-blur-xl transition-all duration-300 sm:w-[380px]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-primary/10 bg-gradient-to-r from-primary/10 to-primary/5 p-5">
            <div className="flex items-center gap-3">
              <div className="relative">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground shadow-soft">
                  DA
                </span>
                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500" />
              </div>
              <div>
                <h4 className="font-heading text-sm font-bold text-foreground">Dila Dilara Aytekin</h4>
                <p className="text-[11px] font-medium text-green-600">Çevrimiçi</p>
              </div>
            </div>
            <button
              onClick={handleOpenToggle}
              className="rounded-full p-1.5 text-foreground/50 transition-colors hover:bg-black/5 hover:text-foreground"
              aria-label="Kapat"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Mesaj Geçmişi */}
          <div className="flex-1 overflow-y-auto p-5 space-y-4">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    msg.sender === "user"
                      ? "bg-foreground text-background"
                      : "bg-secondary/70 text-foreground border border-primary/5"
                  }`}
                >
                  <p>{msg.text}</p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-primary/5 bg-secondary/70 px-4 py-3 text-sm text-foreground/50">
                  <span className="flex items-center gap-1.5 font-medium text-xs">
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/40" style={{ animationDelay: "0ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/40" style={{ animationDelay: "150ms" }} />
                    <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-foreground/40" style={{ animationDelay: "300ms" }} />
                    Asistan yazıyor...
                  </span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Önerilen Konular */}
          <div className="border-t border-primary/5 bg-secondary/20 p-4">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Önerilen Konular</p>
            <div className="flex overflow-x-auto gap-2 pb-1.5 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
              {SUGGESTIONS.map((sug) => (
                <button
                  key={sug.text}
                  onClick={() => handleSendMessage(sug.text)}
                  className="shrink-0 rounded-full border border-primary/20 bg-white/80 px-3 py-1.5 text-xs font-semibold text-foreground/80 hover:border-primary hover:bg-white transition-colors"
                >
                  {sug.text}
                </button>
              ))}
            </div>
          </div>

          {/* İletişim / Whatsapp / Arama Kısayolları */}
          <div className="grid grid-cols-2 gap-2 border-t border-primary/10 bg-white p-3">
            <a
              href="https://wa.me/905312353886"
              target="_blank"
              rel="noreferrer"
              onClick={() => trackContactConversion("whatsapp", "ai_assistant_chat_whatsapp")}
              className="flex items-center justify-center gap-2 rounded-xl bg-[#25d366]/10 py-2.5 text-xs font-bold text-[#128c7e] hover:bg-[#25d366]/20 transition-colors"
            >
              <ArrowRight className="h-3.5 w-3.5" /> WhatsApp'tan Yaz
            </a>
            <a
              href="tel:+905312353886"
              onClick={() => trackContactConversion("phone", "ai_assistant_chat_phone")}
              className="flex items-center justify-center gap-2 rounded-xl bg-foreground/5 py-2.5 text-xs font-bold text-foreground hover:bg-foreground/10 transition-colors"
            >
              <Phone className="h-3.5 w-3.5" /> Doğrudan Ara
            </a>
          </div>

          {/* Girdi Alanı */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSendMessage(inputValue);
            }}
            className="flex items-center gap-2 border-t border-primary/10 bg-white p-3"
          >
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Mesajınızı yazın..."
              className="flex-1 rounded-xl bg-secondary/50 px-4 py-2.5 text-sm outline-none placeholder:text-foreground/40 focus:ring-1 focus:ring-primary/40"
            />
            <Button
              type="submit"
              size="icon"
              className="h-10 w-10 shrink-0 rounded-xl bg-foreground text-background hover:bg-primary-dark hover:text-white"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
        </div>
      )}

      {/* Floating Chat Trigger Button */}
      <button
        onClick={handleOpenToggle}
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-foreground text-background shadow-card transition-all duration-300 hover:scale-105 ${
          isOpen ? "bg-primary text-primary-foreground rotate-90" : "hover:bg-primary hover:text-primary-foreground"
        }`}
        aria-label="Dijital Asistanı Aç"
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  );
}
