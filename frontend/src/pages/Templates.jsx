
import { useNavigate } from "react-router-dom";

const templates = [
  {
    id: "modern",
    name: "Modern",
    description: "Clean layout with navy accents.",
    color: "border-t-4 border-blue-900",
    accent: "text-blue-900",
  },
  {
    id: "classic",
    name: "Classic",
    description: "Traditional professional invoice.",
    color: "border-t-4 border-gray-500",
    accent: "text-gray-800",
  },
  {
    id: "minimal",
    name: "Minimal",
    description: "Simple, clean and spacious.",
    color: "border-t-4 border-slate-300",
    accent: "text-slate-700",
  },
  {
    id: "business",
    name: "Business",
    description: "Corporate style with green accents.",
    color: "border-t-4 border-green-700",
    accent: "text-green-800",
  },
  {
    id: "creative",
    name: "Creative",
    description: "Bold design with purple details.",
    color: "border-t-4 border-purple-700",
    accent: "text-purple-800",
  },
  {
    id: "elegant",
    name: "Elegant",
    description: "Refined typography and warm tones.",
    color: "border-t-4 border-amber-700",
    accent: "text-amber-800",
  },
];

export const Templates = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="flex flex-col items-center px-5 py-20">
        <p className="text-sm font-bold text-blue-700">
          TEMPLATE GALLERY
        </p>

        <h1 className="mt-5 text-center text-4xl font-semibold md:text-6xl">
          Find your perfect invoice style
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-center text-lg leading-7 text-gray-700">
          Six professionally designed templates. Fully customizable,
          polished, and ready for your business.
        </p>
      </header>

      {/* Template Showcase */}
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
              6 Templates
            </span>
          </div>

          {/* Grid */}
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {templates.map((template) => (
              <div
                key={template.id}
                className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Invoice Preview */}
                <div className="bg-gray-100 p-5 sm:p-7">
                  <div className="mx-auto aspect-[3/4] max-w-[300px] overflow-hidden bg-white shadow-md">
                    <div
                      className={`flex h-full flex-col p-5 ${template.color}`}
                    >
                      {/* Invoice header */}
                      <div className="flex justify-between gap-2">
                        <div>
                          <h3 className={`text-sm font-bold ${template.accent}`}>
                            YOUR BRAND
                          </h3>
                          <p className="mt-1 text-[8px] text-gray-500">
                            Business address
                          </p>
                          <p className="text-[8px] text-gray-500">
                            hello@company.com
                          </p>
                        </div>

                        <div className="text-right">
                          <h2 className={`text-xl font-bold ${template.accent}`}>
                            INVOICE
                          </h2>
                          <p className="mt-1 text-[8px] text-gray-500">
                            # INV-001
                          </p>
                        </div>
                      </div>

                      <div className="my-5 border-t border-gray-200" />

                      {/* Client details */}
                      <div className="flex justify-between gap-2">
                        <div>
                          <p className="text-[8px] font-bold text-gray-500">
                            BILL TO
                          </p>
                          <p className="mt-1 text-[10px] font-semibold">
                            Client Name
                          </p>
                          <p className="text-[8px] text-gray-500">
                            client@example.com
                          </p>
                        </div>

                        <div className="text-right">
                          <p className="text-[8px] text-gray-500">
                            ISSUE DATE
                          </p>
                          <p className="mt-1 text-[9px]">
                            22 Oct 2026
                          </p>
                        </div>
                      </div>

                      {/* Items */}
                      <div className="mt-6">
                        <div
                          className={`flex justify-between border-b border-gray-300 pb-2 text-[8px] font-bold ${template.accent}`}
                        >
                          <span>DESCRIPTION</span>
                          <span>AMOUNT</span>
                        </div>

                        {[
                          ["Website Design", "₹5,000"],
                          ["Development", "₹8,000"],
                          ["Consulting", "₹2,000"],
                        ].map(([name, price]) => (
                          <div
                            key={name}
                            className="flex justify-between border-b border-gray-100 py-3 text-[8px]"
                          >
                            <span>{name}</span>
                            <span>{price}</span>
                          </div>
                        ))}
                      </div>

                      {/* Total */}
                      <div className="ml-auto mt-5 w-1/2 space-y-2">
                        <div className="flex justify-between text-[8px]">
                          <span className="text-gray-500">Subtotal</span>
                          <span>₹15,000</span>
                        </div>

                        <div className="flex justify-between border-t border-gray-300 pt-2 text-[10px] font-bold">
                          <span>TOTAL</span>
                          <span>₹15,000</span>
                        </div>
                      </div>

                      <div className="mt-auto pt-8">
                        <div className="border-t border-gray-200 pt-3 text-center text-[8px] text-gray-400">
                          Thank you for your business!
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card details */}
                <div className="p-5">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {template.name}
                  </h3>

                  <p className="mt-2 text-sm text-gray-600">
                    {template.description}
                  </p>

                  <button
                    onClick={() =>
                      navigate(`/create-invoice?template=${template.id}`)
                    }
                    className="mt-5 w-full rounded-xl bg-blue-700 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-800"
                  >
                    Use Template
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
