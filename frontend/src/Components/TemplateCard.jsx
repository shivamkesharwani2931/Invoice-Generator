
import { useNavigate } from "react-router-dom";

// Sample invoice data for template cards
const sampleInvoice = {
  invoiceTitle: "INVOICE",
  invoiceNumber: "INV-001",
  issueDate: "22 Oct 2026",
  dueDate: "29 Oct 2026",

  business: {
    name: "YOUR BRAND",
    address: "Business address",
    email: "hello@company.com",
  },

  client: {
    name: "Client Name",
    email: "client@example.com",
    address: "Client address",
  },

  items: [
    {
      id: 1,
      name: "Website Design",
      qty: 1,
      price: 5000,
    },
    {
      id: 2,
      name: "Development",
      qty: 1,
      price: 8000,
    },
    {
      id: 3,
      name: "Consulting",
      qty: 1,
      price: 2000,
    },
  ],

  tax: 0,
  discount: 0,
  notes: "Thank you for your business.",
  footerText: "Thank you for choosing us!",
};

export const TemplateCard = ({ template }) => {
  const navigate = useNavigate();

  const TemplateComponent = template.Component;

  const handlePreview = () => {
    navigate(
      `/create-invoice?template=${encodeURIComponent(
        template.id
      )}&preview=true`
    );
  };

  const handleUseTemplate = () => {
    navigate(
      `/create-invoice?template=${encodeURIComponent(
        template.id
      )}`
    );
  };

  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Template Preview */}
      <div className="flex justify-center overflow-hidden bg-gray-100 p-5">
        <div className="relative h-[380px] w-full max-w-[300px] overflow-hidden bg-white shadow-md">

          {TemplateComponent ? (
            <div
              className="absolute left-0 top-0 origin-top-left"
              style={{
                width: "794px",
                transform: "scale(0.3778)",
              }}
            >
              <TemplateComponent invoice={sampleInvoice} />
            </div>
          ) : (
            <div className="flex h-full items-center justify-center p-4 text-center text-sm text-red-500">
              Template component missing
            </div>
          )}

        </div>
      </div>

      {/* Template Information */}
      <div className="p-5">

        <div className="flex items-center justify-between gap-3">
          <h2 className="text-xl font-semibold text-gray-900">
            {template.name}
          </h2>

          <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium capitalize text-gray-600">
            {template.id}
          </span>
        </div>

        <p className="mt-2 min-h-10 text-sm leading-6 text-gray-600">
          {template.description}
        </p>

        {/* Buttons */}
        <div className="mt-5 flex flex-col gap-3 sm:flex-row">

          <button
            type="button"
            onClick={handlePreview}
            className="flex-1 rounded-lg border border-gray-300 px-4 py-3 font-medium text-gray-800 transition hover:bg-gray-50"
          >
            Preview
          </button>

          <button
            type="button"
            onClick={handleUseTemplate}
            className="flex-1 rounded-lg bg-blue-700 px-4 py-3 font-medium text-white transition hover:bg-blue-800"
          >
            Use Template
          </button>

        </div>
      </div>
    </article>
  );
};

export default TemplateCard;
