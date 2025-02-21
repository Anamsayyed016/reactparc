import Child3 from "./Child3"
const Child2 =  ()=>{
    let {name,age}=props
    return(
        <>
            <h1>my name is {name}</h1>
            <h1>my age is {name}</h1>
            <Child3/>
        </>
    )
}
export default Child2