
const CreativeTemplate = ({ invoice = {} }) => {
  const items = invoice.items || [];
  const subtotal = items.reduce(
    (s, i) => s + Number(i.qty || 0) * Number(i.price || 0), 0
  );
  const tax = subtotal * Number(invoice.tax || 0) / 100;
  const discount = Number(invoice.discount || 0);
  const money = (v) => `₹${Number(v).toFixed(2)}`;

  return (
    <div className="bg-white max-w-4xl mx-auto text-gray-900">
      <div className="grid grid-cols-1 md:grid-cols-[220px_1fr]">
        <aside className="bg-purple-800 text-white p-6">
          <p className="text-xs tracking-widest text-purple-200">INVOICE</p>
          <h1 className="text-3xl font-black mt-4 break-words">
            {invoice.invoiceNumber || "INV-001"}
          </h1>
          <div className="mt-10 text-sm space-y-4">
            <div>
              <p className="text-purple-200">ISSUED</p>
              <p>{invoice.issueDate || "-"}</p>
            </div>
            <div>
              <p className="text-purple-200">DUE DATE</p>
              <p>{invoice.dueDate || "-"}</p>
            </div>
          </div>
          <div className="mt-12 border-t border-purple-500 pt-5">
            <p className="text-xs text-purple-200">TOTAL DUE</p>
            <p className="text-2xl font-bold mt-2">
              {money(Math.max(0, subtotal + tax - discount))}
            </p>
          </div>
        </aside>

        <main className="p-7 md:p-10">
          <div className="border-b pb-6">
            <p className="text-xs uppercase tracking-widest text-purple-700">
              Prepared by
            </p>
            <h2 className="text-2xl font-bold mt-2">
              {invoice.business?.name || "Your Studio"}
            </h2>
            <p className="text-sm text-gray-500 mt-2 whitespace-pre-line">
              {invoice.business?.address}
            </p>
            <p className="text-sm text-gray-500">{invoice.business?.email}</p>
          </div>

          <div className="my-7 bg-purple-50 p-5 rounded-xl">
            <p className="text-xs text-purple-700 font-bold">BILLED TO</p>
            <h3 className="font-bold text-lg mt-2">
              {invoice.client?.name || "Client Name"}
            </h3>
            <p className="text-sm mt-1">{invoice.client?.email}</p>
            <p className="text-sm whitespace-pre-line">
              {invoice.client?.address}
            </p>
          </div>

          <h3 className="font-bold text-lg mb-4">Project Breakdown</h3>
          <div className="space-y-4">
            {items.map((item, i) => (
              <div key={item.id ?? i} className="flex justify-between gap-3 border-b pb-3">
                <div>
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs text-gray-500">Qty: {item.qty}</p>
                </div>
                <p className="font-semibold whitespace-nowrap">
                  {money(Number(item.qty || 0) * Number(item.price || 0))}
                </p>
              </div>
            ))}
            {items.length === 0 && <p className="text-sm text-gray-500">No items added</p>}
          </div>

          <div className="mt-7 ml-auto max-w-xs space-y-2 text-sm">
            <p className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></p>
            <p className="flex justify-between"><span>Tax</span><span>{money(tax)}</span></p>
            <p className="flex justify-between"><span>Discount</span><span>-{money(discount)}</span></p>
            <p className="flex justify-between bg-purple-800 text-white rounded-lg p-4 font-bold text-lg">
              <span>Total</span><span>{money(Math.max(0, subtotal + tax - discount))}</span>
            </p>
          </div>

          <div className="mt-8 text-xs text-gray-500">
            <p>{invoice.notes || "Thank you for creating something great together."}</p>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CreativeTemplate;
