import React, { useEffect, useState } from 'react'
import {useLoaderData} from 'react-router-dom'
const GitHub = () => {
  const data = useLoaderData();
  // const [data, setdata] = useState([])
  //   useEffect(() => {
  //     fetch('https://api.github.com/users/Sowhom638')
  //     .then(response =>  response.json()).then(
  //           DATA => setdata(DATA)
  //     )
  //   }, [])
    
  return (
    <>
     <div className='text-center bg-gray-700 text-white m-4 p-3 text-3xl rounded'> GitHub Followers: {data.followers}
    <div className='border-5 border-white overflow-hidden p-2'><img src={data.avatar_url} alt='GitHub Profile Image' width={400} height={400} className='rounded-3xl'/></div> 
     </div>
    </>
  )
}

export default GitHub

export const githubInfoLoader = async () => {
   const response = await fetch('https://api.github.com/users/Sowhom638')
   
   return response.json();  
}
