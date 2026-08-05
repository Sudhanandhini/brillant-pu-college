import { useState, useEffect, useCallback, useMemo } from "react";

const API_BASE = import.meta.env.VITE_API_URL || "";

import gall1 from "../assets/news/1.jpg";
import gall2 from "../assets/news/2.jpg";
import gall3 from "../assets/news/3.jpg";
import gall4 from "../assets/news/4.jpg";
import gall5 from "../assets/news/5.jpg";
import gall6 from "../assets/news/6.jpg";
import gall7 from "../assets/news/7.jpg";
import gall8 from "../assets/news/8.jpg";
import gall9 from "../assets/news/9.jpg";
import gall11 from "../assets/news/11.jpg";
import gall12 from "../assets/news/12.jpg";
import gall13 from "../assets/news/13.jpg";
import gall14 from "../assets/news/14.jpg";
import gall15 from "../assets/news/15.jpg";
import gall16 from "../assets/news/16.jpg";
import gall17 from "../assets/news/17.jpg";
import gall18 from "../assets/news/18.jpg";
import gall19 from "../assets/news/19.jpg";
import gall20 from "../assets/news/20.jpg";
import gall21 from "../assets/news/21.jpg";
import gall22 from "../assets/news/22.jpg";
import gall23 from "../assets/news/23.jpg";
import gall24 from "../assets/news/24.jpg";
import gall25 from "../assets/news/25.jpg";
import gall26 from "../assets/news/26.jpg";
import gall27 from "../assets/news/27.jpg";
import gall28 from "../assets/news/28.jpg";
import gall29 from "../assets/news/29.jpg";
import gall30 from "../assets/news/30.jpg";
import gall31 from "../assets/news/31.jpeg";
import gall100 from "../assets/news/101 (1).jpg";
import gall101 from "../assets/news/101 (1).webp";
import gall102 from "../assets/news/101 (2).webp";
import gall103 from "../assets/news/101 (3).webp";
import gall104 from "../assets/news/101 (4).webp";
import gall105 from "../assets/news/101 (5).webp";
import gall106 from "../assets/news/101 (6).webp";
import gall107 from "../assets/news/101 (7).webp";
import gall108 from "../assets/news/101 (8).webp";
import gall109 from "../assets/news/101 (9).webp";
import gall110 from "../assets/news/101 (10).webp";
import gall111 from "../assets/news/101 (11).webp";
import gall112 from "../assets/news/101 (12).webp";
import gall113 from "../assets/news/101 (13).webp";
import gall114 from "../assets/news/101 (14).webp";
import gall115 from "../assets/news/101 (15).webp";
import gall116 from "../assets/news/101 (16).webp";
import gall117 from "../assets/news/101 (17).webp";
import gall118 from "../assets/news/101 (18).webp";
import gall119 from "../assets/news/101 (19).webp";

import gall120 from "../assets/new1.jpg";
import gall121 from "../assets/new2.jpg";


// ── Add new items at the TOP of this array — they will appear first on the page ──
const newsItems = [

 {
    title: "Result 2025-2026",
    images: [gall120, gall121],
  },

  {
    title: "Valedictory Function 2025-2026",
    images: [gall100, gall101, gall102, gall103, gall104, gall105, gall106, gall107, gall108, gall109, gall110, gall111, gall112, gall113, gall114, gall115, gall116, gall117, gall118, gall119],
  },
  {
    title: "News in Newspaper",
    images: [gall31, gall30, gall29, gall28],
  },
  {
    title: "News in Newspaper",
    images: [gall13, gall14],
  },
  {
    title: "News in Newspaper",
    images: [gall23, gall24, gall25, gall26, gall27],
  },
  {
    title: "Results of 2024",
    images: [gall22],
  },
  {
    title: "Orientation Programme-2022-23",
    images: [gall21],
  },
  {
    title: "Orientation Programme-2021-22",
    images: [gall14, gall15, gall16, gall17, gall18, gall19, gall20],
  },
  {
    title: "Assuming Office as Principal of Our College",
    images: [gall11, gall12],
  },
  {
    title: "News on Newspaper",
    images: [gall8, gall9, gall13],
  },
  {
    title: "1st P.U.C. ORIENTATION DAY PROGRAM",
    images: [gall7],
  },
  {
    title: "News on Vijaya Karnataka Newspaper 12-8-2020",
    images: [gall6],
  },
  {
    title: "News on Prajavani Newspaper 11-8-2020",
    images: [gall5],
  },
  {
    title: "Orientation Program",
    images: [gall4],
  },
  {
    title: "Career Guidance held in Kalabhavan",
    images: [gall3],
  },
  {
    title: "Prof. Lakshmi Narayan Rao explaining competitive exam at Kalabhavan",
    images: [gall2],
  },
  {
    title: "2018-2020 Batch",
    images: [gall1],
  },
];

