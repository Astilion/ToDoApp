import { ReactNode } from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";
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
			<div className='flex justify-center'>
				<motion.div
					className='fixed top-1/3 w-full lg:w-3/4 bg-white p-1 rounded-md shadow-md z-30'
					variants={{
						hidden: { opacity: 0, y: 30, scale: 0.8 },
						visible: { opacity: 1, y: 0, scale: 1 },
					}}
					initial='hidden'
					animate='visible'
					exit='hidden'>
					{children}
				</motion.div>
			</div>
		</>,
		modalRoot
	);
};

export default Modal;
