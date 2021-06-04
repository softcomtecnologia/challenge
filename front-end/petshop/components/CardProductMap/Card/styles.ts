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
  margin: 5px;
  @media (max-width: 980px) {
    margin: 3px;
    width: 180px;
    height: 300px;
  }
`;

export const CardImageProdyct = styled.img`
  margin: 15px;
  border: 1px solid #ffffff;
  width: 224px;
  height: 224px;
  @media (max-width: 980px) {
    width: 144px;
    height: 144px;
  }
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
  @media (max-width: 980px) {
    font-size: 14px;
  }
`;

export const CardSubContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 980px) {
    padding: 0;
  }
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
  @media (max-width: 980px) {
    font-size: 14px;
  }
`;

export const CardBtnAdd = styled.button`
  background: #ffffff;
  border: none;
  @media (max-width: 980px) {
    font-size: 14px;
  }
`;
