import { ReactNode } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
	onClose: () => void;
	children: ReactNode;
}
const Modal = ({ onClose, children }: ModalProps) => {
	const modalRoot = document.getElementById("modal")!;
	return createPortal(
		<>
			<div
				className='fixed top-0 left-0 w-full h-screen z-20 backdrop'
				onClick={onClose}></div>
			<div className='fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full lg:w-4/5 bg-white p-1 rounded-md shadow-md z-30 '>
				{children}
			</div>
		</>,
		modalRoot
	);
};

export default Modal;
