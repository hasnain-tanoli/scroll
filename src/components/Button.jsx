import React from "react";

const Button = ({
  children,
  type = "button",
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) => {
  const baseStyles =
    "font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer inline-flex items-center justify-center";

  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2.5 text-sm",
    lg: "px-6 py-3 text-base",
  };

  const variants = {
    primary: "bg-gradient-to-r from-primary to-primary-light text-white hover:from-primary-light hover:to-primary shadow-sm hover:shadow-md focus:ring-primary/30",
    secondary: "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50 hover:border-gray-400 shadow-sm focus:ring-gray-300",
    outline: "bg-transparent border border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary/30",
    ghost: "bg-transparent text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:ring-gray-300",
    danger: "bg-red-500 text-white hover:bg-red-600 shadow-sm hover:shadow-md focus:ring-red-300",
  };

  const appliedVariant = variants[variant] || variants.primary;
  const appliedSize = sizes[size] || sizes.md;

  return (
    <button
      type={type}
      className={`${baseStyles} ${appliedSize} ${appliedVariant} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
