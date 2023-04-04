import React from "react";
import { render, screen } from "@testing-library/react";
import Milestones from "./Milestones";

test("renders Milestones Box", () => {
  render(<Milestones investCount={6} currentMilestone={9} />);
  const milestone = screen.getByRole("heading");
  expect(milestone).toBeInTheDocument();
});
