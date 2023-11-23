import { ReactNode, MouseEvent } from "react";
interface ButtonProps {
	children: ReactNode;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
}
const Button = ({ children, onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} 
		className='px-2 py-1 ml-1 h-full hover:bg-slate-500 transition-colors'>
			{children}
		</button>
	);
};

export default Button;
