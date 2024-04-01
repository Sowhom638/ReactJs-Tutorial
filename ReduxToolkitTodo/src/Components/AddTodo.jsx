import React, { useState } from 'react';
import {useDispatch} from 'react-redux';
import {addTodo} from '../Features/Todos/TodoSlice';

const AddTodo = () => {
    const [Todo, setTodo] = useState('');
    const dispatch = useDispatch();
    const addTodHandler = (e) => {
        e.preventDefault();
       if(Todo.replace(/\s+/g,'') !== '') 
        dispatch(addTodo(Todo));
       console.log(Todo);
        setTodo('');
    };
  return (
    <>
      <form onSubmit={addTodHandler} className='flex gap-5 m-4'>
        <input value={Todo} className='border-2 border-green-300' onChange={(e) => setTodo(e.target.value) } type="text"/>
        <button className='px-2 bg-blue-300 rounded' type="submit">Add Todo</button>
        
      </form>
    </>
  )
}

export default AddTodo
