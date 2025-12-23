import React, { useState, useEffect } from 'react';
import {
  Heart,
  BookOpen,
  PlusCircle,
  Info,
  Sparkles,
  Gamepad2,
  BookMarked,
  Users,
  Search,
  ChevronRight,
  AlertCircle,
  Moon,
  Sun,
  PenTool,
  Trophy,
  Filter,
  Eye,
  MessageCircle,
  Zap,
  Star,
  User,
  Award,
  TrendingUp,
  CheckCircle2
} from 'lucide-react';

const App = () => {
  const [activeTab, setActiveTab] = useState('anlat');
  const [darkMode, setDarkMode] = useState(true);
  const [story, setStory] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState(null);
  const [notification, setNotification] = useState(null);

  // Gamification State
  const [userStats, setUserStats] = useState({
    xp: 850,
    level: 1,
    nextLevelXp: 1000,
    storiesRead: 3,
    gamesPlayed: 1,
    title: "Empati Çırağı",
    badges: [
      { id: 1, name: "İlk Adım", icon: <Star size={14} />, unlocked: true },
      { id: 2, name: "Hikaye Anlatıcısı", icon: <PenTool size={14} />, unlocked: false },
      { id: 3, name: "Topluluk Yıldızı", icon: <Users size={14} />, unlocked: false },
    ]
  });

  const [communityWorks] = useState([
    {
      id: 1,
      title: "Sessiz Çığlık: Koridorun Sonu",
      author: "Elif Demir",
      type: "story",
      category: "Okul Zorbalığı",
      views: "1.2k",
      likes: 450,
      preview: "Okul koridorlarında başlayan o sessiz mücadelenin, bir dayanışma hikayesine dönüşümü..."
    },
    {
      id: 2,
      title: "Pixel Guardian",
      author: "Can Yılmaz",
      type: "game",
      category: "Siber Zorbalık",
      views: "3.5k",
      likes: 890,
      preview: "Siber zorbalara karşı dijital kalkanını oluştur ve topluluğu koru! 5 seviyeli macera."
    },
    {
      id: 3,
      title: "Mavi Ekranın Ardındaki Gerçek",
      author: "Umut Can Belgin",
      type: "story",
      category: "Siber Zorbalık",
      views: "980",
      likes: 310,
      preview: "Bir oyun grubunda başlayan dışlanmanın, empati yoluyla nasıl çözüldüğünü anlatan bir günlük."
    },
    {
      id: 4,
      title: "Empati Labirenti",
      author: "Selin Yıldız",
      type: "game",
      category: "Akran Zorbalığı",
      views: "2.1k",
      likes: 560,
      preview: "Doğru kararları ver, labirentten çık ve arkadaşlık bağlarını güçlendir."
    }
  ]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  const awardXP = (amount, reason) => {
    setUserStats(prev => {
      const newXP = prev.xp + amount;
      const isLevelUp = newXP >= prev.nextLevelXp;

      setNotification({
        title: isLevelUp ? "Seviye Atladın!" : `+${amount} XP`,
        message: isLevelUp ? `Tebrikler! Yeni seviyen: ${prev.level + 1}` : reason,
        type: isLevelUp ? 'levelup' : 'xp'
      });

      // Clear notification after 3s
      setTimeout(() => setNotification(null), 3000);

      return {
        ...prev,
        xp: isLevelUp ? newXP - prev.nextLevelXp : newXP,
        level: isLevelUp ? prev.level + 1 : prev.level,
        nextLevelXp: isLevelUp ? Math.floor(prev.nextLevelXp * 1.5) : prev.nextLevelXp,
        title: isLevelUp ? "Zorbalık Avcısı" : prev.title // Simple title logic for demo
      };
    });
  };

  const handleAction = (type) => {
    if (!story.trim()) return;
    setIsAnalyzing(true);
    setTimeout(() => {
      setAnalysisResult({
        type: type,
        category: story.includes('internet') || story.includes('mesaj') ? "Siber Zorbalık" : "Akran Zorbalığı",
        sentiment: "Dönüştürülebilir Duygu",
        suggestion: type === 'story'
          ? "Bu deneyimi bir Storybook'a (Hikaye Kitabı) dönüştürerek diğerlerine ışık tutabilirsin."
          : "Bu deneyimi bir seviyeli oyuna dönüştürerek başkalarına çözüm yollarını öğretebilirsin."
      });
      setIsAnalyzing(false);
      awardXP(300, type === 'story' ? 'Hikaye Tasarlandı' : 'Oyun Kurgulandı');
    }, 1800);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'anlat':
        return (
          <div className="p-4 space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-out">
            <style>{`
              .glass-input {
                background: ${darkMode ? 'rgba(255, 255, 255, 0.03)' : 'rgba(255, 255, 255, 0.6)'};
                backdrop-filter: blur(12px);
                border: 1px solid ${darkMode ? 'rgba(255, 255, 255, 0.08)' : 'rgba(0, 0, 0, 0.05)'};
                box-shadow: ${darkMode ? 'inset 0 1px 1px rgba(255, 255, 255, 0.05)' : 'none'};
              }
              .glass-input:focus {
                background: ${darkMode ? 'rgba(255, 255, 255, 0.05)' : 'rgba(255, 255, 255, 0.9)'};
                border-color: ${darkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(99, 102, 241, 0.3)'};
                box-shadow: 0 0 0 2px ${darkMode ? 'rgba(139, 92, 246, 0.1)' : 'rgba(99, 102, 241, 0.1)'};
              }
              
              .gradient-text {
                background: ${darkMode ? 'linear-gradient(135deg, #fff 0%, #a5b4fc 100%)' : 'linear-gradient(135deg, #1e1b4b 0%, #4f46e5 100%)'};
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
              }

              .progress-ring-circle {
                transition: stroke-dashoffset 0.35s;
                transform: rotate(-90deg);
                transform-origin: 50% 50%;
              }
            `}</style>

            <div className={`relative overflow-hidden rounded-[32px] p-8 transition-all duration-500 group ${darkMode
                ? 'bg-gradient-to-br from-slate-800/40 to-slate-900/40 border border-white/5 shadow-2xl shadow-black/20'
                : 'bg-white/70 border border-indigo-50 shadow-xl shadow-indigo-100/50'
              }`}>
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:20px_20px]" />
              <div className={`absolute -right-20 -top-20 w-60 h-60 rounded-full blur-[80px] opacity-20 ${darkMode ? 'bg-violet-500' : 'bg-blue-400'}`} />

              <div className="relative z-10">
                <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-rose-500/10 text-rose-500"><Heart size={20} className="fill-current" /></span>
                  <span className="gradient-text">Güvenli Alan</span>
                </h2>
                <p className={`text-sm mb-8 leading-relaxed max-w-[90%] ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
                  Hikayen yapay zeka ile sanata dönüşsün. İçindeki gücü keşfetmeye hazır mısın?
                </p>

                <div className="relative mb-8 group/input">
                  <textarea
                    className={`glass-input w-full h-48 rounded-2xl p-5 text-sm resize-none outline-none transition-all placeholder:text-transparent peer ${darkMode ? 'text-slate-200' : 'text-slate-700'}`}
                    placeholder=" "
                    value={story}
                    onChange={(e) => setStory(e.target.value)}
                  />
                  <label className={`absolute left-5 top-5 text-sm font-medium transition-all duration-200 pointer-events-none
                    peer-focus:-translate-y-[12px] peer-focus:scale-90 peer-focus:text-indigo-500
                    peer-[:not(:placeholder-shown)]:-translate-y-[12px] peer-[:not(:placeholder-shown)]:scale-90
                    ${darkMode ? 'text-slate-500 peer-focus:text-violet-400' : 'text-slate-400'}
                  `}>
                    Düşüncelerini Paylaş...
                  </label>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <ActionButton
                    onClick={() => handleAction('story')}
                    disabled={isAnalyzing || !story}
                    icon={<BookMarked size={18} />}
                    label="Hikaye Tasarla"
                    darkMode={darkMode}
                    variant="primary"
                  />
                  <ActionButton
                    onClick={() => handleAction('game')}
                    disabled={isAnalyzing || !story}
                    icon={<Gamepad2 size={18} />}
                    label="Oyun Kurgula"
                    darkMode={darkMode}
                    variant="secondary"
                  />
                </div>

                {isAnalyzing && (
                  <div className="mt-8 flex flex-col items-center justify-center gap-3 animate-in fade-in zoom-in duration-300">
                    <div className="relative">
                      <div className={`absolute inset-0 rounded-full blur ${darkMode ? 'bg-violet-500/50' : 'bg-indigo-500/30'}`} />
                      <Sparkles size={24} className={`relative z-10 animate-spin-slow ${darkMode ? 'text-violet-300' : 'text-indigo-600'}`} />
                    </div>
                    <span className={`text-[10px] font-bold uppercase tracking-[0.3em] ${darkMode ? 'text-violet-300' : 'text-indigo-600'} animate-pulse`}>
                      Analiz Ediliyor...
                    </span>
                  </div>
                )}
              </div>
            </div>

            {analysisResult && (
              <div className={`animate-in slide-in-from-bottom-8 duration-700 rounded-[32px] p-1 border backdrop-blur-md overflow-hidden ${darkMode ? 'bg-gradient-to-br from-violet-500/20 to-fuchsia-500/20 border-white/10' : 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-100'
                }`}>
                <div className={`rounded-[28px] p-6 h-full ${darkMode ? 'bg-[#1a1825]/90' : 'bg-white/80'}`}>
                  <div className="flex items-start gap-4 mb-6">
                    <div className={`p-4 rounded-2xl shadow-lg rotate-3 transition-transform hover:rotate-6 ${darkMode ? 'bg-[#2a2638] text-violet-400' : 'bg-indigo-50 text-indigo-600'}`}>
                      {analysisResult.type === 'story' ? <BookMarked size={28} /> : <Trophy size={28} />}
                    </div>
                    <div>
                      <h3 className={`text-lg font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                        {analysisResult.type === 'story' ? "Hikaye Taslağı Hazır" : "Oyun Mekaniği Oluşturuldu"}
                      </h3>
                      <div className="flex flex-wrap gap-2 mt-2">
                        <Badge text={analysisResult.category} color="indigo" darkMode={darkMode} />
                        <Badge text={analysisResult.sentiment} color="emerald" darkMode={darkMode} />
                      </div>
                    </div>
                  </div>

                  <p className={`text-sm mb-8 leading-relaxed ${darkMode ? 'text-slate-300' : 'text-slate-600'}`}>
                    {analysisResult.suggestion}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    <button className={`py-4 rounded-2xl font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all ${darkMode ? 'bg-white/5 hover:bg-white/10 text-white' : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                      }`}>
                      <Search size={16} /> Önizle
                    </button>
                    <button className={`py-4 rounded-2xl font-bold text-[11px] uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg shadow-indigo-500/20 ${darkMode ? 'bg-indigo-600 hover:bg-indigo-500 text-white' : 'bg-indigo-600 hover:bg-indigo-700 text-white'
                      }`}>
                      Devam Et <ChevronRight size={16} />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      case 'topluluk':
        return (
          <div className="p-4 space-y-6 animate-in fade-in duration-500 pb-24">
            <div className="flex justify-between items-center mb-4 px-2">
              <h2 className={`text-2xl font-bold tracking-tight ${darkMode ? 'text-white' : 'text-slate-900'}`}>Keşfet</h2>
              <button className={`p-2 rounded-xl transition-colors ${darkMode ? 'bg-slate-800 text-slate-400' : 'bg-slate-100 text-slate-500'}`}>
                <Filter size={20} />
              </button>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {communityWorks.map((work) => (
                <div key={work.id} className={`group relative rounded-[32px] overflow-hidden transition-all duration-500 hover:-translate-y-1 ${darkMode ? 'bg-[#1e1b2e] border border-white/5' : 'bg-white border border-slate-100 shadow-xl shadow-slate-200/50'
                  }`}>
                  <div onClick={() => awardXP(50, "İçerik İncelendi")} className="cursor-pointer">
                    <div className={`absolute top-0 right-0 p-8 opacity-10 transition-transform group-hover:scale-110 group-hover:rotate-12 ${work.type === 'story' ? (darkMode ? 'text-pink-500' : 'text-pink-600') : (darkMode ? 'text-cyan-500' : 'text-cyan-600')
                      }`}>
                      {work.type === 'story' ? <BookOpen size={100} /> : <Gamepad2 size={100} />}
                    </div>

                    <div className="p-7 relative z-10">
                      <div className="flex justify-between items-start mb-6">
                        <span className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${work.type === 'story'
                            ? (darkMode ? 'bg-pink-500/10 border-pink-500/20 text-pink-400' : 'bg-pink-50 border-pink-100 text-pink-600')
                            : (darkMode ? 'bg-cyan-500/10 border-cyan-500/20 text-cyan-400' : 'bg-cyan-50 border-cyan-100 text-cyan-600')
                          }`}>
                          {work.type === 'story' ? 'Hikaye' : 'Oyun'}
                        </span>
                        <div className="flex items-center gap-3 text-xs font-bold opacity-60">
                          <span className="flex items-center gap-1"><Eye size={14} /> {work.views}</span>
                          <span className="flex items-center gap-1"><Heart size={14} /> {work.likes}</span>
                        </div>
                      </div>

                      <h3 className={`text-xl font-bold mb-2 leading-snug ${darkMode ? 'text-slate-100' : 'text-slate-900'}`}>{work.title}</h3>
                      <p className={`text-xs font-medium uppercase tracking-wide mb-4 ${darkMode ? 'text-indigo-400' : 'text-indigo-600'}`}>
                        {work.author}
                      </p>

                      <p className={`text-sm mb-6 leading-relaxed line-clamp-2 ${darkMode ? 'text-slate-400' : 'text-slate-600'}`}>
                        {work.preview}
                      </p>

                      <button className={`w-full py-4 rounded-2xl font-bold text-xs uppercase tracking-widest flex items-center justify-center gap-2 transition-all ${darkMode
                          ? 'bg-slate-800 hover:bg-slate-700 text-white'
                          : 'bg-slate-900 hover:bg-slate-800 text-white shadow-lg shadow-slate-900/20'
                        }`}>
                        İncele <ChevronRight size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <button className={`w-full py-5 border-2 border-dashed rounded-3xl flex flex-col items-center justify-center gap-2 transition-all group ${darkMode
                ? 'border-indigo-500/30 text-indigo-400 hover:bg-indigo-500/5 hover:border-indigo-500/50'
                : 'border-indigo-200 text-indigo-500 hover:bg-indigo-50 hover:border-indigo-300'
              }`}>
              <PlusCircle size={24} className="group-hover:scale-110 transition-transform" />
              <span className="text-xs font-bold uppercase tracking-widest">Kendi Dönüşümünü Ekle</span>
            </button>
          </div>
        );

      case 'ogren':
        return (
          <div className="p-4 space-y-6 animate-in fade-in duration-500">
            <div className={`rounded-[40px] p-8 overflow-hidden relative shadow-2xl transition-all ${darkMode
                ? 'bg-gradient-to-br from-indigo-900 via-violet-900 to-slate-900 text-white'
                : 'bg-gradient-to-br from-blue-600 to-indigo-700 text-white shadow-blue-500/30'
              }`}>
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-bold uppercase tracking-widest mb-4">
                  Eğitim Modülü
                </span>
                <h2 className="text-4xl font-black mb-3 tracking-tight">Akademi</h2>
                <p className="opacity-90 text-sm font-medium leading-relaxed max-w-[80%]">Uzmanlar tarafından hazırlanan içeriklerle farkındalığını artır.</p>
              </div>
              <Info size={200} className="absolute -right-12 -bottom-12 opacity-10 rotate-12" />
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[80px] rounded-full mix-blend-overlay" />
            </div>

            <div className="grid grid-cols-1 gap-4">
              <InfoCard
                title="Siber Zorbalık"
                subtitle="Dijital Güvenlik"
                desc="Çevrimiçi dünyada sınırlarını koru ve güvende kal."
                icon={<Zap />}
                colorClass="text-amber-400"
                darkMode={darkMode}
              />
              <InfoCard
                title="Sözel Zorbalık"
                subtitle="Etkili İletişim"
                desc="Kelimelerin gücünü doğru kullanmayı öğren."
                icon={<MessageCircle />}
                colorClass="text-emerald-400"
                darkMode={darkMode}
              />
              <InfoCard
                title="Psikolojik Zorbalık"
                subtitle="Duygusal Zeka"
                desc="Zihinsel dayanıklılığını artır ve güçlen."
                icon={<Star />}
                colorClass="text-rose-400"
                darkMode={darkMode}
              />
            </div>
          </div>
        );

      case 'profil':
        const progressPercent = (userStats.xp / userStats.nextLevelXp) * 100;
        const circumference = 2 * Math.PI * 52; // r=52
        const strokeDashoffset = circumference - (progressPercent / 100) * circumference;

        return (
          <div className="p-4 space-y-6 animate-in fade-in duration-500 pb-24">
            {/* Profile Header Card */}
            <div className={`relative rounded-[40px] p-8 overflow-hidden shadow-2xl ${darkMode
                ? 'bg-gradient-to-tr from-violet-900 to-indigo-900'
                : 'bg-gradient-to-tr from-indigo-500 to-purple-600'
              }`}>
              {/* Background Decor */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2" />

              <div className="relative z-10 flex flex-col items-center">
                <div className="relative mb-6">
                  {/* Progress Circle SVG */}
                  <div className="w-32 h-32 relative">
                    <svg className="w-full h-full transform -rotate-90">
                      <circle
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        r="52"
                        cx="64"
                        cy="64"
                        className="text-black/20"
                      />
                      <circle
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        r="52"
                        cx="64"
                        cy="64"
                        className="text-white transition-all duration-1000 ease-out"
                        strokeDasharray={circumference}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white text-indigo-900 p-3 rounded-2xl shadow-lg">
                        <Trophy size={32} />
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-indigo-500 text-white text-[10px] font-bold px-3 py-1 rounded-full border border-white/20 whitespace-nowrap shadow-lg">
                    Seviye {userStats.level}
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-white mb-1">{userStats.title}</h2>
                <p className="text-indigo-200 text-xs font-medium uppercase tracking-widest mb-6">
                  {userStats.xp} / {userStats.nextLevelXp} XP
                </p>

                {/* Mini Stats */}
                <div className="flex gap-4 w-full justify-center">
                  <div className="bg-black/20 backdrop-blur-md rounded-2xl p-3 flex-1 text-center border border-white/10">
                    <p className="text-2xl font-black text-white">{userStats.storiesRead}</p>
                    <p className="text-[9px] text-indigo-200 uppercase tracking-wider">Hikaye</p>
                  </div>
                  <div className="bg-black/20 backdrop-blur-md rounded-2xl p-3 flex-1 text-center border border-white/10">
                    <p className="text-2xl font-black text-white">{userStats.gamesPlayed}</p>
                    <p className="text-[9px] text-indigo-200 uppercase tracking-wider">Oyun</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Badges Section */}
            <div>
              <h3 className={`text-lg font-bold mb-4 flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
                <Award size={20} className="text-indigo-500" />
                Rozetlerin
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {userStats.badges.map(badge => (
                  <div key={badge.id} className={`p-4 rounded-3xl border flex items-center gap-4 transition-all ${darkMode
                      ? (badge.unlocked ? 'bg-[#1e1b2e] border-indigo-500/30' : 'bg-[#1a1825]/50 border-white/5 opacity-50 grayscale')
                      : (badge.unlocked ? 'bg-white border-indigo-100 shadow-lg shadow-indigo-100/50' : 'bg-slate-50 border-slate-100 opacity-60 grayscale')
                    }`}>
                    <div className={`w-10 h-10 rounded-2xl flex items-center justify-center ${badge.unlocked ? 'bg-indigo-500 text-white shadow-lg shadow-indigo-500/30' : 'bg-slate-200 text-slate-400'
                      }`}>
                      {badge.icon}
                    </div>
                    <div>
                      <h4 className={`text-xs font-bold ${darkMode ? 'text-slate-200' : 'text-slate-900'}`}>{badge.name}</h4>
                      <span className={`text-[9px] font-medium uppercase tracking-wider ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>
                        {badge.unlocked ? 'Kazanıldı' : 'Kilitli'}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Activity Chart Mockup */}
            <div className={`p-6 rounded-[32px] border ${darkMode ? 'bg-[#1e1b2e] border-white/5' : 'bg-white border-slate-100 shadow-lg shadow-slate-200/50'}`}>
              <div className="flex justify-between items-end mb-6">
                <div>
                  <h3 className={`text-lg font-bold mb-1 ${darkMode ? 'text-white' : 'text-slate-900'}`}>Haftalık Aktivite</h3>
                  <p className={`text-xs ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>Son 7 gün performansı</p>
                </div>
                <TrendingUp className="text-emerald-500" size={24} />
              </div>
              <div className="flex items-end justify-between gap-2 h-24">
                {[40, 70, 30, 85, 50, 65, 90].map((h, i) => (
                  <div key={i} className="w-full flex flex-col justify-end gap-2 group">
                    <div
                      className={`w-full rounded-lg transition-all duration-1000 ${darkMode ? 'bg-indigo-500/20 group-hover:bg-indigo-500' : 'bg-indigo-100 group-hover:bg-indigo-500'}`}
                      style={{ height: `${h}%` }}
                    ></div>
                  </div>
                ))}
              </div>
              <div className="flex justify-between mt-3 text-[10px] font-bold uppercase text-slate-500">
                <span>Pzt</span><span>Sal</span><span>Çar</span><span>Per</span><span>Cum</span><span>Cmt</span><span>Paz</span>
              </div>
            </div>

          </div>
        );

      default: return null;
    }
  };

  return (
    <div className={`min-h-screen font-sans flex flex-col max-w-[480px] mx-auto shadow-2xl overflow-hidden transition-colors duration-700 relative ${darkMode ? 'bg-[#0f0e13] text-slate-200' : 'bg-[#fafafa] text-slate-800'
      }`}>
      {/* Background Ambience */}
      <div className={`fixed inset-0 pointer-events-none transition-opacity duration-1000 ${darkMode ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute top-[-10%] left-[-20%] w-[500px] h-[500px] rounded-full bg-violet-900/20 blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-20%] w-[500px] h-[500px] rounded-full bg-indigo-900/20 blur-[100px]" />
      </div>

      {notification && (
        <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[100] animate-in slide-in-from-top-4 fade-in duration-300">
          <div className={`flex items-center gap-4 px-6 py-4 rounded-2xl shadow-2xl border backdrop-blur-xl ${darkMode ? 'bg-indigo-900/80 border-indigo-500/30' : 'bg-white/90 border-indigo-100'
            }`}>
            <div className={`p-2 rounded-xl ${darkMode ? 'bg-indigo-500' : 'bg-indigo-100 text-indigo-600'}`}>
              {notification.type === 'levelup' ? <Trophy size={20} className="animate-bounce" /> : <Zap size={20} />}
            </div>
            <div>
              <h4 className={`text-sm font-bold ${darkMode ? 'text-white' : 'text-slate-900'}`}>{notification.title}</h4>
              <p className={`text-xs ${darkMode ? 'text-indigo-200' : 'text-slate-500'}`}>{notification.message}</p>
            </div>
          </div>
        </div>
      )}

      {/* Header */}
      <header className={`relative z-50 px-6 pt-12 pb-4 flex justify-between items-center transition-all duration-500 ${darkMode ? 'bg-[#0f0e13]/80 backdrop-blur-xl border-b border-white/5' : 'bg-white/80 backdrop-blur-xl border-b border-slate-100'
        }`}>
        <div>
          <div className="flex items-center gap-2 mb-1">
            <div className={`w-2 h-2 rounded-full ${darkMode ? 'bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.5)]' : 'bg-green-500'}`} />
            <span className={`text-[10px] font-bold uppercase tracking-[0.2em] ${darkMode ? 'text-slate-500' : 'text-slate-400'}`}>AI Powered</span>
          </div>
          <h1 className={`text-2xl font-black tracking-tighter flex items-center gap-2 ${darkMode ? 'text-white' : 'text-slate-900'}`}>
            DÖNÜŞÜM
            <span className={`text-3xl ${darkMode ? 'text-violet-500' : 'text-indigo-600'}`}>.</span>
          </h1>
        </div>
        <button
          onClick={toggleDarkMode}
          className={`p-3 rounded-full transition-all active:scale-90 hover:rotate-12 ${darkMode
              ? 'bg-white/5 text-yellow-300 hover:bg-white/10 hover:shadow-[0_0_15px_rgba(253,224,71,0.2)]'
              : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
        >
          {darkMode ? <Sun size={20} fill="currentColor" className="opacity-90" /> : <Moon size={20} />}
        </button>
      </header>

      {/* Main Content */}
      <main className="relative z-10 flex-1 overflow-y-auto no-scrollbar pb-32 pt-2">
        {renderTabContent()}
      </main>

      {/* Navigation */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-[440px] z-50">
        <nav className={`rounded-[32px] p-2 flex items-center justify-between transition-all duration-500 shadow-2xl ${darkMode
            ? 'bg-[#1a1825]/90 border border-white/10 shadow-black/50 backdrop-blur-xl'
            : 'bg-white/90 border border-white/20 shadow-indigo-900/10 backdrop-blur-xl'
          }`}>
          <NavButton active={activeTab === 'anlat'} onClick={() => setActiveTab('anlat')} icon={<PlusCircle />} label="Anlat" darkMode={darkMode} />
          <NavButton active={activeTab === 'topluluk'} onClick={() => setActiveTab('topluluk')} icon={<Users />} label="Topluluk" darkMode={darkMode} />
          <NavButton active={activeTab === 'ogren'} onClick={() => setActiveTab('ogren')} icon={<Info />} label="Akademi" darkMode={darkMode} />
          <NavButton active={activeTab === 'profil'} onClick={() => setActiveTab('profil')} icon={<User />} label="Profil" darkMode={darkMode} />
        </nav>
      </div>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label, darkMode }) => {
  return (
    <button
      onClick={onClick}
      className={`relative flex-1 group flex flex-col items-center justify-center p-3 rounded-[24px] transition-all duration-300 ${active
          ? ''
          : 'hover:bg-black/5 dark:hover:bg-white/5'
        }`}
    >
      {active && (
        <span className={`absolute inset-0 rounded-[24px] transition-all duration-300 ${darkMode ? 'bg-violet-600 shadow-[0_0_20px_rgba(124,58,237,0.3)]' : 'bg-indigo-600 shadow-lg shadow-indigo-200'
          }`} />
      )}
      <div className={`relative z-10 transition-all duration-300 ${active
          ? 'text-white -translate-y-0.5'
          : (darkMode ? 'text-slate-500 group-hover:text-slate-300' : 'text-slate-400 group-hover:text-slate-600')
        }`}>
        {React.cloneElement(icon, { size: 24, strokeWidth: active ? 2.5 : 2 })}
      </div>
      {active && (
        <span className="absolute bottom-2 w-1 h-1 rounded-full bg-white animate-pulse" />
      )}
    </button>
  );
};

const ActionButton = ({ onClick, disabled, icon, label, darkMode, variant }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className={`group relative h-14 rounded-2xl flex items-center justify-center gap-3 font-bold text-xs uppercase tracking-wider overflow-hidden transition-all duration-300 transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed ${variant === 'primary'
        ? (darkMode ? 'bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-900/20' : 'bg-gradient-to-r from-indigo-500 to-blue-500 text-white shadow-lg shadow-indigo-200')
        : (darkMode ? 'bg-white/5 hover:bg-white/10 text-white border border-white/10' : 'bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 shadow-sm')
      }`}
  >
    <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
    <span className="relative z-10">{icon}</span>
    <span className="relative z-10">{label}</span>
  </button>
);

const Badge = ({ text, color, darkMode }) => {
  const styles = {
    indigo: darkMode ? 'bg-indigo-500/10 text-indigo-300 border-indigo-500/20' : 'bg-indigo-50 text-indigo-600 border-indigo-100',
    emerald: darkMode ? 'bg-emerald-500/10 text-emerald-300 border-emerald-500/20' : 'bg-emerald-50 text-emerald-600 border-emerald-100',
  };

  return (
    <span className={`px-2.5 py-1 rounded-lg text-[10px] font-bold uppercase tracking-widest border ${styles[color] || styles.indigo}`}>
      {text}
    </span>
  );
};

const InfoCard = ({ title, subtitle, desc, icon, colorClass, darkMode }) => {
  return (
    <div className={`p-5 rounded-[28px] border transition-all duration-300 hover:scale-[1.02] group ${darkMode
        ? 'bg-[#1e1b2e] border-white/5 hover:border-white/10'
        : 'bg-white border-slate-100 hover:border-indigo-100 shadow-sm hover:shadow-md'
      }`}>
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-2xl ${darkMode ? 'bg-white/5' : 'bg-slate-50'} ${colorClass}`}>
          {React.cloneElement(icon, { size: 24 })}
        </div>
        <div>
          <span className={`text-[10px] font-bold uppercase tracking-widest block mb-1 opacity-60 ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>
            {subtitle}
          </span>
          <h4 className={`text-base font-bold mb-1 ${darkMode ? 'text-slate-200' : 'text-slate-800'}`}>
            {title}
          </h4>
          <p className={`text-xs leading-relaxed ${darkMode ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
        </div>
      </div>
    </div>
  );
};

export default App;
