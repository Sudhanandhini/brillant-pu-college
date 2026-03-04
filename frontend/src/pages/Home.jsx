import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import banner1 from "../assets/banner.jpg";
import banner2 from "../assets/banner3.jpg";

import gall1 from "../assets/gall1.jpg";
import gall2 from "../assets/gall7.jpg";
import gall3 from "../assets/gall3.jpg";
import gall4 from "../assets/gall8.jpg";
import gall5 from "../assets/gall5.jpg";
import gall6 from "../assets/cafeteria-300x169.jpg";
import gall7 from "../assets/gall11.jpg";
import gall8 from "../assets/gall12.jpg";
import gall9 from "../assets/gall13.jpg";

import img21 from "../assets/psy.jpg";
import img22 from "../assets/che.jpg";
import img23 from "../assets/gall12.jpg";
import img24 from "../assets/gall5.jpg";

import col from "../assets/gall13.jpg"




const heroSlides = [
  { img: banner1, title: "ADMISSION OPEN", subtitle: "2024-2025" },
  { img: banner2, title: "EXCELLENCE IN", subtitle: "EDUCATION" },

];

const quickLinks = [
  { label: "News", color: "bg-[#e91e8c]", to: "/events", icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M20 3H4a1 1 0 00-1 1v14a2 2 0 002 2h14a2 2 0 002-2V4a1 1 0 00-1-1zm-1 15H5V5h14v13zM7 7h10v2H7zm0 4h10v2H7zm0 4h5v2H7z"/></svg> },
  { label: "Events", color: "bg-[#1a9dbd]", to: "/events", icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3h-1V1h-2v2H8V1H6v2H5C3.9 3 3 3.9 3 5v16c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H5V9h14v12zm0-14H5V5h14v2zM7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z"/></svg> },
  { label: "Admission", color: "bg-[#26c6da]", to: "/contact", icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04a1 1 0 000-1.41l-2.34-2.34a1 1 0 00-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/></svg> },
  { label: "Courses", color: "bg-[#4caf50]", to: "/courses", icon: <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 3L1 9l11 6 9-4.91V17h2V9L12 3zm0 12.91L3.18 10.7 12 6.09l8.82 4.61L12 15.91zM1 17v2h22v-2H1z"/></svg> },
];

const latestNews = [
  "Prajavani news paper article dated on 11-08-2020 — click here to view.",
  "Admission open for 2024-25 academic year. Contact: +91-9448220421.",
  "Brilliant PU College achieves 98% pass percentage in 2023-24 board exams.",
  "IIT/NEET coaching classes starting from June 2024. Limited seats available.",
  "Annual Day celebration scheduled — All students and parents are invited.",
];

const programs = [
  { name: "Physics", desc: "Physics is the natural science that studies matter, its motion and behavior through space and time, and the related entities of energy and force.", img: img21 },
  { name: "Chemistry", desc: "Chemistry is the scientific discipline involved with elements and compounds composed of atoms, molecules and ions, their composition, structure, properties and behavior.", img: img22 },
  { name: "Biology", desc: "Biology is the source of real knowledge and understanding of living things. The faculty has very rich back up in various specialized fields in biology.", img: img23 },
  { name: "Computer Science", desc: "The Department is well equipped with state of the art computing facilities with high-end systems and latest software, exclusive Audio-Visual Computer Lab.", img: img24 },
];

/* Gallery images — replace src with your real college photos */
const galleryImages = [
  { src: gall1, alt: "Classroom" },
  { src: gall2, alt: "Campus" },
  { src: gall3, alt: "Students" },
  { src: gall4, alt: "Study" },
  { src: gall5, alt: "Lab" },
  { src: gall6, alt: "Biology Lab" },
 { src: gall7, alt: "Biology Lab" },
 { src: gall8, alt: "Biology Lab" },
 { src: gall9, alt: "Biology Lab" },
 
];

/* ── Lightbox Component ── */
function Lightbox({ images, index, onClose }) {
  const [current, setCurrent] = useState(index);

  const prev = () => setCurrent((c) => (c - 1 + images.length) % images.length);
  const next = () => setCurrent((c) => (c + 1) % images.length);

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") setCurrent((c) => (c - 1 + images.length) % images.length);
      if (e.key === "ArrowRight") setCurrent((c) => (c + 1) % images.length);
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [images.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.85)" }}
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="relative bg-white max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Image */}
        <img
          src={images[current].src}
          alt={images[current].alt}
          className="w-full object-contain max-h-[75vh]"
        />

        {/* Caption */}
        <div className="bg-white px-4 py-2 text-sm text-gray-500">
          Image {current + 1} of {images.length}
        </div>

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center text-2xl transition-colors"
        >‹</button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/70 text-white w-10 h-10 flex items-center justify-center text-2xl transition-colors"
        >›</button>

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute -bottom-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors font-light"
          style={{ lineHeight: 1 }}
        >✕</button>
      </div>
    </div>
  );
}

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [enquiry, setEnquiry] = useState({ name: "", email: "", phone: "", message: "" });
  const [enquiryStatus, setEnquiryStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleEnquiryChange = (e) => setEnquiry({ ...enquiry, [e.target.name]: e.target.value });

  const handleEnquirySubmit = async (e) => {
    e.preventDefault();
    setEnquiryStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...enquiry, subject: "Quick Enquiry from Home Page" }),
      });
      if (res.ok) {
        setEnquiryStatus("success");
        setEnquiry({ name: "", email: "", phone: "", message: "" });
      } else {
        setEnquiryStatus("error");
      }
    } catch {
      setEnquiryStatus("error");
    }
  };

  const goTo = useCallback((index) => {
    if (animating) return;
    setAnimating(true);
    setCurrent(index);
    setTimeout(() => setAnimating(false), 700);
  }, [animating]);

  const prev = () => goTo((current - 1 + heroSlides.length) % heroSlides.length);
  const next = useCallback(() => goTo((current + 1) % heroSlides.length), [current, goTo]);

  useEffect(() => {
    const t = setInterval(() => next(), 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <div>
      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={galleryImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
        />
      )}

      {/* ── Hero Slider ── */}
      <div className="relative h-[380px] md:h-[460px] overflow-hidden select-none">
        {heroSlides.map((slide, i) => (
          <div key={i} className="absolute inset-0 transition-opacity duration-700"
            style={{ opacity: i === current ? 1 : 0, zIndex: i === current ? 1 : 0 }}>
            <img src={slide.img} alt={slide.title} className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0"  />
            <div className="absolute inset-0 flex flex-col justify-center px-10 md:px-16 z-10">
              {/* <div className="bg-[#1a2e3b] text-white text-xs font-bold px-3 py-2 inline-block mb-5 w-fit leading-snug" style={{ fontFamily: "Raleway,sans-serif" }}>
                11 Years<br />of Excellence
              </div> */}
              {/* <h1 className="text-white font-black uppercase leading-tight"
                style={{ fontFamily: "Raleway,sans-serif", fontSize: "clamp(2rem, 5vw, 3.5rem)", textShadow: "0 2px 8px rgba(0,0,0,0.3)" }}>
                {slide.title}<br />{slide.subtitle}
              </h1> */}
            </div>
          </div>
        ))}
        <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/55 text-white w-9 h-9 flex items-center justify-center text-2xl transition-colors">‹</button>
        <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-black/30 hover:bg-black/55 text-white w-9 h-9 flex items-center justify-center text-2xl transition-colors">›</button>
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroSlides.map((_, i) => (
            <button key={i} onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? "w-6 h-2.5 bg-white" : "w-2.5 h-2.5 bg-white/50 hover:bg-white/80"}`} />
          ))}
        </div>
      </div>

      {/* Admission Banner */}
      <div className="bg-[#1a9dbd] text-white text-center py-3">
        <span className="font-bold text-lg tracking-wide" style={{ fontFamily: "Raleway,sans-serif" }}>For Admission:+91-9448220421</span>
      </div>

      {/* Quick Links */}
      <div className="max-w-5xl mx-auto px-4 py-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickLinks.map((q) => (
          <Link key={q.label} to={q.to} className={`${q.color} text-white flex items-center gap-4 px-6 py-5 hover:opacity-90 transition-opacity`}>
            {q.icon}
            <span className="font-bold text-sm uppercase tracking-wider" style={{ fontFamily: "Raleway,sans-serif" }}>{q.label}</span>
          </Link>
        ))}
      </div>

      {/* Welcome + News */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 flex gap-4">
            <img src={col} alt="college" className="w-40 h-36 object-cover flex-shrink-0" />
            <div>
              <h2 className="text-lg font-bold uppercase mb-2 text-gray-800" style={{ fontFamily: "Raleway,sans-serif" }}>Welcome To Brilliant PU College</h2>
              <p className="text-gray-600 text-sm leading-relaxed mb-4">
                Brilliant PU College, the first choice of the best and the brightest, provides a second home to students.
                The students are nurtured here to form the phenomenal human capital. The high school students, who make
                their way into the college portals as young adults, leave as self reliant.
              </p>
              <Link to="/about" className="inline-block bg-[#1a9dbd] text-white text-xs font-bold uppercase tracking-wider px-4 py-2 hover:bg-[#158aa6] transition-colors">Read More</Link>
            </div>
          </div>
          <div>
            <div className="bg-[#4a4a6a] text-white py-2.5 px-4 text-sm font-bold uppercase tracking-wider flex items-center gap-2" style={{ fontFamily: "Raleway,sans-serif" }}>
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full animate-pulse"></span>
              Latest News
            </div>
            <div className="border border-gray-200 overflow-hidden" style={{ height: "140px" }}>
              <marquee direction="up" scrollamount="2" behavior="scroll" className="h-full"
                onMouseOver={e => e.target.stop()} onMouseOut={e => e.target.start()}>
                <div className="pt-3 pb-2 px-4 space-y-3">
                  {latestNews.map((news, i) => (
                    <p key={i} className="text-sm text-gray-600 leading-relaxed border-b border-dashed border-gray-200 pb-3 cursor-pointer hover:text-[#1a9dbd] transition-colors">
                      <span className="text-[#e91e8c] font-bold mr-1">›</span>{news}
                    </p>
                  ))}
                </div>
              </marquee>
            </div>
          </div>
        </div>
      </div>

      {/* Programme */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-6 border-b-2 border-[#1a9dbd] pb-2 inline-block" style={{ fontFamily: "Raleway,sans-serif" }}>Programme</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {programs.map((p) => (
            <div key={p.name}>
              <img src={p.img} alt={p.name} className="w-full h-36 object-cover mb-3" />
              <h3 className="font-bold text-sm uppercase tracking-wider text-gray-800 mb-2" style={{ fontFamily: "Raleway,sans-serif" }}>{p.name}</h3>
              <p className="text-xs text-gray-600 leading-relaxed mb-2">{p.desc}</p>
              <Link to="/facilities/laboratory" className="text-[#1a9dbd] text-xs font-semibold hover:underline">Read More</Link>
            </div>
          ))}
        </div>
      </div>

      {/* Contact Details */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-8 text-center" style={{ fontFamily: "Raleway,sans-serif" }}>Contact Details</h2>
        <div className="flex flex-col md:flex-row justify-center gap-16 mb-10">
          {[
            { icon: "📍", color: "bg-[#e91e8c]", label: "Address", info: "Near Ring Road, Hemavathi Nagar, Hassan" },
            { icon: "📞", color: "bg-[#1a9dbd]", label: "Call", info: "+91-9448220421" },
            { icon: "✉️", color: "bg-[#4caf50]", label: "E-Mail", info: "brilliantpucollege@gmail.com" },
          ].map((c) => (
            <div key={c.label} className="flex flex-col items-center text-center">
              <div className={`${c.color} text-white w-16 h-16 rounded-sm flex items-center justify-center text-2xl mb-3 transform rotate-45`}>
                <span className="-rotate-45">{c.icon}</span>
              </div>
              <p className="font-semibold text-sm text-gray-700 mb-1" style={{ fontFamily: "Raleway,sans-serif" }}>{c.label}</p>
              <p className="text-sm text-gray-600">{c.info}</p>
            </div>
          ))}
        </div>

        {/* Gallery + Quick Links + Enquiry */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-gray-200">
          {/* Gallery with lightbox */}
          <div>
            <div className="bg-[#1a9dbd] text-white text-center py-2 text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "Raleway,sans-serif" }}>Gallery</div>
            <div className="grid grid-cols-3 gap-1 p-2">
              {galleryImages.map((img, i) => (
                <div
                  key={i}
                  className="relative group cursor-pointer overflow-hidden"
                  onClick={() => setLightboxIndex(i)}
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-14 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-[#1a9dbd]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                    </svg>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <div className="bg-[#1a9dbd] text-white text-center py-2 text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "Raleway,sans-serif" }}>Quick Links</div>
            <div className="p-4">
              {[
                { label: "HOME", to: "/" }, { label: "ABOUT US", to: "/about" },
                { label: "COURSES", to: "/courses" },
                 { label: "FACILITIES", to: "/facilities" },
                { label: "2022-2023", to: "/results/2022-2023" },
                { label: "2021-2022", to: "/results/2021-2022" },
                { label: "CONTACT US", to: "/contact" },
              ].map(l => (
                <Link key={l.label} to={l.to} className="block text-sm text-gray-600 py-1.5 border-b border-gray-100 hover:text-[#1a9dbd] transition-colors">{l.label}</Link>
              ))}
            </div>
          </div>

          {/* Quick Enquiry */}
          <div>
            <div className="bg-[#1a9dbd] text-white text-center py-2 text-sm font-bold uppercase tracking-wider" style={{ fontFamily: "Raleway,sans-serif" }}>Quick Enquiry</div>
            <form onSubmit={handleEnquirySubmit} className="p-4 flex flex-col gap-2">
              <input name="name" value={enquiry.name} onChange={handleEnquiryChange} required className="border border-gray-300 px-3 py-2 text-sm w-full focus:outline-none focus:border-[#1a9dbd]" placeholder="Name" />
              <input name="email" type="email" value={enquiry.email} onChange={handleEnquiryChange} className="border border-gray-300 px-3 py-2 text-sm w-full focus:outline-none focus:border-[#1a9dbd]" placeholder="Email" />
              <input name="phone" value={enquiry.phone} onChange={handleEnquiryChange} className="border border-gray-300 px-3 py-2 text-sm w-full focus:outline-none focus:border-[#1a9dbd]" placeholder="Phone" />
              <textarea name="message" value={enquiry.message} onChange={handleEnquiryChange} required className="border border-gray-300 px-3 py-2 text-sm w-full h-20 focus:outline-none focus:border-[#1a9dbd] resize-none" placeholder="Message"></textarea>
              {enquiryStatus === "success" && <p className="text-green-600 text-xs">Message sent successfully!</p>}
              {enquiryStatus === "error" && <p className="text-red-500 text-xs">Failed to send. Please try again.</p>}
              <button type="submit" disabled={enquiryStatus === "sending"} className="bg-[#1a9dbd] text-white text-sm font-bold uppercase tracking-wider py-2.5 hover:bg-[#158aa6] transition-colors disabled:opacity-50">
                {enquiryStatus === "sending" ? "Sending..." : "Send"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}