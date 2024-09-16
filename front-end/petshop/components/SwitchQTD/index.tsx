import React, { useState } from "react";

import * as S from "./styles";

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
    let { value } = target;
    if (value > max) value = max;
    setQuantity(value);
    if (handleChange) {
      handleChange(value);
    }
  };
  return (
    <S.SwitchContainer>
      <S.DecrementBtn type="button" onClick={handleDecClick}>
        -
      </S.DecrementBtn>
      <S.QuantityInput
        min="0"
        type="number"
        value={quantity}
        onChange={handleInputChange}
      />
      <S.IncrementBtn type="button" onClick={handleIncClick}>
        +
      </S.IncrementBtn>
    </S.SwitchContainer>
  );
}
