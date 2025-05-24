import { useState } from "react";
export default function ScoreKeeper(){
    console.log("re-rendered!!")
    const[num,setNum]=useState(0);
    const[num1,setNum1]=useState(0);
    function increPlayer1(){
        setNum((num)=>num+1);
    }
    function increPlayer2(){
        setNum1((num1)=>num1+1);
    }
    return(
        <div>
            <h1>player1</h1>
            <h1>player2</h1>
            <button onClick={increPlayer1}>+1player1</button>
            <button onClick={increPlayer2}>+1player1</button>
        </div>
    );
}