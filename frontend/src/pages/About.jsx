export default function About() {
  return (
    <div>
      {/* Welcome Section */}
      <div className="py-16 px-4 max-w-4xl mx-auto text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-6" style={{fontFamily:'Raleway,sans-serif'}}>
          Welcome To Brilliant PU College
        </h1>
        <p className="text-gray-600 text-sm leading-relaxed mb-3">
          Brilliant PU College, the first choice of the best and the <strong>brightest</strong>, provides a second home to students. 
          The students are nurtured here to form the phenomenal human capital.
        </p>
        <p className="text-gray-600 text-sm leading-relaxed mb-6">
          The high school students, who make their way into the college portals as young adults, leave as for self-reliant, 
          confident individuals at the end of the tenure.
        </p>
        <div className="flex items-center justify-center gap-3 text-gray-400">
          <div className="w-10 h-px bg-gray-300"></div>
          <span className="text-lg font-light text-[#1a9dbd]">//</span>
          <div className="w-10 h-px bg-gray-300"></div>
        </div>
      </div>

      {/* Who We Are / What We Do / What We Provide */}
      <div className="max-w-5xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-10 mb-4">
        {[
          {
            icon: (
              <svg className="w-8 h-8 text-[#7c6bc7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
              </svg>
            ),
            title: "Who We Are",
            text: "Brilliant PU College is a premier educational institution that reaches perfection through the earnest academic pursuit of excellence."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-[#e57373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            ),
            title: "What We Do",
            text: "It is here in this open, supportive atmosphere the students are challenged to develop their potential and encouraged to acquire a spirit of enquiring and develop the joy of learning."
          },
          {
            icon: (
              <svg className="w-8 h-8 text-[#e57373]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
            ),
            title: "What We Provide",
            text: "The college provides coaching for higher aspirants. IIT coaching, AIEEE, CET & COM EDI coaching are conducted by a highly eminent and competent group of subject experts."
          },
        ].map((item) => (
          <div key={item.title}>
            <div className="mb-3">{item.icon}</div>
            <h3 className="font-bold text-sm uppercase tracking-wider text-gray-800 mb-3" style={{fontFamily:'Raleway,sans-serif'}}>
              {item.title}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>

      {/* Vision / Motto / Mission */}
      <div className="grid grid-cols-1 md:grid-cols-3 mb-4">
        {/* Vision */}
        <div className="bg-[#1e73be] text-white p-8 md:p-10">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4" style={{fontFamily:'Raleway,sans-serif'}}>Vision</h3>
          <p className="text-sm text-white/90 leading-relaxed">
            Our college visions in value of "Excellence and service" in imparting education. We believe that excellence is 
            achieved only through persistent effort to better oneself consistently. It achieves meaning and significance only 
            in the fulfillment of one's social commitment.
          </p>
        </div>

        {/* Motto */}
        <div className="bg-gray-100 text-gray-800 p-8 md:p-10">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4" style={{fontFamily:'Raleway,sans-serif'}}>Motto</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            Imparting quality education is the main motive of our college.
          </p>
        </div>

        {/* Mission */}
        <div className="bg-[#1a2e3b] text-white p-8 md:p-10">
          <h3 className="text-xl font-bold uppercase tracking-wider mb-4" style={{fontFamily:'Raleway,sans-serif'}}>Mission</h3>
          <p className="text-sm text-white/90 leading-relaxed">
            We aim at making the students autonomous, lifelong learners, excelling academically and growing up as healthy 
            and responsible citizens.
          </p>
        </div>
      </div>
    </div>
  );
}
