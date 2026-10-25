
const MinimalTemplate = ({ invoice = {} }) => {
  const items = invoice.items || [];
  const subtotal = items.reduce(
    (s, i) => s + Number(i.qty || 0) * Number(i.price || 0), 0
  );
  const tax = subtotal * Number(invoice.tax || 0) / 100;
  const discount = Number(invoice.discount || 0);
  const money = (v) => `₹${Number(v).toFixed(2)}`;

  return (
    <div className="bg-white text-gray-900 max-w-4xl mx-auto p-10">
      <div className="flex justify-between gap-4">
        <div>
          <p className="text-sm text-gray-400 uppercase tracking-widest">From</p>
          <h1 className="text-xl font-semibold mt-2">
            {invoice.business?.name || "Your Business"}
          </h1>
          <p className="text-sm text-gray-500 whitespace-pre-line">{invoice.business?.address}</p>
          <p className="text-sm text-gray-500">{invoice.business?.email}</p>
        </div>
        <div className="text-right">
          <h2 className="text-4xl font-light tracking-tight">Invoice</h2>
          <p className="text-sm mt-3">{invoice.invoiceNumber || "INV-001"}</p>
          <p className="text-sm text-gray-500">{invoice.issueDate || "-"}</p>
          <p className="text-sm text-gray-500">Due {invoice.dueDate || "-"}</p>
        </div>
      </div>

      <div className="mt-14 mb-10">
        <p className="text-xs text-gray-400 uppercase tracking-widest">Prepared for</p>
        <h3 className="text-xl font-medium mt-2">{invoice.client?.name || "Client Name"}</h3>
        <p className="text-sm text-gray-500">{invoice.client?.email}</p>
        <p className="text-sm text-gray-500 whitespace-pre-line">{invoice.client?.address}</p>
      </div>

      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-gray-900 text-gray-500">
            <th className="py-4 text-left font-medium">Item</th>
            <th className="py-4 text-right font-medium">Qty</th>
            <th className="py-4 text-right font-medium">Price</th>
            <th className="py-4 text-right font-medium">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id ?? i} className="border-b border-gray-100">
              <td className="py-5">{item.name}</td>
              <td className="py-5 text-right">{item.qty}</td>
              <td className="py-5 text-right">{money(item.price)}</td>
              <td className="py-5 text-right font-medium">
                {money(Number(item.qty || 0) * Number(item.price || 0))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="max-w-xs ml-auto mt-8 space-y-3 text-sm">
        <p className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></p>
        <p className="flex justify-between"><span>Tax</span><span>{money(tax)}</span></p>
        <p className="flex justify-between"><span>Discount</span><span>-{money(discount)}</span></p>
        <div className="border-t border-gray-900 pt-4 flex justify-between text-xl font-medium">
          <span>Total</span><span>{money(Math.max(0, subtotal + tax - discount))}</span>
        </div>
      </div>

      <div className="mt-14 border-t border-gray-100 pt-5 text-sm text-gray-500">
        <p>{invoice.notes || "Thank you."}</p>
        <p className="mt-4 text-xs">{invoice.payment?.upiId || ""}</p>
      </div>
    </div>
  );
};

export default MinimalTemplate;
