import { getByRole, render, screen } from "@testing-library/react";
import Application from "./Application";

describe("application", () => {
  test("renders correctly for getByRole", () => {
    render(<Application />);
    const pageHeading = screen.getByRole("heading", {
      level: 1,
    });
    expect(pageHeading).toBeInTheDocument();

    const sectionHeading = screen.getByRole("heading", {
      level: 2,
    });
    expect(sectionHeading).toBeInTheDocument();

    const textelement = screen.getByRole("textbox", { name: "Name" });
    expect(textelement).toBeInTheDocument();

    const bioElement = screen.getByRole("textbox", { name: "Bio" });
    expect(bioElement).toBeInTheDocument();

    const job_location = screen.getByRole("combobox");
    expect(job_location).toBeInTheDocument();

    const submitBtnElement = screen.getByRole("button");
    expect(submitBtnElement).toBeInTheDocument();
  });
  test("render correctly for getByLabelText", () => {
    render(<Application />);
    const nameElement = screen.getByLabelText("Name");
    expect(nameElement).toBeInTheDocument();

    const termsElement = screen.getByLabelText(
      "I agree to the terms and conditions"
    );
    expect(termsElement).toBeInTheDocument();

    const selectElement = screen.getByLabelText("Job location", {
      selector: "select",
    });
  });

  test("render correctly for getByPlaceholderText", () => {
    render(<Application />);
    const nameElement = screen.getByPlaceholderText("fullName");
    expect(nameElement).toBeInTheDocument();
  });

  test("render correctly for  getByText", () => {
    render(<Application />);
    const paraElement = screen.getByText("All fields are mandatory");
    expect(paraElement).toBeInTheDocument();
  });


  test("render correctly for getByDisplayValue", () => {
    render(<Application />);
    const nameElement = screen.getByDisplayValue("saurabh");
    expect(nameElement).toBeInTheDocument();
  });

  test("render correctly for getByTitle", () => {
    render(<Application />);
    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();
  });

  test("render correctly for getByTestId", () => {
    render(<Application />);
    const dataTestIdElement = screen.getByTestId("custom div");
    expect(dataTestIdElement).toBeInTheDocument();
  });
});

describe("textmatch using string,regEx,custom function",()=>{
  test("render correctly for  getByText using string", () => {
    render(<Application />);
    const paraElement = screen.getByText("All fields are mandatory");
    // const paraElement = screen.getByText("mandatory",{exact:false});
    expect(paraElement).toBeInTheDocument();
  });
  test("render correctly for  getByText using regEx", () => {
    render(<Application />);
    const paraElement = screen.getByText(/All/);
    // const paraElement = screen.getByText(/all/i);
    expect(paraElement).toBeInTheDocument();
  });
  test("render correctly for  getByText using custom function", () => {
    render(<Application />);
    const paraElement = screen.getByText((content)=>content.startsWith("All"));
  
    expect(paraElement).toBeInTheDocument();
  });
})
