import { useState } from "react"
import ShoppingListForm from "./ShopppingListForm"
export default function ShoppingList1(){
    const[items,setItems]=useState([{id:1,product:"bananas",quantity:8},
        {id:2,product:"eggs",quantity:12}])
    const addItem=(item)=>{
        setItems((currItems)=>{
            return [...currItems,{...item,id:9}];
        })
    }
    return(
        <div>
            <h1>the products are:</h1>
            <ul>
                {items.map((item)=> {
                    return <li key={item.id}
                    >{item.product}-{item.quantity}</li>
                })}
            </ul>
            <ShoppingListForm addItem={addItem}/>
        </div>
    )
}