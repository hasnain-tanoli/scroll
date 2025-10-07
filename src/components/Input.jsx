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
      icon,
      ...props
    },
    ref
  ) => {
    const id = useId();

    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-3 text-sm",
      lg: "px-4 py-4 text-base",
    };

    const variantClasses = {
      default:
        "border border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none hover:border-gray-300",
      auth: "border border-gray-200 bg-white text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none shadow-sm hover:border-gray-300",
      subtle:
        "border border-gray-100 bg-gray-50/50 text-gray-800 placeholder-gray-500 focus:ring-2 focus:ring-primary/20 focus:border-primary focus:bg-white outline-none",
    };

    const errorClasses = error ? "border-red-300 focus:ring-red-200 focus:border-red-400" : "";

    return (
      <div className="w-full flex flex-col gap-2">
        {label && (
          <label htmlFor={id} className="text-sm font-medium text-gray-700 mb-1">
            {label}
          </label>
        )}

        <div className="relative">
          {icon && (
            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
              {icon}
            </div>
          )}
          <input
            id={id}
            ref={ref}
            type={type}
            className={`w-full rounded-xl transition-all duration-200 ${sizeClasses[size]} ${variantClasses[variant]} ${errorClasses} ${icon ? 'pl-10' : ''} ${className}`}
            {...props}
          />
        </div>

        {error && <p className="text-red-500 text-sm flex items-center gap-1">
          <span>⚠️</span> {error}
        </p>}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
