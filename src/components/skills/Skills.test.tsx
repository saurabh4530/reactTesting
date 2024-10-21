import Skills from "./Skills";
import { render,screen } from "@testing-library/react";

describe("skills",()=>{
    const skills=["html","css","js" ]
    test("renders correctly",()=>{
        render(<Skills skills={skills}/>)
        const listElement=screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    });

    test("renders for list of skills",()=>{
        render(<Skills skills={skills}/>)
        const listElement=screen.queryAllByRole("listitem");
        expect(listElement).toHaveLength(skills.length)
    })
})





