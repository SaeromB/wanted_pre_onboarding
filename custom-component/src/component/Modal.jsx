import React, { useState } from 'react';

const Modal = () => {
  const [open, setOpen] = useState(false);

  const switchModal = () => {
    setOpen((open) => !open);
  };
  const handleModalClose = () => {
    switchModal();
  };

  return (
    <>
      <button className="w-32 h-16 bg-primary-color rounded-full p-2" onClick={switchModal}>
        <div className="text-white">Open Modal</div>
      </button>
      {/* modal */}
      {open ? (
        <div>
          Hello CodeStates!
          <div onClick={handleModalClose}>x</div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
