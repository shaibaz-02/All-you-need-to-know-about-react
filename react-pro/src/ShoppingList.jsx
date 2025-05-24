export default function ShoppingList({items}){
    console.log(items)
    return(
    <ul>
        {items.map((i)=>(
            <li>{i.item}-{i.quantity}</li>
        ))}
        </ul>
    )
}