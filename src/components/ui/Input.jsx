import React from 'react';

export const Input = ({ label, id, type = "text", className = '', ...props }) => {
  return (
    <div className="mb-4 text-left">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 outline-none ${className}`}
        {...props}
      />
    </div>
  );
};

export const TextArea = ({ label, id, className = '', ...props }) => {
  return (
    <div className="mb-4 text-left">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 mb-1">
          {label}
        </label>
      )}
      <textarea
        id={id}
        className={`w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-200 outline-none resize-y min-h-[120px] ${className}`}
        {...props}
      />
    </div>
  );
};
