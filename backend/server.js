require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const multer = require("multer");
const path = require("path");
const fs = require("fs");

const app = express();
const PORT = process.env.PORT || 5000;

// ── Storage directories ──
const uploadsDir = path.join(__dirname, "uploads");
const dataDir = path.join(__dirname, "data");
const dataFile = path.join(dataDir, "data.json");

[uploadsDir, dataDir].forEach((d) => {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
});
if (!fs.existsSync(dataFile)) {
  fs.writeFileSync(dataFile, JSON.stringify({ popup: null, news: [], events: [] }, null, 2));
}

function readData() {
  return JSON.parse(fs.readFileSync(dataFile, "utf8"));
}
function writeData(d) {
  fs.writeFileSync(dataFile, JSON.stringify(d, null, 2));
}

// ── Middleware ──
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());
app.use("/uploads", express.static(uploadsDir));

// ── Multer ──
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadsDir),
  filename: (req, file, cb) => {
    const unique = `${Date.now()}-${Math.round(Math.random() * 1e9)}`;
    cb(null, unique + path.extname(file.originalname));
  },
});
const upload = multer({ storage, limits: { fileSize: 10 * 1024 * 1024 } });

// ── Admin auth ──
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "brilliant@2024";
const ADMIN_TOKEN = process.env.ADMIN_TOKEN || "brilliant-admin-secret-2024";

function adminAuth(req, res, next) {
  if (req.headers["x-admin-token"] !== ADMIN_TOKEN)
    return res.status(401).json({ error: "Unauthorized" });
  next();
}

// ── Admin login ──
app.post("/api/admin/login", (req, res) => {
  if (req.body.password === ADMIN_PASSWORD) res.json({ token: ADMIN_TOKEN });
  else res.status(401).json({ error: "Invalid password" });
});

// ── Public: get data ──
app.get("/api/popup", (req, res) => {
  const data = readData();
  // migrate old single-object format to array
  if (data.popup && !Array.isArray(data.popup)) {
    data.popup = [{ ...data.popup, id: Date.now().toString() }];
    writeData(data);
  }
  res.json(data.popup || []);
});
app.get("/api/news", (req, res) => res.json(readData().news || []));
app.get("/api/events", (req, res) => res.json(readData().events || []));

// ── Admin: Popup ──
app.post("/api/admin/popup", adminAuth, upload.single("image"), (req, res) => {
  const data = readData();
  if (!Array.isArray(data.popup)) data.popup = [];
  const item = {
    id: Date.now().toString(),
    title: req.body.title || "",
    filename: req.file.filename,
    url: `/uploads/${req.file.filename}`,
    createdAt: new Date().toISOString(),
  };
  data.popup.unshift(item);
  writeData(data);
  res.json(item);
});

app.delete("/api/admin/popup/:id", adminAuth, (req, res) => {
  const data = readData();
  if (!Array.isArray(data.popup)) data.popup = [];
  const idx = data.popup.findIndex((p) => p.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  const old = path.join(uploadsDir, data.popup[idx].filename);
  if (fs.existsSync(old)) fs.unlinkSync(old);
  data.popup.splice(idx, 1);
  writeData(data);
  res.json({ success: true });
});

// ── Admin: News ──
app.post("/api/admin/news", adminAuth, upload.array("images", 20), (req, res) => {
  const data = readData();
  const item = {
    id: Date.now().toString(),
    title: req.body.title,
    images: req.files.map((f) => ({ filename: f.filename, url: `/uploads/${f.filename}` })),
    createdAt: new Date().toISOString(),
  };
  data.news.unshift(item);
  writeData(data);
  res.json(item);
});

app.delete("/api/admin/news/:id", adminAuth, (req, res) => {
  const data = readData();
  const idx = data.news.findIndex((n) => n.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  data.news[idx].images.forEach((img) => {
    const p = path.join(uploadsDir, img.filename);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });
  data.news.splice(idx, 1);
  writeData(data);
  res.json({ success: true });
});

// ── Admin: Events ──
app.post("/api/admin/events", adminAuth, upload.array("images", 20), (req, res) => {
  const data = readData();
  const item = {
    id: Date.now().toString(),
    title: req.body.title,
    images: req.files.map((f) => ({ filename: f.filename, url: `/uploads/${f.filename}` })),
    createdAt: new Date().toISOString(),
  };
  data.events.unshift(item);
  writeData(data);
  res.json(item);
});

app.delete("/api/admin/events/:id", adminAuth, (req, res) => {
  const data = readData();
  const idx = data.events.findIndex((e) => e.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: "Not found" });
  data.events[idx].images.forEach((img) => {
    const p = path.join(uploadsDir, img.filename);
    if (fs.existsSync(p)) fs.unlinkSync(p);
  });
  data.events.splice(idx, 1);
  writeData(data);
  res.json({ success: true });
});

// ── Contact form ──
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: { user: process.env.SMTP_USER, pass: process.env.SMTP_PASS },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message, phone } = req.body;
  if (!name || !message) return res.status(400).json({ error: "Name and message are required." });
  try {
    await transporter.sendMail({
      from: `"Brilliant PU College Website" <${process.env.SMTP_USER}>`,
      to: process.env.RECEIVER_EMAIL,
      subject: subject || `New Enquiry from ${name}`,
      html: `<h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
          <tr><td><strong>Name</strong></td><td>${name}</td></tr>
          ${email ? `<tr><td><strong>Email</strong></td><td>${email}</td></tr>` : ""}
          ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
          ${subject ? `<tr><td><strong>Subject</strong></td><td>${subject}</td></tr>` : ""}
          <tr><td><strong>Message</strong></td><td>${message}</td></tr>
        </table>`,
    });
    res.json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("Email send error:", err.message);
    res.status(500).json({ error: "Failed to send email." });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
