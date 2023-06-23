import React from "react";
import { motion } from "framer-motion";

const Modal = ({modal, largeImageUrl, handleStateModal}) => {
  return (
    <>
      {modal ? (
        <div
          className="overlay"
          onClick={() => handleStateModal(false)}
        >
          <motion.div
            className="box"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.8,
              delay: 0.7,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <div className="modal">
              <img
                src={largeImageUrl}
                alt="large image"
                className="modal-content"
              />
            </div>
          </motion.div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
