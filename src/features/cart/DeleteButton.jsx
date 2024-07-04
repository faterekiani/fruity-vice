/* eslint-disable react/prop-types */
import { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

import Modal from "../../ui/Modal";
import DeleteModal from "./DeleteModal";

function DeleteButton({ children, id }) {
  // modal
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="text-xl cursor-pointer" onClick={handleOpen}>
        {children}
        <MdDeleteOutline />
      </div>

      {isOpen && (
        <Modal isOpen={isOpen} onClose={handleClose}>
          <DeleteModal onClose={handleClose} id={id} />
        </Modal>
      )}
    </>
  );
}

export default DeleteButton;
