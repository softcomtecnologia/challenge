import styled from "styled-components";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ececec;
  height: 120px;
  justify-content: center;
  align-items: left;
`;

export const CartShopIcon = styled.img`
  height: 22.41px;
  width: 26px;
  margin: 0 13px;
`;

export const CartShopQTD = styled.span`
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CartShopValue = styled.p`
  margin: 0 50px;
  color: #b41c8b;
  font-family: "Quicksand";
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
`;
