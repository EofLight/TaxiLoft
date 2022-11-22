/*import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

//jest.mock("./Login/Login.jsx", () => ({ Login: () => <div>Login content</div> }));
jest.mock("./Map/Map.jsx", () => ({ Map: () => <div>Map content</div> }));
jest.mock("./Profile/Profile.jsx", () => ({ Profile: () => <div>Profile content</div> }));
//jest.mock("./LogOut", () => ({ LogOut: () => <div>LogOut content</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Login");
  });

  describe("when clicked on navigation buttons", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App />);
      fireEvent.click(getByText('Профиль'));
      expect(container.innerHTML).toMatch("Profile content");
      fireEvent.click(getByText('Выйти'));
      expect(container.innerHTML).toMatch("Login content");
    });
  });
});
*/