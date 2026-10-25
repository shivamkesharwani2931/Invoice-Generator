import { useState } from "react";
import { useSearchParams } from "react-router-dom";

import InvoiceForm from "../Components/InvoiceForm";
import InvoicePreview from "../Components/InvoicePreview";

export const CreateInvoice = () => {
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
    <main className="min-h-screen bg-gray-50 p-5">
      <div className="mx-auto max-w-7xl">
        <h1 className="mb-6 text-3xl font-bold">
          Create Invoice
        </h1>

        <div className="grid gap-8 lg:grid-cols-2">
          <InvoiceForm
            invoice={invoice}
            setInvoice={setInvoice}
            template={template}
            setTemplate={setTemplate}
          />

          <InvoicePreview
            invoice={invoice}
            template={template}
          />
        </div>
      </div>
    </main>
  );
};