import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root';
import Home from './pages/Home/Home';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import Rooms from './pages/Rooms/Rooms';
import RoomDetails from './pages/Rooms/RoomDetails';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/rooms",
        element:<Rooms></Rooms>,
        loader:()=>fetch(`${import.meta.env.VITE_API_URL}/room`),
      },
    {
      path:"/room/:id",
      element:<RoomDetails></RoomDetails>,
      loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`),
    }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <FirebaseProvider>
  <RouterProvider router={router} />
  </FirebaseProvider>
  </React.StrictMode>,
)
