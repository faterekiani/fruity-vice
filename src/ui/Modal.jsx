/* eslint-disable react/prop-types */
import { useClickOutside } from "../hook/useClickOutside";

const Modal = ({ isOpen, onClose, children }) => {
  const ref = useClickOutside(onClose);

  return (
    <div
      className={`fixed inset-0 w-full h-screen bg-black/20 z-50 overflow-y-auto px-4 md:px-8 transition-all ${
        isOpen ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="flex-center w-full h-full ">
        <div className="modal absolute max-w-[500px]" ref={ref}>
          <span
            className="absolute top-1 right-5 text-2xl cursor-pointer"
            onClick={onClose}
          >
            x
          </span>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
