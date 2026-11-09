
import { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";

import InvoiceForm from "../Components/InvoiceForm";
import InvoicePreview from "../Components/InvoicePreview";

export const CreateInvoice = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const templates = [
    "modern",
    "classic",
    "minimal",
    "business",
    "creative",
    "elegant",
  ];

  const selected = searchParams.get("template");

  const [template, setTemplate] = useState(
    templates.includes(selected) ? selected : "modern"
  );

  const [invoice, setInvoice] = useState({
    invoiceNumber: "INV-DRAFT",
    issueDate: new Date().toISOString().slice(0, 10),
    dueDate: "",
    business: {
      name: "",
      email: "",
      address: "",
      logoUrl: "",
    },
    client: {
      name: "",
      email: "",
      address: "",
    },
    items: [
      {
        id: crypto.randomUUID(),
        name: "",
        qty: 1,
        price: 0,
      },
    ],
    tax: 0,
    discount: 0,
    notes: "",
  });

  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-gray-50 p-4 sm:p-5">

      <div className="mx-auto w-full max-w-7xl">

        {/* Header */}
        <div className="mb-6 flex flex-wrap items-center gap-4">

          {/* Back Button */}
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-100"
          >
            <span className="text-lg">←</span>
            Back
          </button>

          <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Create Invoice
          </h1>

        </div>

        {/* Invoice Form and Preview */}
        <div className="grid w-full grid-cols-1 items-start gap-6 lg:grid-cols-2 lg:gap-8">

          {/* Invoice Form */}
          <div className="w-full min-w-0">
            <InvoiceForm
              invoice={invoice}
              setInvoice={setInvoice}
              template={template}
              setTemplate={setTemplate}
            />
          </div>

          {/* Invoice Preview */}
          <div className="w-full min-w-0">
            <InvoicePreview
              invoice={invoice}
              template={template}
            />
          </div>

        </div>

      </div>

    </main>
  );
};
