import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo(1).png";

const aboutLinks = [
  { label: "Principal's Message", path: "/about/principals-message" },
  { label: "Management", path: "/about/management" },
  { label: "Faculty", path: "/about/faculty" },
];

const facilityLinks = [
  { label: "Library", path: "/facilities/library" },
  { label: "Laboratory", path: "/facilities/laboratory" },
  { label: "Transportation", path: "/facilities/transportation" },
  { label: "Hostel", path: "/facilities/hostel" },
];

const courseLinks = [
  { label: "PCMB", path: "/courses/pcmb" },
  { label: "PCMCs", path: "/courses/pcmcs" },
];

const resultLinks = [
  { label: "2022-2023", path: "/results/2022-2023" },
  { label: "2021-2022", path: "/results/2021-2022" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null); // desktop
  const [mobileOpen, setMobileOpen] = useState({});       // mobile toggles
  const location = useLocation();

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "About Us", path: "/about", dropdown: "about", links: aboutLinks },
    { label: "Courses", path: "/courses", dropdown: "courses", links: courseLinks },
    { label: "Results", path: "#", dropdown: "results", links: resultLinks },
    { label: "Facilities", path: "/facilities", dropdown: "facilities", links: facilityLinks },
    { label: "Events", path: "/events" },
    { label: "Contact Us", path: "/contact" },
  ];

  const isActive = (link) => {
    if (link.path === "/") return location.pathname === "/";
    return location.pathname.startsWith(link.path);
  };

  const DropdownMenu = ({ links }) => (
    <div className="absolute top-full left-0 bg-white shadow-lg border-t-2 border-[#1a9dbd] min-w-[200px] py-1 z-50">
      {links.map((item) => (
        <Link
          key={item.label}
          to={item.path}
          className={`flex items-center gap-2 px-4 py-2.5 text-sm font-semibold hover:text-[#1a9dbd] hover:bg-gray-50 tracking-wide uppercase transition-colors ${
            location.pathname === item.path ? "text-[#1a9dbd]" : "text-gray-700"
          }`}
          style={{ fontFamily: "Raleway,sans-serif" }}
          onClick={() => setOpenDropdown(null)}
        >
          <span className="text-gray-400">›</span> {item.label}
        </Link>
      ))}
    </div>
  );

  const ChevronDown = ({ open }) => (
    <svg className={`w-3 h-3 mt-0.5 transition-transform ${open ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
    </svg>
  );

  const navClass = (active) =>
    `flex items-center gap-1 font-bold uppercase tracking-wider transition-colors duration-200 text-base ${
      active ? "text-[#1a9dbd]" : "text-gray-800 hover:text-[#1a9dbd]"
    }`;

  return (
    <header className="sticky top-0 z-50 shadow-sm">
      {/* Top Bar */}
      <div className="bg-[#1a9dbd] text-white">
        <div className="max-w-7xl mx-auto text-xs py-1.5 px-4 flex justify-between items-center">
          <span className="font-semibold tracking-wide">Recognized by Government of Karnataka</span>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="text-white hover:text-blue-200">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white px-6 py-3">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            {/* <div className="w-16 h-16 rounded-full border-4 border-[#1a9dbd] flex items-center justify-center bg-[#1a2e3b] flex-shrink-0">
              <svg viewBox="0 0 40 40" fill="none" className="w-10 h-10">
                <rect width="40" height="40" fill="#8B4513" rx="4"/>
                <path d="M8 32L20 8L32 32" stroke="#FFD700" strokeWidth="2" fill="none"/>
                <circle cx="20" cy="12" r="4" fill="#FFD700"/>
              </svg>
            </div>
            <div>
              <span className="text-[#1a9dbd] font-black text-2xl tracking-wide block leading-tight" style={{ fontFamily: "Raleway,sans-serif" }}>BRILLIANT PU</span>
              <span className="text-[#1a9dbd] font-black text-2xl tracking-wide" style={{ fontFamily: "Raleway,sans-serif" }}>COLLEGE</span>
            </div> */}
             <div>
                  <img src={logo}
                   alt="Principal" className="w-[270px] h-auto object-contain" />
                </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) =>
              link.dropdown ? (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setOpenDropdown(link.dropdown)}
                  onMouseLeave={() => setOpenDropdown(null)}
                >
                  <Link to={link.path} className={navClass(isActive(link))}>
                    {link.label} <ChevronDown open={openDropdown === link.dropdown} />
                  </Link>
                  {openDropdown === link.dropdown && <DropdownMenu links={link.links} />}
                </div>
              ) : (
                <Link key={link.label} to={link.path} className={navClass(isActive(link))}>
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700 mb-1.5"></div>
            <div className="w-6 h-0.5 bg-gray-700"></div>
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t shadow-lg">
          {navLinks.map((link) => (
            <div key={link.label}>
              <div className="flex items-center justify-between border-b border-gray-100">
                <Link
                  to={link.path}
                  className="flex-1 px-6 py-3 font-bold uppercase tracking-wide text-gray-800 text-sm"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                  onClick={() => { if (!link.dropdown) setMenuOpen(false); }}
                >
                  {link.label}
                </Link>
                {link.dropdown && (
                  <button
                    className="px-4 py-3 text-gray-500"
                    onClick={() => setMobileOpen(prev => ({ ...prev, [link.dropdown]: !prev[link.dropdown] }))}
                  >
                    <svg className={`w-4 h-4 transition-transform ${mobileOpen[link.dropdown] ? "rotate-180" : ""}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
              {link.dropdown && mobileOpen[link.dropdown] && link.links.map((sub) => (
                <Link
                  key={sub.label}
                  to={sub.path}
                  className="block px-10 py-2.5 text-sm text-gray-600 font-semibold hover:text-[#1a9dbd] bg-gray-50 border-b border-gray-100 uppercase tracking-wide"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                  onClick={() => setMenuOpen(false)}
                >
                  › {sub.label}
                </Link>
              ))}
            </div>
          ))}
        </div>
      )}

      {/* Floating Side Buttons */}
      <div className="fixed right-0 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-1">
        <a href="tel:+919448220421" className="bg-[#1a9dbd] text-white p-2.5 block hover:bg-[#158aa6] transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </a>
        <a href="https://www.facebook.com/BrilliantPUCollege/" target="_blank" rel="noreferrer" className="bg-[#1877f2] text-white p-2.5 block hover:bg-blue-600 transition-colors">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
          </svg>
        </a>
      </div>
    </header>
  );
}