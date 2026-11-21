
const jwt = require("jsonwebtoken");
const User = require("../Models/User");

const protect = async (req, res, next) => {
  try {
    const token = req.cookies?.token;

    console.log("Cookie received:", Boolean(token));

    if (!token) {
      return res.status(401).json({
        success: false,
        message: "Please login first.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    console.log("JWT verified:", Boolean(decoded.id));

    const user = await User.findById(decoded.id).select("-password");

    if (!user) {
      console.log("User not found for decoded ID");

      return res.status(401).json({
        success: false,
        message: "User not found.",
      });
    }

    req.user = user;

    console.log("Authenticated user:", user.email);

    next();
  } catch (error) {
    console.error("Authentication error:", error.name, error.message);

    return res.status(401).json({
      success: false,
      message: "Invalid or expired session. Please login again.",
    });
  }
};

module.exports = protect;