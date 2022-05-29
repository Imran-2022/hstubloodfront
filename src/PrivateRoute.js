import React, { useContext } from 'react';
import { userContext } from './Context/Context';
import { useLocation } from "react-router";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoute = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const location = useLocation();
    return loggedInUser.email ?<Outlet />: <Navigate to="/sign-in" replace state={{ from: location }} /> 
};

export default PrivateRoute;