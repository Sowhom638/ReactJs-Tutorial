import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../Features/Todos/TodoSlice'
const store = configureStore({
    reducer: todoReducer
});
export default store;