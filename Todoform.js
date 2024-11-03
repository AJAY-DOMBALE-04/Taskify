
import React, { useState } from 'react';

function Todoform({addTodo}){
    const [value,setValue]= useState("");
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(value){
            addTodo(value);
            setValue("");
        }
    }
    return(
        <form onSubmit={handleSubmit} class="Todoform">
            <input 
            type="text"
            value={value}
            onChange={(e)=> setValue(e.target.value)}
            className="todo-input"
            placeholder='what is the task tody ?'/>
            <button type='submit' className='todo-btn'> Add Task</button>


        </form>

    );
}

export default Todoform;

