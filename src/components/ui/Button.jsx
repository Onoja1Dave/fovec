import React from 'react';

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "border-transparent text-white bg-primary hover:bg-blue-800 shadow-lg hover:shadow-xl focus:ring-primary",
    accent: "border-transparent text-white bg-accent hover:bg-lime-600 shadow-md hover:shadow-lg focus:ring-accent",
    outline: "border-primary text-primary bg-transparent hover:bg-primary/5 focus:ring-primary",
    ghost: "border-transparent text-gray-600 hover:text-primary hover:bg-gray-100",
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
