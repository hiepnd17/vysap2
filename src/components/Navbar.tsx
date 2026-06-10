import { useState } from "react";
import { Leaf, Menu, X, BookOpen, MapPin, Award, ShoppingBag, ShieldCheck } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function Navbar({ activeTab, setActiveTab }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: "hero", label: "CÂU CHUYỆN SỨ GIẢ", icon: Leaf },
    { id: "academy", label: "HỌC VIỆN GLOCAL", icon: Award },
    { id: "heritage", label: "SÀN DI SẢN OCOP", icon: ShoppingBag },
    { id: "experts", label: "GÓC CHUYÊN GIA", icon: ShieldCheck },
    { id: "books", label: "TỦ SÁCH THANH BẠCH", icon: BookOpen },
    { id: "connect", label: "GLOCAL CONNECT", icon: MapPin },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-[#1b3425] text-[#fdfbf7] shadow-md border-b border-[#2d4d38]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo Brand */}
          <div 
            onClick={() => { setActiveTab("hero"); setIsOpen(false); }}
            className="flex items-center space-x-3 cursor-pointer group"
            id="vysap-logo"
          >
            <div className="bg-[#b45309] p-2 rounded-lg transition-transform group-hover:scale-105">
              <Leaf className="h-6 w-6 text-[#fdfbf7]" />
            </div>
            <div>
              <span className="font-sans text-xl font-bold tracking-wider text-white">VYSAP <span className="text-[#f59e0b]">2.0</span></span>
              <p className="text-[10px] text-[#a7f3d0] font-mono tracking-tight uppercase">Sức Sống Nông Nghiệp Bản Địa</p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex space-x-1" id="desktop-menu">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  id={`nav-item-${item.id}`}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-1.5 px-3 py-2 rounded-md text-xs font-semibold tracking-wide uppercase transition-all duration-300 ${
                    isActive
                      ? "bg-[#b45309] text-white shadow-sm"
                      : "text-[#d1fae5] hover:bg-[#254531] hover:text-white"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[#d1fae5] hover:text-white hover:bg-[#254531] focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-[#15281d] border-t border-[#254531] px-2 pt-2 pb-4 space-y-1 sm:px-3 animate-fade-in" id="mobile-menu">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                id={`mobile-nav-item-${item.id}`}
                onClick={() => {
                  setActiveTab(item.id);
                  setIsOpen(false);
                }}
                className={`flex items-center space-x-3 w-full px-4 py-3 rounded-md text-sm font-medium tracking-wide uppercase ${
                  isActive
                    ? "bg-[#b45309] text-white"
                    : "text-[#d1fae5] hover:bg-[#1e3a27] hover:text-white"
                }`}
              >
                <Icon className="h-5 w-5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>
      )}
    </nav>
  );
}
