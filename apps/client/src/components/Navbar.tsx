import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { useIsMobile } from "../hooks/use-mobile";
const logoImage = '/images/2135abd8723dc81edc9e85faf50aaf699dee149d.png';

interface NavbarProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export function Navbar({
  currentPage,
  setCurrentPage,
}: NavbarProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTeamDropdown, setShowTeamDropdown] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      // On mobile, always keep the navbar visible (sticky behaviour)
      if (isMobile) {
        setIsVisible(true);
        return;
      }
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setIsVisible(false);
        setIsMenuOpen(false);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobile]);


  const navItems = [
  { id: "about", label: "About" },
  { id: "pillars", label: "Pillars" },
  {
    id: "our-team",
    label: "Our Team",
    dropdown: [
      { id: "office-bearers", label: "Office Bearers" },
      { id: "executive-members", label: "Executive Members" },
      { id: "members", label: "Members" }
    ]
  },
  { id: "events", label: "Events" },
  { id: "benefits", label: "Benefits" },
  { id: "faq", label: "FAQ" },
  { id: "gallery", label: "Gallery" },
];

  const handleNavClick = (pageId: string) => {
    if (pageId === "pillars") {
      setCurrentPage("pillars");
      setIsMenuOpen(false);
      setTimeout(() => {
        const pillarsElement = document.getElementById("core-pillars");
        if (pillarsElement) {
          const y = pillarsElement.getBoundingClientRect().top + window.pageYOffset - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);
      return;
    }
    const targetPage = pageId === "about" ? "home" : pageId;
    setCurrentPage(targetPage);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav
      className={`${isVisible ? "translate-y-0" : "-translate-y-full"} fixed w-full top-0 z-[9999] transition-transform duration-500 bg-[#0F172A] font-sans`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <button
            onClick={() => handleNavClick("home")}
            className="transition-opacity hover:opacity-80"
          >
            <img
              src={logoImage}
              alt="KTPOA Logo"
              className="h-11 w-auto"
            />
          </button>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center justify-center absolute left-1/2 -translate-x-1/2 gap-8">
  {navItems.map((item) => {

    if (item.dropdown) {
      return (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setShowTeamDropdown(true)}
          onMouseLeave={() => setShowTeamDropdown(false)}
        >
          <button
  className={`flex items-center gap-1 text-sm font-semibold ${
    ["office-bearers", "executive-members", "members"].includes(currentPage)
      ? "text-white"
      : "text-slate-300 hover:text-white"
  }`}
>
            {item.label}
            <ChevronDown size={16} />
          </button>

          {showTeamDropdown && (
            <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl overflow-hidden">
              {item.dropdown.map((subItem) => (
                <button
                  key={subItem.id}
                  onClick={() => handleNavClick(subItem.id)}
                  className="block w-full text-left px-4 py-3 text-sm text-slate-700 hover:bg-slate-100"
                >
                  {subItem.label}
                </button>
              ))}
            </div>
          )}
        </div>
      );
    }

    const isActive =
  (item.id === "about" && currentPage === "home") ||
  currentPage === item.id ||
  (
    item.id === "our-team" &&
    ["office-bearers", "executive-members", "members"].includes(currentPage)
  );

    return (
      <button
        key={item.id}
        onClick={() => handleNavClick(item.id)}
        className={`relative text-sm font-semibold transition-all duration-200 pb-1.5 ${
          isActive
            ? "text-white"
            : "text-slate-300 hover:text-white"
        }`}
      >
        {item.label}
        {isActive && (
          <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-white rounded-full" />
        )}
      </button>
    );
  })}
</div>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick("registration")}
            className="px-6 py-2 bg-[#EAB308] hover:bg-[#FACC15] text-[#0F172A] font-bold rounded-md text-sm transition-all duration-200 shadow-sm"
          >
            Join KTPOA
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
      <div className="lg:hidden bg-[#0F172A] border-t border-white/10 absolute top-[72px] left-0 w-full z-[9999]">
          <div className="px-4 py-4 space-y-1">
            {navItems.map((item) => {

  if (item.dropdown) {
    return (
      <div key={item.id}>
        <div className="px-4 py-3 text-white font-semibold">
          {item.label}
        </div>

        {item.dropdown.map((subItem) => (
          <button
            key={subItem.id}
            onClick={() => handleNavClick(subItem.id)}
            className="block w-full text-left pl-8 py-2 text-slate-300 hover:text-white"
          >
            {subItem.label}
          </button>
        ))}
      </div>
    );
  }

  const isActive =
    (item.id === "about" && currentPage === "home") ||
    currentPage === item.id;

  return (
    <button
      key={item.id}
      onClick={() => handleNavClick(item.id)}
      className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium ${
        isActive
          ? "bg-white/10 text-white"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      {item.label}
    </button>
  );
})}
            <div className="pt-3">
              <button
                onClick={() => handleNavClick("registration")}
                className="w-full px-4 py-3 bg-[#EAB308] hover:bg-[#FACC15] text-[#0F172A] font-bold rounded-md text-sm transition-all"
              >
                Join KTPOA
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}