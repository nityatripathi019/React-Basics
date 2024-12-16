import {useState} from "react";

export default function Counter(){
    
    let [count,setCount] = useState(0);
    
   function inCount(){
    setCount(count+1)
   }
    return(
      
        <div>
            <h1>No of clicks {count}</h1>
            <button onClick={inCount}>Click me</button>
        </div>
    )
}

// let count = 0;
    // function inCount(){
    //     count +=1;
    //     console.log(count);
    // }
    // let [stateVariable,setSetVariable] = useState(0);