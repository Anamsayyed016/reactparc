import { useState } from "react"

function Arry(){
    let [c,SetC]=useState(0)
            let ob={

                name : "Anam",
                age:27,
                city:"Bhopal"
            }
                let ar=["Ali", "Indore",123]

                function Inc(){

                }
            
    return (
        <>
                <h1>My name is {ob.name}</h1>
                <h1>My age is {ob.age}</h1>
                <h1>My city is {ob.city}</h1>

                <h2>My name is {ar[0]}</h2>
                <h2>My city is {ar[1]}</h2>
                <h2>My num is {ar[2]}</h2>

                <button onClick={Dec}>-</button>
                <button onClick={Inc}>+</button>
        </>
    )
    
}

export default Arry