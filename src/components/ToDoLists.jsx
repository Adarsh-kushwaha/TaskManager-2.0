import React,{useContext} from 'react'
import { GlobalContext } from '../context/ToDoContext'
import List from './List'


const ToDoLists = () => {
    const {tasks} = useContext(GlobalContext)
    return (
        <div>
            {tasks.map((task)=><List key={task.id} task={task}/>)}
            
        </div>
    )
}

export default ToDoLists
