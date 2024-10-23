import { render,screen } from "@testing-library/react";
import Counter from "./Counter";
import userEvent from "@testing-library/user-event";
import exp from "constants";



describe("counter",()=>{
    test("renders correctly",()=>{
        render(<Counter/>)
        const countElement=screen.getByRole("heading",{
            level:1
        })
        expect(countElement).toBeInTheDocument();

        const btnElement=screen.getByRole("button",{name:"increment"})
        expect(btnElement).toBeInTheDocument()
    })
// for pointer interaction
    test('render a count as "0"', () => { 
        render(<Counter/>)
        const countElement=screen.getByRole("heading");
        expect(countElement).toHaveTextContent('0');
        
     })

     test("renders a count of 1  after clicking increment btn",async()=>{
        userEvent.setup();
        render(<Counter/>)
        const btnElement=screen.getByRole("button",{name:"increment"})
        await userEvent.click(btnElement);
        const countElement=screen.getByRole("heading");
        expect(countElement).toHaveTextContent('1');
        
     })
     test("renders a count of 2  after clicking increment btn 2 times",async()=>{
        userEvent.setup();
        render(<Counter/>)
        const btnElement=screen.getByRole("button",{name:"increment"})
        await userEvent.click(btnElement);
        await userEvent.click(btnElement);
        const countElement=screen.getByRole("heading");
        expect(countElement).toHaveTextContent('2');
        
     })
     test("renders a count of 3  after clicking increment btn 3 times",async()=>{
        userEvent.setup();
        render(<Counter/>)
        const btnElement=screen.getByRole("button",{name:"increment"})
        await userEvent.click(btnElement);
        await userEvent.click(btnElement);
        await userEvent.click(btnElement);
        const countElement=screen.getByRole("heading");
        expect(countElement).toHaveTextContent('3');
        
     })



     // for keyboard interaction
     test("renders the count of 10 after clicking the set btn",async()=>{
        userEvent.setup()
        render(<Counter/>)

       const amountInput=screen.getByRole("spinbutton") ;
      await userEvent.type(amountInput,"10");
      expect(amountInput).toHaveValue(10);
      const setBtn=screen.getByRole("button",{name:"set"})
      await userEvent.click(setBtn);
      const countElement=screen.getByRole("heading");
      expect(countElement).toHaveTextContent("10")


     })
     // handling by using tab btn of keyboard
     test("elements are focused in right orders",async()=>{
        userEvent.setup()
        render(<Counter/>)

       const amountInput=screen.getByRole("spinbutton") ;
     
      const setBtn=screen.getByRole("button",{name:"set"});
      const incrementBtn=screen.getByRole("button",{name:"increment"});
    await  userEvent.tab()
      expect(incrementBtn).toHaveFocus();
    await  userEvent.tab()
      expect(amountInput).toHaveFocus();
     await userEvent.tab()
      expect(setBtn).toHaveFocus();


 


     })
})














