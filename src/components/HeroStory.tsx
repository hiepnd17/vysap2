import { useState } from "react";
import { HERO_STORY } from "../data";
import { Play, Pause, Volume2, VolumeX, Eye, BookOpen, Quote, Sparkles, HeartHandshake } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function HeroStory() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [activeSegment, setActiveSegment] = useState(0);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const toggleMute = () => setIsMuted(!isMuted);

  return (
    <div id="hero-story-container" className="bg-[#fcfaf5] text-[#1c1917] pb-16">
      {/* Visual Ambient Banner */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#1b3425] to-[#fcfaf5] text-white pt-20 pb-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="absolute inset-0 opacity-15 mix-blend-overlay">
          <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=1200')" }} />
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center space-x-2 bg-emerald-950/45 px-3.5 py-1.5 rounded-full border border-emerald-500/20 mb-6"
          >
            <Sparkles className="h-4 w-4 text-amber-400" />
            <span className="text-xs uppercase font-mono tracking-widest text-[#a7f3d0]">VYSAP 2.0 • SỨ GIẢ THƯƠNG HIỆU</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="font-sans text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight"
          >
            Nâng Tầm Nông Sản Bản Địa Bằng <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-emerald-400">
              Lòng Thấu Cảm
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-base sm:text-lg text-[#d1fae5] font-sans max-w-2xl mx-auto leading-relaxed mb-4"
          >
            "Chúng ta không bán nông sản thô, chúng ta phụng sự di sản và câu chuyện đời sống của hàng triệu đồng bào làng quê Việt."
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Video Storytelling Player (7 cols) */}
          <div className="lg:col-span-7 bg-white p-4 sm:p-5 rounded-2xl shadow-xl border border-stone-100" id="video-narrator-panel">
            <h2 className="text-sm font-mono text-[#b45309] tracking-widest uppercase mb-3 flex items-center gap-1.5">
              <Eye className="h-4 w-4" /> KÍCH HOẠT NĂNG LƯỢNG THẤU CẢM (Văn hóa truyền cảm)
            </h2>
            
            <div className="relative aspect-video rounded-xl bg-black overflow-hidden group shadow-inner">
              {/* Media element with controlled play states */}
              {isPlaying ? (
                <video 
                  id="storytelling-video"
                  src={HERO_STORY.videoUrl}
                  autoPlay
                  loop
                  muted={isMuted}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="absolute inset-0 bg-cover bg-center flex items-center justify-center transition-all duration-500 group-hover:scale-105" 
                  style={{ backgroundImage: "url('https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&q=80&w=800')" }}
                >
                  <div className="absolute inset-0 bg-black/40" />
                </div>
              )}

              {/* Text overlays - simulating subtitles/narratives */}
              <div className="absolute bottom-12 left-4 right-4 bg-black/75 p-3 rounded-lg border border-stone-800 text-center z-10 transition-all">
                <p className="text-xs text-amber-300 font-mono mb-1 uppercase tracking-wider">Nguyễn Đức Hiệp chia sẻ:</p>
                <p className="text-stone-150 text-sm sm:text-base italic leading-relaxed">
                  {activeSegment === 0 && '"Khi tôi khom lưng lách qua lối cửa sập nhà sàn bám đầy bồ hóng, tôi bắt đầu khóc khi thấy nồi chè Shan cổ tự ngút khói..."'}
                  {activeSegment === 1 && '"Rất nhiều HTX không thiếu chất lượng, họ thiếu một cây bút chắt lọc và một chiếc smartphone biết kể chuyện đời..."'}
                  {activeSegment === 2 && '"Tầm nhìn của VYSAP 2.0 là trao cho nương rẫy bản địa sức mạnh tự giải phóng thông qua tri thức mở..."'}
                </p>
              </div>

              {/* Dynamic Video HUD Controls */}
              <div className="absolute inset-0 flex flex-col justify-between p-4 bg-gradient-to-t from-black/50 via-transparent to-black/35 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="flex justify-end">
                  <span className="bg-emerald-600 text-white text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1 rounded">
                    SỨ GIẢ TRUYỀN HÌNH
                  </span>
                </div>

                <div className="flex justify-between items-center bg-black/40 backdrop-blur-md p-2 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <button 
                      onClick={togglePlay}
                      className="p-2 bg-[#b45309] rounded-full text-white hover:bg-amber-600 transition"
                      id="play-button"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </button>
                    <button 
                      onClick={toggleMute}
                      className="text-stone-300 hover:text-white transition"
                      id="mute-button"
                    >
                      {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
                    </button>
                  </div>
                  
                  {/* Segment controller */}
                  <div className="flex space-x-1">
                    {[0, 1, 2].map((idx) => (
                      <button
                        key={idx}
                        onClick={() => setActiveSegment(idx)}
                        className={`w-4 h-2 rounded transition-all duration-300 ${activeSegment === idx ? "w-8 bg-amber-400" : "bg-stone-500"}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Sub-narrative detail */}
            <div className="mt-5 border-t border-stone-100 pt-5">
              <div className="flex items-center space-x-3.5 items-start">
                <div className="h-12 w-12 rounded-full overflow-hidden shrink-0 border-2 border-amber-500/10">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150" 
                    alt="Nguyễn Đức Hiệp" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-stone-900 leading-none">Chuyên Gia Nguyễn Đức Hiệp</h4>
                  <p className="text-xs text-[#b45309] font-mono mt-1">Sứ giả bảo lưu văn hóa - Người sáng lập VYSAP</p>
                  <p className="text-stone-600 text-sm mt-2 leading-relaxed">
                    {HERO_STORY.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Column Right: Journey Timeline & Core Philosophy (5 cols) */}
          <div className="lg:col-span-5 space-y-6" id="philosophy-panel">
            
            {/* Timeline component */}
            <div className="bg-white p-6 rounded-2xl shadow-md border border-stone-100">
              <h3 className="font-sans text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-emerald-800" /> Hành Trình Kiến Tạo
              </h3>
              
              <div className="relative border-l-2 border-emerald-100 ml-2.5 pl-5 space-y-6">
                {HERO_STORY.chapters.map((chap, i) => (
                  <div key={i} className="relative">
                    {/* Circle icon */}
                    <div className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full bg-emerald-800 border-4 border-white flex items-center justify-center shadow" />
                    <div>
                      <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded-full inline-block mb-1">
                        {chap.year}
                      </span>
                      <h4 className="font-sans text-sm font-bold text-stone-900">{chap.title}</h4>
                      <p className="text-stone-600 text-xs mt-1.5 leading-relaxed">{chap.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Absolute Commitment */}
            <div className="bg-gradient-to-br from-[#1b3425] to-[#2d583c] rounded-2xl p-6 text-white shadow-lg relative overflow-hidden">
              <div className="absolute right-0 bottom-0 opacity-10 pointer-events-none transform translate-y-3 translate-x-3">
                <Quote className="h-44 w-44" />
              </div>
              <h3 className="font-sans text-sm font-mono tracking-wider text-amber-300 uppercase mb-4 flex items-center gap-2">
                <HeartHandshake className="h-4 w-4" /> 3 CAM KẾT VỮNG CHÃI TỪ VYSAP 2.0
              </h3>
              
              <div className="space-y-4">
                {HERO_STORY.commitments.map((comm, idx) => (
                  <div key={idx} className="border-b border-white/10 pb-3 last:border-0 last:pb-0">
                    <h4 className="text-sm font-bold text-white flex items-center space-x-1.5">
                      <span className="text-amber-300">#0{idx+1}</span>
                      <span>{comm.title}</span>
                    </h4>
                    <p className="text-stone-200 text-xs mt-1 leading-relaxed">{comm.desc}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
