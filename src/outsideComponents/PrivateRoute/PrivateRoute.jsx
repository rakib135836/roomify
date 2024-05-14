

import { useContext } from "react";

import { Navigate, useLocation } from "react-router-dom";
import { FirebaseContext } from "../../FirebaseProvider/FirebaseProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(FirebaseContext);
    const location = useLocation();
    console.log(location.pathname)


    if (loading) {
        return <span className="loading loading-spinner text-accent"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;

};

export default PrivateRoute;