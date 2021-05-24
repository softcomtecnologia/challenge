import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import renderWithRoutes from "./renderWithRoutes";
import App from "../App";

describe("This are some tests on the home page", () => {
  it("tests the home page route", () => {
    const { history } = renderWithRoutes(<App />);
    const { pathname } = history.location;
    expect(pathname).toBe("/");
  });
  it("checks if the title in the header is present on the screen", () => {
    const { getByText } = render(<App />);
    const title = getByText(/Pet Friends Acessories/i);
    expect(title).toBeInTheDocument();
  });
  it("checks if all categories are on the screen", () => {
    const { getAllByRole } = render(<App />);
    const listItemOfCategoriesBar = getAllByRole("category");
    expect(listItemOfCategoriesBar.length).toBe(6);
  });
  it("check if there is only one search field on the screen", () => {
    const { getByPlaceholderText } = render(<App />);
    const everyInput = document.querySelectorAll("input");
    const inputValue = getByPlaceholderText("O que você procura?");
    expect(everyInput.length).toBe(1);
    expect(inputValue).toBeInTheDocument();
  });
});
