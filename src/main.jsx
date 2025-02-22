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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
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
      }
    ]
    
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
