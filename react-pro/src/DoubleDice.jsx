export default function DoubleDice(){
    const num1=Math.floor(Math.random()*3)+1;
    const num2=Math.floor(Math.random()*3)+1;
    const styles={color:num1==num2?"green":"red"}
    return(
        <div className="DoubleDice" style={styles}>
            <h1>Double Dice</h1>
            {num1==num2?<h1>You winn!!</h1>:null}
            <h1>num1: {num1}</h1>
            <h1>num2: {num2}</h1>
        </div>
    );
}