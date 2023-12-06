import React from 'react'
import { useParams } from 'react-router-dom'

const User = () => {
    const {idOfUser} = useParams()
  return (
    <>
<div className='bg-blue-700 text-white rounded-2xl p-4 flex justify-center'>Users ID: {idOfUser}</div>
    </>
  )
}

export default User
