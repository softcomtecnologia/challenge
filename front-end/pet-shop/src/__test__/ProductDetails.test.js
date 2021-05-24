import "@testing-library/jest-dom";
import renderWithRoutes from "./renderWithRoutes";
import App from "../App";

describe("Tests for the details screen", () => {
  it("tests route to product details page", () => {
    const { history } = renderWithRoutes(<App />);
    history.push("/productDetails/2");
    const { pathname } = history.location;
    expect(pathname).toBe("/productDetails/2");
  });
});
