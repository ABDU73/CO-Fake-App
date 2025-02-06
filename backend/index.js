import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";
import { upload } from "./src/config/multer.js";  // Assuming this is your multer config
import { contact, apply } from "./src/controllers/message.controllers.js";  // Your controllers
dotenv.config();

const __dirname = path.resolve();
const app = express();
const PORT = process.env.PORT || 5000;  // Default to 5000 if PORT isn't defined

// Middleware setup
app.use(cors({
  origin: 'http://localhost:3000',  // Allow frontend to make requests
}));
app.use(express.json());  // Parse JSON request bodies

// API Routes
app.post("/api/send-email", contact);
app.post('/api/send-application', upload.single('resume'), apply);

// Serve static frontend files in production
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));  // Adjust path as necessary
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "../frontend/dist", "index.html"));
  });
} 


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
