import styled from "styled-components";

export const FooterContainer = styled.footer`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  border-top: 5px solid #b41c8b;
  background: #ffffff;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 32px 0;
  @media (max-width: 1218px) {
    display: none;
  }
`;

export const FooterImageSoftcom = styled.img`
  height: 59px;
  width: 223px;
`;

export const FooterLink = styled.span`
  color: #b41c8b;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
}`;
