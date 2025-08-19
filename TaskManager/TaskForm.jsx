import React, { useState } from 'react'

export default function TaskForm({addtask}) {
    const[value,setValue]=useState("");

    const handler=(e)=>{
        event.preventDefault();
        if (value.trim()) {
              console.log("Form Submitted",value);
              addtask(value)
              setValue("")
        } 
    }


  return (
    <>
    <form onSubmit={handler}>
        <input 
        type="text"
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder='Enter you task'
         /> <br /><br />
         <button type='submit'>ADD</button><br /><br />
    </form>
    </>
  )
}
