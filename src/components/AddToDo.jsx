import React, { useState, useContext } from 'react';
import { GlobalContext } from '../context/ToDoContext';
import "./AddToDo.css";


const AddToDo = () => {

    const {addTask} = useContext(GlobalContext); 

    const [title, setTitle] = useState("");
    const [desc, setDesc ] = useState("");

    const titleHandler=(e)=>{
        setTitle(e.target.value)
    };
    const descHandler = (e)=>{
        setDesc(e.target.value)
    };
    const onSubmitHandler=(e)=>{
        e.preventDefault()
        const taskData ={
            id:Math.random().toString(),
            title,
            desc
        }

     addTask(taskData)

        setTitle("");
        setDesc("")

        console.log(taskData)
    };

        return (
            <>
            <h2 style={{color:"white", margin:"14px"}}>Add To Do List...</h2>
                <form className='form' onSubmit={onSubmitHandler}>
                    <div className='formInput' >
                        <label htmlFor="">username</label>
                        <input type="text" placeholder='Title' value={title} onChange={titleHandler} required/>
                    </div>
                    <div className='formInput'>
                        <label htmlFor="">Description</label>
                        <input type="text" placeholder='Description' value={desc} onChange={descHandler} required/>
                    </div>
                    <div className='formInput btn'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
            </>
        )

    }

    export default AddToDo;
