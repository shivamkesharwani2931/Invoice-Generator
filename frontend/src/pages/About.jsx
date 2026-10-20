import { FaBolt, FaShieldAlt, FaRegClock } from "react-icons/fa";
import { FaWandMagicSparkles,FaArrowRight } from "react-icons/fa6";

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
            <>
        <header className="flex  flex-col items-center py-25 border-b border-gray-300">
            <p className="font-bold text-blue-700 text-sm">ABOUT INVOICEFLOW</p>
            <h1 className="text-5xl mt-5">More time for your work.</h1>
            <h1 className="text-5xl mt-2">Less time on paperwork.</h1>
            <p className="mt-6 text-gray-600">We believe getting paid should be the simplest part of running a business.</p>
        </header>
        <section className="grid grid-cols-2 px-20 py-35 bg-gray-100">
            <div className="">
                <p className="font-bold text-blue-700">OUR MISSION</p>
                <h1 className=" text-3xl w-xl mt-4">Professional invoicing should be accessible to everyone</h1>
            </div>
            <div>
                <p>InvoiceFlow was created to remove the friction from billing. No complicated accounting software. No design skills needed. Just a focused, thoughtful tool that helps your work look as professional as it deserves.</p>
                <br/>
                <p>Whether you're sending your first freelance invoice or managing a growing studio, we give you the clarity and confidence to bill better.</p>
            </div>
        </section>

        <section className="flex flex-col items-center py-25">
            <p className="font-bold text-blue-700 text-sm">WHY INVOICEFLOW</p>
            <h1 className="text-5xl mt-5">Designed around your success</h1>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mx-40 pt-10">
  {data.map((item) => {
    const Icon = item.icon;

    return (
      <div
        key={item.id}
        className="rounded-xl  p-6"
      >
        <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
          <Icon className="text-xl text-blue-600" />
        </div>

        <p className="mb-3 font-medium">{item.title}</p>

        <p className="text-gray-600">{item.p}</p>
      </div>
    );
  })}
</div>
        </section>

        <section className="bg-gray-100 py-25 ">
            
<div className="relative mx-4 my-16 overflow-hidden rounded-3xl bg-[#0F172A] px-6 py-16 text-center shadow-xl shadow-indigo-950/10 sm:mx-8 md:px-12 md:py-20">

  {/* Background glow */}
  <div className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-blue-600/15 blur-3xl" />
  <div className="pointer-events-none absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-indigo-600/15 blur-3xl" />

  <div className="relative mx-auto flex max-w-3xl flex-col items-center">

    <p className="mb-5 text-sm font-bold tracking-[0.2em] text-blue-500">
      A BETTER WORKFLOW
    </p>

    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
      Simple from start to finish
    </h2>

    <p className="mt-6 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
      Pick a professionally designed template, add your business and client
      details, then download or print. Your draft saves locally so you can
      return any time.
    </p>

    <button
      type="button"
      className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-4 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/25"
    >
      <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
      Create an invoice
    </button>

  </div>
</div>

        </section>
            </>
        
    )
}