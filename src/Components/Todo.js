import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit }  from 'react-icons/ti'

function Todo({todos, updateTodo, removeTodo}) {
    const [edit,setEdit] = useState({
        id:null,
        degree: '',
        degreeDesc: '',
    })

    const submitUpdate = degree => {
        updateTodo(edit.id,degree);
        setEdit({
            id: null,
            degree: '',
            degreeDesc: '',
        });
    };

    if (edit.id) {
        return <ToDoForm edit={edit} onSubmit={submitUpdate} />;
    }


    return todos.map((todo,index) =>(
        <div>
            <div className='flex justify-between'>
                <div className='flex flex-col'>
                    <div key={index}>
                        {todo.degree}
                    </div>
                    <div>
                        {todo.degreeDesc}
                    </div>
                </div>
                <div>
                    <RiCloseCircleLine 
                        onClick={() => removeTodo(todo.id)}
                    />
                    <TiEdit 
                        onClick={() => setEdit({id: todo.id, degree: todo.degree, degreeDesc: todo.degreeDesc})}
                    />
                </div>
            </div>
        </div>

    ))
}

export default Todo