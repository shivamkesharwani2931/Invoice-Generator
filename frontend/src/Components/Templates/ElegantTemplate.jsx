
const ElegantTemplate = ({ invoice = {} }) => {
  const items = invoice.items || [];
  const subtotal = items.reduce(
    (s, i) => s + Number(i.qty || 0) * Number(i.price || 0), 0
  );
  const tax = subtotal * Number(invoice.tax || 0) / 100;
  const discount = Number(invoice.discount || 0);
  const total = Math.max(0, subtotal + tax - discount);
  const money = (v) => `₹${Number(v).toFixed(2)}`;

  return (
    <div className="bg-[#faf7f0] text-[#493b2a] max-w-4xl mx-auto p-8 md:p-12 font-serif">
      <div className="border border-[#b99a61] p-6 md:p-8">
        <div className="text-center">
          <p className="uppercase tracking-[4px] text-xs text-[#9a7b40]">
            {invoice.business?.name || "Your Business"}
          </p>
          <h1 className="text-4xl mt-5">Invoice</h1>
          <div className="w-20 h-px bg-[#b99a61] mx-auto my-5" />
          <p className="text-sm">No. {invoice.invoiceNumber || "INV-001"}</p>
          <p className="text-sm mt-1">
            {invoice.issueDate || "-"} · Due {invoice.dueDate || "-"}
          </p>
          <p className="text-xs mt-3">{invoice.business?.address}</p>
          <p className="text-xs">{invoice.business?.email}</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-[#d9c9a7] py-6 mt-8">
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9a7b40]">Billed To</p>
            <h2 className="text-xl mt-2">{invoice.client?.name || "Client Name"}</h2>
            <p className="text-sm mt-1">{invoice.client?.email}</p>
            <p className="text-sm whitespace-pre-line">{invoice.client?.address}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-[#9a7b40]">Payment</p>
            <p className="text-sm mt-2">{invoice.payment?.bankName || "-"}</p>
            <p className="text-sm break-words">{invoice.payment?.accountNumber || "-"}</p>
            <p className="text-sm">{invoice.payment?.upiId || "-"}</p>
          </div>
        </div>

        <table className="w-full mt-8 text-sm">
          <thead>
            <tr className="border-b border-[#b99a61] text-[#9a7b40]">
              <th className="py-3 text-left font-normal">Description</th>
              <th className="py-3 text-right font-normal">Qty</th>
              <th className="py-3 text-right font-normal">Rate</th>
              <th className="py-3 text-right font-normal">Amount</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item, i) => (
              <tr key={item.id ?? i} className="border-b border-[#e6dcc8]">
                <td className="py-4">{item.name}</td>
                <td className="py-4 text-right">{item.qty}</td>
                <td className="py-4 text-right">{money(item.price)}</td>
                <td className="py-4 text-right">
                  {money(Number(item.qty || 0) * Number(item.price || 0))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="max-w-xs ml-auto mt-8 space-y-2 text-sm">
          <p className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></p>
          <p className="flex justify-between"><span>Tax</span><span>{money(tax)}</span></p>
          <p className="flex justify-between"><span>Discount</span><span>-{money(discount)}</span></p>
          <div className="border-t border-[#b99a61] pt-4 flex justify-between text-xl">
            <span>Total</span><span>{money(total)}</span>
          </div>
        </div>

        <div className="text-center mt-10 pt-6 border-t border-[#d9c9a7]">
          <p className="text-sm italic">
            {invoice.notes || "Thank you for your trust and business."}
          </p>
          <p className="text-xs mt-4 text-[#9a7b40]">
            {invoice.footerText || "With appreciation"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ElegantTemplate;
