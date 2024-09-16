import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  text-align: center;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  width: 60%;
  height: 30%;
  margin: 5% auto;
`;

export const ImageProductOnDetails = styled.img`
  width: 144px;
`;

export const TitleProductDetails = styled.h3`
  color: #b41c8b;
  font-family: "Quicksand";
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0em;
  text-align: center;
`;

export const PriceInfo = styled.p`
  color: #333333;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
`;

export const ButtonAddToCart = styled.button`
  border: none;
  background-color: #b41c8b;
  margin: 15px auto;
  height: 32px;
  width: 280px;
  border-radius: 4px;
  align-self: right;
  /*InnerText*/
  color: #ffffff;
  font-family: "Quicksand";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0em;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  background: #b41c8b;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px 0;
`;

export const CartShopIcon = styled.img`
  object-fit: cover;
`;

export const CartShopQTD = styled.span`
  margin-left: 5px;
  color: #ffffff;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CartShopValue = styled.p`
  background: #ffffff;
  padding: 5px;
  border-radius: 1000px;
  margin-left: 5px;
  color: #333333;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
`;
