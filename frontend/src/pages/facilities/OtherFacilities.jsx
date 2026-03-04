import { useState, useEffect } from "react";

import img1 from "../../assets/tra1.jpg";
import img2 from "../../assets/tra.jpg";
import img3 from "../../assets/gall8.jpg";

import hos1 from "../../assets/hostel2.jpg";
import hos2 from "../../assets/hostel1.jpg";



function FacilitySlider({ images, title, description }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setCurrent(s => (s + 1) % images.length), 3500);
    return () => clearInterval(t);
  }, [images.length]);

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
        <h3 className="text-xl font-bold uppercase tracking-wider text-gray-800 mb-4" style={{fontFamily:'Raleway,sans-serif'}}>{title}</h3>
        <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
}

export function Laboratory() {
  return <FacilitySlider
    title="Laboratory"
    images={[
      "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=700&h=450&fit=crop",
      "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=700&h=450&fit=crop",
    ]}
    description="The college has well-equipped laboratories for Physics, Chemistry, Biology and Computer Science. 
    All labs are equipped with modern instruments, chemicals and apparatus to ensure hands-on learning experience for students."
  />;
}

export function Transportation() {
  return <FacilitySlider
    title="Transportation"
    images={[
      img1, img2, img3
    ]}
    description="The college provides transportation facilities for students from various parts of Hassan city and surrounding areas. 
    The buses are well-maintained and safe, ensuring timely arrival and departure for all students."
  />;
}

export function Hostel() {
  return <FacilitySlider
    title="Hostel"
    images={[
     hos1, hos2
    ]}
    description="The college has separate hostel facilities for boys and girls. The hostels are well-maintained with all 
    basic amenities, clean rooms, nutritious food, and a safe environment to facilitate focused studying."
  />;
}
