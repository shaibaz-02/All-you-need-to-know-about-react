export default function Clickerprac({message,buttonText}){
    function handleClick(){
        console.log(message)
        alert(message)
    }
    return (
        <div>
            <button onClick={handleClick}>{buttonText}</button>
        </div>
    )
}