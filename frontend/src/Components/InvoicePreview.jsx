
import { useRef, useState } from "react";
import html2pdf from "html2pdf.js";
import "../App.css"

/* =========================
   CURRENCY FORMATTER
========================= */

const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(Number(value) || 0);
};

/* =========================
   INVOICE CALCULATIONS
========================= */

const calculateInvoice = (invoice) => {
  const subtotal = (invoice.items || []).reduce((sum, item) => {
    return (
      sum +
      (Number(item.qty) || 0) *
        (Number(item.price) || 0)
    );
  }, 0);

  const taxAmount =
    subtotal * ((Number(invoice.tax) || 0) / 100);

  const discount = Number(invoice.discount) || 0;

  const total = Math.max(
    0,
    subtotal + taxAmount - discount
  );

  return {
    subtotal,
    taxAmount,
    discount,
    total,
  };
};

/* =========================
   INVOICE DOCUMENT
========================= */

export function InvoiceDocument({
  invoice,
  template = "modern",
}) {
  const {
    subtotal,
    taxAmount,
    discount,
    total,
  } = calculateInvoice(invoice);

  const templates = [
    "modern",
    "classic",
    "minimal",
    "business",
    "creative",
    "elegant",
  ];

  const selectedTemplate = templates.includes(template)
    ? template
    : "modern";

  return (
    <div
      className={`invoice-paper template-${selectedTemplate}`}
    >
      {/* HEADER */}

      <header className="invoice-header">
        <div className="invoice-brand">
          {invoice.business?.logoUrl && (
            <img
              src={invoice.business.logoUrl}
              alt="Business logo"
              className="invoice-logo"
              crossOrigin="anonymous"
            />
          )}

          <div>
            <h2>
              {invoice.business?.name || "Your Business"}
            </h2>

            <p>{invoice.business?.address}</p>
            <p>{invoice.business?.email}</p>
          </div>
        </div>

        <div className="invoice-heading">
          <h1>{invoice.invoiceTitle || "INVOICE"}</h1>

          <p>
            <strong>No:</strong>{" "}
            {invoice.invoiceNumber || "INV-DRAFT"}
          </p>

          {invoice.issueDate && (
            <p>
              <strong>Date:</strong> {invoice.issueDate}
            </p>
          )}

          {invoice.dueDate && (
            <p>
              <strong>Due:</strong> {invoice.dueDate}
            </p>
          )}
        </div>
      </header>

      {/* CUSTOMER INFORMATION */}

      <section className="invoice-parties">
        <div>
          <h3>Bill To:</h3>

          <p>
            {invoice.client?.name || "Client Name"}
          </p>

          <p>{invoice.client?.email}</p>
          <p>{invoice.client?.address}</p>
        </div>

        <div className="invoice-from">
          <h3>From:</h3>

          <p>
            {invoice.business?.name || "Your Business"}
          </p>

          <p>{invoice.business?.email}</p>
          <p>{invoice.business?.address}</p>
        </div>
      </section>

      {/* ITEMS */}

      <section className="invoice-items-section">
        <table className="invoice-table">
          <thead>
            <tr>
              <th>Description</th>
              <th>Qty</th>
              <th>Price</th>
              <th>Amount</th>
            </tr>
          </thead>

          <tbody>
            {(invoice.items || []).map((item, index) => (
              <tr key={item.id ?? index}>
                <td>
                  {item.name || "Item description"}
                </td>

                <td>
                  {Number(item.qty) || 0}
                </td>

                <td>
                  {formatCurrency(item.price)}
                </td>

                <td>
                  {formatCurrency(
                    (Number(item.qty) || 0) *
                      (Number(item.price) || 0)
                  )}
                </td>
              </tr>
            ))}

            {invoice.items?.length === 0 && (
              <tr>
                <td colSpan={4}>No items added</td>
              </tr>
            )}
          </tbody>
        </table>
      </section>

      {/* TOTALS */}

      <section className="invoice-totals">
        <div>
          <span>Subtotal</span>
          <span>{formatCurrency(subtotal)}</span>
        </div>

        <div>
          <span>
            Tax ({Number(invoice.tax) || 0}%)
          </span>
          <span>{formatCurrency(taxAmount)}</span>
        </div>

        <div>
          <span>Discount</span>
          <span>-{formatCurrency(discount)}</span>
        </div>

        <div className="invoice-grand-total">
          <strong>Total</strong>
          <strong>{formatCurrency(total)}</strong>
        </div>
      </section>

      {/* NOTES AND PAYMENT */}

      <section className="invoice-bottom">
        <div className="invoice-notes">
          <h3>Notes</h3>
          <p>
            {invoice.notes || "Thank you for your business."}
          </p>
        </div>

        <div className="invoice-payment">
          <h3>Payment Information</h3>

          <p>
            <strong>Bank:</strong>{" "}
            {invoice.payment?.bankName || "—"}
          </p>

          <p>
            <strong>Account:</strong>{" "}
            {invoice.payment?.accountNumber || "—"}
          </p>

          <p>
            <strong>UPI:</strong>{" "}
            {invoice.payment?.upiId || "—"}
          </p>
        </div>
      </section>

      <footer className="invoice-footer">
        {invoice.footerText || "Thank you for your business!"}
      </footer>
    </div>
  );
}

