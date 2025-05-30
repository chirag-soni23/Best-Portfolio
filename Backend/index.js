const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
const PORT = 5000;
const compression = require("compression");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(compression());

app.post("/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: `"${name}" <${email}>`,
    to: process.env.EMAIL_USER,
    subject: subject || "New Contact Form Message",
    text: `From: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: Arial, sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
        <h2 style="color: #333;">📩 New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message.replace(/\n/g, "<br>")}</p>
        <hr style="margin: 10px 0;">
      </div>
    `,
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Failed to send email", error });
  }
});

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT} http://localhost:${PORT}`);
});
