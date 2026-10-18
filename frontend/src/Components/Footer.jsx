import { Link } from "react-router-dom";
import {
  FaFileInvoice,
  FaGithub,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

        {/* Footer top section */}
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand information */}
          <div>
            <Link to="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
                <FaFileInvoice className="text-xl" />
              </div>

              <span className="text-xl font-bold text-gray-900">
                Invoice<span className="text-indigo-600">Pro</span>
              </span>
            </Link>

            <p className="max-w-xs text-sm leading-6 text-gray-600">
              Create professional invoices, manage your billing, and keep
              your business organized — all in one place.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Quick Links
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/" className="transition hover:text-indigo-600">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/invoices" className="transition hover:text-indigo-600">
                  All Invoices
                </Link>
              </li>
              <li>
                <Link to="/create-invoice" className="transition hover:text-indigo-600">
                  Create Invoice
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Resources
            </h3>

            <ul className="space-y-3 text-sm text-gray-600">
              <li>
                <Link to="/about" className="transition hover:text-indigo-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/help" className="transition hover:text-indigo-600">
                  Help Center
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="transition hover:text-indigo-600">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Call to action */}
          <div>
            <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-gray-900">
              Get Started
            </h3>

            <p className="mb-4 text-sm leading-6 text-gray-600">
              Ready to simplify your billing? Create your first invoice today.
            </p>

            <Link
              to="/create-invoice"
              className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700"
            >
              Create Invoice
              <FaArrowRight />
            </Link>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-10 flex flex-col gap-4 border-t border-gray-200 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-center text-sm text-gray-500 sm:text-left">
            © {currentYear} InvoicePro. All rights reserved.
          </p>

          <div className="flex items-center justify-center gap-4">
            <a
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 ring-1 ring-gray-200 transition hover:bg-indigo-600 hover:text-white"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 ring-1 ring-gray-200 transition hover:bg-indigo-600 hover:text-white"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;