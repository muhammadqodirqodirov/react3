import React from "react";
import { Form } from "../from";
export const Card = ({name,age,setData,id}) => {
    const [input,setInput]=React.useState(false)
    const deleteItem = () => {
        setData((p) => p.filter((item)=> item.id !== id))
    };
    return <div>
        {input ? (<Form setInput={setInput} setData={setData} id={id} dValue={{name,age}}/>):(
        <>
        <h1>{name}</h1>
        <p>{age}</p>
        <button onClick={deleteItem} type="submit">Delete</button>
        <button onClick={()=> setInput(true)} type="submit">Edit</button>
         </>)}
    </div>
} 