import { render ,screen } from "@testing-library/react"
import CounterTwo from "./CounterTwo"
import userEvent from "@testing-library/user-event"

describe("counter-two",()=>{
    test("renders correctly",()=>{
        render(<CounterTwo count={0}/>)
    const textElement=screen.getByText("Counter Two");
    expect(textElement).toBeInTheDocument();
    })

    test("handlers are called",async()=>{
        userEvent.setup()
        const handleIncrementMock = jest.fn();
        const handleDecrementMock = jest.fn();
        render(<CounterTwo count={0}
             handleIncrement={handleIncrementMock}
              handleDecrement={handleDecrementMock}/>)
            const incrementBtn = screen.getByRole("button",{name:"Increment"});
            const decrementBtn = screen.getByRole("button",{name:"Decrement"});
          await  userEvent.click(incrementBtn);
         await   userEvent.click(decrementBtn);
         expect(handleIncrementMock).toHaveBeenCalledTimes(1);
         expect(handleDecrementMock).toHaveBeenCalledTimes(1);


           

    })
}
)
