// server.js
import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(cors()); // Allows your React app to talk to this server
app.use(express.json()); // Allows the server to read JSON data

// 1. Database Connection (Using MongoDB)
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch(err => console.error("Connection error:", err));

// 2. Define the Message Schema
const messageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String,
  date: { type: Date, default: Date.now }
});

const Message = mongoose.model('Message', messageSchema);

// 3. API Route to handle Contact Form submissions
app.post('/api/contact', async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    res.status(201).json({ success: true, message: "Message sent successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));