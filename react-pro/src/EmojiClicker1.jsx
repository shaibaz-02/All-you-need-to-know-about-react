import { useState } from "react"
import { v4 as uuid } from "uuid"
export default function EmojiClicker1(){
    const[emojis,setEmojis]=useState([{id:uuid(),emoji:"😪"}])
    function addEmoji(){
        const neww=[...emojis,{id:uuid(),emoji:"😕"}]
        setEmojis(neww)
    }
    function deleteEmoji(key){
        setEmojis((oldEmojis)=>{
            return oldEmojis.filter((e)=> e.id!=key)
        })
    }
    function makeHeart(){
        setEmojis((oldEmojis) => {
           return oldEmojis.map((e) =>{
                return {...oldEmojis,emoji:"🫀"}
            })
        })
    }
    return(
        <div>
            {emojis.map((e) => (
                <span key={e.id}
                onClick={()=> deleteEmoji(e.id)}
                >{e.emoji} </span>
            ))}
            <button onClick={addEmoji}>add emoji</button>
            <button onClick={makeHeart}>make hearts</button>
        </div>
    )
}