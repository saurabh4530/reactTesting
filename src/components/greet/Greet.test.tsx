import { render, screen } from "@testing-library/react";
import { act } from "react";
import Greet from "./Greet";
//describe used for Grouping test it may be mutiple or nested
describe("Greet", () => {
  test("check for Greet correctly", () => {
    render(<Greet/>);

    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  test("check for greet with name", () => {
    render(<Greet name="saurabh" />);
    const textElement = screen.getByText(/hello saurabh/i); //instead of regx, we can use string  "hello saurabh"
    expect(textElement).toBeInTheDocument();
  });

  describe("Nested", () => {
    test("check for Greet correctly", () => {
      render(<Greet/>);

      const textElement = screen.getByText(/hello/i);
      expect(textElement).toBeInTheDocument();
    });
    test("check for Greet correctly 2", () => {
      render(<Greet/>);

      const textElement = screen.getByText(/hello/i);
      expect(textElement).toBeInTheDocument();
    });

    test("check for greet with name", () => {
      render(<Greet name="saurabh" />);
      const textElement = screen.getByText(/hello saurabh/i); //instead of regx, we can use string  "hello saurabh"
      expect(textElement).toBeInTheDocument();
    });
  });
});

describe("Greet2", () => {
  test("check for Greet correctly", () => {
    render(<Greet/>);

    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });
});
