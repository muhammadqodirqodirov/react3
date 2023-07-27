import React from "react";
import "./index.css"
export const Form = (setData,dValue,id,setInput) => {
    const [inputValue,setValue]=React.useState(dValue ? dValue : {name:"",age:""})
    const submit = (e) => {
        e.preventDefault();
        if(!id){
            setData((p)=>[...p,{...inputValue,id: Date.now()}]);
            setValue({
                name:"",
                age:"",
            })
            return
        }
        setData((p)=>p.map((item)=> item.id === id ?{...inputValue,id} : item))
        setInput(false)
    }
    const changeInput = (e) =>{
        setValue((p)=>({...p,[e.target.name]: e.target.value}));
    }
    return(
        <form onSubmit={submit}>
            <div className="input1" >
                <input onChange={changeInput} value={inputValue.name} type="text" placeholder="name" name="name"/>
            </div>
            <div className="input1">
                <input onChange={changeInput} value={inputValue.age} type="text" placeholder="age" name="age"/>
            </div>  
            <button type="submit">
                {id ? "Edit":"Send"}
            </button>
        </form>
    )
}