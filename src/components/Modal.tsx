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
        className="backdrop fixed left-0 top-0 z-20 h-screen w-full"
        onClick={onClose}
      ></div>
      <div className="flex items-center justify-center">
        <motion.div
          className="md:min-w-3xl fixed top-1/3 z-30 w-full rounded-md bg-slate-500 p-2 shadow-md md:max-w-3xl"
          variants={{
            hidden: { opacity: 0, y: 30, scale: 0.8 },
            visible: { opacity: 1, y: 0, scale: 1 },
          }}
          initial="hidden"
          animate="visible"
          exit="hidden"
        >
          {children}
        </motion.div>
      </div>
    </>,
    modalRoot,
  );
};

export default Modal;
