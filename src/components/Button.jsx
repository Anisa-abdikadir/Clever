import React from "react";

const Button = ({
  children,
  size = "md",
  variant = "primary",
  rounded = "md",
  disabled = false,
  className = "cursor-pointer",
  ...props
}) => {
  // Sizes
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2 text-base",
    lg: "px-6 py-3 text-lg",
    xl: "px-8 py-4 text-xl",
  };

  // Variants
  const variants = {
    primary:
      "bg-white text-black hover:bg-oragne-500 hover:text-red",

    secondary:
      "bg-orange-500 text-white hover:bg-gray-500 hover:text-[#FFFFFF]",

    third:
      "bg-black text-white hover:bg-gray-200 hover:text-black  "

    



    
  };

  // Border Radius
  const roundedStyles = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  return (
    <button
      disabled={disabled}
      className={`
        inline-flex
        items-center
        justify-center
        font-medium
        transition-all
        duration-300
        active:scale-95
        disabled:opacity-50
        disabled:cursor-not-allowed
        cursor-pointer
        ${sizes[size]}
        ${variants[variant]}
        ${roundedStyles[rounded]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;