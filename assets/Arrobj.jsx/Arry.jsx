import { useState } from "react"

function Arry(){

            let [name,setName]=useState("")
            let [c,setC]=useState(0)

                    let [arry,setArray]=useState({
                        name:"Anam",
                        city:"Bhopal"
                    })
    return (
        <>
            <h1>My name is {c.name}  </h1>
        </>
    )
    
}

export default Arry