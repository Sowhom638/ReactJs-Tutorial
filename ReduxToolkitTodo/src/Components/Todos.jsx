import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todos/TodoSlice';
const Todos = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])
 
    return (
        <>
            {todos.map((todo) => (
                <li key={todo.id} className='flex gap-5 my-2'>
                    <div className='px-2 mx-4 border-2 border-blue-300 rounded-xl'>{todo.text}</div>
                    <button onClick={() => dispatch(removeTodo(todo.id))
                    } className='px-2 bg-red-300 rounded'>X</button>
                </li>
            ))}
        </>
    )
            }
export default Todos;
