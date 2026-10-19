import { useState } from "react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Connect this form to your backend to send real messages.
    console.log("Contact form submitted:", {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    });

    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <main className="min-h-screen bg-[#f6f8fc] text-slate-900">
      {/* Compact Hero */}
      <section className="relative overflow-hidden border-b border-slate-200 bg-white">
        <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 top-10 h-48 w-48 rounded-full bg-indigo-100/50 blur-3xl" />

        <div className="relative mx-auto max-w-6xl px-5 py-12 text-center sm:py-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
            Contact Us
          </span>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Let's make things
            <span className="text-blue-600"> easier.</span>
          </h1>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
            Have a question about invoices or templates? Tell us what you need.
            We're here to help.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="px-5 py-10 sm:py-14">
        <div className="mx-auto grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-8">
          {/* Left Contact Card */}
          <aside className="relative flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-[#172554] via-[#1d3b82] to-[#2563eb] p-7 text-white shadow-xl shadow-blue-950/10 sm:p-9">
            {/* Decorative circles */}
            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-white/10" />
            <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full border border-white/10" />

            <div className="relative">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/15 bg-white/10">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-6 w-6"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.5Z" />
                </svg>
              </div>

              <h2 className="mt-6 text-2xl font-semibold sm:text-3xl">
                Get in touch
              </h2>

              <p className="mt-3 max-w-sm text-sm leading-6 text-blue-100 sm:text-base">
                We would love to hear from you. Send us your questions,
                suggestions, or feedback.
              </p>

              <div className="mt-9 space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <rect x="3" y="5" width="18" height="14" rx="2" />
                      <path d="m3 7 9 6 9-6" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Email us</p>
                    <a
                      href="mailto:hello@invoicepro.app"
                      className="mt-1 block break-all text-sm text-blue-100 transition hover:text-white"
                    >
                      hello@invoicepro.app
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      className="h-5 w-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  </div>

                  <div>
                    <p className="text-sm font-semibold">Response time</p>
                    <p className="mt-1 text-sm text-blue-100">
                      Within one business day
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-10 border-t border-white/15 pt-5">
              <div className="flex items-start gap-2.5 text-xs leading-5 text-blue-100">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="mt-0.5 h-4 w-4 shrink-0"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M12 22s8-4 8-11V5l-8-3-8 3v6c0 7 8 11 8 11Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>

                <p>We use your information only to respond to your request.</p>
              </div>
            </div>
          </aside>

          {/* Right Form Card */}
          <div className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8 lg:p-9">
            <div className="mb-7">
              <h2 className="text-xl font-bold text-slate-900 sm:text-2xl">
                Send us a message
              </h2>
              <p className="mt-2 text-sm leading-6 text-slate-500">
                Fill in the details below and we'll get back to you.
              </p>
            </div>

            {submitted ? (
              <div
                className="rounded-xl border border-green-200 bg-green-50 p-5"
                role="status"
              >
                <div className="flex items-center gap-3 text-green-800">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 shrink-0"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="m5 12 4 4L19 6" />
                  </svg>
                  <h3 className="font-semibold">Message submitted</h3>
                </div>

                <p className="mt-2 text-sm leading-6 text-green-700">
                  Your form was validated successfully. Connect your backend
                  to deliver this message to the InvoicePro team.
                </p>

                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-sm font-semibold text-green-800 underline underline-offset-4"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label
                      htmlFor="contact-name"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Full name <span className="text-blue-600">*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      className="mb-2 block text-sm font-semibold text-slate-700"
                    >
                      Email address <span className="text-blue-600">*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Subject <span className="text-blue-600">*</span>
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="What can we help you with?"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="h-12 w-full rounded-xl border border-slate-200 bg-white px-4 text-sm outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="contact-message"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Your message <span className="text-blue-600">*</span>
                  </label>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full resize-y rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 outline-none transition placeholder:text-slate-400 hover:border-slate-300 focus:border-blue-500 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <button
                  type="submit"
                  className="flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:translate-y-0"
                >
                  Send message
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-4 w-4"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </button>

                <p className="text-center text-xs text-slate-400">
                  Fields marked with * are required.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
};
