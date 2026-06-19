import { useParams, Link } from "react-router-dom";
import pdf1 from "../assets/2.pdf";
import pdf2 from "../assets/1.pdf";
import result1 from "../assets/result1.jpg";
import result2 from "../assets/result2.jpg";

const pdfMap = {
  "2022-2023": pdf1,
  "2021-2022": pdf2,
};

const imageMap = {
  "2025-2026": [result1, result2],
};

export default function ResultPDF() {
  const { year } = useParams();
  const pdfUrl = pdfMap[year];
  const images = imageMap[year];

  return (
    <div className="py-8 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link to="/results" className="hover:text-[#1a9dbd] transition-colors">Results</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">{year}</span>
        </div>

        <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-6"
          style={{ fontFamily: "Raleway,sans-serif" }}>
          Results — {year}
        </h2>

        {images ? (
          <div className="space-y-6">
            {images.map((src, i) => (
              <div key={i} className="border border-gray-200 shadow-sm rounded-sm overflow-hidden">
                <img src={src} alt={`Result ${year} - ${i + 1}`} className="w-full h-auto object-contain" />
              </div>
            ))}
          </div>
        ) : pdfUrl ? (
          <>
            <div className="border border-gray-200 shadow-sm rounded-sm overflow-hidden mb-4" style={{ height: "80vh" }}>
              <iframe
                src={pdfUrl}
                title={`Result ${year}`}
                width="100%"
                height="100%"
                style={{ border: "none" }}
              />
            </div>
            <a
              href={pdfUrl}
              download={`Result_${year}.pdf`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#1a9dbd] text-white text-sm font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-[#158aa6] transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download PDF
            </a>
          </>
        ) : (
          <div className="text-gray-500 text-sm py-10 text-center border border-dashed border-gray-300">
            No result available for {year}.
          </div>
        )}

        <div className="mt-6">
          <Link to="/results"
            className="inline-block border border-[#1a9dbd] text-[#1a9dbd] text-sm font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-[#1a9dbd] hover:text-white transition-colors">
            ← Back to Results
          </Link>
        </div>
      </div>
    </div>
  );
}