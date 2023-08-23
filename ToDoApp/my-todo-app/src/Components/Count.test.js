import React from "react";
import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Count } from "./Count";

describe(Count, () => {
  it("Test the initial Value of Count", () => {
    const { getByTestId } = render(<Count initialCount={0} />);
    const countValue = Number(getByTestId("count").textContent);
    expect(countValue).toBe(0);
  });

  it("Testing the increment button", () => {
    const { getByRole, getByTestId } = render(<Count />);
    const incButton = getByRole("button", { name: "+" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toBe(1);
  });

  it("Testing the decrement button", () => {
    const { getByRole, getByTestId } = render(<Count />);
    const incButton = getByRole("button", { name: "-" });
    const countValue1 = Number(getByTestId("count").textContent);
    expect(countValue1).toEqual(0);
    fireEvent.click(incButton);
    const countValue2 = Number(getByTestId("count").textContent);
    expect(countValue2).toBe(-1);
  });
  it("Testing the Reset button", () => {
    const { getByRole, getByTestId } = render(<Count />);
    const resetButton = getByRole("button", { name: "Reset" });
    const countValue1 = Number(getByTestId("count").textContent);
    fireEvent.click(resetButton);
    expect(countValue1).toBe(0);
  });
  it("Testing the sign button", () => {
    const { getByRole, getByTestId } = render(<Count />);
    const signButton = getByRole("button", { name: "-/+" });
    const countValue1 = Number(getByTestId("count").textContent);
    fireEvent.click(signButton);
    const countValue2 = Number(getByTestId("count").textContent);
    if (countValue1 == 0) {
      expect(countValue1).toBe(countValue2);
    } else {
      const newValue = -1 * countValue1;
      expect(countValue2).toBe(newValue);
    }
  });
});
