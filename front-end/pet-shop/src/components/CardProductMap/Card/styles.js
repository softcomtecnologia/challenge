import styled from "styled-components";

export const CardContainerFlex = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const CardContainerProduct = styled.div`
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-sizing: border-box;
  border-radius: 5px;
  width: 254px;
  height: 440px;
  margin: 0 25px;
`;

export const CardImageProdyct = styled.img`
  margin: 15px;
  border: 1px solid #ffffff;
  width: 224px;
  height: 224px;
`;

export const CardProdyctName = styled.p`
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 19px;
  font-style: normal;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  margin: 0 42px 0px 15px;
`;

export const CardSubContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const CardPrice = styled.p`
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

export const CardBtnAdd = styled.button`
  background: #ffffff;
  border: none;
`;
