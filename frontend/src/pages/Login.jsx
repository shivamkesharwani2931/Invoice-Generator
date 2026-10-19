import { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // Handle login form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate the input fields
    if (!email.trim() || !password) {
      alert("Please enter your email address and password.");
      return;
    }

    // Display submitted data for testing
    // Do not log real passwords in a production application.
    console.log("Login details:", {
      email,
    });

    // Connect your backend API here to authenticate the user.
    alert("Login form submitted. Connect your backend to authenticate.");
  };

  return (
    <div className="min-h-screen w-full bg-white lg:grid lg:grid-cols-[46.875%_53.125%]">
      {/* LEFT PANEL */}
      <section className="relative flex min-h-[520px] flex-col overflow-hidden bg-gradient-to-br from-[#151d30] via-[#17264d] to-[#2452bd] px-6 py-8 text-white sm:px-10 lg:min-h-screen lg:px-[7.2%] lg:py-16">
        {/* InvoicePro Logo */}
        <Link to="/" className="flex w-fit items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#5138ff]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
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
        <div className="my-auto max-w-[650px] py-14 lg:py-20">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2.5 text-sm font-bold tracking-wide text-blue-100">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-4 w-4"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="m12 3 1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3Z" />
              <path d="m19 15 .9 2.1L22 18l-2.1.9L19 21l-.9-2.1L16 18l2.1-.9L19 15Z" />
            </svg>
            BUILT FOR BETTER BUSINESS
          </div>

          <h1 className="mb-6 text-4xl font-normal leading-[1.12] tracking-tight sm:text-5xl lg:text-[clamp(3rem,4.1vw,4.75rem)]">
            Welcome back to simpler invoicing.
          </h1>

          <p className="mb-10 max-w-[610px] text-lg leading-8 text-blue-100 sm:text-xl">
            Your professional invoices and saved drafts are just a few clicks
            away.
          </p>

          <ul className="space-y-5 text-base sm:text-lg">
            <li className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 shrink-0 text-blue-300"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Beautiful, customizable templates
            </li>

            <li className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 shrink-0 text-blue-300"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Fast, accurate calculations
            </li>

            <li className="flex items-center gap-4">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-5 w-5 shrink-0 text-blue-300"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="m5 12 4 4L19 6" />
              </svg>
              Export and print in one click
            </li>
          </ul>
        </div>

        {/* Footer */}
        {/* <p className="mt-auto text-sm text-blue-200/75 sm:text-base">
          © 2025 InvoicePro
        </p> */}
      </section>

      {/* RIGHT LOGIN PANEL */}
      <section className="flex min-h-[650px] items-center justify-center bg-white px-6 py-12 sm:px-10 lg:min-h-screen lg:px-12">
        <div className="w-full max-w-[533px]">
          {/* Login Icon */}
          <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-[#2864f0]">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              className="h-6 w-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
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

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email Field */}
            <div>
              <label
                htmlFor="email"
                className="mb-3 block text-sm font-semibold text-[#151d30] sm:text-base"
              >
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
                className="h-[62px] w-full rounded-xl border border-slate-200 bg-white px-4 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                htmlFor="password"
                className="mb-3 block text-sm font-semibold text-[#151d30] sm:text-base"
              >
                Password <span className="text-[#2864f0]">*</span>
              </label>

              <div className="relative">
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
                  className="h-[62px] w-full rounded-xl border border-slate-200 bg-white px-4 pr-14 text-base text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
                />

                {/* Show / Hide Password */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-5 text-slate-500 transition hover:text-[#2864f0]"
                >
                  {showPassword ? (
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
                      <path d="M3 3l18 18" />
                      <path d="M10.6 10.6a2 2 0 0 0 2.8 2.8" />
                      <path d="M9.9 5.2A11 11 0 0 1 12 5c5 0 8.5 4.5 9.5 7-.4 1-1.3 2.2-2.6 3.4" />
                      <path d="M6.2 6.2C3.9 7.6 2.7 9.5 2.5 12c.6 1.5 2.1 3.8 5.5 5.5A10.7 10.7 0 0 0 12 19" />
                    </svg>
                  ) : (
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
                      <path d="M2.5 12s3.5-7 9.5-7 9.5 7 9.5 7-3.5 7-9.5 7-9.5-7-9.5-7Z" />
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="flex h-[62px] w-full items-center justify-center rounded-xl bg-[#2864f0] text-lg font-semibold text-white shadow-[0_10px_25px_rgba(40,100,240,0.22)] transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
            >
              Log in
            </button>
          </form>

          {/* Signup Link */}
          <p className="mt-10 text-center text-sm text-slate-500 sm:text-base">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-[#2864f0] transition hover:text-blue-800"
            >
              Create account
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
};
