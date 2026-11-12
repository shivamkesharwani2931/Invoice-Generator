
const mongoose = require("mongoose");

const invoiceItemSchema = new mongoose.Schema(
  {
    description: {
      type: String,
      required: true,
      trim: true,
    },

    hsnSac: {
      type: String,
      default: "",
    },

    quantity: {
      type: Number,
      required: true,
      min: 0.01,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    gstRate: {
      type: Number,
      default: 0,
      min: 0,
      max: 100,
    },

    taxableAmount: {
      type: Number,
      required: true,
      min: 0,
    },

    total: {
      type: Number,
      required: true,
      min: 0,
    },
  },
  { _id: true }
);

const invoiceSchema = new mongoose.Schema(
  {
    // Invoice owner
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    // Invoice number
    invoiceNumber: {
      type: String,
      required: true,
      trim: true,
    },

    // Seller information snapshot
    seller: {
      businessName: String,
      email: String,
      phone: String,
      address: String,
      gstin: String,
    },

    // Customer information
    customer: {
      name: {
        type: String,
        required: true,
      },

      email: String,
      phone: String,
      address: String,
      gstin: String,
    },

    // Invoice items
    items: {
      type: [invoiceItemSchema],
      validate: {
        validator: (items) => items.length > 0,
        message: "Invoice must contain at least one item",
      },
    },

    // Tax configuration
    taxType: {
      type: String,
      enum: ["GST", "IGST", "NONE"],
      default: "GST",
    },

    subtotal: {
      type: Number,
      required: true,
      min: 0,
    },

    discount: {
      type: Number,
      default: 0,
      min: 0,
    },

    cgst: {
      type: Number,
      default: 0,
      min: 0,
    },

    sgst: {
      type: Number,
      default: 0,
      min: 0,
    },

    igst: {
      type: Number,
      default: 0,
      min: 0,
    },

    taxAmount: {
      type: Number,
      default: 0,
      min: 0,
    },

    grandTotal: {
      type: Number,
      required: true,
      min: 0,
    },

    currency: {
      type: String,
      default: "INR",
    },

    // Dates
    invoiceDate: {
      type: Date,
      default: Date.now,
    },

    dueDate: {
      type: Date,
    },

    // Payment status
    paymentStatus: {
      type: String,
      enum: ["unpaid", "partial", "paid", "overdue"],
      default: "unpaid",
    },

    amountPaid: {
      type: Number,
      default: 0,
      min: 0,
    },

    notes: {
      type: String,
      default: "",
    },

    termsAndConditions: {
      type: String,
      default: "",
    },

    // PDF stored in MongoDB GridFS
    pdfFileId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    pdfFileName: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// Prevent duplicate invoice numbers for the same user
invoiceSchema.index(
  { userId: 1, invoiceNumber: 1 },
  { unique: true }
);

module.exports = mongoose.model("Invoice", invoiceSchema);
