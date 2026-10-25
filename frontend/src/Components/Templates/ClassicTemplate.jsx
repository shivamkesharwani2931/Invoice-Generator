
const ClassicTemplate = ({ invoice = {} }) => {
  const items = invoice.items || [];
  const subtotal = items.reduce(
    (s, i) => s + Number(i.qty || 0) * Number(i.price || 0), 0
  );
  const tax = subtotal * Number(invoice.tax || 0) / 100;
  const discount = Number(invoice.discount || 0);
  const money = (v) => `₹${Number(v).toFixed(2)}`;

  return (
    <div className="bg-white text-black p-8 max-w-4xl mx-auto font-serif">
      <div className="text-center border-b-2 border-black pb-5">
        <h1 className="text-3xl font-bold">
          {invoice.business?.name || "YOUR BUSINESS"}
        </h1>
        <p className="text-sm mt-2">{invoice.business?.address}</p>
        <p className="text-sm">{invoice.business?.email}</p>
        <h2 className="text-2xl font-bold mt-6 tracking-widest">
          INVOICE
        </h2>
      </div>

      <div className="flex justify-between gap-4 mt-6 text-sm">
        <div>
          <p><b>Bill To:</b></p>
          <p>{invoice.client?.name || "Client Name"}</p>
          <p>{invoice.client?.address}</p>
          <p>{invoice.client?.email}</p>
        </div>
        <div className="text-right">
          <p><b>Invoice No:</b> {invoice.invoiceNumber || "INV-001"}</p>
          <p><b>Date:</b> {invoice.issueDate || "-"}</p>
          <p><b>Due:</b> {invoice.dueDate || "-"}</p>
        </div>
      </div>

      <table className="w-full mt-8 text-sm border-collapse">
        <thead>
          <tr className="border-y-2 border-black">
            <th className="p-3 text-left">Description</th>
            <th className="p-3 text-right">Qty</th>
            <th className="p-3 text-right">Rate</th>
            <th className="p-3 text-right">Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, i) => (
            <tr key={item.id ?? i} className="border-b border-gray-400">
              <td className="p-3">{item.name}</td>
              <td className="p-3 text-right">{item.qty}</td>
              <td className="p-3 text-right">{money(item.price)}</td>
              <td className="p-3 text-right">
                {money(Number(item.qty || 0) * Number(item.price || 0))}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="ml-auto mt-6 max-w-xs text-sm space-y-2">
        <p className="flex justify-between"><span>Subtotal</span><b>{money(subtotal)}</b></p>
        <p className="flex justify-between"><span>Tax</span><b>{money(tax)}</b></p>
        <p className="flex justify-between"><span>Discount</span><b>-{money(discount)}</b></p>
        <p className="flex justify-between border-t-2 border-black pt-3 text-lg">
          <b>Total</b><b>{money(Math.max(0, subtotal + tax - discount))}</b>
        </p>
      </div>

      <div className="mt-10 border-t pt-4 text-sm">
        <b>Notes:</b>
        <p>{invoice.notes || "Thank you for your business."}</p>
      </div>
    </div>
  );
};

export default ClassicTemplate;
