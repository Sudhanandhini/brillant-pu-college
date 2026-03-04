import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      {/* Main Footer */}
      <div className="bg-[#1a9dbd] text-white py-10 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-3" style={{fontFamily:'Raleway,sans-serif'}}>About Us</h4>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              Brilliant PU College, the first choice of the best and the brightest, provides a second home to students.
            </p>
            <Link to="/about" className="inline-block border border-white text-white text-xs font-bold uppercase tracking-wider px-4 py-2 hover:bg-white hover:text-[#1a9dbd] transition-colors">
              Read More
            </Link>
          </div>

          {/* Programme */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-3" style={{fontFamily:'Raleway,sans-serif'}}>Programme</h4>
            <p className="text-sm text-white/90 leading-relaxed mb-4">
              Program are an option for many students who are interested in learning more about a skill or field of Interest.
            </p>
            <Link to="/courses" className="inline-block border border-white text-white text-xs font-bold uppercase tracking-wider px-4 py-2 hover:bg-white hover:text-[#1a9dbd] transition-colors">
              Read More
            </Link>
          </div>

          {/* Facilities */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-3" style={{fontFamily:'Raleway,sans-serif'}}>Facilities</h4>
            <p className="text-sm text-white/90 leading-relaxed">
              The main campus is housed in a building to facilitate the best infrastructure for optimal output.
            </p>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="font-bold text-sm uppercase tracking-wider mb-3" style={{fontFamily:'Raleway,sans-serif'}}>Contact Us</h4>
            <p className="font-bold text-sm mb-2" style={{fontFamily:'Raleway,sans-serif'}}>Brilliant PU College</p>
            <p className="text-sm text-white/90 mb-2 leading-relaxed">
              Near Ring Road, Hemavathi Nagar,<br/>Last Stage, Hassan 573-201
            </p>
            <p className="text-sm text-white/90 mb-1">
              <strong>Tel:</strong>+91-9448220421
            </p>
            <p className="text-sm text-white/90">
              <strong>Mail:</strong>brilliantpucollege@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#152535] text-white py-3 px-6 ">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs gap-2">
        <span className="text-white/70">© COPYRIGHT 2020 - BRILLIANT PU COLLEGE</span>
        <span className="text-white/70 mt-1 md:mt-0">DESIGN BY 
        <a href="https://sunsys.in" target="_blank" rel="noreferrer" className="text-white/70 hover:text-blue-200">
        SUNSYS TECHNOLOGIES INDIA PVT.LTD</a></span></div>
      </div>
    </footer>
  );
}
