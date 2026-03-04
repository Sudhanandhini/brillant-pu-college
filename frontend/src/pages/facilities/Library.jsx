import { useState, useEffect } from "react";

import img1 from "../../assets/library (1).jpg";
import img2 from "../../assets/library (2).jpg";

const images = [
  img1, img2
];

export default function Library() {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(s => (s + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
      <div className="relative">
        <div className="relative h-72 overflow-hidden">
          {images.map((img, i) => (
            <img key={i} src={img} alt="" className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${i === current ? 'opacity-100' : 'opacity-0'}`}/>
          ))}
          <button onClick={() => setCurrent(s => (s - 1 + images.length) % images.length)} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-7 h-7 flex items-center justify-center">‹</button>
          <button onClick={() => setCurrent(s => (s + 1) % images.length)} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white w-7 h-7 flex items-center justify-center">›</button>
        </div>
        <div className="flex gap-2 justify-center mt-3">
          {images.map((_, i) => (
            <button key={i} onClick={() => setCurrent(i)} className={`rounded-full transition-all ${i === current ? 'w-3 h-3 bg-[#1a9dbd]' : 'w-2.5 h-2.5 bg-gray-300'}`}/>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-4" style={{fontFamily:'Raleway,sans-serif'}}>Library</h3>
        <p className="text-sm text-gray-600 leading-relaxed">
          The College Library has been well equipped with all the facilities for learning. The college library consists of 5,000+ books. 
          The library is fully computerized with Barcode system. Internet access is also available. There is a qualified librarian in charge. 
          A separate Reference Section is housed in the library.
        </p>
      </div>
    </div>
  );
}
