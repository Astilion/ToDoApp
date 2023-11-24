import { ReactNode } from "react";
import { createPortal } from "react-dom";
interface ModalProps {
    onClose: () => void;
    children: ReactNode
}
const Modal = ({onClose, children} : ModalProps) => {
    const modalRoot = document.getElementById('modal')!
    return createPortal(
        <>
        <div className="backdrop" onClick={onClose}></div>
        <div className="modal">{children}</div>
        </>, modalRoot
    )
}

export default Modal