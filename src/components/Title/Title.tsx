interface TitleProps {
    children: String;
  }
  
  export const Title = ({ children }: TitleProps) => (
    <h1 className="mb-10 md:mb-1 leading-tight text-[48px] md:text-[80px] font-architekt font-bold leading-custom-tight tracking-custom-tight text-left w-full">{children}</h1>
  );
  

