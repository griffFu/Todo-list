import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo';

function TodoList() {
   const [todos, setToDos] = useState([]);
   const [wantForm, setWantForm] = useState(false)

   const addTodo = todo => {
       if(!todo.text || /^\s*$/.test(todo.text)){
           return;
       }

       const newTodos = [todo, ...todos]

       setToDos(newTodos)
       console.log(...todos);
       setWantForm(!wantForm);
   }
   const updateTodo = (todoID, newValue) => {
       if(!newValue.test || /^\s*$/.test(newValue.text)){
           return;
       }
       
       setToDos(prev => prev.map(item => (item.id === todoID ? newValue : item)));
   }

   const formToggle = () =>{
       setWantForm(!wantForm)
   }

   const removeTodo = id => {
       const removedArr = [...todos].filter(todo=> todo.id !==id);

       setToDos(removedArr)
   }

   return (
       <div>
           <h1>Whats the plan for today?</h1>
           <button onClick={formToggle}>Add item</button>
           {wantForm &&<ToDoForm onSubmit={addTodo}/>}
           <Todo 
            todos={todos}
            updateTodo = {updateTodo}
            removeTodo = {removeTodo}
           />
       </div>
   )
}

export default TodoList