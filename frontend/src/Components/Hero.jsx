
import { FaArrowRight, FaThLarge, FaCheck, FaBolt } from "react-icons/fa";

export const Hero = () =>   {
  return (
    <section className="overflow-hidden bg-slate-50 px-6 py-16 md:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-16 lg:grid-cols-2">

        {/* Left Content */}
        <div className="relative z-10">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-blue-50 px-3 py-2 text-[11px] font-bold tracking-wider text-blue-600">
            <span>✦</span>
            INVOICING MADE EFFORTLESS
          </div>

          <h1 className="max-w-xl text-5xl font-normal leading-[1.12] tracking-tight text-slate-900 md:text-6xl">
            Create Professional Invoices{" "}
            <span className="text-blue-600">in Minutes</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-7 text-slate-600">
            Build beautiful, on-brand invoices, get paid faster, and spend
            more time doing the work you love.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <button className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition duration-300 hover:-translate-y-1 hover:bg-blue-700">
              <FaArrowRight />
              Create your invoice
            </button>

            <button className="inline-flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md">
              <FaThLarge />
              Explore templates
            </button>
          </div>

          <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-xs text-slate-500">
            <span><FaCheck className="mr-1 inline text-blue-600" />No credit card</span>
            <span><FaCheck className="mr-1 inline text-blue-600" />Free to start</span>
            <span><FaCheck className="mr-1 inline text-blue-600" />Ready in minutes</span>
          </div>
        </div>

        {/* Right Invoice Preview */}
        <div className="relative mx-auto w-full max-w-md lg:translate-x-3">
          <div className="min-h-[480px] rounded-xl border border-slate-200/80 bg-white p-6 shadow-2xl shadow-slate-900/10 sm:p-7">

            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold tracking-wider text-slate-900">
                INVOICE
              </h2>
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-blue-600 text-sm font-bold text-white">
                N
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-5">
              <div>
                <p className="text-[8px] font-bold tracking-widest text-blue-600">FROM</p>
                <p className="mt-2 text-[10px] font-bold text-slate-900">Northstar Studio</p>
                <p className="mt-1 text-[8px] text-slate-500">hello@northstar.co</p>
              </div>
              <div>
                <p className="text-[8px] font-bold tracking-widest text-blue-600">BILL TO</p>
                <p className="mt-2 text-[10px] font-bold text-slate-900">Acme Industries</p>
                <p className="mt-1 text-[8px] text-slate-500">billing@acme.com</p>
              </div>
            </div>

            <div className="mt-8">
              <div className="grid grid-cols-[1fr_28px_55px] bg-blue-50 px-1 py-3 text-[7px] font-bold text-blue-700">
                <span>DESCRIPTION</span>
                <span className="text-center">QTY</span>
                <span className="text-right">AMOUNT</span>
              </div>

              {[
                ["Brand identity", "1", "$2,400"],
                ["Website design", "1", "$3,800"],
                ["Content strategy", "8", "$1,000"],
              ].map(([name, qty, price]) => (
                <div
                  key={name}
                  className="grid grid-cols-[1fr_28px_55px] border-b border-slate-200 px-1 py-3 text-[8px] text-slate-800"
                >
                  <span>{name}</span>
                  <span className="text-center">{qty}</span>
                  <span className="text-right">{price}</span>
                </div>
              ))}
            </div>

            <div className="mt-48 flex items-center justify-between border-t border-blue-500 pt-3 text-[9px]">
              <span className="text-slate-600">Total due</span>
              <span className="text-sm font-bold text-blue-600">$7,506.00</span>
            </div>
          </div>

          {/* Payment notification */}
          <div className="absolute -left-8 top-12 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 transition duration-500 hover:-translate-y-1 sm:-left-10">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaCheck className="text-xs" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-900">Payment received</p>
              <p className="mt-1 text-[10px] text-slate-500">$2,400.00 from Acme</p>
            </div>
          </div>

          {/* Speed notification */}
          <div className="absolute -bottom-3 -right-3 flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-900/10 sm:-right-6">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <FaBolt className="text-xs" />
            </div>
            <div>
              <p className="text-[10px] font-bold text-slate-900">3× faster</p>
              <p className="mt-1 text-[10px] text-slate-500">Average payment time</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
