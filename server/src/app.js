import express from "express";
import connectDB from "./db/connectDB.js";
import cors from "cors";
import User from "./models/User.js";

const app = express();

// Middleware
app.use(express.json());

const corsOptions = {
  origin: "http://localhost:8080",
};
app.use(cors(corsOptions));
// Routes
app.post("/api/user/create", async (req, res) => {
  console.log("Received request to create user:", req.body);
  const { name, email, password } = req.body;
  console.log(name, email, password);
  // Validate input
  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Please provide me name, email, and password." });
  }

  try {
    // Connect to database
    await connectDB();

    // Create user object
    const user = new User(req.body);

    // Save user to database
    await user.save();

    // Return success message
    const response = { message: "User created successfully" };
    console.log(response);
    res.status(201).json(response);
    return response;
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error." });
  }
});

export default app;
