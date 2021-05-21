import styled from "styled-components";

export const Header = styled.header`
  align-items: center;
  background-color: #ffffff;
  border-bottom: 5px solid #b41c8b;
  display: flex;
  flex-direction: row;
  padding: 23px 58px;
  margin: 0;
`;

export const HeaderImage = styled.img`
  border: 2px solid #b41c8b;
  border-radius: 100%;
  height: 144px;
  width: 144px;
`;

export const HeaderContainer = styled.div`
  flex: auto;
  margin: 0 30px;
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
`;

export const HeaderClockIcon = styled.img`
  margin: 0 0 0 20px;
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
