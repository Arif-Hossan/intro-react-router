import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import About from './components/About/About'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import First from './components/First/First.jsx'
import Friends from './components/Friends/Friends.jsx'

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
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
    children: ([
      {
        path:'/',
        element:<First></First>
      },
      {
        path:'/friends',
        element:<Friends></Friends>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: 'about',
        element: <About></About>
      },
      {
        path: '/contact',
        element: <Contact></Contact>
      }
    ])
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
