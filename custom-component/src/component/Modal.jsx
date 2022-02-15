import React, { useState } from 'react';

const Modal = () => {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen((open) => !open);
  };
  const handleModalDelete = () => {
    openModal();
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <button className="w-32 h-16 bg-primary-color rounded-full p-2" onClick={openModal}>
          <div className="text-white">Open Modal</div>
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0	bg-gray-400">
          <div className="flex items-center justify-center">
            <div className="relative  bg-white z-10 rounded-xl">
              <div
                className="flex items-center justify-center text-lg font-semibold	"
                onClick={handleModalDelete}>
                x
              </div>
              <div className="flex items-center justify-center px-52 py-20">
                <div className="text-primary-color text-2xl font-normal">Hello CodeStates!</div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* <button className="flex items-center justify-center" onClick={openModal}>
        Sample
      </button> */}
    </>
  );
};

export default Modal;
