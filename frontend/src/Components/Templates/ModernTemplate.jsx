
const ModernTemplate = ({ invoice = {} }) => {
  const business = invoice.business || {};
  const client = invoice.client || {};
  const payment = invoice.payment || {};
  const items = invoice.items || [];

  const subtotal = items.reduce(
    (sum, item) =>
      sum + Number(item.qty || 0) * Number(item.price || 0),
    0
  );

  const taxRate = Number(invoice.tax || 0);
  const tax = (subtotal * taxRate) / 100;
  const discount = Number(invoice.discount || 0);
  const total = Math.max(0, subtotal + tax - discount);

  const money = (value) =>
    new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
    }).format(Number(value || 0));

  return (
    <div className="modern-invoice bg-white text-slate-800 w-full max-w-4xl mx-auto p-5 sm:p-10">

      {/* HEADER */}
      <header className="flex justify-between items-start gap-4 mb-8">

        {/* Company logo panel */}
        <div className="w-20 sm:w-24 min-h-32 bg-blue-600 text-white flex flex-col items-center justify-center p-3 text-center shrink-0">
         

          <p className="text-[9px] sm:text-[10px] uppercase font-semibold break-words">
            {business.name || "Company Name"}
          </p>
        </div>

        {/* Invoice title */}
        <div className="text-right">
          <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900">
            INVOICE
          </h1>

          <p className="text-xs sm:text-sm mt-2 font-medium">
            Invoice No: #{invoice.invoiceNumber || "INV-001"}
          </p>
        </div>
      </header>

      {/* BUSINESS AND CLIENT INFORMATION */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">

        {/* Client */}
        <div>
          <p className="text-xs text-gray-500 mb-2">Invoice To:</p>

          <h2 className="font-bold text-base sm:text-lg">
            {client.name || "Client Name"}
          </h2>

          {client.designation && (
            <p className="text-xs text-gray-600">
              {client.designation}
            </p>
          )}

          <div className="border-b border-gray-300 my-3 w-full sm:max-w-64" />

          <div className="text-xs text-gray-600 space-y-1 break-words">
            {client.phone && <p>P: {client.phone}</p>}
            {client.email && <p>E: {client.email}</p>}
            {client.address && (
              <p className="whitespace-pre-line">
                A: {client.address}
              </p>
            )}
          </div>
        </div>

        {/* Business */}
        <div>
          <p className="text-xs text-gray-500 mb-2">Invoice From:</p>

          <h2 className="font-bold text-base sm:text-lg">
            {business.name || "Your Business"}
          </h2>

          {business.designation && (
            <p className="text-xs text-gray-600">
              {business.designation}
            </p>
          )}

          <div className="border-b border-gray-300 my-3 w-full sm:max-w-64" />

          <div className="text-xs text-gray-600 space-y-1 break-words">
            {business.phone && <p>P: {business.phone}</p>}
            {business.email && <p>E: {business.email}</p>}
            {business.address && (
              <p className="whitespace-pre-line">
                A: {business.address}
              </p>
            )}
          </div>

          <div className="text-xs text-gray-600 mt-3 space-y-1">
            <p>
              Invoice Date: {invoice.issueDate || "-"}
            </p>
            <p>
              Due Date: {invoice.dueDate || "-"}
            </p>
          </div>
        </div>
      </section>

      {/* ITEMS */}
      <section className="mb-6">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-xs sm:text-sm">
            <thead>
              <tr className="bg-blue-600 text-white uppercase">
                <th className="p-3 text-left font-semibold">
                  Description
                </th>
                <th className="p-3 text-right font-semibold">
                  Price
                </th>
                <th className="p-3 text-center font-semibold">
                  Qty
                </th>
                <th className="p-3 text-right font-semibold">
                  Total
                </th>
              </tr>
            </thead>

            <tbody>
              {items.map((item, index) => {
                const qty = Number(item.qty || 0);
                const price = Number(item.price || 0);

                return (
                  <tr
                    key={item.id ?? index}
                    className="border-b border-gray-300"
                  >
                    <td className="p-3">
                      <p className="font-medium text-gray-800">
                        {item.name || "Item"}
                      </p>

                      {item.description && (
                        <p className="text-[10px] text-gray-500 mt-1">
                          {item.description}
                        </p>
                      )}
                    </td>

                    <td className="p-3 text-right whitespace-nowrap">
                      {money(price)}
                    </td>

                    <td className="p-3 text-center">
                      {qty}
                    </td>

                    <td className="p-3 text-right whitespace-nowrap font-medium">
                      {money(qty * price)}
                    </td>
                  </tr>
                );
              })}

              {items.length === 0 && (
                <tr>
                  <td colSpan={4} className="p-5 text-center text-gray-500">
                    No items added
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </section>

      {/* SUBTOTAL AND TAX */}
      <section className="flex justify-end mb-4">
        <div className="w-full sm:w-72 text-xs sm:text-sm space-y-2">
          <div className="flex justify-between gap-3">
            <span>SUB TOTAL:</span>
            <span>{money(subtotal)}</span>
          </div>

          <div className="flex justify-between gap-3">
            <span>TAX ({taxRate}%):</span>
            <span>{money(tax)}</span>
          </div>

          <div className="flex justify-between gap-3">
            <span>DISCOUNT:</span>
            <span>-{money(discount)}</span>
          </div>
        </div>
      </section>

      {/* GRAND TOTAL BAR */}
      <section className="bg-blue-600 text-white p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-8">
        <p className="text-xs font-semibold">
          {payment.method
            ? `PAYMENT: ${payment.method}`
            : "PAYMENT DETAILS"}
          {payment.bankName ? ` · ${payment.bankName}` : ""}
        </p>

        <p className="font-bold text-sm sm:text-base">
          GRAND TOTAL: {money(total)}
        </p>
      </section>

      {/* TERMS AND PAYMENT */}
      <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-10">

        <div>
          <h3 className="text-xs font-bold uppercase mb-2">
            Terms & Conditions
          </h3>

          <p className="text-[10px] text-gray-600 whitespace-pre-line">
            {invoice.terms ||
              invoice.notes ||
              "Thank you for your business."}
          </p>

          <h3 className="text-xs font-bold uppercase mt-5 mb-2">
            Payment Method
          </h3>

          <div className="text-[10px] text-gray-600 space-y-1 break-words">
            <p>Account No: {payment.accountNumber || "-"}</p>
            <p>Account Name: {payment.accountName || business.name || "-"}</p>
            <p>Bank Name: {payment.bankName || "-"}</p>
            <p>UPI: {payment.upiId || "-"}</p>
          </div>
        </div>

        {/* Signature */}
        <div className="flex flex-col justify-end items-end text-right">
          {business.signatureUrl && (
            <img
              src={business.signatureUrl}
              alt="Authorized signature"
              className="max-w-32 h-14 object-contain mb-2"
            />
          )}

          <div className="font-serif italic text-blue-500 text-xl">
            {business.signatureName || business.name || "Authorized Signatory"}
          </div>

          <div className="border-t border-gray-300 w-44 mt-2 mb-2" />

          <p className="text-xs font-bold uppercase">
            {business.name || "Authorized Signatory"}
          </p>

          <p className="text-[10px] text-gray-500">
            Authorized Signatory
          </p>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-400 pt-3 flex flex-col sm:flex-row justify-between gap-2 text-[10px] text-gray-500">
        <span>{business.website || ""}</span>
        <span>{business.phone || ""}</span>
        <span>{business.email || ""}</span>
      </footer>

    </div>
  );
};

export default ModernTemplate;
