interface TitleProps {
    children: string;
  }
  
  export const Title = ({ children }: TitleProps) => (
    <h1 className="mb-1 md:mb-[50px] leading-tight text-[2.3rem] md:text-[80px] font-bold leading-custom-tight tracking-custom-tight text-left w-full">{children}</h1>
  );
  

