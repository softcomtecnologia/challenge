import React, { useState } from "react";

export default function SwitchQTD({ value, handleChange, max }) {
  const [quantity, setQuantity] = useState(value);

  const handleIncClick = () => {
    if (quantity < max) {
      setQuantity(quantity + 1);
      if (handleChange) {
        handleChange(quantity + 1);
      }
    }
  };
  const handleDecClick = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      if (handleChange) {
        handleChange(quantity - 1);
      }
    }
  };

  const handleInputChange = ({ target }) => {
    const { value } = target;
    if (value > max) value = max;
    setQuantity(value);
    if (handleChange) {
      handleChange(value);
    }
  };
  return (
    <div className="input-quantity">
      <button type="button" onClick={handleIncClick}>
        <i className="fas fa-plus" />
      </button>
      <input
        min="0"
        type="number"
        value={quantity}
        onChange={handleInputChange}
      />
      <button type="button" onClick={handleDecClick}>
        <i className="fas fa-minus" />
      </button>
    </div>
  );
}
