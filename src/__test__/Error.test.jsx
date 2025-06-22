import { fireEvent, render, screen } from "@testing-library/react";
import Error from "../components/Error";
import { expect, vi } from "vitest";

it("Does Error component show the error message", () => {
  // Created a mock function
  const mockFn = vi.fn();

  // Render the component with info prop
  render(<Error info="Request failed with status code 404" refetch={mockFn} />);

  // Does info prop on screen
  screen.getByText("Request failed with status code 404");

  // Does Try Again button on screen
  const button = screen.getByRole("button", { name: "Try Again" });

  // Click Try Again button
  fireEvent.click(button);

  // Does mock function is called
  expect(mockFn).toHaveBeenCalled();
});
