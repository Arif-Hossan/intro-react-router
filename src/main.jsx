import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<p>This is the home</p>
//   },
//   {
//     path:'/about',
//     element:<About></About>
//   }
// ])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
