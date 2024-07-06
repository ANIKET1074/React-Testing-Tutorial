import { render, screen } from "@testing-library/react";
import Greet from "./greet";

// test("Greet renders Correctly", () => {
//   render(<Greet />);
//   const screenText = screen.getByText(/hello/i);
//   expect(screenText).toBeInTheDocument();
// });

/**
 * Greet should render the text hello and if name is passed into the component
 * It should render hello followed by the name.
 */

test("Greet renders Correctly", () => {
  render(<Greet />);
  const screenText = screen.getByText("Hello");
  expect(screenText).toBeInTheDocument();
});

test("Greet renders with name Correctly", () => {
  render(<Greet name="Aniket" />);
  const screenText = screen.getByText("Hello Aniket");
  expect(screenText).toBeInTheDocument();
});
