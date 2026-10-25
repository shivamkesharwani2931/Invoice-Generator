
import { useNavigate } from "react-router-dom";
import { templates } from "../Data/templates";

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
    { id: 1, name: "Website Design", qty: 1, price: 5000 },
    { id: 2, name: "Development", qty: 1, price: 8000 },
    { id: 3, name: "Consulting", qty: 1, price: 2000 },
  ],

  tax: 0,
  discount: 0,
  notes: "Thank you for your business.",
  footerText: "Thank you for choosing us!",
};

export const Templates = () => {
  const navigate = useNavigate();

  const handleUseTemplate = (templateId) => {
    navigate(
      `/create-invoice?template=${encodeURIComponent(templateId)}`
    );
  };

  const handlePreview = (templateId) => {
    navigate(
      `/create-invoice?template=${encodeURIComponent(
        templateId
      )}&preview=true`
    );
  };

  return (
    <>
      {/* Hero */}
      <header className="flex flex-col items-center px-5 py-20">
        <p className="text-sm font-bold text-blue-700">
          TEMPLATE GALLERY
        </p>

        <h1 className="mt-5 text-center text-4xl font-semibold md:text-6xl">
          Find your perfect invoice style
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-7 text-gray-700">
          Six professionally designed templates. Fully
          customizable, polished, and ready for your business.
        </p>
      </header>

      {/* Gallery */}
      <section className="border-y border-gray-300 bg-gray-50 px-5 py-16 md:py-24">
        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold text-gray-900">
                Explore our templates
              </h2>

              <p className="mt-2 text-gray-600">
                Choose a design that fits your brand.
              </p>
            </div>

            <span className="text-sm text-gray-500">
              {templates.length} Templates
            </span>
          </div>

          {/* Template Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => {
              const TemplateComponent = template.Component;

              return (
                <article
                  key={template.id}
                  className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Invoice Preview */}
                  <div className="bg-gray-100 p-5 sm:p-7">
                    <div className="mx-auto h-[400px] max-w-[300px] overflow-hidden bg-white shadow-md">

                      {TemplateComponent ? (
                        <div
                          className="origin-top-left"
                          style={{
                            width: "794px",
                            transform: "scale(0.3778)",
                          }}
                        >
                          <TemplateComponent
                            invoice={sampleInvoice}
                          />
                        </div>
                      ) : (
                        <div className="p-5 text-sm text-red-500">
                          Template component missing
                        </div>
                      )}

                    </div>
                  </div>

                  {/* Details */}
                  <div className="p-5">
                    <div className="flex items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {template.name}
                      </h3>

                      <span
                        className={`rounded-full border-t-4 px-2 py-1 text-xs font-medium ${template.color} ${template.accent}`}
                      >
                        {template.id}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-600">
                      {template.description}
                    </p>

                    {/* Actions */}
                    <div className="mt-5 flex gap-3">
                      <button
                        type="button"
                        onClick={() => handlePreview(template.id)}
                        className="flex-1 rounded-xl border border-gray-300 px-3 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50"
                      >
                        Preview
                      </button>

                      <button
                        type="button"
                        onClick={() =>
                          handleUseTemplate(template.id)
                        }
                        className="flex-1 rounded-xl bg-blue-700 px-3 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                      >
                        Use Template
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Templates;
