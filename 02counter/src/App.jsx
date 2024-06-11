import {useState} from "react";

import './App.css'

function App() {
    /*
     * useState() is a hook that allows you to have state variables in functional components.
     * useState() is responsible for to propagate the changes in UI
     * we can provide any default value for variable
     * useState() return an array in which at 0th index it is containing counter in our case
     * and at 1st index it contains a function which is responsible to update the variable at 0th index
     */
    let [counter, setCounter] = useState(1) //in this case initial State of our counter is 1
    // let counter = 0;

    // setCounter(counter +1)

    const addValue = () => {
        counter = counter + 1;
        setCounter(counter)
    }

    const subtractValue = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        } else {
            setCounter(0)
        }
    }
    return (
        <>
            <h1>Learning React</h1>
            <h2>Counter value: {counter}</h2>
            <button onClick={addValue}>Add Value</button>
            <button onClick={subtractValue}>Subtract Value</button>
        </>
    )
}

export default App
