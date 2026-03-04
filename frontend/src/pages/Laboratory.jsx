import lab1 from "../assets/lab2.jpg";
import lab2 from "../assets/lab1.jpg";
import lab3 from "../assets/lab3.jpg";
import lab4 from "../assets/lab4.jpg";

export default function Laboratory() {
  const departments = [
    {
      title: "Department Of Physics",
      image: lab1,
      imageLeft: true,
      paragraphs: [
        "Department's vision is to promote scientific temperament among students. We have acclimated technology-based career-oriented teaching with competent faculties coupled with technology giving students a new way of understanding the concepts.",
        "Physics is more than just learning from books. Our college has a well-equipped laboratory to meet the ever-growing challenges and drifts of scientific temper. The lab is designed to benefit the students by arousing their curiosity. The concept and theory explained in classes seem rather abstract. So demonstration in the lab helps the students to get a clear picture of what they have learned in the theory classes.",
        "Every Year endowment scholarship is given to the students who have scored optimum marks in Physics on the occasion of National Science Day.",
        "Our future plan is to conduct scientific exhibitions and workshops for high school teachers and students.",
      ],
    },
    {
      title: "Department of Chemistry",
      image: lab2,
      imageLeft: false,
      paragraphs: [
        "The Chemistry Department has a set of well-experienced staff and well-equipped laboratory, which provides individual attention to the students in both annual exam & competitive exam (NEET/JEE/CET).",
        "Chemistry Lab is a storehouse of all the required chemicals and apparatus for conducting various experiments.",
      ],
    },
    {
      title: "Department of Biology",
      image: lab3,
      imageLeft: true,
      paragraphs: [
        "Is the source of real knowledge and understanding of living things. The faculty has very rich back up in various, specialized fields in biology. Students are motivated through lectures, hands-on practice, and day to day development in the curriculum. Our laboratory is worth mentioning as it is on par with any other sophisticated urban PU college. The materials collected give an insight into the living world. Students are definitely going to be benefitted from the department.",
      ],
    },
    {
      title: "Department Of Computer Science",
      image: lab4,
      imageLeft: false,
      paragraphs: [
        "The Department is well equipped with state of the art computing facilities with high-end systems and the latest software. Exclusive Audio-Visual Computer Lab with the latest Pentium based and networked multimedia systems are provided to students for having hands-on experience in all the latest programming languages.",
        "Lab work develops a scientific attitude and scientific temper. By doing experiments, students are motivated to know more about the subject.",
      ],
    },
  ];

  return (
    <div className="py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-14">
        {departments.map((dept) => (
          <div
            key={dept.title}
            className={`flex flex-col ${dept.imageLeft ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-start`}
          >
            {/* Image */}
            <div className="w-full md:w-[340px] flex-shrink-0">
              <img
                src={dept.image}
                alt={dept.title}
                className="w-full h-52 object-cover"
              />
            </div>

            {/* Text */}
            <div className="flex-1">
              <h3
                className="text-sm font-bold text-gray-800 mb-3"
                style={{ fontFamily: "Raleway,sans-serif" }}
              >
                {dept.title}
              </h3>
              <div className="space-y-3">
                {dept.paragraphs.map((para, i) => (
                  <p key={i} className="text-sm text-gray-600 leading-relaxed text-justify">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}