import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo';

function TodoList() {
   const [todos, setToDos] = useState([]);

   const addTodo = todo => {
       if(!todo.text || /^\s*$/.test(todo.text)){
           return
       }

       const newTodos = [todo, ...todos]

       setToDos(newTodos)
       console.log(...todos);
   }

   return (
       <div>
           <h1>Whats the plan for today?</h1>
           <ToDoForm onSubmit={addTodo}/>
           <Todo todos={todos}></Todo>
       </div>
   )
}

export default TodoList