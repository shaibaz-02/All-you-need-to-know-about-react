import {useState} from "react"

export default function Counter1(){
    const[count,setCount]=useState(0);
    function handleClick(){
        setCount(count+1);
    }

    return (
        <div>
            <h1>hello, the count is:{count}</h1>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
    )
}