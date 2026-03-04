import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState(null); // null | "sending" | "success" | "error"

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (res.ok) {
        setStatus("success");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        console.error(data.error);
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className="py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Quick Enquiry Form */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:'Raleway,sans-serif'}}>
              Quick Enquiry
            </h2>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a9dbd] text-gray-700"
              />
              <input
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="email address"
                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a9dbd] text-gray-700"
              />
              <input
                name="subject"
                value={form.subject}
                onChange={handleChange}
                placeholder="phone number"
                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a9dbd] text-gray-700"
              />
              <input
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="your message"
                className="w-full border border-gray-300 px-4 py-2.5 text-sm focus:outline-none focus:border-[#1a9dbd] text-gray-700"
              />
              {status === "success" && (
                <p className="text-green-600 text-sm">Thank you! Your message has been sent.</p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">Failed to send. Please try again.</p>
              )}
              <button
                type="submit"
                disabled={status === "sending"}
                className="border border-gray-400 text-gray-700 text-sm px-5 py-2 hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {status === "sending" ? "Sending..." : "Contact Us"}
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:'Raleway,sans-serif'}}>
              Contact us
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p><strong>Address:</strong> Near Ring Road, Hemavathi Nagar, Last Stage Hassan 573-201</p>
              <p><strong>Contact No:</strong> +91-9448220421</p>
              <p><strong>E-Mail id:</strong> brilliantpucollege@gmail.com</p>
            </div>
          </div>

          {/* Map */}
          <div>
            <h2 className="text-2xl font-bold text-gray-800 mb-6" style={{fontFamily:'Raleway,sans-serif'}}>
              Our Location
            </h2>
            <div className="border border-gray-200 rounded-sm overflow-hidden shadow-sm">
              <iframe
                title="Brilliant PU College Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.7!2d76.0939!3d12.9769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf7abf4e1c2de1%3A0x4c83a11e8af62c12!2sBrilliant%20PU%20College!5e0!3m2!1sen!2sin!4v1630000000000!5m2!1sen!2sin"
                width="100%"
                height="260"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <div className="bg-white p-3 border-t border-gray-200">
                <p className="font-bold text-sm text-gray-800" style={{fontFamily:'Raleway,sans-serif'}}>Brilliant PU College</p>
                <p className="text-xs text-gray-600 mt-1">23GW+466, Near Ring Rd, Last Stage,<br/>Hemavathi Nagar, Hassan, Karnataka 573202</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-yellow-400 text-xs">★★★★</span>
                  <span className="text-xs text-gray-600">4.1 · 125 reviews</span>
                </div>
                <a
                  href="https://maps.google.com/?q=Brilliant+PU+College+Hassan"
                  target="_blank"
                  rel="noreferrer"
                  className="text-[#1a73e8] text-xs mt-1 block hover:underline"
                >
                  View larger map
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
