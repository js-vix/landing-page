import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export const Button = ({ children, className, ...props }: ButtonProps) => (
  <button
    className={cn(
      "text-white w-40 min-h-12 flex items-center justify-around bg-black hover:bg-[#FFDC00] hover:text-black font-geist-mono-bold rounded-full pl-[18px] transition-all",
      className
    )}
    {...props}
  >
    {children}
  </button>
);
