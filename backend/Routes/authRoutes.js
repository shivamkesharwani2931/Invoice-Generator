
const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  logout,
} = require("../Controllers/authController");

const protect = require("../Middleware/authMiddleware");

// Signup
router.post("/signup", signup);

// Login
router.post("/login", login);

// Logout
router.post("/logout", logout);

// Get currently logged-in user
router.get("/me", protect, (req, res) => {
  res.status(200).json({
    success: true,
    user: {
      id: req.user._id,
      name: req.user.name,
      email: req.user.email,
    },
  });
});

module.exports = router;
