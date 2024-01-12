import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todoSlice'
import "../components/addTodo.css"

const AddTodo = () => {

  const [input,setInput] = useState('')
  const dispatch = useDispatch()

  const addtodoHandler = (e) =>{
    e.preventDefault();
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <form onSubmit={addtodoHandler} className='addtodo'>
      <input type='text'
      placeholder='enter task'
      value={input}
      onChange={(e)=>setInput(e.target.value)}
      className='addinput'
      ></input>
      <button className='addbtn'>Add Todo</button>
    </form>
  )
}

export default AddTodo