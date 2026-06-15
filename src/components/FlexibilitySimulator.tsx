import { useState } from "react";
import { Heart, Eye, Compass, Sparkles, Plus, Minus, RotateCcw, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import { trackContactConversion } from "@/lib/googleTag";

interface SkillState {
  kabul: number;
  farkindalik: number;
  degerler: number;
  adim: number;
}

const FlexibilitySimulator = () => {
  const [skills, setSkills] = useState<SkillState>({
    kabul: 0,
    farkindalik: 0,
    degerler: 0,
    adim: 0
  });

  const handleIncrement = (key: keyof SkillState) => {
    setSkills((prev) => ({
      ...prev,
      [key]: Math.min(prev[key] + 1, 3)
    }));
    trackContactConversion("form", `sim_inc_${key}`);
  };

  const handleDecrement = (key: keyof SkillState) => {
    setSkills((prev) => ({
      ...prev,
      [key]: Math.max(prev[key] - 1, 0)
    }));
    trackContactConversion("form", `sim_dec_${key}`);
  };

  const handleReset = () => {
    setSkills({ kabul: 0, farkindalik: 0, degerler: 0, adim: 0 });
    trackContactConversion("form", "sim_reset");
  };

  const totalScore = skills.kabul + skills.farkindalik + skills.degerler + skills.adim;
  const percentage = Math.round((totalScore / 12) * 100);

  const stemScale = 0.2 + skills.degerler * 0.27;
  const flowerY = 290 - 120 * stemScale;
  const flowerOpacity = skills.adim > 0 ? 1 : (skills.degerler > 0 ? 0.35 : 0);
  const flowerScale = skills.adim === 0 ? 0.2 : skills.adim * 0.45;
  const cloudOpacity = Math.max(1 - skills.farkindalik * 0.33, 0);

  // Dynamic feedback message based on score
  const getFeedbackMessage = () => {
    if (totalScore === 0) {
      return "Zihniniz şu an fırtınalı veya durgun olabilir. Aşağıdaki kaynakları artırarak esneklik bahçenizi yeşertmeye başlayın.";
    }
    if (totalScore <= 4) {
      return "Güzel bir başlangıç! Zihninizde esneklik tohumları ekildi. Farkındalık ve Kabul seviyelerinizi yükselterek bulutları dağıtabilirsiniz.";
    }
    if (totalScore <= 8) {
      return "Harika gidiyorsunuz! Kökleriniz güçleniyor, zihinsel gökyüzünüz aydınlanıyor. Şimdi Değerlerinizi belirleyip Adanmış Adımlar atmaya odaklanın.";
    }
    if (totalScore < 12) {
      return "Neredeyse tam denge! Psikolojik esnekliğiniz oldukça yüksek seviyede. Bahçeniz çiçek açtı ve değerlerinizle yön buluyorsunuz.";
    }
    return "Mükemmel Psikolojik Esneklik! Zorluklarla kabul ederek ve farkındalıkla karşılaşıyor; değerleriniz doğrultusunda kararlı adımlar atıyorsunuz.";
  };

  return (
    <section id="flexibility-garden" className="section-shell bg-background border-t border-primary/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center reveal">
          <p className="section-kicker">İnteraktif Deneyim</p>
          <h2 className="section-title text-gradient-dark mx-auto">Zihinsel Esneklik Bahçesi</h2>
          <p className="section-copy mx-auto">
            Kabul ve Adanmışlık Terapisi (ACT) modelindeki psikolojik esneklik becerilerini kendiniz deneyimleyin. Seviyeleri artırdıkça zihninizin ve hayat bahçenizin nasıl esneklikle yeşerdiğini gözlemleyin.
          </p>
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Sol Kolon - Görsel Çıktı (Mobil'de ilk) */}
          <div className="order-1 lg:order-2 flex flex-col justify-between rounded-[2.5rem] border border-white/60 bg-white/40 p-6 shadow-soft backdrop-blur-sm relative overflow-hidden min-h-[420px] lg:min-h-full reveal-right">
            {/* Background Glow */}
            <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5 opacity-80" />
            
            {/* Simulator Score Header */}
            <div className="flex justify-between items-center z-10">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary-dark">Gelişim Durumu</span>
                <h4 className="font-heading text-lg font-bold text-foreground">Zihinsel Denge</h4>
              </div>
              <div className="text-right">
                <span className="text-2xl sm:text-3xl font-extrabold text-primary-dark font-heading">{percentage}%</span>
                <span className="block text-[9px] font-bold text-muted-foreground uppercase tracking-wider">Esneklik Skoru</span>
              </div>
            </div>

            {/* Central 3D-like Interactive SVG Area */}
            <div className="my-8 flex justify-center items-center relative h-60 sm:h-72">
              <svg viewBox="0 0 400 400" className="w-full h-full max-w-[320px] drop-shadow-card">
                <defs>
                  {/* Sun Gradient */}
                  <radialGradient id="sun-gradient" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFF2A8" />
                    <stop offset="100%" stopColor="#D47F4E" />
                  </radialGradient>
                  
                  {/* Stem Gradient */}
                  <linearGradient id="stem-gradient" x1="0%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stopColor="#7E9A7E" />
                    <stop offset="100%" stopColor="#557355" />
                  </linearGradient>
                </defs>

                {/* Sky / Pot Background Plate */}
                <circle cx="200" cy="200" r="170" fill="#FAF7F2" stroke="rgba(205,97,75,0.08)" strokeWidth="3" />

                {/* 1. SUN: Governed by "Kabul" (Acceptance) Level (Opacity and Y translation) */}
                <g 
                  transform={`translate(0, ${60 - (skills.kabul * 20)})`} 
                  style={{ opacity: 0.15 + (skills.kabul * 0.28), transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                >
                  <circle cx="290" cy="110" r="45" fill="url(#sun-gradient)" />
                  <circle cx="290" cy="110" r="55" fill="#FFF2A8" opacity="0.2" className="animate-pulse" />
                </g>

                {/* 2. RAIN CLOUD: Governed by "Farkindalik" (Mindfulness) Level (Fades out as capacity rises) */}
                <g 
                  transform={`translate(${-80 + skills.farkindalik * 15}, -45)`}
                  style={{ 
                    opacity: cloudOpacity,
                    transition: "all 0.8s ease-in-out" 
                  }}
                >
                  {/* Rain drops */}
                  <line x1="180" y1="150" x2="180" y2="180" stroke="#CDCDCD" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="200" y1="150" x2="200" y2="185" stroke="#CDCDCD" strokeWidth="2" strokeDasharray="3 3" />
                  <line x1="220" y1="150" x2="220" y2="180" stroke="#CDCDCD" strokeWidth="2" strokeDasharray="3 3" />
                  {/* Cloud structure */}
                  <path d="M 160,130 A 25,25 0 0,1 200,120 A 35,35 0 0,1 250,130 A 20,20 0 0,1 250,150 A 20,20 0 0,1 150,150 A 20,20 0 0,1 160,130 Z" fill="#9B9593" opacity="0.85" />
                </g>

                {/* Pot representation */}
                <path d="M140,300 L260,300 L245,340 L155,340 Z" fill="#E4E9E4" stroke="#D3DDD3" strokeWidth="2" />
                <rect x="130" y="290" width="140" height="10" rx="4" fill="#CD614B" />

                {/* 3. STEM & LEAVES: Governed by "Değerler" (Values) Level (Grows taller) */}
                <g 
                  transform={`translate(200, 290) scale(1, ${stemScale}) translate(-200, -290)`}
                  style={{ transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)" }}
                >
                  {/* Stem path */}
                  <path 
                    d="M200,290 C195,250 205,210 200,170" 
                    fill="none" 
                    stroke="url(#stem-gradient)" 
                    strokeWidth="8" 
                    strokeLinecap="round"
                  />
                  
                  {/* Left Leaf (Fades in as stem grows) */}
                  <path 
                    d="M196,230 C165,220 160,200 170,195 C185,190 195,215 196,230 Z" 
                    fill="#7E9A7E" 
                    style={{
                      opacity: skills.degerler >= 1 ? 1 : 0,
                      transition: "all 0.6s ease"
                    }}
                  />
                  
                  {/* Right Leaf */}
                  <path 
                    d="M204,210 C235,200 240,180 230,175 C215,170 205,195 204,210 Z" 
                    fill="#557355" 
                    style={{
                      opacity: skills.degerler >= 2 ? 1 : 0,
                      transition: "all 0.6s ease"
                    }}
                  />
                </g>

                {/* 4. FLOWER / BLOSSOM: Governed by "Adim" (Committed Steps) Level (Blooms and expands) */}
                <g 
                  transform={`translate(200, ${flowerY}) scale(${flowerScale})`}
                  style={{
                    opacity: flowerOpacity,
                    transition: "all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)"
                  }}
                >
                  {/* Petals */}
                  <circle cx="0" cy="-20" r="18" fill="#CD614B" opacity="0.95" />
                  <circle cx="20" cy="0" r="18" fill="#D47F4E" opacity="0.95" />
                  <circle cx="0" cy="20" r="18" fill="#CD614B" opacity="0.95" />
                  <circle cx="-20" cy="0" r="18" fill="#D47F4E" opacity="0.95" />
                  <circle cx="15" cy="-15" r="18" fill="#CD614B" opacity="0.9" />
                  <circle cx="-15" cy="-15" r="18" fill="#D47F4E" opacity="0.9" />
                  <circle cx="15" cy="15" r="18" fill="#D47F4E" opacity="0.9" />
                  <circle cx="-15" cy="15" r="18" fill="#CD614B" opacity="0.9" />
                  {/* Core */}
                  <circle cx="0" cy="0" r="12" fill="#FAF7F2" stroke="#D47F4E" strokeWidth="2" />
                </g>

                {/* Sparkles: Float when high score */}
                {totalScore >= 7 && (
                  <g className="animate-pulse" style={{ transition: "opacity 0.5s ease" }}>
                    <path d="M100,180 L104,184 L100,188 L96,184 Z" fill="#FFF2A8" />
                    <path d="M290,140 L293,143 L290,146 L287,143 Z" fill="#D47F4E" />
                    <path d="M120,80 L125,85 L120,90 L115,85 Z" fill="#FFF2A8" />
                    <path d="M270,220 L274,224 L270,228 L266,224 Z" fill="#7E9A7E" />
                  </g>
                )}
              </svg>
            </div>

            {/* Bottom Real-time Feedback card */}
            <div className="rounded-2xl border border-primary/10 bg-white/70 p-4 backdrop-blur-sm z-10 text-center">
              <p className="text-xs font-semibold text-foreground/80 leading-relaxed transition-all duration-300">
                {getFeedbackMessage()}
              </p>
            </div>
          </div>

          {/* Sağ Kolon - Kontroller (Mobil'de ikinci) */}
          <div className="order-2 lg:order-1 flex flex-col justify-between space-y-6 reveal-left">
            <div className="space-y-4">
              <h3 className="font-heading text-xl font-bold text-foreground">
                Zihinsel Kaynaklarınızı Yönetin
              </h3>
              <p className="text-sm text-foreground/60 leading-relaxed">
                Bir bahçıvan gibi zihninizi besleyebilirsiniz. Hayatınızdaki zorlayıcı durumlarda her bir kaynağı artırarak zihinsel esnekliğinizi ve iyi oluşunuzu nasıl yükseltebileceğinizi simüle edin.
              </p>
            </div>

            {/* Kontrol Kartları Listesi */}
            <div className="space-y-3.5">
              {/* Kabul */}
              <div className="rounded-2xl border border-white/60 bg-white/35 p-4 flex items-center justify-between shadow-soft backdrop-blur-sm transition-all hover:bg-white/50">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark">
                    <Heart className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-bold text-foreground">Kabul (Acceptance)</h4>
                    <p className="text-[11px] text-foreground/60 leading-normal truncate">Zor düşünce ve duygulara savaşmadan alan açmak.</p>
                  </div>
                </div>
                
                {/* Level Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => handleDecrement("kabul")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.kabul === 0}
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-4 text-center text-xs font-bold font-heading">{skills.kabul}</span>
                  <button 
                    onClick={() => handleIncrement("kabul")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.kabul === 3}
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Farkındalık */}
              <div className="rounded-2xl border border-white/60 bg-white/35 p-4 flex items-center justify-between shadow-soft backdrop-blur-sm transition-all hover:bg-white/50">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark">
                    <Eye className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-bold text-foreground">Anda Kalma (Mindfulness)</h4>
                    <p className="text-[11px] text-foreground/60 leading-normal truncate">Şimdiki ana, yargısız ve açık bir dikkatle odaklanmak.</p>
                  </div>
                </div>
                
                {/* Level Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => handleDecrement("farkindalik")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.farkindalik === 0}
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-4 text-center text-xs font-bold font-heading">{skills.farkindalik}</span>
                  <button 
                    onClick={() => handleIncrement("farkindalik")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.farkindalik === 3}
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Değerler */}
              <div className="rounded-2xl border border-white/60 bg-white/35 p-4 flex items-center justify-between shadow-soft backdrop-blur-sm transition-all hover:bg-white/50">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark">
                    <Compass className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-bold text-foreground">Değerler (Values)</h4>
                    <p className="text-[11px] text-foreground/60 leading-normal truncate">Hayatta sizin için gerçekten neyin önemli olduğunu belirlemek.</p>
                  </div>
                </div>
                
                {/* Level Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => handleDecrement("degerler")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.degerler === 0}
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-4 text-center text-xs font-bold font-heading">{skills.degerler}</span>
                  <button 
                    onClick={() => handleIncrement("degerler")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.degerler === 3}
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>

              {/* Adanmış Adımlar */}
              <div className="rounded-2xl border border-white/60 bg-white/35 p-4 flex items-center justify-between shadow-soft backdrop-blur-sm transition-all hover:bg-white/50">
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary-dark">
                    <Sparkles className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <h4 className="font-heading text-sm font-bold text-foreground">Adanmış Adımlar (Action)</h4>
                    <p className="text-[11px] text-foreground/60 leading-normal truncate">Seçilen değerler doğrultusunda kararlı adımlar atmak.</p>
                  </div>
                </div>
                
                {/* Level Controls */}
                <div className="flex items-center gap-2 shrink-0">
                  <button 
                    onClick={() => handleDecrement("adim")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.adim === 0}
                  >
                    <Minus className="h-3 w-3" />
                  </button>
                  <span className="w-4 text-center text-xs font-bold font-heading">{skills.adim}</span>
                  <button 
                    onClick={() => handleIncrement("adim")}
                    className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 bg-white text-foreground/80 hover:bg-primary hover:text-white transition-all disabled:opacity-30 disabled:pointer-events-none"
                    disabled={skills.adim === 3}
                  >
                    <Plus className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>

            {/* Simulator Reset and Information CTA */}
            <div className="flex items-center gap-4 pt-4 border-t border-primary/10">
              <Button 
                variant="outline" 
                onClick={handleReset}
                className="rounded-xl border-primary/20 hover:border-primary text-foreground/80 py-5"
                disabled={totalScore === 0}
              >
                <RotateCcw className="mr-2 h-4 w-4" /> Sıfırla
              </Button>
              <a 
                href="#contact" 
                className="flex-1"
              >
                <Button className="btn-cta w-full py-5 text-xs font-bold flex items-center justify-center gap-2">
                  <Info className="h-4 w-4" /> Esneklik Seansları İçin Bilgi Al
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlexibilitySimulator;
