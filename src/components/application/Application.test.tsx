

import { render,screen } from "@testing-library/react";
import Application from "./Application";


describe("application",()=>{
    test("renders correctly",()=>{
        render(<Application/>)
        const textelement=screen.getByRole("textbox");
        expect(textelement).toBeInTheDocument();

        const job_location=screen.getByRole("combobox");
        expect(job_location).toBeInTheDocument();

        const termsElement=screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();


        const submitBtnElement=screen.getByRole("button");
        expect(submitBtnElement).toBeInTheDocument();



    })
  
})






