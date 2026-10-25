
// import React from "react";
import "../App.css"

// Currency formatter
const formatCurrency = (value) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(Number(value) || 0);
};

// Invoice calculations
const calculateInvoice = (invoice) => {
  const items = invoice.items || [];

  const subtotal = items.reduce((sum, item) => {
    return (
      sum +
      (Number(item.qty) || 0) *
        (Number(item.price) || 0)
    );
  }, 0);

  const taxRate = Number(invoice.tax) || 0;
  const taxAmount = subtotal * (taxRate / 100);
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

// Invoice Document
export function InvoiceDocument({
  invoice = {},
  template = "modern",
}) {
  const {
    subtotal,
    taxAmount,
    discount,
    total,
  } = calculateInvoice(invoice);

  const business = invoice.business || {};
  const client = invoice.client || {};
  const payment = invoice.payment || {};
  const items = invoice.items || [];

  const allowedTemplates = [
    "modern",
    "classic",
    "minimal",
    "creative",
    "elegant",
  ];

  const selectedTemplate = allowedTemplates.includes(template)
    ? template
    : "modern";

  return (
    <div
      className={`invoice-paper template-${selectedTemplate}`}
    >
      {/* HEADER */}
      <header className="invoice-header">
        <div className="invoice-brand">
          {business.logoUrl && (
            <img
              src={business.logoUrl}
              alt="Business Logo"
              className="invoice-logo"
            />
          )}

          <div>
            <h2>
              {business.name || "Your Business"}
            </h2>

            <p>{business.address || ""}</p>
            <p>{business.email || ""}</p>
          </div>
        </div>

        <div className="invoice-heading">
          <h1>{invoice.invoiceTitle || "INVOICE"}</h1>

          <p>
            <strong>No:</strong>{" "}
            {invoice.invoiceNumber || "INV-DRAFT"}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {invoice.issueDate || "—"}
          </p>

          <p>
            <strong>Due:</strong>{" "}
            {invoice.dueDate || "—"}
          </p>
        </div>
      </header>

      {/* CUSTOMER INFORMATION */}
      <section className="invoice-parties">
        <div>
          <h3>Bill To:</h3>

          <p>{client.name || "Client Name"}</p>
          <p>{client.email || ""}</p>
          <p>{client.address || ""}</p>
        </div>

        <div className="invoice-from">
          <h3>From:</h3>

          <p>{business.name || "Your Business"}</p>
          <p>{business.email || ""}</p>
          <p>{business.address || ""}</p>
        </div>
      </section>

      {/* ITEMS TABLE */}
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
            {items.length > 0 ? (
              items.map((item, index) => {
                const qty = Number(item.qty) || 0;
                const price = Number(item.price) || 0;

                return (
                  <tr key={item.id ?? index}>
                    <td>
                      {item.name || "Item description"}
                    </td>

                    <td>{qty}</td>

                    <td>{formatCurrency(price)}</td>

                    <td>
                      {formatCurrency(qty * price)}
                    </td>
                  </tr>
                );
              })
            ) : (
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
            {invoice.notes ||
              "Thank you for your business."}
          </p>
        </div>

        <div className="invoice-payment">
          <h3>Payment Information</h3>

          <p>
            <strong>Bank:</strong>{" "}
            {payment.bankName || "—"}
          </p>

          <p>
            <strong>Account:</strong>{" "}
            {payment.accountNumber || "—"}
          </p>

          <p>
            <strong>UPI:</strong>{" "}
            {payment.upiId || "—"}
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="invoice-footer">
        {invoice.footerText ||
          "Thank you for your business!"}
      </footer>
    </div>
  );
}
