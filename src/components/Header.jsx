import React, { useContext } from 'react';
import { GlobalContext } from '../context/ToDoContext';
import "./Header.css"

const Header = () => {
    const currDate = new Date();
    const { tasks } = useContext(GlobalContext)
    return (

        <>
            <div className='header'>
                <h2>To Do List</h2>
                <div className='total'>
                    <p>Total Task: {tasks.length}</p>
                    <p>Date: {`${currDate.getDate()}/${currDate.getMonth()}/${currDate.getFullYear()}`}</p>
                </div>

            </div>
        </>
    )
}

export default Header
