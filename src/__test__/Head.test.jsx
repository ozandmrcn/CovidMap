import { render, screen } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import Head from "../pages/Detail/Head";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { mockData } from "../utils/constants";
import { it } from "vitest";

// Muck store making function for components that use redux
const mockStore = configureStore([thunk]);

it("When isLoading = true; (from covidSlice) (Loading stage is started) is Loader on screen", () => {
  // Make a mock store when loading
  const store = mockStore({
    covidSlice: {
      isLoading: true,
      error: null,
      data: null,
    },
  });

  // Render component
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );

  // Is Loader on screen
  screen.getByTestId("headLoader");
});

it("When isLoading = false; (from covidSlice) (Loading stage is ended) is Loader not on screen", () => {
  // Make a mock store when loading
  const store = mockStore({
    covidSlice: {
      isLoading: false,
      error: null,
      data: null,
    },
  });

  // Render component
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );

  // Reference of Loader
  const element = screen.queryByTestId("headLoader");

  // Is Loader not on screen
  expect(element).toBeNull();
});

it("When data = true; (from covidSlice) is flag and country name on screen", () => {
  // Make a mock store when loading
  const store = mockStore({
    covidSlice: {
      isLoading: false,
      error: null,
      data: mockData,
    },
  });

  // Render component
  render(
    <Provider store={store}>
      <BrowserRouter>
        <Head />
      </BrowserRouter>
    </Provider>
  );

  // Is country name on screen
  screen.getByRole("heading", { name: mockData.country });

  // Is flag on screen
  const img = screen.getByAltText(mockData.flag.alt);

  expect(img).toHaveAttribute("src", mockData.flag.png);
});
