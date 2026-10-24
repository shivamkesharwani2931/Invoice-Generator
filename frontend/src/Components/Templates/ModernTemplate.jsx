
export const ModernTemplate = () => {
  return (
    <div className="min-h-[400px] w-full p-5 text-xs">
      <div className="border-t-4 border-blue-900 pt-4">
        <div className="flex justify-between">
          <div>
            <h2 className="text-xl font-bold">YOUR BRAND</h2>
            <p className="mt-1 text-gray-500">
              Business address
            </p>
          </div>

          <h1 className="text-2xl font-bold text-blue-900">
            INVOICE
          </h1>
        </div>

        <div className="my-6 border-t" />

        <p className="font-semibold">BILL TO</p>
        <p className="mt-2 text-gray-500">Client Name</p>

        <table className="mt-6 w-full text-left">
          <thead>
            <tr className="border-b">
              <th className="py-2">Description</th>
              <th className="py-2 text-right">Amount</th>
            </tr>
          </thead>

          <tbody>
            <tr className="border-b">
              <td className="py-3">Website Design</td>
              <td className="py-3 text-right">₹5,000</td>
            </tr>
          </tbody>
        </table>

        <div className="mt-8 text-right">
          <p className="font-bold">Total: ₹5,000</p>
        </div>
      </div>
    </div>
  );
};
