import React, {useState} from 'react'
import ToDoForm from './ToDoForm'
import TodoList from './TodoList'
import { RiCloseCircleLine } from 'react-icons/ri'
import { TiEdit }  from 'react-icons/ti'

function Todo({todos}) {
    const [edit,setEdit] = useState({
        id:null,
        value: ''
    })

    return todos.map((todo,index) =>(
        <div>
            <div>
                {todo.text}
                <RiCloseCircleLine />
                <TiEdit />
            </div>
        </div>

    ))
}

export default Todo