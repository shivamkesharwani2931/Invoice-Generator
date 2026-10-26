


const inputClass =
  "w-full rounded-lg border border-gray-300 px-3 py-2.5 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100";

const labelClass = "mb-1.5 block text-sm font-medium text-gray-700";

const formatCurrency = (value) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 2,
  }).format(Number.isFinite(value) ? value : 0);

export default function InvoiceForm({
  invoice,
  setInvoice,
}) {
  const updateField = (field, value) => {
    setInvoice((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateParty = (party, field, value) => {
    setInvoice((prev) => ({
      ...prev,
      [party]: {
        ...prev[party],
        [field]: value,
      },
    }));
  };

  const updateItem = (id, field, value) => {
    setInvoice((prev) => ({
      ...prev,
      items: prev.items.map((item) =>
        item.id === id
          ? { ...item, [field]: value }
          : item
      ),
    }));
  };

  const addItem = () => {
    setInvoice((prev) => ({
      ...prev,
      items: [
        ...prev.items,
        {
          id: crypto.randomUUID(),
          name: "",
          qty: 1,
          price: 0,
        },
      ],
    }));
  };

  const removeItem = (id) => {
    setInvoice((prev) => ({
      ...prev,
      items:
        prev.items.length > 1
          ? prev.items.filter((item) => item.id !== id)
          : prev.items,
    }));
  };

  const subtotal = invoice.items.reduce((sum, item) => {
    const qty = Math.max(0, Number(item.qty) || 0);
    const price = Math.max(0, Number(item.price) || 0);

    return sum + qty * price;
  }, 0);

  const taxRate = Math.max(
    0,
    Math.min(100, Number(invoice.tax) || 0)
  );

  const discount = Math.max(
    0,
    Number(invoice.discount) || 0
  );

  const taxAmount = subtotal * (taxRate / 100);
  const total = Math.max(0, subtotal + taxAmount - discount);

  return (
    <div className="space-y-6">
      

      {/* Business information */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">
          Business Information
        </h2>

        <div className="space-y-4">
          <div>
            <label className={labelClass}>Business Name</label>
            <input
              className={inputClass}
              value={invoice.business.name}
              onChange={(e) =>
                updateParty("business", "name", e.target.value)
              }
              placeholder="Your company name"
            />
          </div>

          <div>
            <label className={labelClass}>Business Email</label>
            <input
              type="email"
              className={inputClass}
              value={invoice.business.email}
              onChange={(e) =>
                updateParty("business", "email", e.target.value)
              }
              placeholder="you@company.com"
            />
          </div>

          <div>
            <label className={labelClass}>Business Address</label>
            <textarea
              rows={2}
              className={inputClass}
              value={invoice.business.address}
              onChange={(e) =>
                updateParty("business", "address", e.target.value)
              }
              placeholder="Business address"
            />
          </div>

          <div>
            <label className={labelClass}>Logo URL (optional)</label>
            <input
              type="url"
              className={inputClass}
              value={invoice.business.logoUrl}
              onChange={(e) =>
                updateParty("business", "logoUrl", e.target.value)
              }
              placeholder="https://example.com/logo.png"
            />
            <p className="mt-1 text-xs text-gray-500">
              Use a publicly accessible image URL.
            </p>
          </div>
        </div>
      </section>

      {/* Client information */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">
          Client Information
        </h2>

        <div className="space-y-4">
          <div>
            <label className={labelClass}>Client Name</label>
            <input
              className={inputClass}
              value={invoice.client.name}
              onChange={(e) =>
                updateParty("client", "name", e.target.value)
              }
              placeholder="Client or company name"
            />
          </div>

          <div>
            <label className={labelClass}>Client Email</label>
            <input
              type="email"
              className={inputClass}
              value={invoice.client.email}
              onChange={(e) =>
                updateParty("client", "email", e.target.value)
              }
              placeholder="client@example.com"
            />
          </div>

          <div>
            <label className={labelClass}>Client Address</label>
            <textarea
              rows={2}
              className={inputClass}
              value={invoice.client.address}
              onChange={(e) =>
                updateParty("client", "address", e.target.value)
              }
              placeholder="Client address"
            />
          </div>
        </div>
      </section>

      {/* Invoice details */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">
          Invoice Details
        </h2>

        <div className="space-y-4">
          <div>
            <label className={labelClass}>Invoice Number</label>
            <input
              className={`${inputClass} bg-gray-100`}
              value={invoice.invoiceNumber}
              readOnly
            />
            <p className="mt-1 text-xs text-gray-500">
              Draft number. Assign the final unique number on the server.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={labelClass}>Issue Date</label>
              <input
                type="date"
                className={inputClass}
                value={invoice.issueDate}
                onChange={(e) =>
                  updateField("issueDate", e.target.value)
                }
              />
            </div>

            <div>
              <label className={labelClass}>Due Date</label>
              <input
                type="date"
                className={inputClass}
                value={invoice.dueDate}
                min={invoice.issueDate || undefined}
                onChange={(e) =>
                  updateField("dueDate", e.target.value)
                }
              />
            </div>
          </div>
        </div>
      </section>

      {/* Invoice items */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <div className="mb-5 flex items-center justify-between gap-3">
          <h2 className="text-lg font-semibold">Invoice Items</h2>

          <button
            type="button"
            onClick={addItem}
            className="rounded-lg bg-blue-700 px-3 py-2 text-sm font-medium text-white hover:bg-blue-800"
          >
            + Add Item
          </button>
        </div>

        <div className="space-y-5">
          {invoice.items.map((item, index) => (
            <div
              key={item.id}
              className="rounded-xl border border-gray-200 p-4"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-sm font-semibold">
                  Item {index + 1}
                </h3>

                <button
                  type="button"
                  disabled={invoice.items.length === 1}
                  onClick={() => removeItem(item.id)}
                  className="text-sm font-medium text-red-600 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Remove
                </button>
              </div>

              <div>
                <label className={labelClass}>Description</label>
                <input
                  className={inputClass}
                  value={item.name}
                  onChange={(e) =>
                    updateItem(item.id, "name", e.target.value)
                  }
                  placeholder="e.g. Website Development"
                />
              </div>

              <div className="mt-4 grid grid-cols-2 gap-3">
                <div>
                  <label className={labelClass}>Quantity</label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    className={inputClass}
                    value={item.qty}
                    onChange={(e) =>
                      updateItem(item.id, "qty", e.target.value)
                    }
                  />
                </div>

                <div>
                  <label className={labelClass}>Rate (₹)</label>
                  <input
                    type="number"
                    min="0"
                    step="any"
                    className={inputClass}
                    value={item.price}
                    onChange={(e) =>
                      updateItem(item.id, "price", e.target.value)
                    }
                  />
                </div>
              </div>

              <div className="mt-3 text-right text-sm font-semibold text-gray-700">
                Amount:{" "}
                {formatCurrency(
                  Math.max(0, Number(item.qty) || 0) *
                    Math.max(0, Number(item.price) || 0)
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Tax and discount */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-5 text-lg font-semibold">
          Tax & Discount
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className={labelClass}>Tax (%)</label>
            <input
              type="number"
              min="0"
              max="100"
              step="any"
              className={inputClass}
              value={invoice.tax}
              onChange={(e) => updateField("tax", e.target.value)}
            />
          </div>

          <div>
            <label className={labelClass}>Discount (₹)</label>
            <input
              type="number"
              min="0"
              step="any"
              className={inputClass}
              value={invoice.discount}
              onChange={(e) =>
                updateField("discount", e.target.value)
              }
            />
          </div>
        </div>

        <div className="mt-6 space-y-3 rounded-xl bg-gray-50 p-4">
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Subtotal</span>
            <span>{formatCurrency(subtotal)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">
              Tax ({taxRate}%)
            </span>
            <span>{formatCurrency(taxAmount)}</span>
          </div>

          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Discount</span>
            <span>- {formatCurrency(discount)}</span>
          </div>

          <div className="flex justify-between border-t border-gray-200 pt-3 text-lg font-bold">
            <span>Total</span>
            <span className="text-blue-700">
              {formatCurrency(total)}
            </span>
          </div>
        </div>
      </section>

      {/* Notes */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-lg font-semibold">
          Notes
        </h2>

        <textarea
          rows={4}
          className={inputClass}
          value={invoice.notes}
          onChange={(e) => updateField("notes", e.target.value)}
          placeholder="Payment instructions, terms, or thank-you message..."
        />
      </section>
    </div>
  );
}
