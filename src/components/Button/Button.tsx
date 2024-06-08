interface ButtonProps {
  children: React.ReactNode;
}

export const Button = ({ children }: ButtonProps) => (
  <button className="xl:visible lg:visible invisible text-white w-40 min-h-12 flex items-center justify-around bg-black hover:bg-[#FFDC00] hover:text-black font-geist-mono-bold rounded-full pl-[18px]">
    {children}
  </button>
);
