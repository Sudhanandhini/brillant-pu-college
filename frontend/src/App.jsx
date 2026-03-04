import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Courses from "./pages/Courses";
import PCMB from "./pages/PCMB";
import PCMCs from "./pages/PCMCs";
import Results from "./pages/Results";
import ResultPDF from "./pages/Resultpdf";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import FacilitiesLayout from "./pages/facilities/FacilitiesLayout";
import Library from "./pages/facilities/Library";
import { Transportation, Hostel } from "./pages/facilities/OtherFacilities";
import Laboratory from "./pages/Laboratory";
import PrincipalMessage from "./pages/Principalmessage";
import Management from "./pages/Management";
import Faculty from "./pages/Faculty";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
              <Route path="/about/principals-message" element={<PrincipalMessage />} />
            <Route path="/about/management" element={<Management />} />
            <Route path="/about/faculty" element={<Faculty />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/pcmb" element={<PCMB />} />
            <Route path="/courses/pcmcs" element={<PCMCs />} />
            <Route path="/results" element={<Results />} />
            <Route path="/results/:year" element={<ResultPDF />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/facilities" element={<FacilitiesLayout />}>
              <Route index element={<Navigate to="/facilities/library" replace />} /> 
 <Route path="library" element={<Library />} />
              <Route path="laboratory" element={<Laboratory />} />
              <Route path="transportation" element={<Transportation />} />
              <Route path="hostel" element={<Hostel />} />
            </Route>
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}