/* =========================
   INVOICE PREVIEW
========================= */

export default function InvoicePreview({
  invoice,
  template = "modern",
}) {
  const invoiceRef = useRef(null);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    if (!invoiceRef.current || downloading) return;

    setDownloading(true);

    try {
      // Wait for invoice images to load
      const images = [
        ...invoiceRef.current.querySelectorAll("img"),
      ];

      await Promise.all(
        images.map((img) => {
          if (img.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve;
          });
        })
      );

      const fileName = String(
        invoice.invoiceNumber || "INV-DRAFT"
      ).replace(/[^a-zA-Z0-9_-]/g, "_");

      await html2pdf()
        .set({
          margin: [8, 8, 8, 8],
          filename: `invoice-${fileName}.pdf`,

          image: {
            type: "jpeg",
            quality: 0.98,
          },

          html2canvas: {
            scale: 2,
            useCORS: true,
            allowTaint: false,
            backgroundColor: "#ffffff",
            logging: false,

            onclone: (clonedDocument) => {
              const clonedInvoice =
                clonedDocument.querySelector(
                  ".invoice-paper"
                );

              if (!clonedInvoice) {
                throw new Error(
                  "Invoice document not found in PDF clone."
                );
              }

              /*
               * Resolve computed CSS colors.
               * This helps with modern CSS color functions
               * such as oklch() used by Tailwind.
               */

              const elements = [
                clonedInvoice,
                ...clonedInvoice.querySelectorAll("*"),
              ];

              elements.forEach((element) => {
                const computed =
                  clonedDocument.defaultView.getComputedStyle(
                    element
                  );

                const properties = [
                  "color",
                  "backgroundColor",
                  "borderTopColor",
                  "borderRightColor",
                  "borderBottomColor",
                  "borderLeftColor",
                  "outlineColor",
                  "textDecorationColor",
                ];

                properties.forEach((property) => {
                  const value = computed[property];

                  if (value) {
                    const cssProperty = property.replace(
                      /[A-Z]/g,
                      (char) => `-${char.toLowerCase()}`
                    );

                    element.style.setProperty(
                      cssProperty,
                      value,
                      "important"
                    );
                  }
                });

                // Remove unsupported shadows
                element.style.setProperty(
                  "box-shadow",
                  "none",
                  "important"
                );

                element.style.setProperty(
                  "text-shadow",
                  "none",
                  "important"
                );
              });

              // White invoice background
              clonedInvoice.style.setProperty(
                "background-color",
                "#ffffff",
                "important"
              );
            },
          },

          jsPDF: {
            unit: "mm",
            format: "a4",
            orientation: "portrait",
          },

          pagebreak: {
            mode: ["css", "legacy"],
          },
        })
        .from(invoiceRef.current)
        .save();

    } catch (error) {
      console.error("PDF download error:", error);

      alert(
        `PDF download failed: ${
          error?.message || "Please try again."
        }`
      );
    } finally {
      setDownloading(false);
    }
  };

  return (
    <section className="invoice-preview-container">
      <div className="invoice-preview-toolbar">
        <div>
          <h2>Invoice Preview</h2>
          <p>Template: {template}</p>
        </div>

        <button
          type="button"
          onClick={handleDownload}
          disabled={downloading}
          className="invoice-download-btn"
        >
          {downloading ? "Generating PDF..." : "Download PDF"}
        </button>
      </div>

      <div className="invoice-preview-canvas">
        <div ref={invoiceRef}>
          <InvoiceDocument
            invoice={invoice}
            template={template}
          />
        </div>
      </div>
    </section>
  );
}
