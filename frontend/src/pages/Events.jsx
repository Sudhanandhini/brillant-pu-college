import { useState, useEffect, useCallback } from "react";

import img1 from "../assets/event/1/1.png"
import img2 from "../assets/event/1/2.png"
import img3 from "../assets/event/1/3.png"
import img4 from "../assets/event/1/4.png"
import img5 from "../assets/event/1/5.png"
import img6 from "../assets/event/1/6.png"
import img7 from "../assets/event/1/7.png"
import img8 from "../assets/event/1/8.png"

import img21 from "../assets/event/2/1 (1).png"
import img22 from "../assets/event/2/1 (2).png"
import img23 from "../assets/event/2/1 (3).png"
import img24 from "../assets/event/2/1 (4).png"
import img25 from "../assets/event/2/1 (5).png"
import img26 from "../assets/event/2/1 (6).png"
import img27 from "../assets/event/2/1 (7).png"
import img28 from "../assets/event/2/1 (8).png"
import img29 from "../assets/event/2/1 (9).png"
import img30 from "../assets/event/2/1 (10).png"
import img31 from "../assets/event/2/1 (11).png"

import img41 from "../assets/event/3/3 (1).png"
import img42 from "../assets/event/3/3 (2).png"
import img43 from "../assets/event/3/3 (3).png"
import img44 from "../assets/event/3/3 (4).png"
import img45 from "../assets/event/3/3 (5).png"
import img46 from "../assets/event/3/3 (6).png"
import img47 from "../assets/event/3/3 (7).png"
import img48 from "../assets/event/3/3 (8).png"
import img49 from "../assets/event/3/3 (9).png"
import img50 from "../assets/event/3/3 (10).png"
import img51 from "../assets/event/3/3 (11).png"
import img52 from "../assets/event/3/3 (12).png"
import img53 from "../assets/event/3/3 (13).png"

import img55 from "../assets/event/4/4 (1).png"
import img56 from "../assets/event/4/4 (2).png"

import img57 from "../assets/event/5/5.png"

import img61 from "../assets/event/6/61.jpg"
import img62 from "../assets/event/6/62.jpg"
import img63 from "../assets/event/6/63.jpg"
import img64 from "../assets/event/6/64.jpg"
import img65 from "../assets/event/6/65.jpg"
import img66 from "../assets/event/6/66.jpg"
import img67 from "../assets/event/6/67.jpg"
import img68 from "../assets/event/6/68.jpg"
import img69 from "../assets/event/6/69.jpg"
import img70 from "../assets/event/6/70.jpg"
import img71 from "../assets/event/6/71.jpg"
import img72 from "../assets/event/6/72.jpg"
import img73 from "../assets/event/6/73.jpg"
import img74 from "../assets/event/6/74.jpg"
import img75 from "../assets/event/6/75.jpg"
import img76 from "../assets/event/6/76.jpg"

import img111 from "../assets/event/11/111.png"
import img112 from "../assets/event/11/112.jpg"
import img113 from "../assets/event/11/113.jpg"
import img114 from "../assets/event/11/114.jpg"
import img115 from "../assets/event/11/115.jpg"
import img116 from "../assets/event/11/116.jpg"
import img117 from "../assets/event/11/117.jpg"

import img101 from "../assets/event/10/101.jpg"
import img102 from "../assets/event/10/102.jpg"
import img103 from "../assets/event/10/103.jpg"
import img104 from "../assets/event/10/104.jpg"

import img81 from "../assets/event/9/9 (1).jpg"
import img82 from "../assets/event/9/9 (2).jpg"
import img83 from "../assets/event/9/9 (3).jpg"
import img84 from "../assets/event/9/9 (4).jpg"
import img85 from "../assets/event/9/9 (5).jpg"
import img86 from "../assets/event/9/9 (6).jpg"
import img87 from "../assets/event/9/9 (1).png"

import img88 from "../assets/event/8/8 (1).jpg"
import img89 from "../assets/event/8/8 (2).jpg"
import img90 from "../assets/event/8/8 (3).jpg"
import img91 from "../assets/event/8/8 (4).jpg"
import img92 from "../assets/event/8/8 (5).jpg"
import img93 from "../assets/event/8/8 (6).jpg"
import img94 from "../assets/event/8/8 (7).jpg"
import img95 from "../assets/event/8/8 (8).jpg"
import img96 from "../assets/event/8/8 (9).jpg"
import img97 from "../assets/event/8/8 (10).jpg"
import img98 from "../assets/event/8/8 (11).jpg"
import img99 from "../assets/event/8/8 (12).jpg"
import img100 from "../assets/event/8/8 (13).jpg"

