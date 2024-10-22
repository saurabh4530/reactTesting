import Skills from "./Skills";
import { findByRole, render,screen } from "@testing-library/react";

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
    });
    test("renders login button",()=>{
        render(<Skills skills={skills}/>)
        const loginBtn=screen.getByRole("button",{name:"login"});
        expect(loginBtn).toBeInTheDocument();
    });
    test(" start learning button is not rendered ",()=>{
        render(<Skills skills={skills}/>)
        const startlearningbtn=screen.queryByRole("button",{name:"start learning"});
        expect(startlearningbtn).not.toBeInTheDocument();
    });

    test("start learning button is eventually display",async()=>{
        render(<Skills skills={skills}/>)
        // screen.debug()   //use for debug the test
        const startlearningbtn= await screen.findByRole("button",{name:"start learning"},
            {timeout:1000}
        )
        // screen.debug()
            expect(startlearningbtn).toBeInTheDocument();
        
    })

})





