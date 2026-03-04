import { useState } from "react";
import { Link, useLocation, Outlet } from "react-router-dom";

const facilityNav = [
  { label: "Library", path: "/facilities/library" },
  { label: "Laboratory", path: "/facilities/laboratory" },
  { label: "Transportation", path: "/facilities/transportation" },
  { label: "Hostel", path: "/facilities/hostel" },
];

export default function FacilitiesLayout() {
  const location = useLocation();

  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-2" style={{fontFamily:'Raleway,sans-serif'}}>
          Facilities
        </h2>
        <div className="w-12 h-1 bg-[#1a9dbd] mb-6"></div>
        <div className="flex flex-wrap gap-4 mb-8">
          {facilityNav.map(f => (
            <Link
              key={f.label}
              to={f.path}
              className={`px-5 py-2 text-sm font-bold uppercase tracking-wider transition-colors border ${
                location.pathname === f.path
                  ? 'bg-[#1a9dbd] text-white border-[#1a9dbd]'
                  : 'bg-white text-gray-700 border-gray-300 hover:border-[#1a9dbd] hover:text-[#1a9dbd]'
              }`}
              style={{fontFamily:'Raleway,sans-serif'}}
            >
              {f.label}
            </Link>
          ))}
        </div>
        <Outlet />
      </div>
    </div>
  );
}
