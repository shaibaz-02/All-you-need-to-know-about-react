import { useState } from "react"

export default function SignupForm(){
    const[firstName,setfirstName]=useState("");
    const[lastName,setlastName]=useState("");
    const updatefirstname=(e)=>{
        setfirstName(e.target.value)
    }
    const updatelastname=(e)=>{
        setlastName(e.target.value)
    }
    const handleClick = (e)=>{
        console.log(firstName ,lastName);
    }
    return(
        <div>
            <label htmlFor="firstname">Enter a first Name:</label>
            <input type="text" placeholder="username" value={firstName}
            id="firstname"
            onChange={updatefirstname} />

            <label htmlFor="lastname">Enter a Last Name:</label>
            <input type="text" placeholder="username" value={lastName}
            id="lastname"
            onChange={updatelastname} />
            <button onClick={handleClick}>submit</button>
        </div>
    )
}