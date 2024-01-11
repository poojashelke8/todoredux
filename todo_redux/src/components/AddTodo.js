import React, { useState } from 'react'
import {useDispatch} from "react-redux"
import { addTodo } from '../features/todoSlice'

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
      ></input>
      <button>Add Todo</button>
    </form>
  )
}

export default AddTodo