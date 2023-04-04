import React from "react";
import { render, screen } from "@testing-library/react";
import ProgressBar from "./ProgressBar";

const tier = {
  id: "tier1",
  isUnlocked: false,
  isActive: false,
  name: "sell Wordpress Website",
  income: 15,
  delay: 2000,
};

test("renders progress bar", () => {
  render(<ProgressBar tier={tier} isFilling={true} />);
  const progressBar = screen.getByTestId("progress-bar");
  expect(progressBar).toBeInTheDocument();
});
