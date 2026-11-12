
const express = require("express");

const router = express.Router();

const authRoutes = require("./authRoutes");
// const invoiceRoutes = require("./invoiceRoutes");

router.use("/auth", authRoutes);
// router.use("/invoices", invoiceRoutes);

module.exports = router;
