import React, {useState} from 'react'

function ToDoForm(props) {
   const[input, setInput] = useState('');
   const handleChange = (e) => {
     setInput(e.target.value)
   }
  
   const handleSubmit = (e) => {
     e.preventDefault();

     props.onSubmit({
       id: Math.floor(Math.random() * 1000),
       text: input
     });

     setInput('');
   };


   return (
     <div>
         <form onSubmit={handleSubmit}>
           <input 
                type="text" 
                placeholder='Add a todo' 
                value={input} 
                name ="text"
                onChange={handleChange}
                
            />  
            <button>Add todo</button>
         </form>
     </div>
   )
}

export default ToDoForm