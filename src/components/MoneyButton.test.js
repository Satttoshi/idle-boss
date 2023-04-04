import React from "react";
import { render, screen } from "@testing-library/react";
import MoneyButton from "./MoneyButton";

const tier = {
  id: "tier1",
  isUnlocked: false,
  isActive: false,
  name: "sell Wordpress Website",
  income: 15,
  delay: 2000,
};

test("renders money button", () => {
  render(<MoneyButton tier={tier} />);
  const moneyButton = screen.getByRole("button");
  expect(moneyButton).toBeInTheDocument();
});
