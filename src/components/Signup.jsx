import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login as authLogin } from "../features/auth/authSlice";
import authService from "../backend/auth";
import { Button, Input } from "./index";

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const createAccount = async (data) => {
    setError("");
    try {
      const user = await authService.createAccount(data);
      if (user) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <section className="flex justify-center mt-20 min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 px-4 py-16">
      <div className="relative w-full max-w-md group">
        {/* Card */}
        <div
          className="relative bg-white rounded-2xl shadow-xl overflow-hidden ring-1 ring-gray-200/50 transition-all duration-300 ease-out hover:-translate-y-0.5"
          style={{
            backgroundImage:
              "radial-gradient(at 60% 40%, rgba(240,245,245,1) 0px, transparent 70%), radial-gradient(at 20% 80%, rgba(255,255,255,1) 0px, transparent 70%)",
          }}
        >
          <div className="relative p-8">
            {/* Header */}
            <div className="mb-8 text-center">
              <div className="flex justify-center items-center gap-2 text-xs text-gray-500 mb-3">
                <span className="h-1.5 w-1.5 rounded-full bg-primary/80"></span>
                <span>Scroll</span>
              </div>
              <h2 className="text-3xl font-semibold text-gray-800">
                Create Account
              </h2>
              <p className="text-sm text-gray-500 mt-1.5">
                Join Scroll and start your journey today.
              </p>
            </div>

            {/* Error Message */}
            {error && (
              <p className="text-red-600 bg-red-100 border border-red-200 rounded-md p-3 text-sm text-center mb-5">
                {error}
              </p>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit(createAccount)} className="space-y-5">
              {/* Full Name */}
              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M20 21v-2a4 4 0 0 0-3-3.87M4 21v-2a4 4 0 0 1 3-3.87m0 0A4 4 0 1 1 12 7a4 4 0 0 1 5 3.13M7 15h10" />
                    </svg>
                  </span>
                  <Input
                    label="Full Name"
                    type="text"
                    placeholder="Enter your full name"
                    size="md"
                    variant="auth"
                    className="pl-10"
                    {...register("name", { required: "Full name is required" })}
                  />
                </div>
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </span>
                  <Input
                    label="Email"
                    type="email"
                    placeholder="you@example.com"
                    size="md"
                    variant="auth"
                    className="pl-10"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                </div>
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                    <svg
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                      <path d="m7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>
                  </span>
                  <Input
                    label="Password"
                    type="password"
                    placeholder="••••••••"
                    size="md"
                    variant="auth"
                    className="pl-10"
                    {...register("password", {
                      required: "Password is required",
                    })}
                  />
                </div>
                {errors.password && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white py-2.5 rounded-lg font-medium transition shadow-md hover:shadow-lg text-sm"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mr-1 inline-block"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
                Create Account
              </Button>

              {/* Divider */}
              <div className="relative py-1">
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="w-full border-t border-gray-200"></div>
                </div>
                <div className="relative flex justify-center">
                  <span className="bg-white px-2 text-[10px] uppercase tracking-wide text-gray-400">
                    or
                  </span>
                </div>
              </div>

              {/* GitHub Button */}
              <button
                type="button"
                className="w-full inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 ring-1 ring-gray-200 hover:bg-gray-100 hover:text-gray-900 transition"
              >
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12a12 12 0 0 0 8.21 11.39c.6.11.8-.26.8-.58v-2.23c-3.34.73-4.03-1.42-4.03-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.21.09 1.84 1.24 1.84 1.24 1.07 1.83 2.81 1.3 3.5.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23.96-.27 1.98-.4 3.01-.4s2.05.13 3.01.4c2.29-1.55 3.29-1.23 3.29-1.23.66 1.65.25 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.6-2.8 5.63-5.47 5.93.43.37.83 1.1.83 2.22v3.29c0 .32.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
                </svg>
                Sign up with GitHub
              </button>
            </form>

            {/* Footer */}
            <div className="mt-8 text-xs text-gray-500 text-center">
              <p>
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-primary hover:underline hover:text-primary/80"
                >
                  Sign in
                </Link>
              </p>
              <div className="flex items-center justify-center gap-3 mt-3">
                <a href="#" className="hover:text-primary transition">
                  Terms
                </a>
                <span className="text-gray-400">•</span>
                <a href="#" className="hover:text-primary transition">
                  Privacy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
