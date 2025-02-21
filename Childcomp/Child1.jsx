import Child2 from "./Child2"
const Child1 =  (props)=>{
    let {name,age}=props
    return(
        <>
            <h1>my name is {name}</h1>
            <h1>my age is {name}</h1>
            <Child2/>
        </>
    )
}

export default Child1