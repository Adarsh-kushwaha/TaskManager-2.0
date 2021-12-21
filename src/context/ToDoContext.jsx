//createContext

import React, { createContext, useReducer } from "react";
import {ToDoReducer} from "./ToDoReducer"

const initialState = {
    addToDo: [
        { title: "Complete the react project", desc: "complete by tomorrow", id: "1" },
        { title: "Video project", desc: "complete by today", id: "2" }
    ]
}

export const GlobalContext = createContext(initialState);

//provider

export const GlobalProvider = ({ children }) => {

    const [state, dispatch] = useReducer(ToDoReducer, initialState)

    const addTask = (newTask)=> {
        dispatch({
            type:"ADD",
            payload:newTask
        })
    }

    const deleteTask = (id)=>{
        dispatch({
            type:"DELETE",
            payload:id
        })
    }

    return (
        <>
            <GlobalContext.Provider value={{tasks:state.addToDo, deleteTask:deleteTask, addTask:addTask}}>{children}</GlobalContext.Provider>
        </>
    )
}