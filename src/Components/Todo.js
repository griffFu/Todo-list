import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit }  from 'react-icons/ti'

function Todo({todos, updateTodo, removeTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id,value);
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }


    return todos.map((todo,index) =>(
        <div>
            <div className='flex justify-between'>
                <div>
                    {todo.text}
                </div>
                <div>
                    <RiCloseCircleLine 
                        onClick={() => removeTodo(todo.id)}
                    />
                    <TiEdit 
                        onClick={() => setEdit({id: todo.id, value: todo.text})}
                    />
                </div>
            </div>
        </div>

    ))
}

export default Todo