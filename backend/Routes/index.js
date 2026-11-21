const express = require("express");
const router = express.Router();

const authRoutes = require("./authRoutes");
const invoiceRoutes = require("./invoiceRoutes");

console.log("Auth routes loaded");
console.log("Invoice routes loaded");

router.use("/auth", authRoutes);
router.use("/invoices", invoiceRoutes);

module.exports = router;