import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import authService from "../backend/auth";
import { login as authLogin } from "../features/auth/authSlice";
import { useForm } from "react-hook-form";
import { Input, Button } from "./index";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const handleLogin = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
          navigate("/");
        }
      }
    } catch (err) {
      setError(
        err.message || "Failed to log in. Please check your credentials."
      );
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-8 space-y-6">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Sign In</h2>
          <p className="text-sm text-gray-500 mt-1">
            Use your email and password to continue.
          </p>
        </div>

        {error && (
          <p className="text-red-600 bg-red-100 border border-red-200 rounded-md p-3 text-sm text-center mb-5">
            {error}
          </p>
        )}

        <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
          {/* Email */}
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            icon={
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
            }
            {...register("email", {
              required: "Email address is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Enter a valid email address",
              },
            })}
          />

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <span className="text-sm font-medium text-gray-700">
                Password
              </span>
              <Link
                to="/forgot-password"
                className="text-sm text-primary hover:underline"
              >
                Forgot?
              </Link>
            </div>
            <Input
              type="password"
              placeholder="••••••••"
              icon={
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
              }
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 8,
                  message: "Password must be at least 8 characters long",
                },
              })}
            />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-gray-600">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-primary focus:ring-primary"
              />
              Remember me
            </label>
            <Link to="/help" className="text-sm text-primary hover:underline">
              Trouble signing in?
            </Link>
          </div>

          <Button
            type="submit"
            className="w-full flex items-center justify-center gap-2 rounded-lg bg-primary text-white py-2.5 font-medium hover:bg-primary/90 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            Sign In
          </Button>

          <div className="relative flex items-center justify-center">
            <span className="h-px w-full bg-gray-200"></span>
            <span className="absolute bg-white px-3 text-sm text-gray-500">
              OR
            </span>
          </div>

          {/* <button
            type="button"
            className="w-full flex items-center justify-center gap-2 rounded-lg border border-gray-300 py-2.5 text-gray-700 font-medium hover:bg-gray-50 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="h-5 w-5"
            >
              <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.09 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.01c-3.2.7-3.88-1.37-3.88-1.37-.52-1.31-1.26-1.66-1.26-1.66-1.03-.7.08-.68.08-.68 1.14.08 1.75 1.17 1.75 1.17 1.02 1.75 2.68 1.24 3.34.95.1-.74.4-1.24.73-1.53-2.56-.29-5.26-1.29-5.26-5.76 0-1.27.46-2.3 1.17-3.11-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 012.87-.39c.97 0 1.95.13 2.87.39 2.18-1.49 3.14-1.18 3.14-1.18.62 1.58.23 2.75.11 3.04.73.81 1.17 1.84 1.17 3.11 0 4.49-2.71 5.46-5.29 5.74.41.35.78 1.03.78 2.09v3.11c0 .31.19.69.8.58A12 12 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
            </svg>
            Continue with GitHub
          </button> */}
        </form>

        <div className="text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary font-medium hover:underline"
          >
            Sign up
          </Link>
          <div className="mt-3 flex justify-center gap-3 text-xs text-gray-400">
            <Link to="/terms" className="hover:underline">
              Terms
            </Link>
            ·
            <Link to="/privacy" className="hover:underline">
              Privacy
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
