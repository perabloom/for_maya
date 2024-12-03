import React from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary';
  children: React.ReactNode;
  icon?: LucideIcon;
  className?: string;
}

export function Button({
  href,
  onClick,
  variant = 'primary',
  children,
  icon: Icon,
  className = '',
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center px-8 py-3 rounded-lg transition-colors text-lg font-semibold';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    secondary: 'bg-white text-gray-900 hover:bg-gray-100',
  };

  const buttonContent = (
    <>
      {children}
      {Icon && <Icon className="ml-2 h-5 w-5" />}
    </>
  );

  if (href) {
    return (
      <a href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {buttonContent}
      </a>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      {buttonContent}
    </button>
  );
}