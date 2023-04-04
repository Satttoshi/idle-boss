import React from "react";
import { render, screen } from "@testing-library/react";
import InvestButton from "./InvestButton";

test("renders investment button", () => {
  render(<InvestButton />);
  const investButton = screen.getByRole("button");
  expect(investButton).toBeInTheDocument();
});
