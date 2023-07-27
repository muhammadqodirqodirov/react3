import React from "react";
import { Card } from "./components/card";
import { Form } from "./components/from";


function App() {

const [data,setData]=React.useState([]);
  return (
    <div>
      <Form setData={setData}/>
      {data.map((el)=>{
       <Card key={el.id} setData={setData} {...el}/>
      })}
    </div>
  )
}

export default App
