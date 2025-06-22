import { render, screen, waitFor } from "@testing-library/react";
import Statistics from "../pages/Home/Statistics";
import { totalApi } from "../utils/api";
import { test, vi } from "vitest";
import { totalData } from "../utils/constants";
import millify from "millify";

vi.mock("../utils/api", () => ({
  totalApi: {
    get: vi.fn(),
  },
}));

describe("Statistics component tests", () => {
  afterAll(() => {
    vi.resetAllMocks();
  });

  test("Is loader visible when component rendering", () => {
    // When fake get function is running return promise
    totalApi.get.mockReturnValue(new Promise(() => {}));

    // Render component
    render(<Statistics />);

    // Is loader rendered
    screen.getByTestId("loader");
  });

  test("If isError has been set to true, then error message is visible", async () => {
    // When fake get function is running return error
    totalApi.get.mockRejectedValue(new Error("Error 404"));

    // Render component
    render(<Statistics />);

    // Is loading rendered
    screen.getByTestId("loader");

    // Is error message rendered
    await waitFor(() => screen.getByText("Sorry... an error acquaired"));
  });

  test("If api has been called, then data is visible", async () => {
    // When fake get function is running return totalData
    totalApi.get.mockResolvedValue({
      data: {
        data: totalData,
      },
    });

    // Render component
    render(<Statistics />);

    // Is fake get function is running
    await waitFor(() => expect(totalApi.get).toHaveBeenCalled());

    // Is total cases on screen
    screen.getByText(millify(totalData.confirmed));

    // Is active cases on screen
    screen.getByText(millify(totalData.active));

    // Is total deaths on screen
    screen.getByText(millify(totalData.deaths));
  });
});
