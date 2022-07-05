import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders My Challenge App text", () => {
  render(<App />);
  const wellcomeText = screen.getByText(/My Challenge App/i);
  expect(wellcomeText).toBeInTheDocument();
});
