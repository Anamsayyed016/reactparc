import { useState } from "react"
import { HiH1 } from "react-icons/hi2"
function Bg(){
    let [bgcolor,setBgcolor] = useState("pink")
    let [tg,setTg] = useState(true)

    return(
        <>
           <div style={{height:"100vh", backgroundColor:bgcolor}}>
            <button onClick={()=>setBgcolor('red')}>Red</button>
            <button onClick={()=>setBgcolor('green')}>Green</button>

            {tg ? <h1>Toggle</h1> : "" }

                <button onClick={()=>setTg(false)}>Hide</button>
                <button onClick={()=>setTg(true)}>Show</button>
                <button onClick={()=>setTg(!tg)}>Toggle</button>

           </div>
        </>
    )
}

export default Bg