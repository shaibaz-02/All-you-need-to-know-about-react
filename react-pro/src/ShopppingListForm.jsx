import { useState } from "react";

export default function ShoppingListForm({addItem}){
    const[formData,setFormData]=useState({product : "", quantity : 0});
    const handleChange=(e)=>{
        setFormData((currData) => {
            return{
                ...currData,
                [e.target.name]:e.target.value
            }
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        console.log("submitted")
        addItem(formData)
    }
    return(
        <form onSubmit={handleSubmit}action="
        ">
            <h1>product name is:{formData.product} and quantity is {formData.quantity}</h1>
            <label htmlFor="product">Enter product name:</label>
            <input type="text"
             name="product" 
             id="product"
             placeholder="product name" 
             onChange={handleChange}
            />

            <label htmlFor="quantity">Enter the quantity:</label>
            <input type="number"
             name="quantity" 
             id="quantity"
             placeholder="0" 
             onChange={handleChange}
            /> 
            <button>add Item</button>
        </form>
    );

}