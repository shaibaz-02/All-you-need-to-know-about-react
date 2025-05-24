export default function Clickerr(){
    function handleClick(){
        console.log("someone clicked me")
        alert('unauthorized is touching me!!')
    }
    function handleMouseOver(){
        console.log("somone hovered me")
    }
    return (
        <div>
            <h1>this is clicker</h1>
            <button onMouseOver={handleMouseOver}>click me 2</button>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}