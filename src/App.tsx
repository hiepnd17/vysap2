import { useState } from "react";
import Navbar from "./components/Navbar";
import HeroStory from "./components/HeroStory";
import GlocalAcademy from "./components/GlocalAcademy";
import OcopHeritage from "./components/OcopHeritage";
import ConsultingHub from "./components/ConsultingHub";
import ThanhBachBooks from "./components/ThanhBachBooks";
import GlocalConnect from "./components/GlocalConnect";
import { Leaf, Info, MessageSquare, Phone, MapPin, EyeOff } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("hero");

  return (
    <div className="min-h-screen bg-[#fcfaf5] text-stone-900 font-sans flex flex-col justify-between">
      <div>
        {/* Navigation Head */}
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Dynamic Section Contents with animations */}
        <main className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              {activeTab === "hero" && <HeroStory />}
              {activeTab === "academy" && <GlocalAcademy />}
              {activeTab === "heritage" && <OcopHeritage />}
              {activeTab === "experts" && <ConsultingHub />}
              {activeTab === "books" && <ThanhBachBooks />}
              {activeTab === "connect" && <GlocalConnect />}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>

      {/* Sustainable Craft Footer */}
      <footer className="bg-[#15281d] text-white border-t border-[#254531] py-12 px-4 sm:px-6 lg:px-8 mt-auto" id="app-footer">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-4 md:col-span-2">
            <div className="flex items-center space-x-2.5">
              <div className="bg-[#b45309] p-1.5 rounded text-white">
                <Leaf className="h-5 w-5" />
              </div>
              <span className="font-bold text-lg tracking-wider">VYSAP 2.0</span>
            </div>
            
            <p className="text-xs text-[#a7f3d0] max-w-sm leading-relaxed">
              Hệ sinh thái Tri thức & Sản phẩm Nông nghiệp Bền vững. Đồng hành nâng cao vị thế di sản nông sản địa phương bằng tri thức glocal và lòng thấu cảm chân thành.
            </p>
            <p className="text-[10px] text-stone-400 font-mono">
              © 2026 VYSAP Vietnam. bảo lưu toàn bộ giá trị văn hóa bản địa.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#f59e0b] font-bold">HỆ CHUỖI SITEMAP</h4>
            <div className="space-y-1.5 text-xs text-stone-300">
              <button onClick={() => setActiveTab("hero")} className="block hover:text-white hover:underline transition">Trang chủ / Sứ giả</button>
              <button onClick={() => setActiveTab("academy")} className="block hover:text-white hover:underline transition">Học viện Glocal (LMS)</button>
              <button onClick={() => setActiveTab("heritage")} className="block hover:text-white hover:underline transition">Sàn Di sản OCOP</button>
              <button onClick={() => setActiveTab("experts")} className="block hover:text-white hover:underline transition">Góc chuyên gia</button>
              <button onClick={() => setActiveTab("books")} className="block hover:text-white hover:underline transition">Tủ sách Thanh bạch</button>
              <button onClick={() => setActiveTab("connect")} className="block hover:text-white hover:underline transition">Glocal Connect Map</button>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-mono text-xs uppercase tracking-widest text-[#f59e0b] font-bold">TƯ QUÁC VYSAP 2.0</h4>
            <div className="space-y-2 text-xs text-stone-300 leading-normal">
              <p className="flex items-center gap-1.5">
                <Info className="h-4 w-4 shrink-0 text-[#a7f3d0]" />
                <span>Sứ mệnh: Phụng sự di sản nông tác</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MessageSquare className="h-4 w-4 shrink-0 text-[#a7f3d0]" />
                <span>Hotline: 0982.345.xxx</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4 shrink-0 text-[#a7f3d0]" />
                <span>Văn phòng: Hà Giang - Yên Bái - Hoà Bình</span>
              </p>
            </div>
          </div>

        </div>
      </footer>
    </div>
  );
}
