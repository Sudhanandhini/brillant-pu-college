import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/admin/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json();
      if (res.ok) {
        localStorage.setItem("adminToken", data.token);
        navigate("/admin/dashboard");
      } else {
        setError(data.error || "Login failed");
      }
    } catch {
      setError("Cannot connect to server. Make sure the backend is running.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-md w-full max-w-sm p-8">
        <div className="text-center mb-6">
          <h1
            className="text-xl font-bold text-[#1a9dbd] mb-1"
            style={{ fontFamily: "Raleway,sans-serif" }}
          >
            BRILLIANT PU COLLEGE
          </h1>
          <p className="text-sm text-gray-500 uppercase tracking-widest">Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoFocus
              className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:border-[#1a9dbd]"
              placeholder="Enter admin password"
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-[#1a9dbd] text-white font-bold uppercase tracking-wider py-2.5 text-sm hover:bg-[#158aa6] transition-colors disabled:opacity-60"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
          <p>password: brilliant@2024</p>
        </form>
      </div>
    </div>
  );
}
