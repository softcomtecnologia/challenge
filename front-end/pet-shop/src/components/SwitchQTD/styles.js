import styled from "styled-components";

export const SwitchContainer = styled.div`
  display: flex;
  margin: 15px auto;
  justify-content: center;
  align-items: center;
`;

export const DecrementBtn = styled.button`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 10px 0 0 10px;
  border-right: none;
  height: 30px;
  height: 55px;
  width: 35px;
`;

export const QuantityInput = styled.input`
  text-align: center;
  width: 80px;
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-right: none;
  border-left: none;
  height: 55px;
`;

export const IncrementBtn = styled.button`
  background: #ffffff;
  border: 1px solid #dcdcdc;
  box-sizing: border-box;
  border-radius: 0 10px 10px 0;
  border-left: none;
  height: 55px;
  width: 35px;
`;
