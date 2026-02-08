import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    className,
    ...props
}) => {
    const baseStyles = "px-6 py-2 rounded font-semibold transition-all duration-300 active:scale-95";

    const variants = {
        primary: "bg-primary text-black hover:bg-yellow-400 shadow-[0_0_15px_rgba(251,191,36,0.5)] hover:shadow-[0_0_25px_rgba(251,191,36,0.7)]",
        outline: "border border-primary text-primary hover:bg-primary/10",
        ghost: "text-gray-300 hover:text-white hover:bg-white/5",
    };

    return (
        <button
            className={twMerge(baseStyles, variants[variant], className)}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
