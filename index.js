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
  Moon, 
  Sun,
  PenTool,
  Trophy,
  Filter,
  Eye,
  Smile,
  Send,
  Zap,
  X,
  MessageCircle,
  ShieldCheck,
  ChevronDown,
  Lightbulb,
  AlertCircle,
  PlayCircle,
  FileText,
  Target,
  UserX,
  ZapOff,
  LogIn,
  UserPlus,
  ArrowRight,
  Star,
  Layers,
  Fingerprint,
  User,
  LogOut,
  Home,
  ExternalLink,
  Plus,
  Mail,
  Lock,
  ArrowLeft,
  Github,
  Chrome,
  Share2,
  TrendingUp,
  BrainCircuit,
  Compass,
  Briefcase,
  Quote,
  ShieldAlert,
  HelpCircle,
  CheckCircle2,
  BookCopy,
  Scale
} from 'lucide-react';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [view, setView] = useState('welcome'); 
  const [activeTab, setActiveTab] = useState('anlat');
  const [darkMode, setDarkMode] = useState(true); 
  const [story, setStory] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisType, setAnalysisType] = useState(null); 
  const [filterType, setFilterType] = useState('all'); 
  const [expandedAcademy, setExpandedAcademy] = useState(null);
  const [expandedWork, setExpandedWork] = useState(null);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [dailyTipIndex, setDailyTipIndex] = useState(0);

  // --- DATA ---
  const dailyTips = [
    "Sessiz kalmak onaylamak değildir, sadece bir savunma mekanizmasıdır.",
    "Siber dünyada 'Engelle' butonu en güçlü kalkanındır.",
    "Zorbalık senin hatan değil, zorbanın seçimidir.",
    "Küçük bir destek mesajı, birinin dünyasını değiştirebilir."
  ];

  const communityWorks = [
    { 
      id: 1, 
      title: "Sessiz Çığlık: Koridorun Sonu", 
      author: "Elif Demir", 
      type: "story", 
      category: "Okul Zorbalığı", 
      views: "1.2k", 
      likes: 450, 
      time: "2 dk önce",
      preview: "Okul koridorlarında başlayan o sessiz mücadelenin, bir dayanışma hikayesine dönüşümü...", 
      fullContent: "Bu hikaye, zorbalığa uğrayan bir gencin resim yeteneği sayesinde nasıl sesini duyurduğunu ve okuldaki diğer öğrencilerle nasıl bir empati ağı kurduğunu detaylarıyla anlatıyor.",
      aiOverview: "Bu çalışma, sözel zorbalığa karşı 'Sanatsal Direniş' metodunu kullanıyor. Psikolojik dayanıklılık puanı: %85.",
      stats: { empathy: 92, courage: 78, impact: 88 }
    },
    { 
      id: 2, 
      title: "Pixel Guardian", 
      author: "Can Yılmaz", 
      type: "game", 
      category: "Siber Zorbalık", 
      views: "3.5k", 
      likes: 890, 
      time: "15 dk önce",
      preview: "Siber zorbalara karşı dijital kalkanını oluştur ve topluluğu koru!", 
      fullContent: "Oyuncular, kötü niyetli mesajları filtreleyerek ve pozitif topluluk puanları toplayarak seviye atlıyor. Gerçek hayattaki dijital güvenlik kurallarını öğreten bir simülasyon.",
      aiOverview: "Interaktif öğrenme modeli. Kullanıcıların %90'ı siber zorbalık raporlama süreçlerini bu oyunla kavradı.",
      stats: { empathy: 65, courage: 94, impact: 91 }
    },
    { 
      id: 3, 
      title: "İş Yerinde Yeni Sayfa", 
      author: "Mert Ak", 
      type: "story", 
      category: "Mobbing", 
      views: "850", 
      likes: 210, 
      time: "1 saat önce",
      preview: "Ofis içindeki görünmez duvarları yıkmak üzerine bir başarı hikayesi.", 
      fullContent: "Mobbinge maruz kalan bir çalışanın, yasal haklarını öğrenerek ve topluluk desteği alarak kariyerini nasıl koruduğunu anlatıyor.",
      aiOverview: "Kurumsal farkındalık analizi: İş yeri etiği ve sınır koyma üzerine kritik veriler içerir.",
      stats: { empathy: 70, courage: 88, impact: 75 }
    }
  ];

  const academyModules = [
    { 
      id: 1, 
      title: "Siber Zorbalık 101", 
      desc: "Dijital güvenlik ve etik.", 
      icon: ShieldCheck, 
      color: "text-blue-500", 
      details: "İnternet ortamında anonimlik zırhının arkasına saklanan saldırganlara karşı dijital okuryazarlık ve özsavunma stratejileri geliştirme eğitimi.", 
      fullDeep: "Siber zorbalık sadece mesajlardan ibaret değildir; dokslama (kişisel bilgi ifşası), dışlama ve kimlik taklidi gibi yöntemleri de kapsar. Bu modül, dijital ayak izinizi yönetmeyi ve teknolojik platformların raporlama mekanizmalarını en üst düzeyde kullanmayı öğretir.",
      tips: ["Tüm dijital kanıtları (screenshot) tarih ve saatle kaydet", "Asla misilleme yapma, bu saldırganı besler", "Platformun güvenlik ayarlarını 'Yalnızca Arkadaşlar' olarak güncelle"], 
      cases: "Vaka: Sosyal medyada başlatılan karalama kampanyasına karşı yasal süreç ve dijital itibar yönetimi.", 
      resources: ["BTK Güvenli İnternet Rehberi", "Siber Suçlarla Mücadele Protokolleri", "Dijital Etik Kitapçığı"] 
    },
    { 
      id: 2, 
      title: "Sözel Şiddetle Mücadele", 
      desc: "Kelimelerin gücünü kontrol et.", 
      icon: MessageCircle, 
      color: "text-purple-500", 
      details: "Laf sokma, aşağılama ve alaycı söylemleri psikolojik olarak etkisiz kılma teknikleri.", 
      fullDeep: "Sözel şiddet, mağdurun özsaygısını hedef alır. Bu modülde 'Gri Kaya' metodunu kullanarak saldırganın istediği duygusal tepkiyi vermemeyi ve sözlü manipülasyonları 'Ayna Tekniği' ile geri yansıtmayı öğreneceksiniz.",
      tips: ["Sessiz kalmak yerine 'Neden böyle söyledin?' diye sorarak topu ona at", "Göz teması kurarak sakinliğini koru", "Duygusal tepki vermek yerine mantıksal sınırlar çiz"], 
      cases: "Senaryo: İş veya okul ortamında sürekli maruz kalınan 'şaka' maskeli aşağılamalara karşı profesyonel sınır koyma.", 
      resources: ["Şiddetsiz İletişim Rehberi", "Öfke Yönetimi ve Sözlü Özsavunma Podcast", "Atılganlık Eğitimi"] 
    },
    { 
      id: 3, 
      title: "Fiziksel Güvenlik & Alan", 
      desc: "Güvenli alan oluşturma.", 
      icon: Zap, 
      color: "text-amber-500", 
      details: "Fiziksel temas ve tehdit içeren durumlarda çevre bilinci ve kaçınma stratejileri.", 
      fullDeep: "Fiziksel zorbalıkta ilk kural çatışmadan kaçınmak ve güvenli bölgeleri bilmektir. Bu modül, vücut dilinizi kullanarak caydırıcılık yaratmayı, kalabalık alanlarda konumlanmayı ve acil durumlarda yardım isteme protokollerini içerir.",
      tips: ["Güvensiz hissettiğinde her zaman bir yetişkinin veya görevlinin olduğu tarafa yönel", "Fiziksel sınırlarını netleştir (Bana dokunma!)", "Kaçış rotalarını her zaman önceden belirle"], 
      cases: "Rehber: Okul bahçesi veya sokakta fiziksel tehdit hissettiğinizde uygulanacak 5 adımlı güvenli uzaklaşma planı.", 
      resources: ["Kişisel Sınırlar Eğitimi", "Güvenlik Haritalama Uygulaması", "Özsavunma Farkındalığı"] 
    },
    { 
      id: 4, 
      title: "Sosyal Dışlanma & İzolasyon", 
      desc: "Topluluk içinde var olma.", 
      icon: Users, 
      color: "text-teal-500", 
      details: "Gruplar tarafından kasten görmezden gelinme ve yalnızlaştırılma ile başa çıkma.", 
      fullDeep: "Sosyal dışlanma beyinde fiziksel acı ile aynı merkezi uyarır. Bu modülde dışlanmanın yarattığı değersizlik hissini yıkmak için öz-şefkat pratikleri ve grup dinamiğini dışarıdan analiz etme becerileri kazandırılır.",
      tips: ["Kendi ilgi alanlarına göre yeni sosyal çevreler ara", "Grup baskısını fark et ve bireysel değerlerini hatırla", "Yalnızlığın senin eksikliğin değil, grubun tercihi olduğunu kavra"], 
      cases: "Analiz: Bir arkadaş grubundan aniden dışlanan bireyin, bu durumu yeni hobiler ve farklı bir çevreyle başarıya dönüştürmesi.", 
      resources: ["Aidiyet ve Psikoloji Makalesi", "Grup Dinamiği Analiz Kitabı"] 
    },
    { 
      id: 5, 
      title: "Mobbing ve Kurumsal Etik", 
      desc: "Kariyerini ve haklarını koru.", 
      icon: Briefcase, 
      color: "text-rose-500", 
      details: "İş yerinde sistematik psikolojik taciz, yıldırma ve hiyerarşik baskı yönetimi.", 
      fullDeep: "Mobbing ispatlanması zor ama yıkıcı bir süreçtir. Bu modülde mobbingin 45 farklı davranış biçimini (Leymann Envanteri) tanıyacak, kurumsal bildirim yollarını ve hukuki dosya hazırlamayı öğreneceksiniz.",
      tips: ["Yapılan her haksızlığı tarih, saat ve şahitlerle 'Mobbing Günlüğü'ne işle", "İK ile yapacağın görüşmeleri yazılı talep et", "Duygusal sağlığın için profesyonel destek alırken yasal haklarını araştır"], 
      cases: "Vaka: Performans baskısı adı altında yapılan psikolojik tacizin mahkeme aşamasında nasıl ispatlandığı.", 
      resources: ["İş Kanunu Mobbing Maddeleri", "İK Raporlama Şablonu", "Sendikal Destek Rehberi"] 
    },
    { 
      id: 6, 
      title: "Duygusal Dayanıklılık (Resilience)", 
      desc: "İçsel gücü yeniden inşa et.", 
      icon: Heart, 
      color: "text-pink-500", 
      details: "Zorbalık sonrası travmayı yönetme ve psikolojik esneklik kazanma.", 
      fullDeep: "Zorbalık geçse bile izleri kalabilir. Bu modül, 'Travma Sonrası Büyüme' kavramına odaklanarak yaşadıklarınızı bir kurban kimliğinden çıkarıp, hayatta kalan ve güçlenen bir kimliğe dönüştürmeyi hedefler.",
      tips: ["Günlük yazarak duygularını dışa vur", "Zor anlarda 'Nefes Çapası' tekniğini kullan", "Kendini yargılamayı bırak, sen bir savaşçısın"], 
      cases: "Pratik: Olumsuz iç konuşmaları ('Zayıfım', 'Hak ettim') yapıcı ifadelerle ('Zorlukla başa çıkıyorum') değiştirme egzersizi.", 
      resources: ["Meditasyon Ses Kayıtları", "Dayanıklılık Testi", "Psikolojik Destek Portalı"] 
    },
    { 
      id: 7, 
      title: "Zorba Profil Analizi", 
      desc: "Saldırganın psikolojisini anla.", 
      icon: UserX, 
      color: "text-slate-500", 
      details: "Zorbaların neden bu davranışları sergilediğini anlayarak güç dengesini değiştirme.", 
      fullDeep: "Zorbalık genellikle saldırganın kendi güvensizliklerinden ve geçmiş travmalarından kaynaklanır. Bu bilgi, zorbanın eylemlerini kişiselleştirmemenizi sağlar ve ondan korkmak yerine onu bir 'vaka' olarak görmenize yardımcı olur.",
      tips: ["Onun öfkesinin seninle değil, kendisiyle ilgili olduğunu bil", "Güç gösterisini beslememek için tepkisiz kal", "Onu küçültmek yerine, kendi etki alanını büyüt"], 
      cases: "Analiz: Akran zorbalığı yapan çocukların aile yapısı ve yetersizlik hissi üzerine bilimsel veriler.", 
      resources: ["Davranış Bilimleri Makaleleri", "Narsizm ve Empati Eksikliği Paneli"] 
    },
    { 
      id: 8, 
      title: "Hukuk ve Adalet Rehberi", 
      desc: "Yasal haklarını etkin kullan.", 
      icon: Scale, 
      color: "text-emerald-500", 
      details: "TCK ve KVKK kapsamında zorbalığa karşı sahip olduğunuz kanuni yaptırımlar.", 
      fullDeep: "Zorbalık bir suçtur. Bu modülde hakaret, tehdit, özel hayatın gizliliği ihlali ve kişisel verilerin korunması kanunlarını öğreneceksiniz. Şikayet dilekçesi nasıl yazılır, savcılık süreci nasıl işler detaylandırılmaktadır.",
      tips: ["Delilleri karartmadan hemen koruma altına al", "Baroların adli yardım servislerine başvur", "Yasal süreci başlatmaktan çekinme, adalet senin yanında"], 
      cases: "Örnek: Siber ortamda yayılan iftiraya karşı açılan tazminat davası ve sonuçları.", 
      resources: ["Örnek Dilekçe Şablonları", "Adalet Bakanlığı Rehberi", "KVKK Temel Haklar"] 
    },
    { 
      id: 9, 
      title: "Tanık Olma & Müdahale Etme", 
      desc: "Seyirci kalma, destek ol.", 
      icon: Eye, 
      color: "text-indigo-500", 
      details: "Zorbalığa şahit olunduğunda güvenli bir şekilde nasıl müdahale edilir?", 
      fullDeep: "Tanıkların sessizliği zorbanın en büyük yakıtıdır. Bu modül, 'Aktif Tanıklık' bilincini geliştirerek, kurbanın yanında durmanın ve otoriteye raporlamanın grup içindeki etkisini gösterir.",
      tips: ["Olay anında kurbana yaklaş ve onunla konuşarak zorbanın odağını dağıt", "Sakin bir dille durumu yetkiliye bildir", "Asla 'Benimle ilgili değil' diyerek geçme"], 
      cases: "Deney: Bir grup tanığın zorbalığa tepki vermesi durumunda olayın sonlanma hızı analizi.", 
      resources: ["Tanıklık Eğitimi Videosu", "Toplumsal Sorumluluk Rehberi"] 
    },
    { 
      id: 10, 
      title: "Aile & Güven İletişimi", 
      desc: "Yardım isteme sanatını geliştir.", 
      icon: Home, 
      color: "text-orange-500", 
      details: "Ebeveynlere veya aile büyüklere durumu en doğru şekilde aktarma yolları.", 
      fullDeep: "Zorbalığa maruz kalanlar genellikle 'Utanç' hissiyle ailelerine anlatmaktan çekinir. Bu modül, ailenizi suç ortağınız değil, kalkanınız olarak konumlandırmayı ve onlardan profesyonel destek talep etmeyi öğretir.",
      tips: ["Durumu net ve abartısız bir dille anlat", "Hissiyatını paylaşmaktan çekinme (Korkuyorum, üzgünüm)", "Ortak bir çözüm planı talep et"], 
      cases: "Vaka: Okulda dışlanan bir gencin, ailesiyle kurduğu doğru iletişim sayesinde okul değiştirmeden durumu çözmesi.", 
      resources: ["Ebeveyn-Çocuk İletişim Rehberi", "Güven İnşası Pratikleri"] 
    },
  ];

  const theme = {
    dark: { bg: 'bg-[#030508]', card: 'bg-[#0A0F16]', border: 'border-[#16212E]', textPrimary: 'text-[#F1F5F9]', textSecondary: 'text-[#94A3B8]', buttonSecondary: 'bg-[#16212E]' },
    light: { bg: 'bg-[#F8FAFC]', card: 'bg-white', border: 'border-slate-200', textPrimary: 'text-[#1E293B]', textSecondary: 'text-[#64748B]', buttonSecondary: 'bg-slate-100' }
  };

  const currentTheme = darkMode ? theme.dark : theme.light;

  const handleAction = (type) => {
    if (!story.trim()) return;
    setIsAnalyzing(true);
    setAnalysisType(type);
  };

  const filteredWorks = filterType === 'all' ? communityWorks : communityWorks.filter(w => w.type === filterType);

  // --- RENDER FUNCTIONS ---

  const renderLoginScreen = () => (
    <div className={`min-h-screen ${currentTheme.bg} flex flex-col max-w-md mx-auto animate-in slide-in-from-bottom-10 duration-500`}>
      <header className="px-8 pt-14 pb-6">
        <button onClick={() => setView('welcome')} className={`w-12 h-12 rounded-2xl border-2 ${currentTheme.border} ${currentTheme.card} ${currentTheme.textPrimary} flex items-center justify-center active:scale-90 transition-transform`}>
          <ArrowLeft size={20} />
        </button>
      </header>
      <div className="px-9 pt-6 space-y-10">
        <div className="space-y-3">
          <h2 className={`text-4xl font-black tracking-tighter ${currentTheme.textPrimary}`}>Tekrar Hoş Geldin.</h2>
          <p className={`text-sm font-medium ${currentTheme.textSecondary}`}>Dönüşüm yolculuğuna kaldığın yerden devam et. Verilerin anonim olarak saklanır.</p>
        </div>
        <div className="space-y-4">
          <div className="space-y-2">
            <label className={`text-[10px] font-black uppercase tracking-widest px-1 ${currentTheme.textSecondary}`}>E-Posta</label>
            <div className={`flex items-center gap-4 px-6 h-16 rounded-3xl border-2 ${currentTheme.border} ${currentTheme.card}`}>
              <Mail size={18} className="text-blue-500" />
              <input type="email" placeholder="ornek@mail.com" className={`bg-transparent outline-none flex-1 text-sm font-bold ${currentTheme.textPrimary}`} />
            </div>
          </div>
          <div className="space-y-2">
            <label className={`text-[10px] font-black uppercase tracking-widest px-1 ${currentTheme.textSecondary}`}>Şifre</label>
            <div className={`flex items-center gap-4 px-6 h-16 rounded-3xl border-2 ${currentTheme.border} ${currentTheme.card}`}>
              <Lock size={18} className="text-blue-500" />
              <input type="password" placeholder="••••••••" className={`bg-transparent outline-none flex-1 text-sm font-bold ${currentTheme.textPrimary}`} />
            </div>
          </div>
        </div>
        <div className="space-y-4">
          <button onClick={() => {setIsLoggedIn(true); setView('app');}} className="w-full h-16 rounded-3xl bg-blue-600 text-white font-black text-[11px] uppercase tracking-[0.2em] shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Giriş Yap</button>
          <div className="grid grid-cols-2 gap-4">
            <button className={`h-14 rounded-2xl border-2 ${currentTheme.border} ${currentTheme.card} flex items-center justify-center gap-2 ${currentTheme.textPrimary}`}>
              <Chrome size={18} className="text-rose-500" />
              <span className="text-[10px] font-black uppercase">Google</span>
            </button>
            <button className={`h-14 rounded-2xl border-2 ${currentTheme.border} ${currentTheme.card} flex items-center justify-center gap-2 ${currentTheme.textPrimary}`}>
              <Github size={18} className={darkMode ? 'text-white' : 'text-slate-900'} />
              <span className="text-[10px] font-black uppercase">Github</span>
            </button>
          </div>
          <div className={`p-4 rounded-2xl bg-blue-500/5 border border-blue-500/10 flex items-start gap-3`}>
             <ShieldAlert size={16} className="text-blue-500 mt-1 shrink-0" />
             <p className={`text-[10px] leading-relaxed font-bold ${currentTheme.textSecondary}`}>Güvenlik Notu: Hesabın, kişisel verilerini korumak için 256-bit AES şifreleme ile korunmaktadır.</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderWelcomeScreen = () => (
    <div className={`min-h-screen ${currentTheme.bg} flex flex-col max-w-md mx-auto animate-in fade-in duration-700`}>
      <header className="px-8 pt-14 pb-6 flex justify-between items-center backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-2">
           <div className="w-8 h-8 bg-blue-600 rounded-xl flex items-center justify-center text-white"><Zap size={18} fill="white" /></div>
           <h1 className={`text-xl font-black tracking-tighter ${currentTheme.textPrimary}`}>DÖNÜŞÜM</h1>
        </div>
        <button onClick={() => setDarkMode(!darkMode)} className={`p-3 rounded-2xl border ${currentTheme.border} ${currentTheme.card}`}>{darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-blue-600" />}</button>
      </header>
      <div className="px-8 pb-12 space-y-10 overflow-y-auto no-scrollbar">
        <section className="mt-8 space-y-6">
          <div className="flex gap-2">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-[9px] font-black text-blue-500 uppercase tracking-widest">v1.8 AI-CORE</span>
            <span className="px-3 py-1 rounded-full bg-teal-500/10 border border-teal-500/20 text-[9px] font-black text-teal-500 uppercase tracking-widest">Farkındalık</span>
          </div>
          <h2 className={`text-4xl font-black leading-[1.1] tracking-tight ${currentTheme.textPrimary}`}>Hikayeni <span className="text-blue-600">Sanata</span>, Travmanı <span className="text-blue-600">Güce</span> Dönüştür.</h2>
          <p className={`text-[13px] leading-relaxed font-medium ${currentTheme.textSecondary}`}>Gelişmiş yapay zeka desteği ile deneyimlerini iyileştirici bir güce dönüştür. Toplulukla paylaş veya akademi ile bilgini artır.</p>
          
          <div onClick={() => setDailyTipIndex((dailyTipIndex + 1) % dailyTips.length)} className={`${currentTheme.card} ${currentTheme.border} border p-5 rounded-[28px] cursor-pointer active:scale-95 transition-all shadow-lg`}>
             <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                   <div className="w-6 h-6 rounded-lg bg-blue-600/10 text-blue-600 flex items-center justify-center"><Quote size={12} fill="currentColor" /></div>
                   <span className="text-[9px] font-black uppercase tracking-widest text-blue-500">Günün Notu</span>
                </div>
                <HelpCircle size={14} className="text-slate-500" />
             </div>
             <p className={`text-[13px] font-bold italic leading-snug ${currentTheme.textPrimary}`}>"{dailyTips[dailyTipIndex]}"</p>
             <p className="text-[9px] text-slate-500 mt-3 font-bold uppercase tracking-widest animate-pulse">Yeni not için dokun...</p>
          </div>

          <div className="space-y-3 pt-4">
            <button onClick={() => setView(isLoggedIn ? 'app' : 'login')} className="w-full h-16 bg-blue-600 text-white rounded-[28px] font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-3 shadow-xl shadow-blue-900/40 active:scale-95 transition-all">Hemen Başla <ChevronRight size={18} /></button>
            <div className="flex gap-3">
              <button onClick={() => setView('login')} className={`flex-1 h-14 rounded-[22px] border-2 ${currentTheme.border} ${currentTheme.textPrimary} font-black text-[10px] uppercase flex items-center justify-center gap-2`}>Giriş</button>
              <button onClick={() => setView('login')} className={`flex-1 h-14 rounded-[22px] border-2 ${currentTheme.border} ${currentTheme.textPrimary} font-black text-[10px] uppercase flex items-center justify-center gap-2`}>Kayıt</button>
            </div>
          </div>
        </section>

        <section className="space-y-4 pb-10">
           <h3 className={`text-[10px] font-black uppercase tracking-[0.3em] ${currentTheme.textSecondary}`}>Neden Dönüşüm?</h3>
           <div className="grid grid-cols-1 gap-4">
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-2xl bg-indigo-500/10 text-indigo-500 flex items-center justify-center shrink-0"><BrainCircuit size={20} /></div>
                 <div>
                    <h4 className={`text-xs font-black ${currentTheme.textPrimary}`}>AI Destekli İyileşme</h4>
                    <p className={`text-[11px] ${currentTheme.textSecondary}`}>Deneyimlerini analiz eden AI, sana özel başa çıkma stratejileri üretir.</p>
                 </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="w-10 h-10 rounded-2xl bg-rose-500/10 text-rose-500 flex items-center justify-center shrink-0"><ShieldCheck size={20} /></div>
                 <div>
                    <h4 className={`text-xs font-black ${currentTheme.textPrimary}`}>Güvenli Topluluk</h4>
                    <p className={`text-[11px] ${currentTheme.textSecondary}`}>Sadece onaylı üyeler ve moderasyon ekibi ile güvenli bir ortam.</p>
                 </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );

  const renderAppContent = () => {
    switch (activeTab) {
      case 'anlat':
        return (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-right-10 duration-700 pb-32">
            {/* Güzel Dokulu Bilgi Alanı */}
            <div className={`relative overflow-hidden rounded-[32px] p-6 border ${currentTheme.border} ${darkMode ? 'bg-gradient-to-br from-blue-950/40 via-slate-900/40 to-indigo-950/40' : 'bg-gradient-to-br from-blue-50 via-white to-indigo-50'} shadow-inner`}>
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10 flex items-start gap-4">
                    <div className="w-10 h-10 rounded-2xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-lg shadow-blue-900/20">
                        <Sparkles size={20} />
                    </div>
                    <div className="space-y-1">
                        <h4 className={`text-xs font-black uppercase tracking-widest ${currentTheme.textPrimary}`}>Dönüşüm Rehberi</h4>
                        <p className={`text-[11px] font-medium leading-relaxed ${currentTheme.textSecondary}`}>
                            Neler yaşadığını, nasıl hissettiğini detaylıca anlat. Yapay zeka duygularını analiz ederken, anlatın bir sanat eserine veya eğitici bir oyuna evrilecek.
                        </p>
                    </div>
                </div>
            </div>

            <div className={`${currentTheme.card} ${currentTheme.border} rounded-[36px] p-7 border shadow-2xl relative overflow-hidden transition-all duration-500 ${isFocused ? 'ring-4 ring-blue-600/20 scale-[1.01]' : ''}`}>
              {isAnalyzing ? (
                <div className="h-72 flex flex-col items-center justify-center space-y-6 animate-in zoom-in duration-500">
                    <div className="relative">
                        <div className="w-24 h-24 rounded-full border-4 border-blue-600/20 border-t-blue-600 animate-spin"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            {analysisType === 'story' ? <PenTool size={32} className="text-blue-500 animate-bounce" /> : <Gamepad2 size={32} className="text-indigo-500 animate-bounce" />}
                        </div>
                    </div>
                    <div className="text-center">
                        <p className={`text-sm font-black uppercase tracking-widest ${currentTheme.textPrimary}`}>Dönüşüm Başlıyor...</p>
                        <p className={`text-[10px] font-bold ${currentTheme.textSecondary} mt-1`}>AI senin için {analysisType === 'story' ? 'hikaye' : 'oyun'} örüyor.</p>
                    </div>
                    <button onClick={() => setIsAnalyzing(false)} className="px-6 py-2 rounded-xl bg-slate-800/50 text-[10px] font-black uppercase tracking-widest text-slate-400">İptal Et</button>
                </div>
              ) : (
                <div className="animate-in slide-in-from-top-4 duration-500">
                   <div className="relative pt-2 mb-8 group">
                     <textarea 
                        onFocus={() => setIsFocused(true)}
                        onBlur={() => setIsFocused(false)}
                        placeholder="Kalbinden geçenleri buraya yaz..."
                        className={`w-full h-52 rounded-[28px] p-6 border-2 ${currentTheme.border} bg-transparent outline-none text-sm leading-relaxed ${currentTheme.textPrimary} focus:border-blue-600 transition-all duration-300 resize-none`}
                        value={story}
                        maxLength={2000}
                        onChange={(e) => setStory(e.target.value)}
                     />
                     
                     {/* Karakter Sayacı */}
                     <div className="absolute bottom-4 right-6 flex items-center gap-3">
                        <div className={`text-[9px] font-black uppercase tracking-widest ${story.length >= 1800 ? 'text-rose-500' : 'text-slate-500'}`}>
                           {story.length} / 2000
                        </div>
                        <div className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${story.length > 50 ? 'bg-green-500/10 text-green-500' : 'bg-slate-500/10 text-slate-500'}`}>
                           {story.length > 0 ? 'Yazıyor' : 'Hazır'}
                        </div>
                     </div>
                   </div>

                   <div className="flex flex-col gap-4">
                    <button 
                      onClick={() => handleAction('story')} 
                      className="group relative h-16 rounded-3xl font-black text-[11px] uppercase tracking-[0.25em] text-white bg-blue-600 shadow-xl shadow-blue-900/40 active:scale-95 transition-all flex items-center justify-center overflow-hidden"
                    >
                      <span className="group-hover:opacity-0 transition-opacity duration-300 flex items-center gap-3">
                        <Sparkles size={18} /> Hikayeye Dönüştür
                      </span>
                      <div className="absolute inset-0 flex items-center justify-center translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                        <PenTool size={28} className="text-white drop-shadow-lg" />
                      </div>
                    </button>
                    
                    <button 
                      onClick={() => handleAction('game')} 
                      className={`group relative h-16 rounded-3xl font-black text-[11px] uppercase tracking-[0.25em] text-white ${currentTheme.buttonSecondary} active:scale-95 transition-all flex items-center justify-center overflow-hidden`}
                    >
                       <span className="group-hover:opacity-0 transition-opacity duration-300 flex items-center gap-3">
                         <Gamepad2 size={18} /> Oyuna Dönüştür
                       </span>
                       <div className="absolute inset-0 flex items-center justify-center translate-y-12 group-hover:translate-y-0 transition-transform duration-300">
                        <Trophy size={28} className="text-indigo-400 drop-shadow-lg" />
                      </div>
                    </button>
                   </div>
                </div>
              )}
            </div>
            
            <div className="grid grid-cols-2 gap-4">
                <div className={`${currentTheme.card} ${currentTheme.border} border p-5 rounded-3xl flex flex-col gap-3`}>
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/10 text-amber-500 flex items-center justify-center"><Lightbulb size={20} /></div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${currentTheme.textSecondary}`}>Öneri</p>
                    <p className={`text-xs font-bold leading-tight ${currentTheme.textPrimary}`}>Sessiz kalmak değil, sanatı kalkan yapmak seni güçlendirir.</p>
                </div>
                <div className={`${currentTheme.card} ${currentTheme.border} border p-5 rounded-3xl flex flex-col gap-3`}>
                    <div className="w-10 h-10 rounded-2xl bg-teal-500/10 text-teal-500 flex items-center justify-center"><ShieldCheck size={20} /></div>
                    <p className={`text-[10px] font-black uppercase tracking-widest ${currentTheme.textSecondary}`}>Güvenlik</p>
                    <p className={`text-xs font-bold leading-tight ${currentTheme.textPrimary}`}>Tüm paylaşımların %100 anonim ve uçtan uca şifrelidir.</p>
                </div>
            </div>
          </div>
        );

      case 'topluluk':
        return (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-right-10 duration-700 pb-40">
            <div className="flex justify-between items-center px-2">
              <h2 className={`text-2xl font-black tracking-tight ${currentTheme.textPrimary}`}>Keşfet</h2>
              <div className="flex gap-2 bg-slate-800/30 p-1.5 rounded-2xl border border-white/5">
                {['all', 'story', 'game'].map(t => (
                   <button 
                    key={t}
                    onClick={() => setFilterType(t)}
                    className={`px-4 py-2 rounded-xl text-[9px] font-black uppercase transition-all ${filterType === t ? 'bg-blue-600 text-white' : 'text-slate-500'}`}
                   >
                     {t === 'all' ? 'Hepsi' : t === 'story' ? 'Hikaye' : 'Oyun'}
                   </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {filteredWorks.map((work) => (
                <div key={work.id} className={`${currentTheme.card} ${currentTheme.border} rounded-[32px] border overflow-hidden shadow-2xl transition-all`}>
                  <div className="p-7">
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500"><Fingerprint size={18} /></div>
                        <div>
                           <p className={`text-[11px] font-black ${currentTheme.textPrimary}`}>@{work.author}</p>
                           <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">{work.time}</p>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border border-blue-500/30 text-blue-500 bg-blue-500/5`}>
                          {work.type === 'story' ? 'HİKAYE' : 'OYUN'}
                        </span>
                        <span className={`px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest border ${work.type === 'story' ? 'border-purple-500/30 text-purple-500 bg-purple-500/5' : 'border-indigo-500/30 text-indigo-500 bg-indigo-500/5'}`}>
                          {work.category}
                        </span>
                      </div>
                    </div>

                    <h3 className={`text-lg font-bold mb-2 tracking-tight ${currentTheme.textPrimary}`}>{work.title}</h3>
                    <p className={`text-xs mb-5 leading-relaxed ${currentTheme.textSecondary}`}>{work.preview}</p>
                    
                    <div className="flex gap-6 mb-6">
                        <div className="flex items-center gap-2 text-slate-500"><Eye size={14} /> <span className="text-[10px] font-bold tracking-widest">{work.views}</span></div>
                        <div className="flex items-center gap-2 text-slate-500"><Heart size={14} /> <span className="text-[10px] font-bold tracking-widest">{work.likes}</span></div>
                        <div className="flex items-center gap-2 text-blue-500"><TrendingUp size={14} /> <span className="text-[10px] font-bold tracking-widest">%12 Artış</span></div>
                    </div>

                    {expandedWork === work.id && (
                      <div className="mb-6 pt-6 border-t border-slate-800/40 animate-in slide-in-from-top-4 duration-500 space-y-5">
                        <div className="p-5 rounded-2xl bg-blue-600/5 border border-blue-600/10 space-y-3">
                           <div className="flex items-center gap-2 text-blue-500"><BrainCircuit size={16} /> <span className="text-[10px] font-black uppercase tracking-widest">AI Analizi</span></div>
                           <p className={`text-xs leading-relaxed italic ${currentTheme.textPrimary}`}>{work.aiOverview}</p>
                        </div>

                        <div className="grid grid-cols-3 gap-3">
                            <div className="text-center p-3 rounded-xl bg-slate-800/20 border border-white/5">
                                <p className="text-[16px] font-black text-blue-500">%{work.stats.empathy}</p>
                                <p className="text-[8px] font-bold text-slate-500 uppercase">Empati</p>
                            </div>
                            <div className="text-center p-3 rounded-xl bg-slate-800/20 border border-white/5">
                                <p className="text-[16px] font-black text-purple-500">%{work.stats.courage}</p>
                                <p className="text-[8px] font-bold text-slate-500 uppercase">Cesaret</p>
                            </div>
                            <div className="text-center p-3 rounded-xl bg-slate-800/20 border border-white/5">
                                <p className="text-[16px] font-black text-teal-500">%{work.stats.impact}</p>
                                <p className="text-[8px] font-bold text-slate-500 uppercase">Etki</p>
                            </div>
                        </div>

                        <div className="p-4 rounded-2xl border-2 border-dashed border-slate-800/50">
                           <p className={`text-[11px] leading-relaxed ${currentTheme.textSecondary}`}>{work.fullContent}</p>
                        </div>
                      </div>
                    )}

                    <button 
                      onClick={() => setExpandedWork(expandedWork === work.id ? null : work.id)}
                      className={`w-full h-14 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] border-2 ${currentTheme.border} ${currentTheme.textPrimary} active:scale-95 transition-all flex items-center justify-center gap-3`}
                    >
                      {expandedWork === work.id ? 'Daralt' : 'Ayrıntılı İncele'} <ChevronRight size={16} className={expandedWork === work.id ? '-rotate-90' : ''} />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'ogren':
        return (
          <div className="p-6 space-y-6 animate-in fade-in slide-in-from-right-10 duration-700 pb-40">
            <div className={`rounded-[40px] p-10 text-white relative overflow-hidden bg-gradient-to-br from-blue-600 via-indigo-700 to-indigo-950 shadow-2xl shadow-blue-900/30`}>
              <div className="absolute top-0 right-0 opacity-10 pointer-events-none">
                 <div className="w-64 h-64 border-[20px] border-white rounded-full -mr-20 -mt-20"></div>
                 <div className="w-40 h-40 border-[10px] border-white rounded-full -mr-10 -mt-10"></div>
              </div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                    <Compass size={24} className="text-blue-200" />
                    <span className="px-3 py-1 rounded-full bg-white/10 text-[9px] font-black uppercase tracking-widest">Rehber</span>
                </div>
                <h2 className="text-4xl font-black mb-1 tracking-tighter text-white">AKADEMİ</h2>
                <p className="opacity-80 text-[10px] font-bold uppercase tracking-[0.2em] text-white underline decoration-blue-400 decoration-2 underline-offset-4">Seni güçlendirecek 10 derin modül</p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4">
              {academyModules.map(module => {
                const IconComponent = module.icon;
                return (
                  <div 
                      key={module.id} 
                      className={`p-6 rounded-[32px] border shadow-xl transition-all cursor-pointer group ${currentTheme.card} ${currentTheme.border}`} 
                      onClick={() => setExpandedAcademy(expandedAcademy === module.id ? null : module.id)}
                  >
                    <div className="flex items-center gap-5">
                      <div className={`w-14 h-14 rounded-2xl bg-slate-800/10 flex items-center justify-center ${module.color} group-hover:scale-110 transition-transform`}>
                          <IconComponent size={24} />
                      </div>
                      <div className="flex-1">
                        <h4 className={`font-bold text-base tracking-tight ${currentTheme.textPrimary}`}>{module.title}</h4>
                        <p className={`text-[10px] font-medium uppercase tracking-wider ${currentTheme.textSecondary}`}>{module.desc}</p>
                      </div>
                      <ChevronDown size={22} className={`text-slate-600 transition-transform ${expandedAcademy === module.id ? 'rotate-180 text-blue-500' : ''}`} />
                    </div>
                    
                    {expandedAcademy === module.id && (
                      <div className="mt-8 pt-6 border-t border-slate-800/40 animate-in slide-in-from-top-6 duration-500 space-y-8">
                        <div className="space-y-3">
                          <p className={`text-[10px] font-black uppercase tracking-widest text-blue-500 flex items-center gap-2`}><Info size={14} /> Modül Özeti</p>
                          <p className={`text-[13px] leading-relaxed font-bold ${currentTheme.textPrimary}`}>{module.details}</p>
                          <p className={`text-[12px] leading-relaxed ${currentTheme.textSecondary}`}>{module.fullDeep}</p>
                        </div>

                        <div className="grid grid-cols-1 gap-4">
                           <div className="p-5 rounded-2xl bg-teal-500/5 border border-teal-500/10">
                              <p className="text-[9px] font-black uppercase text-teal-500 tracking-widest mb-3 flex items-center gap-2"><Target size={14} /> Kritik Uygulama Adımları</p>
                              <ul className="space-y-3">
                                  {module.tips.map((tip, i) => (
                                    <li key={i} className={`text-[11px] font-bold flex items-start gap-2 ${currentTheme.textPrimary}`}>
                                      <CheckCircle2 size={12} className="mt-0.5 shrink-0 text-teal-500" />
                                      {tip}
                                    </li>
                                  ))}
                              </ul>
                           </div>
                           <div className="p-5 rounded-2xl bg-amber-500/5 border border-amber-500/10">
                              <p className="text-[9px] font-black uppercase text-amber-500 tracking-widest mb-3 flex items-center gap-2"><AlertCircle size={14} /> Vaka Analizi & Senaryo</p>
                              <p className={`text-[11px] italic leading-relaxed ${currentTheme.textSecondary}`}>{module.cases}</p>
                           </div>
                           <div className="p-5 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
                              <p className="text-[9px] font-black uppercase text-indigo-500 tracking-widest mb-3 flex items-center gap-2"><BookCopy size={14} /> Ek Kaynaklar</p>
                              <div className="flex flex-wrap gap-2">
                                {module.resources.map((res, i) => (
                                  <span key={i} className="px-2 py-1 rounded-lg bg-indigo-500/10 text-indigo-500 text-[9px] font-black uppercase">{res}</span>
                                ))}
                              </div>
                           </div>
                        </div>

                        <button className="w-full py-5 bg-blue-600 text-white rounded-2xl text-[11px] font-black uppercase tracking-widest active:scale-95 transition-all shadow-lg shadow-blue-900/20 flex items-center justify-center gap-3">
                           Sınava Gir & Sertifika Al <ArrowRight size={16} />
                        </button>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        );
      default: return null;
    }
  };

  // --- VIEW ROUTER ---
  if (view === 'login') return renderLoginScreen();
  if (view === 'welcome') return renderWelcomeScreen();

  return (
    <div className={`min-h-screen font-sans flex flex-col max-w-md mx-auto shadow-2xl overflow-hidden transition-all duration-1000 ${currentTheme.bg}`}>
      {/* App Header */}
      <header className="px-9 pt-16 pb-6 flex justify-between items-center z-50 sticky top-0 backdrop-blur-md">
        <div onClick={() => setView('welcome')} className="cursor-pointer group flex items-center gap-3">
          <div className="w-10 h-10 rounded-2xl bg-blue-600 flex items-center justify-center text-white shadow-lg shadow-blue-900/40 group-active:scale-90 transition-transform">
             <Home size={20} />
          </div>
          <h1 className={`text-xl font-black tracking-tighter ${currentTheme.textPrimary} uppercase`}>Dönüşüm</h1>
        </div>

        <div className="flex items-center gap-2 relative">
          <button onClick={() => setDarkMode(!darkMode)} className={`w-12 h-12 rounded-[18px] flex items-center justify-center border-2 ${currentTheme.card} ${currentTheme.border} active:scale-95 transition-all`}>
            {darkMode ? <Sun size={20} className="text-amber-400" /> : <Moon size={20} className="text-blue-600" />}
          </button>
          
          <div className="relative">
            <button onClick={() => setShowProfileMenu(!showProfileMenu)} className={`w-12 h-12 rounded-[18px] flex items-center justify-center border-2 border-blue-500/40 bg-blue-500/10 text-blue-500 active:scale-95 transition-all`}>
              <User size={22} />
            </button>
            {showProfileMenu && (
               <div className={`absolute top-14 right-0 w-48 rounded-3xl border-2 p-2 shadow-2xl animate-in fade-in zoom-in-95 duration-200 z-[100] ${currentTheme.card} ${currentTheme.border}`}>
                  <div className="p-4 border-b border-slate-800/40 mb-1">
                    <p className={`text-[10px] font-black uppercase tracking-widest ${currentTheme.textSecondary}`}>Profil</p>
                    <p className={`text-sm font-bold truncate ${currentTheme.textPrimary}`}>Kullanıcı #2841</p>
                  </div>
                  <button onClick={() => setView('welcome')} className={`w-full text-left p-3 rounded-2xl flex items-center gap-3 text-[11px] font-bold text-rose-500 hover:bg-rose-500/10 transition-colors`}>
                    <LogOut size={16} /> Çıkış Yap
                  </button>
               </div>
            )}
          </div>
        </div>
      </header>

      <main className="flex-1 overflow-y-auto no-scrollbar relative">
        {renderAppContent()}
      </main>

      <div className="fixed bottom-9 left-1/2 -translate-x-1/2 w-[92%] max-w-[380px] z-50">
        <nav className={`rounded-[35px] border-2 p-2.5 flex items-center justify-between shadow-2xl backdrop-blur-2xl ${darkMode ? 'bg-[#0A0F16]/85 border-white/5 shadow-black' : 'bg-white/85 border-slate-200'}`}>
          <NavButton active={activeTab === 'anlat'} onClick={() => setActiveTab('anlat')} icon={<PlusCircle />} label="Anlat" darkMode={darkMode} />
          <NavButton active={activeTab === 'topluluk'} onClick={() => setActiveTab('topluluk')} icon={<Compass />} label="Keşfet" darkMode={darkMode} />
          <NavButton active={activeTab === 'ogren'} onClick={() => setActiveTab('ogren')} icon={<BookOpen />} label="Akademi" darkMode={darkMode} />
        </nav>
      </div>
    </div>
  );
};

const NavButton = ({ active, onClick, icon, label, darkMode }) => (
  <button onClick={onClick} className={`group flex items-center justify-center gap-2.5 py-4 px-6 rounded-full transition-all duration-500 flex-1 ${active ? 'bg-blue-600 text-white shadow-2xl shadow-blue-900/50' : (darkMode ? 'text-slate-500 hover:text-slate-300' : 'text-slate-400 hover:text-slate-600')}`}>
    <div className={`transition-transform duration-500 ${active ? 'scale-110' : 'group-hover:scale-110'}`}>{React.cloneElement(icon, { size: 22 })}</div>
    {active && <span className="text-[12px] font-black uppercase tracking-wider animate-in slide-in-from-left-4">{label}</span>}
  </button>
);

export default App;
