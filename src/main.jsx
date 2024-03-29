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
// import Friend from './components/Friend/Friend.jsx'
import FriendDetails from './components/FriendDetails/FriendDetails.jsx'
import Posts from './components/Posts/Posts.jsx'
import PostDetails from './components/PostDetails/PostDetails.jsx'

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
        path:'friend/:friendId',
        element:<FriendDetails></FriendDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
      },
      {
        path:'/posts',
        element:<Posts></Posts>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'post/:postId',
        element:<PostDetails></PostDetails>,
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
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
