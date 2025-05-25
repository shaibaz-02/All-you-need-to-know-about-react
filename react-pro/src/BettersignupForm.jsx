import { useState } from "react";

export default function BettersignupForm(){
     const[formData,setFormData]=useState({firstName:"" ,lastName: ""});
        const updatename=(e)=>{
            const currfield=e.target.id;
            const currValue=e.target.value;
            setFormData({ ...formData, [currfield]: currValue });
        }
        const handleClick = ()=>{
            console.log(formData);
        }
        return(
            <div>
                <label htmlFor="lastName">Enter a first Name:</label>
                <input type="text" placeholder="username" value={formData.firstName}
                id="firstName"
                onChange={updatename} />
                <label htmlFor="lastName">Enter a Last Name:</label>
                <input type="text" placeholder="username" value={formData.lastName}
                id="lastName"
                onChange={updatename} />
                <button onClick={handleClick}>submit</button>
            </div>
        )
}

