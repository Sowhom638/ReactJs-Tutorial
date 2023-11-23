import React from 'react'
import'../src/index.css'
const Cards = ({userName, Age, Address="Earth"}) => {
  return (
    <>
      <div className='bg-blue-700 text-yellow-500 flex justify-center p-4'>
        <h3>Username = {userName}</h3>
        <h3>Age = {Age}</h3>
        <h3>Address = {Address}</h3>
        </div>
    </>
  )
}

export default Cards
