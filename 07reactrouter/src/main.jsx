import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import GitHub, { githubInfoLoader } from './Components/GitHub/GitHub.jsx'
//Creating a router
/* 1st Process */
// const router = createBrowserRouter([{
//   path:'/',
//   element: <App/>,
//   children: [
//  {path: 'Home',
//   element: <Home/>}, 
//   {
//     path: '/',
//     element: <About/>
// },
// {
//   path: 'Contact',
//   element: <Contact/>
// }]
// }])

/* 2nd Process */
const router = createBrowserRouter(
  createRoutesFromElements(
    
      <Route path='/' element={<App />}>
      <Route path='' element={<About />}/>
      <Route path='Home' element={<Home />}/>
      <Route path='Contact' element={<Contact />}/>
      <Route 
      loader={githubInfoLoader}
      path='GitHub' element={<GitHub/>}/>
      <Route path='User/:idOfUser' element={<User />}/>
      </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
