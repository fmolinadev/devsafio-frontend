import React, { useState } from 'react';
import { FiEdit2 } from 'react-icons/fi';

const Modal = ({ title, children }) => {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button type="button" onClick={() => setShowModal(true)}>
        <FiEdit2 />
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">{title}</h3>
                  <button
                    className="btn btn-sm btn-circle btn-ghost text-black"
                    onClick={() => setShowModal(false)}
                  >
                    X
                  </button>
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                  {children({ showModal, setShowModal })}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Modal;
