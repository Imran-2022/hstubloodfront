import React, { useContext } from 'react';
import { Navigate, Route } from 'react-router';
import { userContext } from './Context/Context';
const PrivateRoute = ({ children }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return !loggedInUser.email ? <Navigate to="/sign-in" replace={true} /> : children
};

export default PrivateRoute;