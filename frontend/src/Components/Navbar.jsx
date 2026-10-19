import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { FaFileInvoice, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "text-indigo-600 font-semibold"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <FaFileInvoice className="text-xl" />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Invoice<span className="text-indigo-600">Pro</span>
          </span>
        </Link>

        {/* Desktop navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          <NavLink to="/templates" className={navLinkClass}>
            Templates
          </NavLink>

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </div>

        {/* Desktop action button */}
       
<div className="flex items-center gap-4">
  <NavLink to="/contact" className={navLinkClass}>
    Login
  </NavLink>

  <Link
    to="/signup"
    className="inline-flex items-center justify-center rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition duration-200 hover:bg-indigo-700 hover:shadow-md shadow-lg "
  >
    Get Started
  </Link>
</div>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-gray-700 transition hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>
      </div>

      {/* Mobile navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 ${
                  isActive
                    ? "bg-indigo-50 font-semibold text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Home
            </NavLink>

            <NavLink
              to="/invoices"
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 ${
                  isActive
                    ? "bg-indigo-50 font-semibold text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Template
            </NavLink>

            <Link
              to="/create-invoice"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
            >
             Login
            </Link>

            <NavLink
              to="/create-invoice"
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 ${
                  isActive
                    ? "bg-indigo-50 font-semibold text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
             About
            </NavLink>

            <NavLink
              to="/about"
              className={({ isActive }) =>
                `rounded-lg px-4 py-3 ${
                  isActive
                    ? "bg-indigo-50 font-semibold text-indigo-600"
                    : "text-gray-700 hover:bg-gray-50"
                }`
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>

            <Link
              to="/create-invoice"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
            >
             Login
            </Link>
            <Link
              to="/create-invoice"
              onClick={() => setMenuOpen(false)}
              className="mt-2 rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white transition hover:bg-indigo-700"
            >
             Get Started
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;