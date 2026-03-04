import { Link } from "react-router-dom";

import img1 from "../assets/gall12.jpg";
import img2 from "../assets/gall6.jpg";

export default function PCMB() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/courses" className="hover:text-[#1a9dbd] transition-colors">Courses</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">PCMB</span>
        </div>

        {/* PART I */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 mb-12 items-center">
          {/* Left – image */}
          <div>
            <img
              src={img1}
              alt="PCMB Lab"
              className="w-full h-72 object-cover"
            />
          </div>
          {/* Right – Part I content */}
          <div className="pl-0 md:pl-10 pt-6 md:pt-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily:'Raleway,sans-serif'}}>
              PART I
            </h2>
            <p className="text-gray-700 text-sm mb-2">English – Compulsory for all</p>
            <p className="text-gray-700 text-sm mb-3">Second language – One of these:</p>
            <div className="space-y-1.5">
              {["Kannada", "Hindi", "Sanskrit"].map((lang) => (
                <p key={lang} className="text-gray-600 text-sm">{lang}</p>
              ))}
            </div>
          </div>
        </div>

        {/* PART II */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 items-center">
          {/* Left – Part II content */}
          <div className="pr-0 md:pr-10 pb-6 md:pb-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4" style={{fontFamily:'Raleway,sans-serif'}}>
              PART II
            </h2>
            <p className="text-[#1a9dbd] font-bold text-sm mb-3">PCMB</p>
            <div className="space-y-2">
              {["Physics", "Chemistry", "Mathematics", "Biology"].map((sub) => (
                <p key={sub} className="text-gray-600 text-sm">{sub}</p>
              ))}
            </div>
          </div>
          {/* Right – image */}
          <div>
            <img
              src={img2}
              alt="PCMB Students"
              className="w-full h-72 object-cover"
            />
          </div>
        </div>

        {/* Back button */}
        <div className="mt-10">
          <Link
            to="/courses"
            className="inline-block border border-[#1a9dbd] text-[#1a9dbd] text-sm font-bold uppercase tracking-wider px-6 py-2.5 hover:bg-[#1a9dbd] hover:text-white transition-colors"
          >
            ← Back to Courses
          </Link>
        </div>

      </div>
    </div>
  );
}
