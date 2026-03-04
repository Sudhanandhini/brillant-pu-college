import { Link } from "react-router-dom";
import prin from "../assets/prinicpal.jpg";
import push from "../assets/Pushpa.jpg";
import anil from "../assets/anil-1.jpg";

const management = [
  {
    name: "Prof. JAVARAJE GOWDA",
    role: "PRINCIPAL & Prof. Of CHEMISTRY",
    img: prin,
  },
  {
    name: "Mrs. PUSHPA E",
    role: "VICE PRINCIPAL & HOD Of MATHEMATICS",
    img: push,
  },
  {
    name: "Dr. ANIL KUMAR H.S",
    role: "SECRETARY",
    img: anil,
  },
];

export default function Management() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/about" className="hover:text-[#1a9dbd]">About Us</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Management</span>
        </div>

        <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-8" style={{ fontFamily: "Raleway,sans-serif" }}>
          Management
        </h2>
        <div className="w-10 h-1 bg-[#1a9dbd] mb-10"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {management.map((m) => (
            <div key={m.name} className="text-center">
              <img
                src={m.img}
                alt={m.name}
                className="w-full h-64 object-cover object-top mb-4"
              />
              <p className="font-bold text-gray-800 text-sm" style={{ fontFamily: "Raleway,sans-serif" }}>
                {m.name}
              </p>
              <p className="text-gray-500 text-xs mt-1 uppercase tracking-wide">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}