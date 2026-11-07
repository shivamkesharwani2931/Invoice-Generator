
import { FaBolt, FaShieldAlt, FaRegClock } from "react-icons/fa";
import {
  FaWandMagicSparkles,
  FaArrowRight,
} from "react-icons/fa6";

export const About = () => {
  const data = [
    {
      id: 1,
      title: "Save valuable time",
      icon: FaBolt,
      p: "Build polished invoices in minutes, not hours.",
    },
    {
      id: 2,
      title: "Look professional",
      icon: FaWandMagicSparkles,
      p: "Make every client interaction feel considered.",
    },
    {
      id: 3,
      title: "Stay in control",
      icon: FaShieldAlt,
      p: "Your work, your data, and your process remain yours.",
    },
    {
      id: 4,
      title: "Get paid faster",
      icon: FaRegClock,
      p: "Clear, accurate invoices help reduce payment delays.",
    },
  ];

  return (
    <main className="w-full overflow-x-clip">

      {/* Hero Section */}
      <section className="flex flex-col items-center border-b border-gray-200 px-5 py-16 text-center sm:py-20 md:py-24">

        <p className="text-sm font-bold tracking-widest text-blue-700">
          ABOUT INVOICEFLOW
        </p>

        <h1 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          More time for your work.
        </h1>

        <h1 className="mt-2 text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl lg:text-6xl">
          Less time on paperwork.
        </h1>

        <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
          We believe getting paid should be the simplest part of
          running a business.
        </p>

      </section>

      {/* Mission Section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-6 py-16 sm:px-8 md:grid-cols-2 md:gap-12 md:py-24">

        <div>
          <p className="text-sm font-bold tracking-widest text-blue-700">
            OUR MISSION
          </p>

          <h2 className="mt-4 max-w-lg text-3xl font-bold leading-snug tracking-tight text-gray-900 sm:text-4xl">
            Professional invoicing should be accessible to everyone
          </h2>
        </div>

        <div className="flex flex-col gap-5 text-sm leading-8 text-gray-600 sm:text-base">
          <p>
            InvoiceFlow was created to remove the friction from
            billing. No complicated accounting software. No design
            skills needed. Just a focused, thoughtful tool that helps
            your work look as professional as it deserves.
          </p>

          <p>
            Whether you're sending your first freelance invoice or
            managing a growing studio, we give you the clarity and
            confidence to bill better.
          </p>
        </div>

      </section>

      {/* Features Section */}
      <section className="mx-auto flex max-w-7xl flex-col items-center px-5 py-16 sm:px-8 md:py-24">

        <p className="text-sm font-bold tracking-widest text-blue-700">
          WHY INVOICEFLOW
        </p>

        <h2 className="mt-5 text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
          Designed around your success
        </h2>

        <div className="mt-12 grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {data.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.id}
                className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-900/5"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 transition-colors duration-300 group-hover:bg-blue-100">
                  <Icon className="text-xl text-blue-600" />
                </div>

                <h3 className="mb-3 text-lg font-semibold text-gray-900">
                  {item.title}
                </h3>

                <p className="text-sm leading-7 text-gray-600">
                  {item.p}
                </p>
              </div>
            );
          })}

        </div>

      </section>

      {/* CTA Section */}
      <section className="bg-gray-100 px-4 py-16 sm:px-8 md:py-24">

        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0F172A] px-5 py-16 text-center shadow-xl shadow-indigo-950/10 sm:px-10 md:px-12 md:py-24">

          {/* Background Glow */}
          <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl" />

          <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />

          <div className="relative mx-auto flex max-w-3xl flex-col items-center">

            <p className="mb-5 text-xs font-bold tracking-[0.2em] text-blue-400 sm:text-sm">
              A BETTER WORKFLOW
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Simple from start to finish
            </h2>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
              Pick a professionally designed template, add your
              business and client details, then download or print.
              Your draft saves locally so you can return any time.
            </p>

            <button
              type="button"
              className="group mt-8 inline-flex items-center justify-center gap-3 rounded-xl bg-blue-600 px-6 py-4 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
            >
              Create an invoice

              <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>
        </div>

      </section>

    </main>
  );
};
