import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();
const app = express();

// 🔒 Bulletproof Production CORS Configuration
const allowedOrigins = [
  'http://localhost:5173', 
  'http://localhost:3000', 
  'https://portfolio-git-main-bens-projects-c05f07fd.vercel.app'
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin) return callback(null, true);
    if (allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Blocked by CORS policy: Origin not allowed.'));
    }
  },
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

app.options('*', cors());
app.use(express.json()); 

// 🎯 Core API Route to process Portfolio Contact Form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, error: 'Name, email, and message are required.' });
    }

    // 🛠️ Re-create transporter directly inside the route to guarantee fresh Env readings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Strict fallback to Google
      port: Number(process.env.SMTP_PORT || 465),     // Strict fallback to Secure Port
      secure: process.env.SMTP_SECURE === 'true' || !process.env.SMTP_PORT || process.env.SMTP_PORT === '465', 
      auth: {
        user: process.env.SMTP_USER || 'benasifiwe5@gmail.com',
        pass: process.env.SMTP_PASS, // Fetched from Render Dashboard
      },
      timeout: 10000 // 10 seconds timeout limit so it never freezes your backend app
    });

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'benasifiwe5@gmail.com',
      to: process.env.CONTACT_TO || 'benasifiwe5@gmail.com',
      replyTo: email,
      subject: subject ? `💼 Portfolio Contact: ${subject}` : `💼 New Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f8fafc; border-radius: 8px; max-width: 600px; border: 1px solid #e2e8f0;">
          <h3 style="color: #0ea5e9; border-bottom: 2px solid #e2e8f0; padding-bottom: 8px; margin-top: 0;">New Portfolio Contact</h3>
          <p style="margin: 8px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 8px 0;"><strong>Email:</strong> <a href="mailto:${email}" style="color: #0ea5e9; text-decoration: none;">${email}</a></p>
          <p style="margin: 8px 0;"><strong>Subject:</strong> ${subject || 'Not provided'}</p>
          <div style="margin-top: 15px; padding: 15px; background: #ffffff; border-left: 4px solid #0ea5e9; border-radius: 4px; box-shadow: inset 0 1px 2px rgba(0,0,0,0.05);">
            <p style="margin: 0; white-space: pre-line; color: #334155; line-height: 1.5;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #94a3b8; margin-top: 25px; border-top: 1px solid #f1f5f9; padding-top: 10px;">Sent securely via your portfolio-backend notification service.</p>
        </div>
      `,
    });
    
    console.log(`✉️ Email successfully dispatched for ${name}!`);
    return res.status(201).json({ success: true, message: 'Message sent successfully!' });

  } catch (error) {
    console.error('❌ Mail dispatch failed:', error.message);
    return res.status(500).json({ success: false, error: `Server Email Error: ${error.message}` });
  }
});

// Fallback 404 Route handler
app.use((req, res) => {
  res.status(404).json({ success: false, message: 'API route not found.' });
});

// 🚀 Crucial Render binding patch
const PORT = process.env.PORT || 10000; 
app.listen(PORT, '0.0.0.0', () => {
  console.log(`📡 Server running completely clean on port ${PORT}`);
});