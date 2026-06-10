import React, { useState } from "react";
import { INDUSTRY_FELLOWS } from "../data";
import { IndustryFellow } from "../types";
import { Sparkles, Mail, Send, Cpu, Lightbulb, Users, UserPlus, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ConsultingHub() {
  const [fellows, setFellows] = useState<IndustryFellow[]>(INDUSTRY_FELLOWS);
  
  // Fellow recruitment state
  const [recruitName, setRecruitName] = useState("");
  const [recruitRole, setRecruitRole] = useState("");
  const [recruitSpecial, setRecruitSpecial] = useState("");
  const [recruitType, setRecruitType] = useState<"Tư vấn thiết kế" | "Phát triển thị trường" | "Công nghệ thực phẩm" | "Chuyển đổi số">("Tư vấn thiết kế");
  const [recruitBio, setRecruitBio] = useState("");
  const [isSuccessRecruit, setIsSuccessRecruit] = useState(false);

  // Consulting booking state
  const [coopName, setCoopName] = useState("");
  const [coopNeed, setCoopNeed] = useState("Tư vấn thiết kế bao bì");
  const [coopMessage, setCoopMessage] = useState("");
  const [isSuccessMsg, setIsSuccessMsg] = useState(false);

  const handleFellowSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (recruitName.trim() && recruitRole.trim()) {
      const newFellow: IndustryFellow = {
        id: `fellow-${Date.now()}`,
        name: recruitName,
        role: recruitRole,
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200", // Default beautiful avatar placeholder
        bio: recruitBio || "Chuyên gia thấu cảm hỗ trợ bà con nông tác phát triển con chữ bản xứ.",
        specialties: recruitSpecial.split(",").map(s => s.trim()).filter(Boolean),
        connectionType: recruitType
      };

      setFellows(prev => [newFellow, ...prev]);
      setIsSuccessRecruit(true);
      // Clean form
      setRecruitName("");
      setRecruitRole("");
      setRecruitSpecial("");
      setRecruitBio("");
      setTimeout(() => setIsSuccessRecruit(false), 5000);
    }
  };

  const handleConsultSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (coopName.trim() && coopMessage.trim()) {
      setIsSuccessMsg(true);
      setCoopName("");
      setCoopMessage("");
      setTimeout(() => setIsSuccessMsg(false), 5000);
    }
  };

  return (
    <div id="consulting-hub-container" className="bg-[#fcfaf5] text-[#1c1917] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs font-mono text-[#b45309] uppercase tracking-widest bg-amber-50 px-3 py-1 rounded-full font-bold">
            Consulting Hub
          </span>
          <h1 className="font-sans text-3xl sm:text-4xl font-extrabold text-stone-900 mt-2">
            Góc Chuyên Gia & Hội Industry Fellows
          </h1>
          <p className="text-stone-600 text-sm sm:text-base max-w-2xl mx-auto mt-3">
            Hạ tầng kết nối trí tuệ cộng đồng. Chúng tôi cung ứng giải pháp tái thiết bao bì nông sản bản địa, nâng cấp công nghệ thực phẩm và hỗ trợ số hóa quản trị HTX.
          </p>
        </div>

        {/* Consulting services overview cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-stone-150 shadow-sm" id="service-packaging">
            <div className="bg-[#b45309]/10 text-[#b45309] h-11 w-11 rounded-xl flex items-center justify-center mb-4">
              <Lightbulb className="h-6 w-6" />
            </div>
            <h3 className="font-sans font-bold text-base text-stone-900 mb-2">Tư Vấn Thiết Kế Bao Bì</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Giải phóng nông sản khỏi những chiếc túi bóng nilon vô danh. VYSAP xây dựng mẫu mã bao bì cao cấp làm bằng vật liệu chuối dệt kết hợp chỉ dẫn địa lý văn hóa xứ sở để tăng tính cạnh tranh.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-150 shadow-sm" id="service-tech">
            <div className="bg-emerald-800/10 text-emerald-800 h-11 w-11 rounded-xl flex items-center justify-center mb-4">
              <Cpu className="h-6 w-6" />
            </div>
            <h3 className="font-sans font-bold text-base text-stone-900 mb-2">Công Nghệ Sấy Lạnh Bảo Tồn</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Chuyển giao chế biến sâu nông tác dược liệu. Công nghệ sấy thăng hoa và tách ẩm ly tâm lạnh khép kín giúp giữ nguyên lượng khoáng chất quý và giữ màu hương vị thiên nhiên 100%.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-stone-150 shadow-sm" id="service-digital">
            <div className="bg-emerald-950/10 text-emerald-950 h-11 w-11 rounded-xl flex items-center justify-center mb-4">
              <Users className="h-6 w-6" />
            </div>
            <h3 className="font-sans font-bold text-base text-stone-900 mb-2">Chuyển Đổi Số Hợp Tác Xã</h3>
            <p className="text-stone-600 text-xs sm:text-sm leading-relaxed">
              Ứng dụng các biểu mẫu điện tử tinh gọn, mã hóa QR truy vết thông tin hai đầu và thiết lập kế hoạch dòng tiền tự động hóa không cần học thuyết quản trị phức tạp bận lòng.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Column Left: Registered Industry Fellows (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-150" id="fellows-roster">
              <h3 className="font-sans text-lg font-bold text-stone-900 mb-6 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-500" /> Những Người Đồng Hành Thăng Trầm (Industry Fellows)
              </h3>

              <div className="space-y-6">
                {fellows.map((fell) => (
                  <div key={fell.id} className="flex gap-4 items-start border-b border-stone-100 pb-5 last:border-0 last:pb-0">
                    <div className="h-14 w-14 rounded-xl overflow-hidden shrink-0 border border-stone-200">
                      <img src={fell.avatar} alt={fell.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1.5 flex-1">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <h4 className="font-bold text-stone-900 text-sm leading-none">{fell.name}</h4>
                          <span className="text-[10px] text-stone-400 font-mono inline-block mt-1">{fell.role}</span>
                        </div>
                        <span className="text-[9px] font-mono font-bold bg-emerald-50 text-emerald-800 px-2 py-0.5 rounded-full uppercase">
                          {fell.connectionType}
                        </span>
                      </div>
                      <p className="text-stone-600 text-xs leading-relaxed">{fell.bio}</p>
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {fell.specialties.map((spec, sIdx) => (
                          <span key={sIdx} className="text-[10px] font-mono bg-stone-100 text-stone-700 px-2 py-0.5 rounded">
                            #{spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consulting Request Form */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-150" id="consulting-request-box">
              <h3 className="font-sans text-lg font-bold text-stone-900 mb-2 flex items-center gap-2">
                <Mail className="h-5 w-5 text-emerald-800" /> Yêu Cầu Hỗ Trợ Đổi Mới Thương Hiệu HTX
              </h3>
              <p className="text-stone-500 text-xs mb-5">Học viên và Ban quản trị Hợp tác xã gửi trực tiếp mẫu nhu cầu thay đổi bao bì, hỗ trợ sấy hoặc chuyển đổi quản lý.</p>

              <form onSubmit={handleConsultSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wide text-stone-600 mb-1 font-bold">Tên Đại Diện / Tên HTX</label>
                    <input
                      type="text"
                      required
                      placeholder="Ví dụ: HTX Chè Bản San"
                      value={coopName}
                      onChange={(e) => setCoopName(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-800"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono uppercase tracking-wide text-stone-600 mb-1 font-bold">Nhu Cầu Phụng Sự Lớn Nhất</label>
                    <select
                      value={coopNeed}
                      onChange={(e) => setCoopNeed(e.target.value)}
                      className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-[#e5e7eb] focus:outline-none focus:ring-1 focus:ring-emerald-800"
                    >
                      <option>Tư vấn thiết kế bao bì thương hiệu</option>
                      <option>Tăng cường công nghệ sấy sấy khô sâu</option>
                      <option>Học tập chuyên gia Chuyển đổi số</option>
                      <option>Kết nối đầu ra bảo tồn OCOP</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase tracking-wide text-stone-600 mb-1 font-bold">Nội dung chi tiết nhu cầu</label>
                  <textarea
                    required
                    rows={3}
                    placeholder="Hãy mô tả chi tiết sản lượng gieo trồng hiện có và mong ước đổi mới..."
                    value={coopMessage}
                    onChange={(e) => setCoopMessage(e.target.value)}
                    className="w-full px-3 py-2 text-xs sm:text-sm rounded-lg border border-stone-200 focus:outline-none focus:ring-1 focus:ring-emerald-800"
                  />
                </div>

                <div className="flex justify-between items-center flex-wrap gap-4 pt-1">
                  <span className="text-[11px] text-stone-400 font-mono">⚡ Miễn phí hoàn toàn cho đối tác VYSAP</span>
                  <button
                    type="submit"
                    className="bg-[#1b3425] text-white px-5 py-2.5 rounded-lg text-xs font-bold hover:bg-emerald-950 transition flex items-center gap-1.5"
                  >
                    <Send className="h-3.5 w-3.5" /> Gửi Yêu Cầu Chuyên Gia
                  </button>
                </div>
              </form>

              <AnimatePresence>
                {isSuccessMsg && (
                  <motion.div 
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 p-3 bg-emerald-50 text-emerald-800 text-xs rounded-lg flex items-center gap-2"
                  >
                    <CheckCircle className="h-4 w-4 shrink-0 text-emerald-600" />
                    <span>Yêu cầu đổi mới của HTX đã được hệ thống lưu trữ và định hướng tới các Chuyên gia phụ trách chuyên môn tương thích.</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Column Right: Registration to Industry Fellow (5 cols) */}
          <div className="lg:col-span-5 bg-[#1b3425] text-white p-6 sm:p-8 rounded-2xl shadow-md border border-[#2d4d38]" id="fellow-application-box">
            <div className="bg-amber-400 text-stone-900 h-10 w-10 rounded-xl flex items-center justify-center mb-4">
              <UserPlus className="h-5 w-5" />
            </div>

            <h3 className="font-sans text-xl font-bold text-white mb-2">Đăng Ký Tham Gia Mạng Lưới Industry Fellow</h3>
            <p className="text-[#a7f3d0] text-xs leading-relaxed mb-6">
              Bạn là nhà khoa học thực phẩm, kỹ sư công nghệ thông tin hoặc nhà thiết kế đồ họa? Hãy tham gia mạng lưới tình nguyện hiến tặng một phần tri thức kết kết giúp nâng thấu cộng đồng nông thôn Việt Nam phát triển vươn xanh.
            </p>

            <form onSubmit={handleFellowSubmit} className="space-y-4 text-stone-950 font-sans text-xs sm:text-sm">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-stone-300 mb-1.5 font-bold">Họ & Tên Chuyên Gia</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: TS. Vương Quốc Bảo"
                  value={recruitName}
                  onChange={(e) => setRecruitName(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#2d4d38] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-stone-300 mb-1.5 font-bold">Học hàm / Vai Trò Tác Tự</label>
                <input
                  type="text"
                  required
                  placeholder="Ví dụ: Giảng viên Thiết kế đồ họa Mỹ thuật"
                  value={recruitRole}
                  onChange={(e) => setRecruitRole(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#2d4d38] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-stone-300 mb-1.5 font-bold">Chuyên Khoa Tập Kết</label>
                <select
                  value={recruitType}
                  onChange={(e) => setRecruitType(e.target.value as any)}
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#2d4d38] focus:outline-none"
                >
                  <option value="Tư vấn thiết kế">Tư vấn thiết kế bao bì</option>
                  <option value="Phát triển thị trường">Phát triển thị trường tiêu thụ</option>
                  <option value="Công nghệ thực phẩm">Công nghệ thực phẩm nông sản</option>
                  <option value="Chuyển đổi số">Chuyển đổi số nông thôn</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-stone-300 mb-1.5 font-bold">Thế Mạnh Chuyên Môn (Phân tách bằng dấu phẩy)</label>
                <input
                  type="text"
                  placeholder="Ví dụ: Sợi tre thô, QR dynamic, sấy lạnh thấu kính"
                  value={recruitSpecial}
                  onChange={(e) => setRecruitSpecial(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#2d4d38] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wide text-stone-300 mb-1.5 font-bold">Tóm Lược Tiểu Sử Phụng Sự</label>
                <textarea
                  rows={3}
                  placeholder="Tôi mong muốn dùng kinh nghiệm của mình để..."
                  value={recruitBio}
                  onChange={(e) => setRecruitBio(e.target.value)}
                  className="w-full px-3.5 py-2 rounded-lg bg-white border border-[#2d4d38] focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#b45309] text-white py-2.5 rounded-lg text-xs font-bold hover:bg-amber-700 transition uppercase tracking-wide"
              >
                Gửi Đơn Xin Gia Nhập Fellows
              </button>
            </form>

            <AnimatePresence>
              {isSuccessRecruit && (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="mt-4 p-3 bg-amber-400 text-stone-900 border border-amber-500 rounded-lg text-xs font-semibold flex items-center gap-1.5"
                >
                  <CheckCircle className="h-4 w-4 shrink-0" />
                  <span>Cảm ơn Thầy/Cô! Thông tin Chuyên gia đã được bổ nhiệm hiển thị tạm thời trên thư mục Fellows.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </div>
    </div>
  );
}
