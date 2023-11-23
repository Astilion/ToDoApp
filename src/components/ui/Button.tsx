import { ReactNode } from "react";
interface ButtonProps {
	children: ReactNode;
}
const Button = ({ children }: ButtonProps) => {
	return (
		<button className='px-2 py-1 ml-1 h-full hover:bg-slate-500 transition-colors'>
			{children}
		</button>
	);
};

export default Button;
