import { forwardRef, useId } from "react";

const Input = forwardRef(
  (
    {
      label,
      type = "text",
      className = "",
      size = "md",
      variant = "default",
      error = "",
      ...props
    },
    ref
  ) => {
    const id = useId();

    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-sm",
      lg: "px-4 py-3 text-base",
    };

    const variantClasses = {
      default:
        "border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none",
      auth: "border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:ring-2 focus:ring-primary/40 focus:border-primary outline-none shadow-sm",
      subtle:
        "border border-gray-200 bg-gray-50 text-gray-800 placeholder-gray-400 focus:ring-1 focus:ring-primary/30 outline-none",
    };

    const errorClasses = error ? "border-red-500 focus:ring-red-400" : "";

    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-700">
            {label}
          </label>
        )}

        <input
          id={id}
          ref={ref}
          type={type}
          className={`rounded-lg transition-colors duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${errorClasses} ${className}`}
          {...props}
        />

        {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
