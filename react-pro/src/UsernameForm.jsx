import { useState } from "react";

export default function UsernameForm(){
    const[username,setUsername]=useState("")
    function updateUsername(evt){
        setUsername(evt.target.value)
    }
    return (
        <div>
            <input type="text" placeholder="username" value={username}
            onChange={updateUsername} />
            <button>submit</button>
        </div>
    );
}