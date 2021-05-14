import React from "react";

// import { Container } from './styles';

function ProductModal({ children }) {
  return (
    <>
      <div className="modal">
        <div className="container">
          <button className="close">Close</button>
          <div className="content">{children}</div>
        </div>
      </div>
    </>
  );
}

export default ProductModal;
