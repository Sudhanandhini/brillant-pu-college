import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_BASE = import.meta.env.VITE_API_URL || "";
const imgUrl = (path) => `${API_BASE}${path}`;

/* ── Upload helpers ── */
async function apiPost(url, formData, token) {
  return fetch(url, {
    method: "POST",
    headers: { "x-admin-token": token },
    body: formData,
  });
}
async function apiDelete(url, token) {
  return fetch(url, { method: "DELETE", headers: { "x-admin-token": token } });
}


/* ── Popup Tab ── */
function PopupTab({ popups, token, onRefresh }) {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  async function handleUpload(e) {
    e.preventDefault();
    if (!file) return;
    setLoading(true);
    setMsg(null);
    const form = new FormData();
    form.append("title", title);
    form.append("image", file);
    const res = await apiPost(`${API_BASE}/api/admin/popup`, form, token);
    setLoading(false);
    if (res.ok) {
      setMsg({ ok: true, text: "Popup added successfully!" });
      setTitle("");
      setFile(null);
      e.target.reset();
      onRefresh();
    } else {
      setMsg({ ok: false, text: "Upload failed. Try again." });
    }
  }

  async function handleDelete(id) {
    if (!confirm("Remove this popup image?")) return;
    await apiDelete(`${API_BASE}/api/admin/popup/${id}`, token);
    onRefresh();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-base font-bold text-gray-700 uppercase tracking-wider">
        Popup Images ({popups.length})
      </h2>

      {popups.length === 0 ? (
        <p className="text-sm text-gray-400 italic">No popup images set.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {popups.map((p, i) => (
            <div key={p.id} className="bg-white rounded shadow-sm p-4 flex gap-3 items-start border border-gray-100">
              <div className="relative flex-shrink-0">
                <img src={imgUrl(p.url)} alt={p.title} className="w-32 h-20 object-cover rounded" />
                <span className="absolute top-1 left-1 bg-[#1a9dbd] text-white text-[10px] font-bold px-1.5 py-0.5 rounded">
                  #{i + 1}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm">{p.title || "(no title)"}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {new Date(p.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(p.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded flex-shrink-0 transition-colors"
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      <div className="bg-white rounded shadow-sm p-6 border border-gray-100">
        <h3 className="font-bold text-gray-700 mb-1">Add Popup Image</h3>
        <p className="text-xs text-gray-400 mb-4">Each uploaded image will appear as a slide in the popup carousel on the home page.</p>
        <form onSubmit={handleUpload} className="flex flex-col gap-4 max-w-md">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Title (optional)</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border border-gray-300 px-3 py-2 text-sm w-full focus:outline-none focus:border-[#1a9dbd]"
              placeholder="e.g. Admission Open 2026-27"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Image *</label>
            <input
              type="file"
              accept="image/*"
              required
              onChange={(e) => setFile(e.target.files[0])}
              className="text-sm text-gray-600"
            />
          </div>
          {msg && (
            <p className={`text-sm ${msg.ok ? "text-green-600" : "text-red-500"}`}>{msg.text}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1a9dbd] hover:bg-[#158aa6] text-white font-bold uppercase tracking-wider px-6 py-2.5 text-sm transition-colors disabled:opacity-60 w-fit"
          >
            {loading ? "Uploading..." : "Add Popup"}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── News / Events Tab ── */
function ContentTab({ items, type, token, onRefresh }) {
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState(null);

  const label = type === "news" ? "News" : "Event";

  async function handleUpload(e) {
    e.preventDefault();
    if (files.length === 0) return;
    setLoading(true);
    setMsg(null);
    const form = new FormData();
    form.append("title", title);
    files.forEach((f) => form.append("images", f));
    const res = await apiPost(`${API_BASE}/api/admin/${type}`, form, token);
    setLoading(false);
    if (res.ok) {
      setMsg({ ok: true, text: `${label} added successfully!` });
      setTitle("");
      setFiles([]);
      e.target.reset();
      onRefresh();
    } else {
      setMsg({ ok: false, text: "Upload failed. Try again." });
    }
  }

  async function handleDelete(id) {
    if (!confirm(`Delete this ${label.toLowerCase()}?`)) return;
    await apiDelete(`${API_BASE}/api/admin/${type}/${id}`, token);
    onRefresh();
  }

  return (
    <div className="space-y-6">
      <h2 className="text-base font-bold text-gray-700 uppercase tracking-wider">
        {label} Items ({items.length})
      </h2>

      {items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded shadow-sm p-4 border border-gray-100 flex gap-3 items-start"
            >
              {item.images[0] && (
                <img
                  src={imgUrl(item.images[0].url)}
                  alt={item.title}
                  className="w-20 h-14 object-cover rounded flex-shrink-0"
                />
              )}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-gray-800 text-sm truncate">{item.title}</p>
                <p className="text-xs text-gray-400 mt-1">
                  {item.images.length} image{item.images.length !== 1 ? "s" : ""} &middot;{" "}
                  {new Date(item.createdAt).toLocaleDateString()}
                </p>
              </div>
              <button
                onClick={() => handleDelete(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-1.5 rounded flex-shrink-0 transition-colors"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-sm text-gray-400 italic">No {type} added via admin yet.</p>
      )}

      <div className="bg-white rounded shadow-sm p-6 border border-gray-100">
        <h3 className="font-bold text-gray-700 mb-4">Add New {label}</h3>
        <form onSubmit={handleUpload} className="flex flex-col gap-4 max-w-md">
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">Title *</label>
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="border border-gray-300 px-3 py-2 text-sm w-full focus:outline-none focus:border-[#1a9dbd]"
              placeholder={type === "news" ? "e.g. Result 2025-26" : "e.g. Annual Day 2025-26"}
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Images * <span className="text-gray-400 font-normal">(select one or more)</span>
            </label>
            <input
              type="file"
              accept="image/*"
              multiple
              required
              onChange={(e) => setFiles(Array.from(e.target.files))}
              className="text-sm text-gray-600"
            />
            {files.length > 0 && (
              <p className="text-xs text-gray-400 mt-1">
                {files.length} file{files.length !== 1 ? "s" : ""} selected
              </p>
            )}
          </div>
          {msg && (
            <p className={`text-sm ${msg.ok ? "text-green-600" : "text-red-500"}`}>{msg.text}</p>
          )}
          <button
            type="submit"
            disabled={loading}
            className="bg-[#1a9dbd] hover:bg-[#158aa6] text-white font-bold uppercase tracking-wider px-6 py-2.5 text-sm transition-colors disabled:opacity-60 w-fit"
          >
            {loading ? "Uploading..." : `Add ${label}`}
          </button>
        </form>
      </div>
    </div>
  );
}

/* ── Dashboard ── */
export default function AdminDashboard() {
  const [tab, setTab] = useState("popup");
  const [popups, setPopups] = useState([]);
  const [news, setNews] = useState([]);
  const [events, setEvents] = useState([]);
  const [loadingData, setLoadingData] = useState(true);
  const navigate = useNavigate();

  const token = localStorage.getItem("adminToken");

  useEffect(() => {
    if (!token) {
      navigate("/admin");
      return;
    }
    loadAll();
  }, []);

  async function loadAll() {
    setLoadingData(true);
    try {
      const [p, n, e] = await Promise.all([
        fetch(`${API_BASE}/api/popup`).then((r) => r.json()),
        fetch(`${API_BASE}/api/news`).then((r) => r.json()),
        fetch(`${API_BASE}/api/events`).then((r) => r.json()),
      ]);
      setPopups(Array.isArray(p) ? p : []);
      setNews(n);
      setEvents(e);
    } finally {
      setLoadingData(false);
    }
  }

  function logout() {
    localStorage.removeItem("adminToken");
    navigate("/admin");
  }

  const tabs = [
    { key: "popup", label: "Popup" },
    { key: "news", label: "News" },
    { key: "events", label: "Events" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#1a9dbd] text-white px-6 py-3 flex justify-between items-center shadow">
        <h1 className="font-bold text-lg tracking-wide" style={{ fontFamily: "Raleway,sans-serif" }}>
          Admin Dashboard
        </h1>
        <button
          onClick={logout}
          className="text-sm bg-white text-[#1a9dbd] px-4 py-1.5 font-semibold hover:bg-gray-100 rounded transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b shadow-sm">
        <div className="max-w-5xl mx-auto flex">
          {tabs.map((t) => (
            <button
              key={t.key}
              onClick={() => setTab(t.key)}
              className={`px-8 py-3 font-bold uppercase text-sm tracking-wide transition-colors border-b-2 ${
                tab === t.key
                  ? "border-[#1a9dbd] text-[#1a9dbd]"
                  : "border-transparent text-gray-500 hover:text-gray-800"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto p-6">
        {loadingData ? (
          <div className="text-center py-20 text-gray-400 text-sm">Loading...</div>
        ) : (
          <>
            {tab === "popup" && (
              <PopupTab popups={popups} token={token} onRefresh={loadAll} />
            )}
            {tab === "news" && (
              <ContentTab items={news} type="news" token={token} onRefresh={loadAll} />
            )}
            {tab === "events" && (
              <ContentTab items={events} type="events" token={token} onRefresh={loadAll} />
            )}
          </>
        )}
      </div>
    </div>
  );
}
