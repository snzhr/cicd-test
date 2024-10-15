import React from "react"; // Add this line
import { render, screen } from "@testing-library/react";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from "./store/store";

test("renders greeting message with name", () => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>
  );

  // Act: search for the greeting message in the document
  const greetingElement = screen.getByText(`Score: 0`);

  // Assert: check if the element is in the document
  expect(greetingElement).toBeInTheDocument();
});


test("", () => {

});