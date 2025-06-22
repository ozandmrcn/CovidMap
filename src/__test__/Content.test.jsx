import configureStore from "redux-mock-store";
import { thunk } from "redux-thunk";
import { it } from "vitest";
import { mockData } from "../utils/constants";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Content from "../pages/Detail/Content";

const mockStore = configureStore([thunk]);

it("When isLoading = true; (from covidSlice) is Loader on screen", () => {
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
      <Content />
    </Provider>
  );

  // All Loaders on screen
  screen.getAllByTestId("contentLoader");
});

it("When error = true; (from covidSlice) is Error on screen", () => {
  // Make a mock store when loading
  const store = mockStore({
    covidSlice: {
      isLoading: false,
      error: "Error 404",
      data: null,
    },
  });

  // Render component
  render(
    <Provider store={store}>
      <Content />
    </Provider>
  );

  screen.getByTestId("error");
});

it("When data = true; (from covidSlice) is all datas rendering cards", () => {
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
      <Content />
    </Provider>
  );

  // Convert data object to an array
  const arr = Object.entries(mockData).filter(([key]) => key !== "flag");

  // For every each of data entity, render a card
  arr.forEach((item) => {
    // Is Item's key prop on screen
    screen.getByText(item[0]);

    // Is Item's value prop on screen
    screen.getByText(item[1]);
  });
});
