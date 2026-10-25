
const BusinessTemplate = ({ invoice = {} }) => {
  const business = invoice.business || {};
  const client = invoice.client || {};
  const items = invoice.items || [];

  const subtotal = items.reduce(
    (sum, item) =>
      sum + Number(item.qty || 0) * Number(item.price || 0),
    0
  );

  const taxRate = Number(invoice.tax || 0);
  const tax = subtotal * (taxRate / 100);
  const discount = Number(invoice.discount || 0);
  const total = Math.max(0, subtotal + tax - discount);

  const money = (amount) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(amount);

  return (
    <div className="business-invoice bg-white text-gray-700 w-full max-w-4xl mx-auto overflow-hidden">

      {/* BLUE WAVE HEADER */}
      <header className="relative bg-gradient-to-r from-blue-950 via-blue-800 to-blue-600 text-white px-6 sm:px-10 pt-10 pb-20 sm:pt-12 sm:pb-24">

        {/* Decorative wave */}
        <svg
          className="absolute bottom-0 left-0 w-full h-20 sm:h-28"
          viewBox="0 0 1200 150"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M0,150 C180,15 330,20 520,45 C760,75 970,60 1200,0 L1200,150 Z"
            fill="#ffffff"
          />
        </svg>

        <div className="relative z-10 flex justify-between items-center gap-4">
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-wide">
            INVOICE
          </h1>

          <div className="text-right">
            <p className="text-xs sm:text-sm font-bold">
              NO: {invoice.invoiceNumber || "INV-001"}
            </p>
          </div>
        </div>
      </header>

      {/* BILL TO / FROM */}
      <section className="px-6 sm:px-10 pt-5 pb-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">
            Bill To:
          </h2>

          <p className="text-base sm:text-lg">
            {client.name || "Client Name"}
          </p>

          {client.phone && (
            <p className="text-sm sm:text-base">{client.phone}</p>
          )}

          <p className="text-sm sm:text-base whitespace-pre-line">
            {client.address || ""}
          </p>

          {client.email && (
            <p className="text-sm break-words">{client.email}</p>
          )}
        </div>

        <div className="sm:text-right">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-600 mb-2">
            From:
          </h2>

          <p className="text-base sm:text-lg">
            {business.name || "Your Business"}
          </p>

          {business.phone && (
            <p className="text-sm sm:text-base">{business.phone}</p>
          )}

          <p className="text-sm sm:text-base whitespace-pre-line">
            {business.address || ""}
          </p>

          {business.email && (
            <p className="text-sm break-words">{business.email}</p>
          )}
        </div>

      </section>

      {/* DATE */}
      <section className="px-6 sm:px-10 pb-8">
        <p className="text-base sm:text-lg">
          <span className="font-semibold">Date:</span>{" "}
          {invoice.issueDate || "-"}
        </p>

        {invoice.dueDate && (
          <p className="text-sm text-gray-500 mt-1">
            Due Date: {invoice.dueDate}
          </p>
        )}
      </section>

      {/* ITEMS TABLE */}
      <section className="px-4 sm:px-10">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="border border-blue-900 p-3 text-left font-medium">
                  Description
                </th>
                <th className="border border-blue-900 p-3 text-center font-medium">
                  Qty
                </th>
                <th className="border border-blue-900 p-3 text-right font-medium">
                  Price
                </th>
                <th className="border border-blue-900 p-3 text-right font-medium">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                const qty = Number(item.qty || 0);
                const price = Number(item.price || 0);

                return (
                  <tr key={item.id ?? index}>
                    <td className="border border-gray-400 p-3">
                      {item.name || "Item"}
                    </td>

                    <td className="border border-gray-400 p-3 text-center">
                      {qty}
                    </td>

                    <td className="border border-gray-400 p-3 text-right whitespace-nowrap">
                      {money(price)}
                    </td>

                    <td className="border border-gray-400 p-3 text-right whitespace-nowrap">
                      {money(qty * price)}
                    </td>
                  </tr>
                );
              })}

              {items.length === 0 && (
                <tr>
                  <td
                    colSpan={4}
                    className="border border-gray-400 p-4 text-center"
                  >
                    No items added
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* SUBTOTAL BAR */}
      <section className="px-4 sm:px-10 mt-6 flex justify-end">
        <div className="w-full sm:w-[55%]">
          <div className="bg-blue-900 text-white flex justify-between items-center p-3 sm:px-6">
            <span>Subtotal</span>
            <span className="font-semibold">{money(subtotal)}</span>
          </div>

          <div className="mt-3 space-y-2 px-2 text-sm">
            <div className="flex justify-between gap-3">
              <span>Tax ({taxRate}%)</span>
              <span>{money(tax)}</span>
            </div>

            <div className="flex justify-between gap-3">
              <span>Discount</span>
              <span>-{money(discount)}</span>
            </div>

            <div className="flex justify-between border-t pt-3 text-base font-bold text-blue-950">
              <span>Grand Total</span>
              <span>{money(total)}</span>
            </div>
          </div>
        </div>
      </section>

      {/* NOTES */}
      <section className="px-6 sm:px-10 mt-8">
        <h3 className="font-bold text-lg text-gray-600">Note:</h3>

        <p className="mt-2 text-sm whitespace-pre-line min-h-8">
          {invoice.notes || "Thank you for your business."}
        </p>
      </section>

      {/* PAYMENT + THANK YOU */}
      <footer className="px-6 sm:px-10 py-8 mt-4 grid grid-cols-1 sm:grid-cols-2 gap-8 items-end">

        <div className="text-sm">
          <h3 className="font-bold text-lg text-gray-600 mb-3">
            Payment Information:
          </h3>

          <p>
            <strong>Bank:</strong>{" "}
            {invoice.payment?.bankName || "-"}
          </p>

          <p className="break-words">
            <strong>Account:</strong>{" "}
            {invoice.payment?.accountNumber || "-"}
          </p>

          <p className="break-words">
            <strong>UPI:</strong>{" "}
            {invoice.payment?.upiId || "-"}
          </p>

          {invoice.footerText && (
            <p className="mt-3 text-gray-500">
              {invoice.footerText}
            </p>
          )}
        </div>

        <div className="sm:text-right">
          <p className="text-4xl sm:text-5xl font-light text-blue-950">
            Thank You!
          </p>
        </div>

      </footer>

    </div>
  );
};

export default BusinessTemplate;
