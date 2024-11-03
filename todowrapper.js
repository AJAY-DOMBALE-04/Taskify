// import React, { useState } from 'react';
// import Todoform from './Todoform';
// import {v4 as uuidv4} from "uuid";
// import EditTodoForm from './EditTodoForm';
// import Todo from './Todo';

// function Todowrapper(){
//     const [todos,setTodos]=useState([]);

//      //add todo
//     const addTodo =(todo)=>{
//         setTodos([
//             ...todos,{id:uuidv4(),task:todo,completed:false,isEditing:false}
//         ]);
//     }

//     //delete todo
//     const deleteTodo=(id)=> setTodos(todos.filter((todo)=> todo.id !== id));

//    //toggle complete todo 

//    const togglecomplete=(id)=>{
//     setTodos(todos.map((todo)=> todo.id === id ? {...todo, completed: !todo.completed} : todo))}

//    //edit todo
//    const editTodo=(id)=>
//     setTodos(todos.map((todo)=> todo.id === id ? {...todo, isEditing: !todo.isEditing}: todo))

//    // edit task todo
//    const editTask =(task,id)=>{
//     setTodos(todos.map((todo)=> todo.id === id ? {...todo,task,isEditing:!todo.isEditing} : todo))
//    }
   

//     console.log("todo",todos);
//     return(
//         <div class="todo">
//             <h1> Web Development tasks !</h1>
//             <Todoform addTodo={addTodo}/>

//             {todos.map((todo)=> todo.isEditing? (
//              <EditTodoForm editTodo={editTask} task={todo}/>
             
//             ):
            
//             (
//                <Todo
               
//                key={todo.id}
//                task={todo}
//                deleteTodo={deleteTodo}
//                editTodo={editTodo}
//                togglecomplete={togglecomplete}
               
//                />
//             )
            
        
//         )}
//         </div>

//     );
// }

// export default Todowrapper





import React, { useState } from 'react';
import TodoForm from './Todoform';
import {v4 as uuidv4} from "uuid";
import EditTodoForm from './EditTodoForm';
import Todo from './Todo'; 


function TodoWrapper() {
    const [todos, setTodos] = useState([]);

    // Add Todo
    const addTodo = (todo) => {
        setTodos([
            ...todos, {id:uuidv4(), task:todo, completed:false, isEditing:false},
        ]);
    }

    // Delete Todo
    const deleteTodo = (id) => setTodos(todos.filter((todo) => todo.id !== id));

    // Toggle Complete Todo
    const togglecomplete = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? { ...todo, completed:!todo.completed} : todo)
        )
    }

    // Edit Todo
    const editTodo = (id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo)
        )
    }

    // Edit Task Todo
    const editTask = (task, id) => {
        setTodos(
            todos.map((todo)=> todo.id === id ? {...todo, task, isEditing:!todo.isEditing} : todo)
        )
    }

    // console.log("todos", todos)
  return (
    <div className="TodoWrapper">
        <h1>Web Development Tasks!</h1>
        <TodoForm addTodo={addTodo}/>

        {/* Display Todos */}
        {todos.map((todo)=> todo.isEditing ? (
            <EditTodoForm editTodo={editTask} task={todo}/>
        ) : (
            <Todo 
            key={todo.id}
            task={todo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            togglecomplete={togglecomplete}
            />
        )
    )}
    </div>
  )
}

export default TodoWrapper