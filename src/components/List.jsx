import React, { useContext } from 'react';
import { GlobalContext } from '../context/ToDoContext';
import "./List.css"

const List = ({task}) => {
    const { deleteTask } = useContext(GlobalContext)

    const delHandler = () => {
        deleteTask(task.id)
    }
    return (
        <>
            <div className='list'>
                <div className='task'>
                    <h3>{task.title}</h3>
                    <p>{task.desc}</p>
                </div>
                <div className='del'>
                    <button onClick={delHandler}>Delete</button>
                </div>
            </div>
        </>
    )
}

export default List
