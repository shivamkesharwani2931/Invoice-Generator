
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { loginUser, clearAuthMessage } from "../Store/User/User";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { isAuth, isLoading, isError, message } = useSelector(
    (state) => state.user
  );

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Redirect authenticated user
  useEffect(() => {
    if (isAuth) {
      navigate("/templates", { replace: true });
    }
  }, [isAuth, navigate]);

  // Clear previous messages
  useEffect(() => {
    dispatch(clearAuthMessage());

    return () => {
      dispatch(clearAuthMessage());
    };
  }, [dispatch]);

  // LOGIN SUBMIT
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password) {
      return;
    }

    try {
      await dispatch(
        loginUser({
          email: email.trim(),
          password,
        })
      ).unwrap();

      navigate("/templates", { replace: true });

    } catch (error) {
      console.error("Login error:", error);
    }
  };

  return (
    <main className="grid min-h-screen w-full grid-cols-1 bg-white lg:h-screen lg:min-h-0 lg:grid-cols-2 lg:overflow-hidden">

      {/* LEFT PANEL */}
      <section className="relative flex min-h-[520px] min-w-0 flex-col overflow-hidden bg-gradient-to-br from-[#151d30] via-[#17264d] to-[#2452bd] px-6 py-8 text-white sm:px-10 lg:min-h-screen lg:px-10 lg:py-12 xl:px-16">

        <Link to="/" className="flex w-fit shrink-0 items-center gap-3">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#5138ff]">
            <svg viewBox="0 0 24 24" fill="none"
              className="h-6 w-6" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M7 3.5h7l5 5V21H7z" />
              <path d="M14 3.5V9h5" />
              <path d="M10 13h6M10 17h6" />
            </svg>
          </div>

          <span className="text-2xl font-bold tracking-tight">
            Invoice<span className="text-[#5138ff]">Pro</span>
          </span>
        </Link>

        {/* Promotional Content */}
        <div className="my-auto w-full min-w-0 max-w-[650px] py-14 lg:py-12">

          <div className="mb-7 inline-flex max-w-full items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-xs font-bold tracking-wide text-blue-100 sm:text-sm">
            BUILT FOR BETTER BUSINESS
          </div>

          <h1 className="mb-6 break-words text-4xl font-normal leading-tight tracking-tight sm:text-5xl xl:text-6xl">
            Welcome back to simpler invoicing.
          </h1>

          <p className="mb-10 max-w-[610px] text-base leading-8 text-blue-100 sm:text-xl">
            Your professional invoices and saved drafts are just a few clicks away.
          </p>

          <ul className="space-y-5 text-base sm:text-lg">
            {[
              "Beautiful, customizable templates",
              "Fast, accurate calculations",
              "Export and print in one click",
            ].map((item) => (
              <li key={item} className="flex min-w-0 items-start gap-4">
                <span className="text-blue-300">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* RIGHT LOGIN PANEL */}
      <section className="flex min-h-[650px] min-w-0 items-center justify-center bg-white px-5 py-12 sm:px-10 lg:min-h-screen lg:px-8 xl:px-12">

        <div className="w-full min-w-0 max-w-[533px]">

          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2864f0]">
            <svg viewBox="0 0 24 24" fill="none"
              className="h-6 w-6" stroke="currentColor"
              strokeWidth="1.8" strokeLinecap="round"
              strokeLinejoin="round">
              <path d="M7 3.5h7l5 5V21H7z" />
              <path d="M14 3.5V9h5" />
              <path d="M10 13h6M10 17h6" />
            </svg>
          </div>

          <h2 className="mb-3 text-3xl font-normal tracking-tight text-[#151d30] sm:text-[40px]">
            Welcome back
          </h2>

          <p className="mb-11 text-base text-slate-600 sm:text-lg">
            Sign in to manage your invoices.
          </p>

          {/* ERROR MESSAGE */}
          {isError && message && (
            <div className="mb-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-600">
              {message}
            </div>
          )}

          {/* LOGIN FORM */}
          <form onSubmit={handleSubmit} className="w-full space-y-6">

            {/* EMAIL */}
            <div className="min-w-0">
              <label htmlFor="email"
                className="mb-3 block text-sm font-semibold text-[#151d30] sm:text-base">
                Email address <span className="text-[#2864f0]">*</span>
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="h-[62px] w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* PASSWORD */}
            <div className="min-w-0">
              <label htmlFor="password"
                className="mb-3 block text-sm font-semibold text-[#151d30] sm:text-base">
                Password <span className="text-[#2864f0]">*</span>
              </label>

              <div className="relative min-w-0">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="current-password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  className="h-[62px] w-full min-w-0 rounded-xl border border-slate-200 bg-white px-4 pr-14 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-5 text-slate-500 transition hover:text-[#2864f0]"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* LOGIN BUTTON */}
            <button
              type="submit"
              disabled={isLoading}
              className="flex h-[62px] w-full items-center justify-center rounded-xl bg-[#2864f0] text-lg font-semibold text-white shadow-[0_10px_25px_rgba(40,100,240,0.22)] transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isLoading ? "Logging in..." : "Log in"}
            </button>

          </form>

          {/* SIGNUP LINK */}
          <p className="mt-10 text-center text-sm text-slate-500 sm:text-base">
            Don't have an account?{" "}
            <Link to="/signup"
              className="font-semibold text-[#2864f0] transition hover:text-blue-800">
              Create account
            </Link>
          </p>

        </div>
      </section>
    </main>
  );
};
