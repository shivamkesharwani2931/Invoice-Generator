
import { useState, useRef, useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  FaFileInvoice,
  FaBars,
  FaTimes,
  FaUser,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

import { logoutUser } from "../Store/User/User";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const profileRef = useRef(null);

  const { user, isAuth, authInitialized } = useSelector(
    (state) => state.user
  );

  // USER NAME
  const fullName = user?.name || user?.fullName || "";

  // USER INITIALS
  const getInitials = (name = "") => {
    const words = name.trim().split(/\s+/).filter(Boolean);

    if (words.length === 0) return "U";

    if (words.length === 1) {
      return words[0][0].toUpperCase();
    }

    return (
      words[0][0] + words[words.length - 1][0]
    ).toUpperCase();
  };

  const initials = getInitials(fullName);

  // CLOSE MENUS
  const closeMenu = () => {
    setMenuOpen(false);
    setProfileOpen(false);
  };

  // CLICK OUTSIDE DROPDOWN
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // LOGOUT
  const handleLogout = async () => {
    try {
      await dispatch(logoutUser()).unwrap();

      closeMenu();
      navigate("/login", { replace: true });
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // DESKTOP LINK STYLE
  const navLinkClass = ({ isActive }) =>
    `transition-colors duration-200 ${
      isActive
        ? "font-semibold text-indigo-600"
        : "text-gray-600 hover:text-indigo-600"
    }`;

  // MOBILE LINK STYLE
  const mobileLinkClass = ({ isActive }) =>
    `block rounded-lg px-4 py-3 transition-colors duration-200 ${
      isActive
        ? "bg-indigo-50 font-semibold text-indigo-600"
        : "text-gray-700 hover:bg-gray-50"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 shadow-sm backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* LOGO */}
        <Link
          to="/"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <FaFileInvoice className="text-xl" />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900 sm:text-2xl">
            Invoice<span className="text-indigo-600">Pro</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-8 md:flex">

          <NavLink to="/" end className={navLinkClass}>
            Home
          </NavLink>

          {authInitialized && isAuth && (
            <NavLink to="/templates" className={navLinkClass}>
              Templates
            </NavLink>
          )}

          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>

        </div>

        {/* DESKTOP ACTIONS */}
        <div className="hidden items-center gap-4 md:flex">

          {!isAuth ? (
            <>
              <NavLink to="/login" className={navLinkClass}>
                Login
              </NavLink>

              <Link
                to="/signup"
                className="rounded-lg bg-indigo-600 px-5 py-2.5 font-semibold text-white transition hover:bg-indigo-700"
              >
                Get Started
              </Link>
            </>
          ) : (
            <div className="relative" ref={profileRef}>

              {/* PROFILE BUTTON */}
              <button
                type="button"
                onClick={() => setProfileOpen((prev) => !prev)}
                aria-expanded={profileOpen}
                className="flex items-center gap-3 rounded-xl border border-gray-200 px-3 py-2 transition hover:bg-gray-50"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {initials}
                </div>

                <div className="text-left">
                  <p className="max-w-32 truncate text-sm font-semibold text-gray-900">
                    {fullName || "My Account"}
                  </p>

                  <p className="text-xs text-gray-500">
                    My Profile
                  </p>
                </div>

                <FaChevronDown
                  className={`text-xs text-gray-500 transition ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* PROFILE DROPDOWN */}
              {profileOpen && (
                <div className="absolute right-0 top-full mt-3 w-64 overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">

                  <div className="border-b border-gray-100 p-4">
                    <p className="font-semibold text-gray-900">
                      {fullName || "My Account"}
                    </p>

                    <p className="mt-1 truncate text-sm text-gray-500">
                      {user?.email}
                    </p>
                  </div>

                  <div className="p-2">

                    <Link
                      to="/templates"
                      onClick={closeMenu}
                      className="flex items-center gap-3 rounded-lg px-3 py-3 text-sm text-gray-700 transition hover:bg-gray-50"
                    >
                      <FaUser className="text-gray-400" />
                      My Account
                    </Link>

                    <button
                      type="button"
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-3 text-sm text-red-600 transition hover:bg-red-50"
                    >
                      <FaSignOutAlt />
                      Logout
                    </button>

                  </div>
                </div>
              )}
            </div>
          )}

        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
        >
          {menuOpen ? (
            <FaTimes className="text-xl" />
          ) : (
            <FaBars className="text-xl" />
          )}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-4 py-4 md:hidden">

          <div className="flex flex-col gap-1">

            <NavLink
              to="/"
              end
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Home
            </NavLink>

            {authInitialized && isAuth && (
              <NavLink
                to="/templates"
                className={mobileLinkClass}
                onClick={closeMenu}
              >
                Templates
              </NavLink>
            )}

            <NavLink
              to="/about"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              About
            </NavLink>

            <NavLink
              to="/contact"
              className={mobileLinkClass}
              onClick={closeMenu}
            >
              Contact
            </NavLink>

            {!isAuth ? (
              <>
                <NavLink
                  to="/login"
                  className={mobileLinkClass}
                  onClick={closeMenu}
                >
                  Login
                </NavLink>

                <Link
                  to="/signup"
                  onClick={closeMenu}
                  className="mt-2 rounded-lg bg-indigo-600 px-4 py-3 text-center font-semibold text-white"
                >
                  Get Started
                </Link>
              </>
            ) : (
              <>
                <div className="my-2 flex items-center gap-3 rounded-lg bg-indigo-50 p-3">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 font-bold text-white">
                    {initials}
                  </div>

                  <div className="min-w-0">
                    <p className="truncate font-semibold text-gray-900">
                      {fullName || "My Account"}
                    </p>

                    <p className="truncate text-xs text-gray-500">
                      {user?.email}
                    </p>
                  </div>

                </div>

                <Link
                  to="/templates"
                  onClick={closeMenu}
                  className={mobileLinkClass({ isActive: false })}
                >
                  <FaUser className="mr-2 inline" />
                  My Account
                </Link>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex items-center gap-3 rounded-lg px-4 py-3 text-left text-red-600 hover:bg-red-50"
                >
                  <FaSignOutAlt />
                  Logout
                </button>
              </>
            )}

          </div>
        </div>
      )}

    </nav>
  );
}

export default Navbar;
