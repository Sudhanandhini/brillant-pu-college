const results = [
  { year: "2023-2024", passPercent: "98%", distinctions: 120, firstClass: 230, highlights: "Highest scorer: 598/600" },
  { year: "2022-2023", passPercent: "97%", distinctions: 115, firstClass: 220, highlights: "100 distinctions" },
  { year: "2021-2022", passPercent: "96%", distinctions: 100, firstClass: 210, highlights: "Excellent results" },
  { year: "2020-2021", passPercent: "95%", distinctions: 90, firstClass: 200, highlights: "COVID year - remarkable" },
];

export default function Results() {
  return (
    <div className="py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold uppercase tracking-wider text-gray-800 mb-2" style={{fontFamily:'Raleway,sans-serif'}}>
          Results
        </h2>
        <div className="w-12 h-1 bg-[#1a9dbd] mb-8"></div>

        <p className="text-gray-600 text-sm leading-relaxed mb-8">
          Brilliant PU College consistently achieves outstanding results in PUC examinations. 
          Our dedicated faculty and rigorous academic program have enabled students to excel year after year.
        </p>

        <div className="space-y-4">
          {results.map((r) => (
            <div key={r.year} className="border border-gray-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <h3 className="text-lg font-bold text-[#1a9dbd]" style={{fontFamily:'Raleway,sans-serif'}}>{r.year}</h3>
                <div className="flex gap-8 text-center text-sm">
                  <div>
                    <p className="font-bold text-2xl text-gray-800">{r.passPercent}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Pass %</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-800">{r.distinctions}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">Distinctions</p>
                  </div>
                  <div>
                    <p className="font-bold text-2xl text-gray-800">{r.firstClass}</p>
                    <p className="text-gray-500 text-xs uppercase tracking-wider">First Class</p>
                  </div>
                </div>
                <p className="text-sm text-gray-500 italic">{r.highlights}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
