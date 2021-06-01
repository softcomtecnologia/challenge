import styled from "styled-components";

export const SearchBarContainer = styled.div`
  display: flex;
  justify-content: left;
`;

export const SearchBarInput = styled.input`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-right: none;
  box-sizing: border-box;
  border-radius: 3px 0px 0px 3px;
  margin: 50px 0 0 148px;
  width: 850px;
  height: 54px;
  /* placeholder */
  font-family: "Quicksand";
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 25px;
  letter-spacing: 0em;
  text-align: left;
  padding: 0 16px;
  @media (max-width: 850px) {
    margin: 0;
  }
`;

export const SearchBarBtn = styled.button`
  background-color: #ffffff;
  border: 1px solid #dddddd;
  border-left: none;
  margin: 50px 0;
  padding: 0 17px;
  height: 54px;
  @media (max-width: 850px) {
    margin: 0;
  }
`;
