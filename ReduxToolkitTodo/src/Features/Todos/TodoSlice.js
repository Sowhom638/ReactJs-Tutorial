import { createSlice, nanoid } from '@reduxjs/toolkit';


const initialState = {
    todos: [{
        id: nanoid(),
        text: ''
    }]
}

// 'todoSlice is a slice. Slice is a bunch of reducers
export const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const newTodo = {
                id: nanoid(),
                text: action.payload
            };
            state.todos.push(newTodo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;