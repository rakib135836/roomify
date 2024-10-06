import {
    createBrowserRouter,


} from "react-router-dom";

import Login from '../pages/Login/Login';
import Register from '../pages/Register/Register';
import ErrorPage from '../pages/ErrorPage/ErrorPage';
import Rooms from '../pages/Rooms/Rooms';
import RoomDetails from '../pages/Rooms/RoomDetails';
import MyBookings from '../pages/MyBookings/MyBookings';
import Update from '../pages/Update/Update';
import PrivateRoute from '../outsideComponents/PrivateRoute/PrivateRoute';
import Root from '../LayOut/Root';
import Home from '../pages/Home/Home';
import Dashboard from "../LayOut/DashBoard";
import AdminHome from "../pages/AdminHome";
import AddRoom from "../pages/AddRoom";
import AdminProfile from "../pages/AdminProfile";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            },
            {
                path: "/rooms",
                element: <Rooms></Rooms>,
                loader: () => fetch(`${import.meta.env.VITE_API_URL}/room`),
            },
            {
                path: "/room/:id",
                element: <RoomDetails></RoomDetails>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/room/${params.id}`),
            },
            {
                path: "/my-bookings",
                element: <PrivateRoute><MyBookings></MyBookings></PrivateRoute>,
            },
            {

                path: "/update/:id",
                element: <Update></Update>,
                loader: ({ params }) => fetch(`${import.meta.env.VITE_API_URL}/getting-bookings/${params.id}`)
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    
        children: [   
          // admin only routes
    
          {
            path: 'adminHome',
            element: <AdminHome></AdminHome>
          },
          {
            path: 'addRoom',
            element: <AddRoom></AddRoom>
          },
          {
            path: 'adminProfile',
            element: <AdminProfile></AdminProfile>
          },
        ]
      }
]);