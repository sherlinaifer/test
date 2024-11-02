import { useState } from "react"
const GeneratePassword=()=>{
    const [list,setList]=useState([])
    const handlePassword=()=>{
        const string=["1","2","3","4","5","6","A","B","C","D","E","F","g","h","i","j","k"];
        let password=""
        for(let i=0;i<=10;i++){
            let randomNumber=parseInt(Math.random()*string.length)
            password+=string[randomNumber]
        }
        setList([...list,password])
    }
    return(
        <div>
        <button onClick={handlePassword}>Generate Password</button>
        {list.join(",")}
        </div>
    )
}
export default GeneratePassword
