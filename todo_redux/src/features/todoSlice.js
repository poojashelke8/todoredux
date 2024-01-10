import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos :[ {id:"1",text:"started with todo"}]
}

const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload.text)
        },
        removeTodo:(state,action)=>{
        
        }

    }
})

export const {addTodo,removeTodo} = todoSlice.actions

export default todoSlice.reducer