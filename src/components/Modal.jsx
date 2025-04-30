import { createPortal } from "react-dom";

const modalRoot = document.getElementById("modal-root");
const MODAL_STYLES = {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "#FFF",
  padding: "50px 20px",
  zIndex: 1000,
};

const OVERLAY_STYLES = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "rgba(0, 0, 0, .7)",
  zIndex: 1000,
};

export const Modal = ({ isOpen, onClose, header, children }) => {
  if (!isOpen) return null;

  return createPortal(
    <>
      <div style={OVERLAY_STYLES} />
      <div style={MODAL_STYLES} className="w-1/2">
        <button
          onClick={onClose}
          className="absolute text-4xl top-1 right-2 text-gray-500 hover:text-gray-800"
        >
          &times;
        </button>
        <p
          className="absolute text-2xl top-1 left-5"
        >
          {header}
        </p>
        {children}
      </div>
    </>,
    modalRoot
  );
};
