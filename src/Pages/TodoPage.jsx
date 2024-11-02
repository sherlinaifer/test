import { useState } from "react"

const TodoPage=()=>{
const [counter,setCounter]=useState({counterOne:0,counterTwo:0})
const handleIncrementOne=()=>{
    setCounter({...counter,counterOne:counter.counterOne+1})
}
const handleDecrementOne=()=>{
    setCounter({...counter,counterOne:counter.counterOne-1})
}
const handleIncrementTwo=()=>{
    setCounter({...counter,counterTwo:counter.counterTwo+1})
}
const handleDecrementTwo=()=>{
    setCounter({...counter,counterTwo:counter.counterTwo-1})
}
    return (
    <div style={{display:"flex",flexDirection:"column",alignItems:"center",margin:"5%"}}>
        <div style={{fontSize:30}}><b>{counter.counterOne}</b></div>
        <div style={{display:"flex",gap:5,padding:10}}>
        <button onClick={handleIncrementOne}>IncrementOne</button>
        <button onClick={handleDecrementOne}>DecrementOne</button>
        </div>
        <div  style={{fontSize:30}}><b>{counter.counterTwo}</b></div>
        <div style={{display:"flex",gap:5,padding:10}}>
        <button onClick={handleIncrementTwo}>IncrementTwo</button>
        <button onClick={handleDecrementTwo}>DecrementTwo</button>
        </div>
    </div>
    )
}
export default TodoPage