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
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>,
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
