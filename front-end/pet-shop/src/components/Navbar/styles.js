import styled from "styled-components";

export const NavbarContainer = styled.nav`
  background-color: #ffffff;
  border-bottom: 1px solid #e0e0e0;
  margin: 0;
`;

export const NavbarCategories = styled.ul`
  padding-top: 17px;
  margin-top: 0;
  list-style-type: none;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const NavbarCategoriesItem = styled.li`
  ${
    "" /* &:hover ${NavbarCategoriesItem} {
    color: #b41c8b;
    font-family: "Quicksand";
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: 23px;
    letter-spacing: 0em;
    text-align: left;
  } */
  }
  color: #3f3f3f;
  font-family: "Quicksand";
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
`;
