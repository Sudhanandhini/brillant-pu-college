import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Courses() {
  const [hoveredPCMB, setHoveredPCMB] = useState(false);
  const [hoveredPCMCs, setHoveredPCMCs] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PCMB Card */}
          <div
            className="relative bg-[#e8e2d9] rounded-lg overflow-hidden min-h-[340px] cursor-pointer"
            onMouseEnter={() => setHoveredPCMB(true)}
            onMouseLeave={() => setHoveredPCMB(false)}
          >
            {/* PCMB image (shown by default, hidden on hover) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                hoveredPCMB ? "opacity-0" : "opacity-100"
              }`}
            >
              {/* PCMBs SVG-style text image */}
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="text-center select-none">
                  {/* fx superscript */}
                  <div className="text-[#c8860a] text-2xl font-bold mb-0" style={{fontFamily:'Georgia, serif'}}>
                    <span className="text-4xl italic">f</span>
                    <span className="text-xl align-super">x</span>
                  </div>
                  {/* PCMB big text */}
                  <div className="flex items-end gap-0 justify-center">
                    <span className="text-[#c8860a] font-black" style={{fontSize:'80px',fontFamily:'Arial Black,sans-serif',lineHeight:1}}>P</span>
                    {/* atom icon */}
                    <span className="text-[#c8860a] text-5xl self-end mb-2">⚛</span>
                    <span className="text-[#c8860a] font-black" style={{fontSize:'80px',fontFamily:'Arial Black,sans-serif',lineHeight:1}}>C</span>
                    {/* beaker */}
                    <span className="text-[#c8860a] text-4xl self-end mb-2">⚗</span>
                    <span className="text-[#c8860a] font-black" style={{fontSize:'80px',fontFamily:'Arial Black,sans-serif',lineHeight:1}}>MB</span>
                  </div>
                  {/* DNA */}
                  <div className="text-[#c8860a] text-3xl mt-1">🧬</div>
                </div>
              </div>
            </div>

            {/* PCMB text content (shown on hover) */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
                hoveredPCMB ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2
                className="text-3xl font-black italic text-gray-800 mb-5"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                PCMB
              </h2>
              <div className="space-y-2.5 text-center mb-6">
                {["PHYSICS", "CHEMISTRY", "MATHEMATICS", "BIOLOGY", "LANGUAGES"].map((s) => (
                  <p
                    key={s}
                    className="text-sm font-semibold text-gray-600 tracking-widest"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {s}
                  </p>
                ))}
              </div>
              <button
                onClick={() => navigate("/courses/pcmb")}
                className="bg-[#1a9dbd] text-white text-sm font-bold uppercase tracking-wider px-8 py-2.5 rounded-sm hover:bg-[#158aa6] transition-colors"
              >
                More
              </button>
            </div>
          </div>

          {/* PCMCs Card */}
          <div
            className="relative bg-[#e8e2d9] rounded-lg overflow-hidden min-h-[340px] cursor-pointer"
            onMouseEnter={() => setHoveredPCMCs(true)}
            onMouseLeave={() => setHoveredPCMCs(false)}
          >
            {/* PCMCs image (default) */}
            <div
              className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
                hoveredPCMCs ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="w-full h-full flex items-center justify-center p-6">
                <div className="text-center select-none">
                  <div className="text-[#c8860a] text-2xl font-bold mb-0" style={{fontFamily:'Georgia, serif'}}>
                    <span className="text-4xl italic">f</span>
                    <span className="text-xl align-super">x</span>
                  </div>
                  <div className="flex items-end gap-0 justify-center">
                    <span className="text-[#c8860a] font-black" style={{fontSize:'72px',fontFamily:'Arial Black,sans-serif',lineHeight:1}}>P</span>
                    <span className="text-[#c8860a] text-4xl self-end mb-2">⚛</span>
                    <span className="text-[#c8860a] font-black" style={{fontSize:'72px',fontFamily:'Arial Black,sans-serif',lineHeight:1}}>C</span>
                    <span className="text-[#c8860a] text-3xl self-end mb-2">⚗</span>
                    <span className="text-[#c8860a] font-black" style={{fontSize:'72px',fontFamily:'Arial Black,sans-serif',lineHeight:1}}>M</span>
                    <span className="text-[#c8860a] font-black" style={{fontSize:'44px',fontFamily:'Arial Black,sans-serif',lineHeight:1}}>C&lt;/&gt;s</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PCMCs text content (shown on hover) */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center p-8 transition-opacity duration-500 ${
                hoveredPCMCs ? "opacity-100" : "opacity-0"
              }`}
            >
              <h2
                className="text-3xl font-black italic text-gray-800 mb-5"
                style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
              >
                PCMCs
              </h2>
              <div className="space-y-2.5 text-center mb-6">
                {["PHYSICS", "CHEMISTRY", "MATHEMATICS", "COMPUTER SCIENCE", "LANGUAGES"].map((s) => (
                  <p
                    key={s}
                    className="text-sm font-semibold text-gray-600 tracking-widest"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    {s}
                  </p>
                ))}
              </div>
              <button
                onClick={() => navigate("/courses/pcmcs")}
                className="bg-[#1a9dbd] text-white text-sm font-bold uppercase tracking-wider px-8 py-2.5 rounded-sm hover:bg-[#158aa6] transition-colors"
              >
                More
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
