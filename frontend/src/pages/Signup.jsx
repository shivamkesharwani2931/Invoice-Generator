import { useState } from "react";
import { Link } from "react-router-dom";

export const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle signup form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password.length < 8) {
      alert("Password must contain at least 8 characters.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // Do not log passwords in a production application.
    console.log("Signup details:", {
      fullName,
      email,
    });

    // Connect your backend API here to register the user.
    alert("Signup form submitted. Connect your backend to create an account.");
  };

  return (
    <div className="min-h-screen w-full bg-white lg:grid lg:grid-cols-[45%_55%]">
      {/* LEFT PANEL */}
      <section className="relative flex min-h-[500px] flex-col overflow-hidden bg-gradient-to-br from-[#151d30] via-[#17264d] to-[#2452bd] px-6 py-8 text-white sm:px-10 lg:min-h-screen lg:px-[9.3%] lg:py-9">
        {/* Logo */}
        <Link to="/" className="flex w-fit items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5138ff]">
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
              <path d="M7 3.5h7l5 5V21H7z" />
              <path d="M14 3.5V9h5" />
              <path d="M10 13h6M10 17h6" />
            </svg>
          </div>

          <span className="text-xl font-bold tracking-tight">
            Invoice<span className="text-[#5138ff]">Pro</span>
          </span>
        </Link>

        {/* Promotional Content */}
        <div className="my-auto max-w-[600px] py-16 lg:py-20">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full bg-white/15 px-3.5 py-2 text-xs font-bold tracking-wide text-blue-100 sm:text-sm">
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

          <h1 className="mb-5 text-4xl font-normal leading-[1.12] tracking-tight sm:text-5xl lg:text-[clamp(2.8rem,3.5vw,4rem)]">
            Turn your work into a professional invoice.
          </h1>

          <p className="mb-9 max-w-[540px] text-base leading-7 text-blue-100 sm:text-lg">
            Join thousands of independent professionals who save time and get
            paid faster.
          </p>

          {/* Features */}
          <ul className="space-y-4 text-sm sm:text-base">
            <li className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-blue-300"
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

            <li className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-blue-300"
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

            <li className="flex items-center gap-3">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                className="h-4 w-4 shrink-0 text-blue-300"
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
        {/* <p className="mt-auto text-xs text-blue-200/75 sm:text-sm">
          © 2025 InvoicePro
        </p> */}
      </section>

      {/* RIGHT SIGNUP PANEL */}
      <section className="flex min-h-[650px] items-center justify-center bg-white px-6 py-10 sm:px-10 lg:min-h-screen lg:px-12 lg:py-8">
        <div className="w-full max-w-[435px]">
          {/* Page Icon */}
          <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-[#2864f0]">
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
              <path d="M7 3.5h7l5 5V21H7z" />
              <path d="M14 3.5V9h5" />
              <path d="M10 13h6M10 17h6" />
            </svg>
          </div>

          <h2 className="mb-2 text-3xl font-normal tracking-tight text-[#151d30] sm:text-[32px]">
            Create your account
          </h2>

          <p className="mb-8 text-sm leading-6 text-slate-600 sm:text-base">
            Start creating professional invoices for free.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Full Name */}
            <div>
              <label
                htmlFor="fullName"
                className="mb-2 block text-sm font-semibold text-[#151d30]"
              >
                Full name <span className="text-[#2864f0]">*</span>
              </label>

              <input
                id="fullName"
                name="fullName"
                type="text"
                autoComplete="name"
                placeholder="Alex Morgan"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
                className="h-[51px] w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Email Address */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-[#151d30]"
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
                className="h-[51px] w-full rounded-xl border border-slate-200 bg-white px-4 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-[#151d30]"
              >
                Password <span className="text-[#2864f0]">*</span>
              </label>

              <div className="relative">
                <input
                  id="password"
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="At least 8 characters"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength={8}
                  required
                  className="h-[51px] w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  aria-label={showPassword ? "Hide password" : "Show password"}
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 transition hover:text-[#2864f0]"
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

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="mb-2 block text-sm font-semibold text-[#151d30]"
              >
                Confirm password <span className="text-[#2864f0]">*</span>
              </label>

              <div className="relative">
                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type={showConfirmPassword ? "text" : "password"}
                  autoComplete="new-password"
                  placeholder="Repeat your password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  minLength={8}
                  required
                  className="h-[51px] w-full rounded-xl border border-slate-200 bg-white px-4 pr-12 text-sm text-slate-800 outline-none transition placeholder:text-slate-400 focus:border-[#2864f0] focus:ring-4 focus:ring-blue-100"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  aria-label={
                    showConfirmPassword
                      ? "Hide confirm password"
                      : "Show confirm password"
                  }
                  className="absolute inset-y-0 right-0 flex items-center px-4 text-slate-500 transition hover:text-[#2864f0]"
                >
                  {showConfirmPassword ? (
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

            {/* Create Account Button */}
            <button
              type="submit"
              className="flex h-[51px] w-full items-center justify-center rounded-xl bg-[#2864f0] text-base font-semibold text-white shadow-[0_8px_20px_rgba(40,100,240,0.2)] transition hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-200 active:scale-[0.99]"
            >
              Create free account
            </button>
          </form>

          {/* Login Link */}
          <p className="mt-6 text-center text-xs text-slate-500 sm:text-sm">
            Already have an account?{" "}
            <Link
              to="/login"
              className="rounded-md font-semibold text-[#2864f0] transition hover:text-blue-800"
            >
              Log in
            </Link>
          </p>

          {/* Terms and Privacy */}
          {/* <p className="mt-5 text-center text-xs leading-5 text-slate-400">
            By creating an account, you agree to our{" "}
            <Link to="/terms" className="hover:text-[#2864f0]">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="hover:text-[#2864f0]">
              Privacy Policy
            </Link>
            .
          </p> */}
        </div>
      </section>
    </div>
  );
};
