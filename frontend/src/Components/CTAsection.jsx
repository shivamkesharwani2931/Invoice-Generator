
import { FaArrowRight, FaWandMagicSparkles } from "react-icons/fa6";

export const CTA = () => {
  return (
    <section className="bg-slate-50 px-5 py-25 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-8 rounded-3xl bg-linear-to-r from-slate-900 via-slate-900 to-blue-800 px-8 py-12 sm:px-12 md:flex-row md:items-center">
        
        {/* Text content */}
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-slate-700/70 px-3 py-2 text-xs font-bold tracking-wide text-blue-200">
            <FaWandMagicSparkles />
            START FOR FREE TODAY
          </div>

          <h1 className="text-3xl font-normal tracking-tight text-white sm:text-4xl md:text-5xl">
            Ready to make invoicing flow?
          </h1>

          <p className="mt-3 text-sm text-blue-100 sm:text-base">
            Create your first professional invoice in less than five minutes.
          </p>
        </div>

        {/* CTA button */}
        <button
          type="button"
          className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-5 py-4 font-semibold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-0.5 hover:text-blue-600 hover:bg-blue-50 hover:shadow-lg"
        >
          <FaArrowRight />
          Create an invoice
        </button>

      </div>
    </section>
  );
};
