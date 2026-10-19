export const WorkFlow = () => {
    const steps = [
  {
    id: 1,
    title: "Pick your template",
    description: "Choose a style that fits your brand and your work.",
  },
  {
    id: 2,
    title: "Add your details",
    description: "Fill in your services, pricing, tax, and payment terms.",
  },
  {
    id: 3,
    title: "Send with confidence",
    description: "Download a polished PDF or print it instantly.",
  },
];
    return (
        <section className="flex flex-col items-center py-25">
            <p className="font-bold text-blue-500 ">HOW IT WORKS</p>
            <h1 className="text-5xl mt-4">From blank page to paid</h1>
            <p className="mt-6 text-gray-600">Three simple steps. No spreadsheets, no design skills, no hassle.</p>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.id} className="relative text-center">
            {/* Number and connector */}
            <div className="relative mb-5 flex items-center justify-center">
              {/* Dashed line after each circle */}
              {index < steps.length - 1 && (
                <div className="absolute left-[calc(50%+50px)] hidden w-[calc(100%-52px)] border-t border-dashed border-blue-200 md:block" />
              )}

              <div className="relative z-10 flex h-17 w-17 items-center justify-center rounded-full bg-blue-50">
                <div className="flex h-13 w-13 items-center justify-center rounded-full bg-blue-600 text-lg font-bold text-white">
                  {String(step.id).padStart(2, "0")}
                </div>
              </div>
            </div>

            {/* Step content */}
            <h3 className="mb-2 text-base font-medium text-gray-900">
              {step.title}
            </h3>

            <p className="mx-auto max-w-xs leading-relaxed text-gray-600">
              {step.description}
            </p>
          </div>
        ))}
      </div>
        </section>
    )
}