const eventGroups = [
  { title: "Guruvandana Program 2025", images: [img1, img2, img3, img4, img5, img6, img7, img8] },
  { title: "Orientation Programme 2025-2026", images: [img21, img22, img23, img24, img25, img26, img27, img28, img29, img30, img31] },
  { title: "Valedictory Function 2024-2025", images: [img41, img42, img43, img44, img45, img46, img47, img48, img49, img50, img51, img52, img53] },
];
const row2Events = [
  { title: "Annual Day 2023-2025", images: [img55, img56] },
  { title: "PU College Announcement", images: [img57] },
  { title: "Orientation Programme", images: [img61, img62, img63, img64, img65, img66, img67, img68, img69, img70, img71, img72, img73, img74, img75, img76] },
];
const row2Events1 = [
  { title: "Decennial Jubilee Celebration", youtubeId: "MpfIyOjAFKg" },
  { title: "Decennial Jubilee Celebration", images: [img88, img89, img90, img91, img92, img93, img94, img95, img96, img97, img98, img99, img100] },
  { title: "Orientation Programme-2022-23", images: [img81, img82, img83, img84, img85, img86, img87] },
];
const row2Events2 = [
  { title: "Guru Vandana Program 2022", images: [img101, img102, img103, img104] },
  { title: "Orientation Programme-2022-23", images: [img111, img112, img113, img114, img115, img116, img117] },
];

/* ── Lightbox ── */
function Lightbox({ images, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex);

  const prev = useCallback(() => setCurrent(c => (c - 1 + images.length) % images.length), [images.length]);
  const next = useCallback(() => setCurrent(c => (c + 1) % images.length), [images.length]);

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
        onClick={e => e.stopPropagation()}
      >
        <img
          src={images[current]}
          alt={`event-${current}`}
          className="w-full object-contain max-h-[75vh]"
        />

        {/* Caption */}
        <div className="bg-white px-4 py-2 text-sm text-gray-500">
          Image {current + 1} of {images.length}
        </div>

        {/* Prev */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-6 bg-black/50 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center text-2xl transition-colors"
        >‹</button>

        {/* Next */}
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-6 bg-black/50 hover:bg-black/80 text-white w-10 h-10 flex items-center justify-center text-2xl transition-colors"
        >›</button>

        {/* Close */}
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
    const timer = setInterval(() => {
      setCurrent(prev => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative overflow-hidden bg-gray-900">
      <div
        className="relative h-72 md:h-80 cursor-pointer"
        onClick={() => onImageClick(current)}
        title="Click to view full screen"
      >
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`event-${i}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Zoom hint overlay on hover */}
        <div className="absolute inset-0 bg-[#1a9dbd]/0 hover:bg-[#1a9dbd]/20 transition-colors duration-300 flex items-center justify-center">
          <div className="opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black/50 rounded-full p-3">
            <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
            </svg>
          </div>
        </div>

        {/* Left Arrow — stop propagation so clicking arrow doesn't open lightbox */}
        <button
          onClick={e => { e.stopPropagation(); setCurrent(p => (p - 1 + images.length) % images.length); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 w-7 h-7 flex items-center justify-center text-lg transition-colors z-10"
        >‹</button>

        {/* Right Arrow */}
        <button
          onClick={e => { e.stopPropagation(); setCurrent(p => (p + 1) % images.length); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 hover:bg-black/70 w-7 h-7 flex items-center justify-center text-lg transition-colors z-10"
        >›</button>
      </div>

      {/* Dots */}
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
    </div>
  );
}

/* ── Event Row ── */
function EventRow({ events }) {
  const [lightbox, setLightbox] = useState(null); // { images, index }

  return (
    <>
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          startIndex={lightbox.index}
          onClose={() => setLightbox(null)}
        />
      )}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {events.map((event) => (
          <div key={event.title + (event.youtubeId || "")} className="shadow-sm overflow-hidden">
            {event.youtubeId ? (
              <div className="relative bg-black" style={{ height: "20rem" }}>
                <iframe
                  src={`https://www.youtube.com/embed/${event.youtubeId}?rel=0`}
                  title={event.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="absolute inset-0 w-full h-full"
                />
              </div>
            ) : (
              <ImageSlider
                images={event.images}
                onImageClick={(idx) => setLightbox({ images: event.images, index: idx })}
              />
            )}
            <div className="py-3 text-center">
              <h3 className="text-base font-semibold text-gray-800" style={{ fontFamily: "Raleway,sans-serif" }}>
                {event.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

/* ── Main Page ── */
export default function Events() {
  return (
    <div className="py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-8" style={{ fontFamily: "Raleway,sans-serif" }}>
          Events
        </h2>
        <EventRow events={eventGroups} />
        <EventRow events={row2Events} />
        <EventRow events={row2Events1} />
        <EventRow events={row2Events2} />
      </div>
    </div>
  );
}