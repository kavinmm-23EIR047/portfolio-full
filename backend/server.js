import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors()); // Allow frontend requests

// Route to send emails
app.post("/send-email", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Respond immediately before sending the email
    res.status(200).json({ success: true, message: "Email sent successfully!" });

    // Setup email transport using Gmail SMTP
    let transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Email content
    let mailOptions = {
      from: email,
      to: process.env.EMAIL_USER, // Your email
      subject: "New Contact Form Submission",
      html: `<h2>New Message from ${name}</h2>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
    };

    // Send email after responding
    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error("Error sending email:", err);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  } catch (error) {
    console.error("Error in processing:", error);
  }
});

app.listen(5000, () => console.log("Server running on port 5000"));
