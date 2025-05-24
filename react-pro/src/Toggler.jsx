import {useState} from "react";

export default function Toggler(){
    // let s=0;
    const[isToggle,setToggle]=useState(false)
    function handleClick(){
        setToggle(isToggle=>!isToggle)
    }

    return(
        <div>
            <h1>the emoji is:</h1>
            <button onClick={handleClick}>{isToggle?":)))))))))))" : ";)"}</button>
        </div>
    )
}