/* ── Lightbox ── */
function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(
    () => setCurrent((c) => (c - 1 + images.length) % images.length),
    [images.length]
  );
  const next = useCallback(
    () => setCurrent((c) => (c + 1) % images.length),
    [images.length]
  );

  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose, prev, next]);

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.88)" }}
      onClick={onClose}
    >
      <div
        className="relative bg-black max-w-3xl w-full mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`news-${current}`}
          className="w-full object-contain max-h-[75vh]"
        />
        <div className="bg-white px-4 py-2 text-sm text-gray-500">
          Image {current + 1} of {images.length}
        </div>
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-6 bg-black/50 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center text-2xl transition-colors"
        >‹</button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-6 bg-black/50 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center text-2xl transition-colors"
        >›</button>
        <button
          onClick={onClose}
          className="absolute -bottom-10 right-0 text-white text-3xl hover:text-gray-300 transition-colors"
          style={{ lineHeight: 1 }}
        >✕</button>
      </div>
    </div>
  );
}

/* ── Image Slider ── */
function ImageSlider({ images, onImageClick }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div
        className="relative h-64 md:h-72 cursor-pointer"
        onClick={() => onImageClick(current)}
        title="Click to view full screen"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`news-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
        <div className="absolute inset-0 bg-[#1a9dbd]/0 hover:bg-[#1a9dbd]/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-3">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p - 1 + images.length) % images.length); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 w-7 h-7 flex items-center justify-center text-lg transition-colors z-10"
            >‹</button>
            <button
              onClick={(e) => { e.stopPropagation(); setCurrent((p) => (p + 1) % images.length); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 w-7 h-7 flex items-center justify-center text-lg transition-colors z-10"
            >›</button>
          </>
        )}
      </div>
      {images.length > 1 && (
        <div className="flex items-center justify-center gap-1.5 py-3 bg-white">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-3 h-3 bg-[#1a9dbd]" : "w-2.5 h-2.5 bg-gray-300 hover:bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

/* ── Main Page ── */
export default function News() {
  const [lightbox, setLightbox] = useState(null);
  const [apiNews, setApiNews] = useState([]);

  useEffect(() => {
    fetch(`${API_BASE}/api/news`)
      .then((r) => r.json())
      .then((data) => {
        if (Array.isArray(data)) setApiNews(data);
      })
      .catch(() => {});
  }, []);

  const allNews = useMemo(() => {
    const dynamic = apiNews.map((item) => ({
      title: item.title,
      images: item.images.map((img) => `${API_BASE}${img.url}`),
    }));
    return [...dynamic, ...newsItems];
  }, [apiNews]);

  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2
          className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-8"
          style={{ fontFamily: "Raleway,sans-serif" }}
        >
          News
        </h2>

        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {allNews.map((item, i) => (
            <div key={i} className="shadow-sm overflow-hidden">
              <ImageSlider
                images={item.images}
                onImageClick={(idx) => setLightbox({ images: item.images, index: idx })}
              />
              <div className="py-3 text-center bg-white">
                <h3
                  className="text-base font-semibold text-gray-800"
                  style={{ fontFamily: "Raleway,sans-serif" }}
                >
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
