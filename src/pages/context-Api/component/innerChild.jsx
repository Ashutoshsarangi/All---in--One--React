
import { useContext } from "react";
import { ReactContext } from "../contextApi";

const InnerChild = () =>{
    const funs = useContext(ReactContext);
    console.log(funs)
    return (
        <div>
            <h2> Opertations using Context Apis:-</h2>
            <p> Addition :- {funs.addition(5, 6)}</p>
            <p> substraction :- {funs.substraction(5, 6)}</p>
            <p> Multiplication :- {funs.multiplication(5, 6)}</p>
        </div>
    );
}

export default InnerChild;