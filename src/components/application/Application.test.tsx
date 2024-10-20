

import { render,screen } from "@testing-library/react";
import Application from "./Application";


describe("application",()=>{
    test("renders correctly",()=>{
        render(<Application/>)
        const textelement=screen.getByRole("textbox")
        expect(textelement).toBeInTheDocument()
    })
})






