// src/routes/adminRoutes.js

const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// ✅ Admin Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    // 1️⃣ Check if admin user exists
    const adminUser = await User.findOne({ email, isAdmin: true });
    if (!adminUser)
      return res.status(401).json({ message: "Admin not found" });

    // 2️⃣ Compare password
    const isMatch = await bcrypt.compare(password, adminUser.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid password" });

    // 3️⃣ Generate JWT token
    const token = jwt.sign(
      { id: adminUser._id, email: adminUser.email, isAdmin: true },
      process.env.JWT_SECRET || "testsecretkey",
      { expiresIn: "7d" }
    );

    res.json({
      message: "Login successful",
      token,
      admin: {
        id: adminUser._id,
        name: adminUser.name,
        email: adminUser.email,
      },
    });
  } catch (err) {
    console.error("Admin login error:", err);
    res.status(500).json({ message: "Server error during login" });
  }
});

// ✅ Protected route example (optional)
router.get("/dashboard", async (req, res) => {
  res.json({ message: "Welcome, Admin Dashboard Active" });
});

module.exports = router;
