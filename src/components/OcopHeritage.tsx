import { useState } from "react";
import { CURATED_OCOP_PRODUCTS } from "../data";
import { Product } from "../types";
import { ShoppingBag, ChevronRight, X, Heart, Eye, ArrowRight, Phone, Award, ShieldCheck, Tag } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function OcopHeritage() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cartState, setCartState] = useState<{ [id: string]: number }>({});
  const [successMsg, setSuccessMsg] = useState("");

  const formatPrice = (p: number) => {
    return p.toLocaleString("vi-VN") + " ₫";
  };

  const handleOrderCoop = (product: Product) => {
    // Emphasizing the direct-to-coop local connection model of VYSAP 2.0
    setSuccessMsg(`Yêu cầu của bạn đã được chuyển thẳng tới đại diện ${product.origin}. Chúng tôi sẽ liên hệ lại ngay!`);
    setTimeout(() => {
      setSuccessMsg("");
    }, 5000);
  };

  return (
    <div id="ocop-heritage-container" className="bg-[#fcfaf5] text-[#1c1917] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-emerald-800 uppercase tracking-widest bg-emerald-50 px-3.5 py-1 rounded-full font-bold">
            Curated OCOP Heritage
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
            Sàn Giao Dịch Đặc Sản Di Sản OCOP
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Nơi tập tuyển những sản phẩm nông tác thượng hạng từ các Hợp tác xã bản địa bản xứ. Không có trung gian bóc lột, bảo lưu 100% bản sắc địa phương địa lý.
          </p>
        </div>

        {/* Global connection success toast */}
        {successMsg && (
          <div className="fixed bottom-6 right-6 z-50 bg-[#1b3425] text-white p-4 rounded-xl shadow-2xl border border-amber-400 max-w-sm animate-slide-in" id="coop-toast">
            <p className="text-xs font-mono text-amber-300 font-bold mb-1">📞 KẾT NỐI HỢP TÁC XÃ THÀNH CÔNG</p>
            <p className="text-xs text-[#fdfbf7] leading-relaxed">{successMsg}</p>
          </div>
        )}

        {/* Dynamic Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CURATED_OCOP_PRODUCTS.map((prod) => (
            <div 
              key={prod.id} 
              id={`product-card-${prod.id}`}
              className="bg-white rounded-2xl overflow-hidden shadow-md border border-stone-150 flex flex-col hover:shadow-lg transition-transform hover:-translate-y-1"
            >
              {/* Product Image Panel */}
              <div className="relative aspect-square overflow-hidden bg-stone-100">
                <img 
                  src={prod.imageUrl} 
                  alt={prod.name} 
                  className="w-full h-full object-cover transition duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute top-3 left-3 bg-stone-900/85 backdrop-blur text-white text-[10px] font-mono uppercase tracking-widest px-2.5 py-1 rounded">
                  {prod.category}
                </span>
                
                <div className="absolute top-3 right-3 bg-white/95 text-emerald-950 text-[10px] font-bold px-2 py-1 rounded shadow flex items-center gap-1">
                  <Award className="h-3.5 w-3.5 text-amber-500" /> OCOP
                </div>
              </div>

              {/* Product Brief Description Panel */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <p className="text-[11px] font-mono text-stone-500 leading-none truncate">{prod.origin}</p>
                  <h3 className="font-sans font-bold text-stone-900 text-sm sm:text-base leading-tight hover:text-emerald-800 transition">
                    {prod.name}
                  </h3>
                  <p className="text-stone-600 text-xs line-clamp-3 leading-relaxed">
                    {prod.story}
                  </p>
                </div>

                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-base font-bold text-[#b45309]">{formatPrice(prod.price)}</span>
                  <button 
                    onClick={() => setSelectedProduct(prod)}
                    className="p-1.5 py-1.5 text-xs text-white bg-[#1b3425] hover:bg-emerald-950 rounded-lg flex items-center gap-1 font-semibold"
                    id={`btn-view-story-${prod.id}`}
                  >
                    <Eye className="h-3 w-3" /> Xem Di Sản
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DETAILED DI SẢN OCOP OVERLAY STORY MODAL */}
        <AnimatePresence>
          {selectedProduct && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
              id="product-story-modal"
            >
              <motion.div 
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                className="bg-[#fcfaf5] text-stone-900 rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl relative border border-stone-150 flex flex-col lg:flex-row max-h-[90vh]"
              >
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 z-10 bg-black/60 text-white hover:bg-black p-2 rounded-full shadow"
                  id="btn-close-modal"
                >
                  <X className="h-5 w-5" />
                </button>

                {/* Left Side: Product Image & Specs (5 cols equivalent) */}
                <div className="lg:w-2/5 relative bg-stone-100 flex flex-col">
                  <div className="aspect-[4/5] sm:aspect-square lg:aspect-auto lg:h-[350px] w-full overflow-hidden">
                    <img 
                      src={selectedProduct.imageUrl} 
                      alt={selectedProduct.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Detailed specs */}
                  <div className="p-5.5 bg-stone-900 text-white flex-1 overflow-y-auto min-h-[170px]">
                    <h4 className="text-xs text-amber-400 font-mono tracking-widest uppercase mb-3 font-bold flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4" /> THƯ MỤC MINH BẠCH SỐ
                    </h4>
                    
                    <div className="space-y-2 text-xs">
                      {Object.entries(selectedProduct.specs).map(([key, val]) => (
                        <div key={key} className="flex justify-between border-b border-white/10 pb-1.5 last:border-0 last:pb-0">
                          <span className="text-stone-400 font-mono">{key}</span>
                          <span className="font-semibold text-right max-w-[65%]">{val}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side: Deep Storytelling, Process & Contact Connection */}
                <div className="lg:w-3/5 p-6 sm:p-8 overflow-y-auto max-h-[85vh] lg:max-h-[90vh] space-y-6">
                  <div>
                    <span className="text-[10px] font-mono text-[#b45309] uppercase tracking-widest bg-amber-50 px-2 py-0.5 rounded-full font-bold">
                      {selectedProduct.category}
                    </span>
                    <h2 className="text-xl sm:text-2xl font-extrabold text-stone-900 mt-2 font-sans tracking-tight">
                      {selectedProduct.name}
                    </h2>
                    <p className="text-[#1b3425] text-xs font-mono font-bold mt-1.5">{selectedProduct.origin}</p>
                  </div>

                  {/* Cultrual Story block */}
                  <div className="prose text-stone-700 text-xs sm:text-sm leading-relaxed space-y-3.5">
                    <p className="font-serif italic text-stone-600 bg-stone-50 p-4 rounded-xl border-l-4 border-amber-500">
                      "{selectedProduct.story}"
                    </p>
                  </div>

                  {/* Production process */}
                  <div className="space-y-3">
                    <h3 className="text-xs font-mono tracking-widest text-[#b45309] uppercase font-bold">🎯 QUY TRÌNH CANH TÁC TRUYỀN THỐNG</h3>
                    <div className="space-y-2.5">
                      {selectedProduct.process.map((step, sIdx) => (
                        <div key={sIdx} className="flex items-start text-xs text-stone-600 leading-normal">
                          <span className="bg-emerald-50 text-emerald-800 h-5 w-5 font-mono font-bold rounded-full flex items-center justify-center shrink-0 mr-2.5 mt-0.5">
                            {sIdx + 1}
                          </span>
                          <span>{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Local Community value */}
                  <div className="bg-emerald-50/55 p-4 rounded-xl border border-emerald-100 space-y-1.5">
                    <h4 className="text-xs font-mono text-emerald-800 font-bold uppercase tracking-wider flex items-center gap-1.5">
                      🍁 Giá Trị Văn Hóa Bản Địa
                    </h4>
                    <p className="text-stone-600 text-xs leading-relaxed">
                      {selectedProduct.culturalValue}
                    </p>
                  </div>

                  {/* Purchase actions representing VYSAP 2.0 direct connector */}
                  <div className="pt-4 border-t border-stone-200 flex items-center justify-between flex-wrap gap-4">
                    <div>
                      <p className="text-[11px] text-stone-400 uppercase font-mono">Bán lẻ hỗ trợ xã viên</p>
                      <span className="text-lg sm:text-xl font-bold text-[#b45309]">{formatPrice(selectedProduct.price)}</span>
                    </div>

                    <div className="flex gap-2">
                      <button 
                        onClick={() => handleOrderCoop(selectedProduct)}
                        className="bg-[#1b3425] text-white px-5 py-3 rounded-xl text-xs font-bold hover:bg-emerald-900 transition flex items-center gap-1.5"
                      >
                        <Phone className="h-3.5 w-3.5" />
                        <span>Kết Nối HTX Thu Mua Sỉ</span>
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
