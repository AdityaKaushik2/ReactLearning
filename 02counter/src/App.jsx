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
    const [counter, setCounter] = useState(1) //in this case initial State of our counter is 1
    // let counter = 0;
/*
 * Inside setCounter() we get a callBack Function 
 */
    // setCounter(counter +1)

    const addValue = () => {
        if(counter >= 20) {
            setCounter(20)
        } else{
                        /*
            setCounter(counter+1)
            setCounter(counter+1)
            setCounter(counter+1)
            setCounter(counter+1)

             * Interview Question : What will be the output of this code?
             * Answer: it will increment the counter by 1 only once because useState() does not update the state immediately it sends the updates in batches.
             * so here we are updating the counter 4 times but it will only increment the counter by 1. so there will be batch of all of these updates and it will check that we are doing the same updates so it will only update the counter by 1.
             * To see the counter increased by 4 we can use the callBack function inside setCounter() which will give us the latest value of the counter. 
             *setCounter((prevCounter)=> prevCounter+1);
             *setounter((prevCounter)=> prevCounter+1);
             *setCounter((prevCounter)=> prevCounter+1);
             *setCounter((prevCounter)=> prevCounter+1);
             * */
             setCounter(counter+1)

        }
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
