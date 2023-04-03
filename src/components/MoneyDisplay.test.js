import React from "react";
import { render, screen } from "@testing-library/react";
import MoneyDisplay from "./MoneyDisplay";

test("renders money display", () => {
  render(<MoneyDisplay />);
  const moneyDisplayElement = screen.getByRole("heading");
  expect(moneyDisplayElement).toBeInTheDocument();
});
