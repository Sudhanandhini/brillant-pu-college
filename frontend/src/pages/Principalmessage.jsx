import { Link } from "react-router-dom";

import prin from "../assets/prinicpal.jpg";

export default function PrincipalMessage() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-8">
          <Link to="/about" className="hover:text-[#1a9dbd]">About Us</Link>
          <span>›</span>
          <span className="text-gray-800 font-semibold">Principal's Message</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
          {/* Left – photo */}
          <div>
            <img
              src={prin}
              alt="Principal"
              className="w-full max-w-[380px] h-auto object-cover"
            />
            <div className="mt-4">
              <p className="font-bold text-gray-800 text-base" style={{ fontFamily: "Raleway,sans-serif" }}>
                Prof. JAVARAJE GOWDA
              </p>
              <p className="text-gray-500 text-sm mt-0.5">PRINCIPAL &amp; Prof. Of CHEMISTRY</p>
            </div>
          </div>

          {/* Right – message */}
          <div className="space-y-4 text-sm text-gray-600 leading-relaxed text-justify">
            <p>
              Brilliant Pre — University College Is a premier and reputed education institute procuring the academic
              need of the Pre — University course which is a bridge between school education and professional course,
              keeping in mind the importance of this phase which decides the future of a student.
            </p>
            <p>
              We at Brilliant PU College focus on holistic growth and groom the latent talent of our students, turning
              them into potential aspirant, capable of cracking ALL India level competitive exams like JEE, NEET, KVPY,
              etc., through qualitative, creative and collaborative learning environment to ensure optimum academic
              excellence.
            </p>
            <p>
              This holistic approach of ours witnessed brilliant academic results over the years with Centums at the
              Board and various Entrance Exams.
            </p>
            <p>
              Being a proud part of the college will expand the student's horizon by making a remarkable difference in
              their personality to enhance their career opportunities.
            </p>
            <p>
              I appeal to the parents and students fraternity to come forward and explore the standards of Brilliant PU
              College and frame the future of your wards, with our best infrastructure, competent professor, and
              lecturers of the college.
            </p>
            <p>
              It is my honor and privilege to be the Principal of the esteemed organization. I implore God's choicest
              blessing on the endeavor of every student who is, was, and will be a part of the great learning at
              Brilliant PU College.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}