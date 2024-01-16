import { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

const ButtonComponent: FC<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>
> = ({ children, className, ...props }) => {
  return (
    <button
      className={`rounded-full py-1 px-5 transition-all text-white border-[2px] border-[color:transparent] ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
