import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Compontent/Home/Home';
import About from './Compontent/About/About';
import Contant from './Compontent/Contact/Contant';
import Users from './Compontent/Users/Users';
import UserDetails from './Compontent/UserDetails/UserDetails';
import Posts from './Compontent/Posts/Posts';
import PostDetails from './Compontent/PostDetails/PostDetails';
import ErrorPage from './Compontent/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children : [
      {
        path: "/about",
        element:<About></About>
      },
      {
        path:"/contact",
        element:<Contant></Contant>
      },
      {
        path: '/users',
        loader:()=> fetch('https://jsonplaceholder.typicode.com/users'), //data Fetch in Json 
        element: <Users></Users>
      },
       {
        path:'/user/:params', //this is dynamic routing path (:) 
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.params}`),
        element : <UserDetails></UserDetails>
      },
       {
        path: '/posts',
        loader: ()=> fetch(`https://jsonplaceholder.typicode.com/posts/`),
        element: <Posts></Posts>
       },
       {
        path:'/post/:postId',
        loader:({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetails></PostDetails>
       }
    ]
    
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
