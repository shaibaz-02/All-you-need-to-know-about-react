function handleClick(){
    alert("unauthorized person is clicking the button!!shittt")
}
function handleSubmitForm(evt){
evt.preventDefault();
    console.log("submitted the form!");
}
export default function Clicker() {
  return (
    <div>
        <form onSubmit={handleSubmitForm}>
            <button>submit me</button>
        </form>
      {/* <h1>click the button</h1>
      <button onClick={handleClick}>click me</button> */}
    </div>
  );
}
