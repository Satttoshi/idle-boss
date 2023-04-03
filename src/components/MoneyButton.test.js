import React from "react";
import { render, screen } from "@testing-library/react";
import MoneyButton from "./MoneyButton";

test("renders money display", () => {
  render(<MoneyButton />);
  const moneyDisplayElement = screen.getByRole("button");
  expect(moneyDisplayElement).toBeInTheDocument();
});
