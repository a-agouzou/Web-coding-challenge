function Button({ children, variant = "primary", ...props }) {
  const baseClasses =
    "px-4 py-2 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 transition-colors";

  const variants = {
    primary: "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-500",
    danger: "bg-red-500 text-white hover:bg-red-600 focus:ring-red-500",
    success: "bg-green-500 text-white hover:bg-green-600 focus:ring-green-500",
  };

  return (
    <button className={`${baseClasses} ${variants[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default Button;
