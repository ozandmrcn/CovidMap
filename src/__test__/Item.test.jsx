import { render, screen } from "@testing-library/react";
import Item from "../pages/Home/Item";
import { test } from "vitest";

test("Are props work properly", () => {
  // Render the component that'll be tested
  render(<Item color="text-pink-500" text="Total Cases" value="660,7M" />);

  // Take icon element
  const icon = screen.getByTestId("icon");

  // Check if the icon has the same class with color prop
  expect(icon).toHaveClass("text-pink-500");

  // Take h2 element
  const h2 = screen.getByRole("heading");

  // Check if the h2 has the same text with text prop
  expect(h2).toHaveTextContent("660,7M");
});
