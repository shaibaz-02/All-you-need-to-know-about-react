
import { useState } from "react";
export default function Counter(){
    const[num,setNum]=useState(1);
    function increaseIt(){
        setNum(num=>num+1);
    }
    function addThree(){
        setNum(num=>num+3);
    }
    const setToTen=()=> setNum(10);
    return(
        <div>
            <h1>the num val is:{num}</h1>
            <button onClick={increaseIt}>counter</button>
            <button onClick={addThree}>+3</button>
            <button onClick={setToTen}>10</button>
        </div>
    );
}