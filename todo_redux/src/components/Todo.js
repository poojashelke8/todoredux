import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { removeTodo } from "../features/todoSlice"

const Todo = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  return (
    <>
      <div>Todo List</div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch(removeTodo(todo.id))}>X</button>
          </li>
        ))
        }
      </ul>
    </>

  )
}

export default Todo