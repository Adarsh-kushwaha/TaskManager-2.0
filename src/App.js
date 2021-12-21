import React from 'react'
import AddToDo from "./components/AddToDo"
import Header from './components/Header'
import ToDoLists from './components/ToDoLists'

const App = () => {
  return (
    <div>
      <Header/>
      <ToDoLists/>
      <AddToDo/>
    </div>
  )
}

export default App
