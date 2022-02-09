import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: #ffffff;
  border-bottom: 5px solid #b41c8b;
  display: flex;
  flex-direction: row;
  padding: 23px 58px;
  margin: 0;
  @media (max-width: 591px) {
    padding: 0;
  }
`;

export const HeaderImage = styled.img`
  border: 2px solid #b41c8b;
  border-radius: 100%;
  height: 144px;
  width: 144px;
  @media (max-width: 591px) {
    margin: 0 17px;
  }
`;

export const HeaderContainer = styled.div`
  flex: auto;
  margin: 0 30px;
  @media (max-width: 591px) {
    margin: 0 auto;
  }
`;

export const HeaderTitle = styled.span`
  color: #333333;
  font-family: "Quicksand";
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 591px) {
    font-size: 24px;
  }
`;

export const HeaderClockIcon = styled.img`
  width: 10px;
  height: 10px;
  margin: 0 2px 0 20px;
`;

export const HeaderStatus = styled.span`
  color: #1bbb16;
  font-family: "Quicksand";
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;
  letter-spacing: 0em;
  text-align: left;
`;

export const HeaderStreet = styled.h3`
  color: #333333;
  font-family: "Quicksand";
  font-size: 19px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 591px) {
    margin: 15px auto;
  }
`;

export const HeaderDeliveryInfo = styled.span`
  @media (max-width: 591px) {
    float:left;
  }
`;

export const HeaderMotoIcon = styled.img`
  width: 16px;
  height: 9px;
  margin: 0 3px;
`;

export const HeaderService = styled.span`
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 591px) {
    display: block
  }
`;

export const HeaderServiceTime = styled.span`
  color: #818181;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  padding-right: 42px;
  text-align: left;
`;

export const HeaderServicePrice = styled.span`
  color: #818181;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;

export const HeaderDetails = styled.header`
  background: #b41c8b;
  padding: 3px 15px;
`;

export const BackBtn = styled.button`
  border: none;
  height: 40px;
  width: 40px;
  border-radius: 0;
  background: none;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-left: 1px solid #ececec;
  justify-content: space-evenly;
  align-items: bottom;
  @media (max-width: 591px) {
    position: fixed;
    top: 90%;
    left: 10px;
    z-index: +1;
    flex-direction: row;
    background: #b41c8b;
    border-radius: 5px;
    width: 551px;
    padding: 10px;
  }
`;

export const CartShopIcon = styled.img`
  height: 22.41px;
  width: 26px;
  margin: 0 13px;
  @media (max-width: 591px) {
    display: none;
  }
`;

export const CartShopQTD = styled.span`
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  @media (max-width: 591px) {
    margin-left: 5px;
    color: #ffffff;
    font-family: "Quicksand";
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
  }
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
  @media (max-width: 591px) {
    background: #ffffff;
    padding: 5px;
    border-radius: 1000px;
    margin-left: 5px;
    color: #b41c8b;
    font-family: "Quicksand";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 20px;
    letter-spacing: 0em;
  }
`;
