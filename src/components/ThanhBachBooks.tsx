import { useState } from "react";
import { THANH_BACH_BOOKS } from "../data";
import { BookArticle } from "../types";
import { BookOpen, Calendar, Clock, Smile, Quote, CornerDownRight, ArrowLeft, AlignLeft, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ThanhBachBooks() {
  const [selectedArticle, setSelectedArticle] = useState<BookArticle | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>("Tất cả");

  const categories = ["Tất cả", "Học tập Bác Hồ", "Triết lý kinh doanh", "Lối sống giản dị"];

  const filteredArticles = activeFilter === "Tất cả" 
    ? THANH_BACH_BOOKS
    : THANH_BACH_BOOKS.filter(art => art.category === activeFilter);

  return (
    <div id="thanh-bach-books-container" className="bg-[#fdfbf7] text-[#1c1917] py-12 px-4 sm:px-6 lg:px-8 min-h-[70vh]">
      <div className="max-w-6xl mx-auto">
        
        <AnimatePresence mode="wait">
          {!selectedArticle ? (
            /* Browse Articles Layout */
            <motion.div
              key="list-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-10"
            >
              {/* Header */}
              <div className="text-center">
                <span className="text-xs font-mono text-[#b45309] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full font-bold">
                  Tủ Sách Thanh Bạch
                </span>
                <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
                  Tủ Sách Thanh Bạch & Triết Lý Sống Giản Dị
                </h1>
                <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
                  Nhặt nhạnh tư duy dung dị, bài học phong cách đạo đức Hồ Chí Minh và tư tưởng nông tác cộng sinh bền vững để an yên mỗi ngày.
                </p>
              </div>

              {/* Tag filters */}
              <div className="flex flex-wrap justify-center gap-2" id="books-filter-bar">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveFilter(cat)}
                    className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide transition ${
                      activeFilter === cat
                        ? "bg-[#1b3425] text-white shadow"
                        : "bg-[#f5ebd6]/65 text-stone-700 hover:bg-[#ebd9bd]"
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Articles Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((art) => (
                  <article 
                    key={art.id}
                    id={`article-card-${art.id}`}
                    onClick={() => setSelectedArticle(art)}
                    className="bg-white rounded-2xl p-6 border border-stone-150 shadow-sm flex flex-col justify-between hover:shadow-md transition cursor-pointer group"
                  >
                    <div className="space-y-3.5">
                      <div className="flex justify-between items-center text-[10px] font-mono text-stone-400">
                        <span className="bg-amber-100 text-[#b45309] px-2 py-0.5 rounded font-bold uppercase">{art.category}</span>
                        <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {art.readingTime}</span>
                      </div>

                      <h3 className="font-serif text-lg font-bold text-stone-900 leading-snug group-hover:text-emerald-800 transition">
                        {art.title}
                      </h3>
                      
                      <p className="text-stone-500 text-xs sm:text-sm line-clamp-3 leading-relaxed">
                        {art.summary}
                      </p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-100 flex items-center justify-between text-xs font-semibold text-stone-700">
                      <span className="text-stone-500">Tác giả: {art.author}</span>
                      <span className="text-emerald-800 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                        Đọc bài <CornerDownRight className="h-3.5 w-3.5" />
                      </span>
                    </div>
                  </article>
                ))}
              </div>
            </motion.div>
          ) : (
            /* Immersive Reader Layout */
            <motion.div
              key="reader-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="max-w-3xl mx-auto bg-[#faf6ee] p-6 sm:p-10 rounded-3xl border border-stone-200/60 shadow-lg space-y-8"
              id="editorial-reader-mode"
            >
              {/* Back actions */}
              <button
                onClick={() => setSelectedArticle(null)}
                className="inline-flex items-center space-x-2 text-stone-500 hover:text-emerald-800 font-semibold text-xs py-1.5"
                id="btn-back-to-library"
              >
                <ArrowLeft className="h-4 w-4" />
                <span>Trở lại thư viện sách</span>
              </button>

              {/* Article metadata header */}
              <div className="space-y-4 border-b border-amber-200/40 pb-6">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest bg-[#1b3425] text-white px-3 py-1 rounded">
                  {selectedArticle.category}
                </span>
                
                <h1 className="font-serif text-2xl sm:text-3.5xl font-extrabold text-[#1c1917] leading-tight">
                  {selectedArticle.title}
                </h1>
                
                <p className="text-stone-600 font-sans text-xs sm:text-sm leading-relaxed font-medium">
                  {selectedArticle.subtitle}
                </p>

                <div className="flex flex-wrap items-center gap-4 text-[11px] text-stone-400 font-mono pt-2">
                  <span className="flex items-center gap-1"><Calendar className="h-3.5 w-3.5" /> {selectedArticle.date}</span>
                  <span>•</span>
                  <span className="flex items-center gap-1"><Clock className="h-3.5 w-3.5" /> {selectedArticle.readingTime}</span>
                  <span>•</span>
                  <span>Người soạn thảo: <strong className="text-[#1c1917]">{selectedArticle.author}</strong></span>
                </div>
              </div>

              {/* Quote highlighting */}
              {selectedArticle.quote && (
                <div className="relative bg-[#ebd9bd]/25 p-5.5 rounded-xl border-l-[6px] border-amber-500">
                  <span className="absolute right-4 top-2 text-amber-500/15 pointer-events-none">
                    <Quote className="h-16 w-16" />
                  </span>
                  <p className="font-serif italic text-stone-800 text-sm leading-relaxed relative z-10">
                    "{selectedArticle.quote}"
                  </p>
                </div>
              )}

              {/* Article body content */}
              <div className="prose prose-stone max-w-none text-stone-800 text-sm sm:text-base leading-relaxed font-serif space-y-4 whitespace-pre-line">
                {selectedArticle.content}
              </div>

              {/* Share/Reaction Footers */}
              <div className="pt-8 border-t border-amber-200/45 flex justify-between items-center text-xs text-stone-500">
                <div className="flex items-center space-x-1">
                  <Smile className="h-4 w-4 text-amber-500" />
                  <span>Kính thưa quý độc giả, hãy sống giản dị tử tế.</span>
                </div>
                
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="bg-[#1b3425] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-emerald-950 transition shadow"
                >
                  Hoàn thành Đọc Sách
                </button>
              </div>

            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
