import { useState, useRef, useEffect } from "react";
import { GLOCAL_MAP_COOPERATIVES } from "../data";
import { Cooperative } from "../types";
import { MapPin, Phone, Users, Calendar, Award, Building2, HelpCircle, Eye, Info } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function GlocalConnect() {
  const [selectedCoop, setSelectedCoop] = useState<Cooperative>(GLOCAL_MAP_COOPERATIVES[0]);
  const [hoveredCoop, setHoveredCoop] = useState<Cooperative | null>(null);
  
  // Responsive dimensions tracking for the schematic map aspect ratios
  const [containerWidth, setContainerWidth] = useState(400);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const observer = new ResizeObserver((entries) => {
      for (const entry of entries) {
        setContainerWidth(entry.contentRect.width);
      }
    });
    observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div id="glocal-connect-container" className="bg-[#fcfaf5] text-[#1c1917] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#b45309] uppercase tracking-widest bg-amber-50 px-3.5 py-1 rounded-full font-bold">
            Glocal Connect
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
            Bản Đồ Số Hệ Sinh Thái Hợp Tác Xã VYSAP
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Hệ đồ tích hợp kết nối thông tin trực quan vị trí nương rẫy, thông số nhân khẩu sinh hoạt và đặc sản OCOP của các đối tác đồng cam nghiệp vụ bản địa.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Schematic SVG map (5 cols equivalent) */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-stone-150 shadow-sm flex flex-col justify-between" ref={containerRef}>
            <div>
              <h3 className="font-sans font-bold text-base text-stone-900 mb-2 flex items-center gap-1.5">
                <MapPin className="h-5 w-5 text-emerald-800" /> Hệ Đồ Cơ Bản Địa Lý Tây Bắc - Đông Bắc
              </h3>
              <p className="text-stone-500 text-xs mb-6">Bà con nhấn trực tiếp lên các điểm chốt định vị màu sắc để đọc dữ liệu di sản.</p>
            </div>

            {/* Vietnam Schematic SVG Container */}
            <div className="relative border border-stone-100 rounded-xl bg-stone-50/70 p-4 flex items-center justify-center min-h-[380px] overflow-hidden">
              {/* Vietnam map lines background placeholder */}
              <div className="absolute inset-0 opacity-10 pointer-events-none flex items-center justify-center font-serif text-8xl font-black text-[#1b3425]">
                VN
              </div>

              {/* Graphic map drawing coordinates */}
              <svg 
                className="w-full max-w-[280px] h-[340px]" 
                viewBox="103 18 4 6" // Zoom into Northern regional coordinates for higher fidelity
                preserveAspectRatio="xMidYMid meet"
              >
                {/* Simplified border outline paths */}
                <path 
                  d="M103.5 19 L104 18.5 L104.5 19 L105 18.2 L105.8 19 L105.6 20 L106 20.5 L105.5 21 L105.2 22 L104.8 21.5 L104.2 22.2 L103.8 21 L103.5 19 Z" 
                  fill="#1b3425" 
                  fillOpacity="0.08" 
                  stroke="#1b3425" 
                  strokeWidth="0.03" 
                  strokeDasharray="0.1"
                />

                {/* Cooperative GPS map markers */}
                {GLOCAL_MAP_COOPERATIVES.map((coop) => {
                  const isHovered = hoveredCoop?.id === coop.id;
                  const isSelected = selectedCoop.id === coop.id;
                  
                  // Scale coordinates fitting inside SVG viewport bounds 
                  const markerY = 19 + (23.5 - coop.latitude) * 0.95;
                  const markerX = 103.5 + (coop.longitude - 104) * 0.82;

                  return (
                    <g 
                      key={coop.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedCoop(coop)}
                      onMouseEnter={() => setHoveredCoop(coop)}
                      onMouseLeave={() => setHoveredCoop(null)}
                      id={`map-pin-${coop.id}`}
                    >
                      {/* Anchor Glow Circle */}
                      <circle 
                        cx={markerX} 
                        cy={markerY} 
                        r={isSelected ? 0.35 : isHovered ? 0.28 : 0.15} 
                        fill={isSelected ? "#b45309" : "#10b981"} 
                        opacity={isSelected ? "0.45" : "0.25"}
                        className="transition-all duration-300"
                      />
                      {/* Actual pin head */}
                      <circle 
                        cx={markerX} 
                        cy={markerY} 
                        r={isSelected ? 0.16 : 0.08} 
                        fill={isSelected ? "#b45309" : "#1b3425"} 
                        stroke="#ffffff"
                        strokeWidth="0.03"
                        className="transition-all duration-300"
                      />
                    </g>
                  );
                })}
              </svg>

              {/* Float popover instruction showing coordinates under cursor */}
              <div className="absolute bottom-3 left-3 bg-stone-900/90 text-white p-2.5 rounded text-[10px] space-y-1 backdrop-blur max-w-[170px]" id="map-telemetry">
                <p className="font-mono text-amber-300 uppercase tracking-widest font-bold">KÝ HIỆU HỆ ĐỒ:</p>
                <div className="flex items-center gap-1.5 text-[9px] text-stone-300">
                  <span className="h-2 w-2 rounded-full bg-amber-600 block" />
                  <span>Hoạt động chủ chốt</span>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] text-stone-300">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 block" />
                  <span>Vệ tinh liên đoàn</span>
                </div>
              </div>
            </div>

            {/* List button shortcut selectors for mobile or fast selection */}
            <div className="mt-4 pt-4 border-t border-stone-100 flex flex-wrap gap-2">
              {GLOCAL_MAP_COOPERATIVES.map((coop) => (
                <button
                  key={coop.id}
                  onClick={() => setSelectedCoop(coop)}
                  className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase transition ${
                    selectedCoop.id === coop.id
                      ? "bg-[#1b3425] text-white"
                      : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                  }`}
                >
                  📍 {coop.province}
                </button>
              ))}
            </div>
          </div>

          {/* Right Column: Information Sheet of selected Cooperative (7 cols equivalent) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            
            {/* Main Detail Sheet */}
            <div className="bg-white p-6 sm:p-8 rounded-2xl border border-stone-150 shadow-sm flex-1 space-y-6" id="coop-detail-sheet">
              <div className="flex justify-between items-start border-b border-stone-100 pb-5 flex-wrap gap-4">
                <div>
                  <span className="bg-[#b45309]/10 text-[#b45309] px-2.5 py-0.5 rounded font-mono text-[10px] uppercase font-bold tracking-wider">
                    Đối Tác Hệ Sinh Thái VYSAP
                  </span>
                  <h2 className="font-sans text-xl sm:text-2xl font-extrabold text-stone-900 mt-2 leading-tight">
                    {selectedCoop.name}
                  </h2>
                  <p className="text-emerald-800 text-xs font-mono font-bold mt-1.5">Khu vực: Tỉnh {selectedCoop.province}</p>
                </div>

                <div className="flex items-center gap-1 text-[11px] font-mono text-stone-500 bg-stone-50 px-2.5 py-1 rounded border border-stone-100">
                  <Calendar className="h-4 w-4 text-emerald-800" /> Thành lập {selectedCoop.established}
                </div>
              </div>

              {/* Storytelling block of HTX */}
              <div className="space-y-2">
                <h4 className="text-xs text-stone-400 uppercase font-mono tracking-wider flex items-center gap-1.5">
                  <Info className="h-4 w-4 text-emerald-700" /> SƠ THUẬT LỊCH SỬ BẢN ĐỊA
                </h4>
                <p className="text-stone-700 text-xs sm:text-sm leading-relaxed font-sans">
                  {selectedCoop.story}
                </p>
              </div>

              {/* Grid of details members representative, main product */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 flex items-start gap-3">
                  <div className="bg-[#1b3425]/10 text-[#1b3425] p-2.5 rounded-lg shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono block leading-none">Social Leader / Đại diện</span>
                    <strong className="text-xs sm:text-sm text-stone-900 block mt-1.5">{selectedCoop.representative}</strong>
                  </div>
                </div>

                <div className="bg-stone-50 p-4 rounded-xl border border-stone-100 flex items-start gap-3">
                  <div className="bg-[#1b3425]/10 text-[#1b3425] p-2.5 rounded-lg shrink-0">
                    <Users className="h-5 w-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-stone-400 font-mono block leading-none">Xã viên liên đoàn</span>
                    <strong className="text-xs sm:text-sm text-stone-900 block mt-1.5">{selectedCoop.memberCount} hộ dân bản xứ</strong>
                  </div>
                </div>
              </div>

              {/* Main OCOP showcase from this HTX */}
              <div className="bg-amber-50/45 p-4 rounded-xl border border-amber-200/50 flex justify-between items-center flex-wrap gap-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-[#b45309] uppercase tracking-wider block">NÔNG SẢN THẾ MẠNH DUY NHẤT</span>
                  <div className="flex items-center gap-1 text-xs font-bold text-stone-900">
                    <Award className="h-4 w-4 text-amber-500 shrink-0" />
                    <span>{selectedCoop.mainProduct}</span>
                  </div>
                </div>

                {/* Direct calling mock connect */}
                <a 
                  href={`tel:${selectedCoop.phone}`}
                  className="bg-stone-900 text-white hover:bg-stone-800 px-4 py-2 rounded-lg text-xs font-bold font-mono tracking-wider flex items-center gap-1"
                >
                  <Phone className="h-3.5 w-3.5 text-amber-400" />
                  <span>{selectedCoop.phone}</span>
                </a>
              </div>
            </div>

            {/* General context info */}
            <div className="bg-emerald-950 text-emerald-100 p-6 rounded-2xl border border-emerald-900 shadow relative overflow-hidden">
              <h3 className="font-sans font-bold text-sm text-amber-300 mb-1">MẬT SỐ KẾT NỐI GLOCAL</h3>
              <p className="text-stone-300 text-[11px] leading-relaxed">
                VYSAP cam kết chia sẻ hoàn trả toàn bộ quyền năng nông tác. Mỗi định vị HTX được hỗ trợ cấu hình máy chủ đám mây, xây dựng tài liệu storytelling hoàn trả nguyên bản và đóng khung QR code chứng nhận di sản.
              </p>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
