import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import Todo from './Todo';

function TodoList({header}) {
   const [todos, setToDos] = useState([
       
]);
   const [wantForm, setWantForm] = useState(false)

   const addTodo = todo => {
        if(!todo.degree || /^\s*$/.test(todo.degree)){
           return;
       }
       else{
       const newTodos = [todo, ...todos]
       setToDos(newTodos)
       console.log(...todos);
       setWantForm(!wantForm);
       }
   }
   const updateTodo = (todoID, newValue) => {
       /*if(!newValue.test || /^\s*$/.test(newValue.text)){
           return;
       }
       */
       
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
       <div className='flex flex-col py-4'>
           <h1>{header}</h1>
           <span className='w-full p-0.5 bg-black'></span>
           {wantForm &&<ToDoForm header={header} onSubmit={addTodo}/>}
           <Todo 
            todos={todos}
            updateTodo = {updateTodo}
            removeTodo = {removeTodo}
           />
           <div>
           <button className='bg-gray-400 my-4 p-2 rounded-md' onClick={formToggle}>Add item</button>
           </div>
       </div>
   )
}

export default TodoList