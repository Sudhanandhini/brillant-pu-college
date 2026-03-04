require("dotenv").config();
const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
app.use(express.json());

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT) || 587,
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

app.post("/api/contact", async (req, res) => {
  const { name, email, subject, message, phone } = req.body;

  if (!name || !message) {
    return res.status(400).json({ error: "Name and message are required." });
  }

  const mailOptions = {
    from: `"Brilliant PU College Website" <${process.env.SMTP_USER}>`,
    to: "support@sunsys.in",
    subject: subject || `New Enquiry from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-family:Arial,sans-serif;font-size:14px;">
        <tr><td><strong>Name</strong></td><td>${name}</td></tr>
        ${email ? `<tr><td><strong>Email</strong></td><td>${email}</td></tr>` : ""}
        ${phone ? `<tr><td><strong>Phone</strong></td><td>${phone}</td></tr>` : ""}
        ${subject ? `<tr><td><strong>Subject</strong></td><td>${subject}</td></tr>` : ""}
        <tr><td><strong>Message</strong></td><td>${message}</td></tr>
      </table>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.json({ success: true, message: "Email sent successfully." });
  } catch (err) {
    console.error("Email send error:", err.message);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
