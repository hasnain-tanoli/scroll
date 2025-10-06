import { forwardRef, useId } from "react";

const Select = forwardRef(
  (
    {
      label,
      options = [],
      className = "",
      size = "md",
      variant = "default",
      ...props
    },
    ref
  ) => {
    const id = useId();

    const sizeClasses = {
      sm: "px-3 py-2 text-sm",
      md: "px-4 py-2.5 text-base",
      lg: "px-4 py-3 text-base",
    };

    const variantClasses = {
      default:
        "border border-gray-300 bg-white text-gray-900 focus:ring-2 focus:ring-primary/40 focus:outline-none",
      subtle:
        "border border-gray-200 bg-gray-100 text-gray-800 focus:ring-1 focus:ring-primary/30",
    };

    return (
      <div className="w-full flex flex-col gap-1">
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-gray-700 mb-1"
          >
            {label}
          </label>
        )}
        <select
          id={id}
          ref={ref}
          className={`rounded-lg ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
          {...props}
        >
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default Select;
