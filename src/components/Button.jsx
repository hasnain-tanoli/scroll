import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-semibold rounded px-3 sm:px-4 py-1.5 sm:py-2 transition hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";

  const variants = {
    primary: "bg-primary text-white hover:bg-primary/90 focus:ring-primary",
    secondary: "bg-white text-primary hover:bg-gray-100 focus:ring-gray-200",
    outline:
      "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary",
  };

  const appliedVariant = variants[variant] || variants.primary;

  return (
    <button
      type={type}
      className={`${baseStyles} ${appliedVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
