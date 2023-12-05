import { ReactNode, MouseEvent } from "react";
interface ButtonProps {
  children: ReactNode;
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="ml-1 h-full px-2 py-1 transition-colors hover:bg-slate-500"
    >
      {children}
    </button>
  );
};

export default Button;
