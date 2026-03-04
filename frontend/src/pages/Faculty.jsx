import { Link } from "react-router-dom";

import per1 from "../assets/mahesh.jpg";
import per2 from "../assets/lalitha-ganapatha.jpg";
import per3 from "../assets/daveraje-297x300.jpg";
import per4 from "../assets/VEERESH-H.E-297x300.jpg";
import per5 from "../assets/shanthalatha.jpg";

const faculty = [
  { name: "Prof. MAHESH K.R", role: "HOD Of CHEMISTRY", img: per1 },
  { name: "Dr. SHANTHALATHA.A", role: "HOD Of BIOLOGY", img: per5 },
  { name: "Prof. LALITHA GANAPATHI M.G", role: "HOD Of ENGLISH", img: per2 },
  { name: "Prof. DEVARAJE GOWDA H.K", role: "DEPT. Of BIOLOGY", img: per3 },
  { name: "Prof. VEERESH H.E", role: "DEPT. Of CHEMISTRY", img: per4 },
];

export default function Faculty() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/about" className="hover:text-[#1a9dbd]">About Us</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Faculty</span>
        </div>

        <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-2" style={{ fontFamily: "Raleway,sans-serif" }}>
          Faculty
        </h2>
        <div className="w-10 h-1 bg-[#1a9dbd] mb-10"></div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8">
          {faculty.map((f) => (
            <div key={f.name} className="text-center">
              <img
                src={f.img}
                alt={f.name}
                className="w-full h-auto object-cover object-top mb-3"
              />
              <p className="font-bold text-gray-800 text-xs leading-snug" style={{ fontFamily: "Raleway,sans-serif" }}>
                {f.name}
              </p>
              <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{f.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}