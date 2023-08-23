import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { FavoriteColor } from "./Color";

describe(FavoriteColor, () => {
  it("Checking if the color changes on click", () => {
    const { getByRole, getByTestId } = render(<FavoriteColor />);
    const colorButtn = getByRole("button", { name: "Blue" });
    const colorValue = getByTestId("color").textContent;
    expect(colorValue).toBe("red");
    fireEvent.click(colorButtn);
    const colorValue2 = getByTestId("color").textContent;
    expect(colorValue2).toBe("blue");
  });
});
