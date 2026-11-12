
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);

require("dotenv").config({
  path: ".env.production",
});

const  Connection  = require("./Config/db");
const apiRoutes = require("./Routes");

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// API routes
app.use("/api", apiRoutes);

const PORT = process.env.PORT || 5000;

Connection();

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
