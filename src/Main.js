import React from 'react';
import { Routes, Route } from "react-router-dom";
import Donate from './components/Donate/Donate';
import Donors from './components/Donors/Donors';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import Navigation from './components/Navigation/Navigation';
import NoMatch from './components/NoMatch/NoMatch';

const Main = () => {
    return (
        <>
        <Navigation/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/donors" element={<Donors/>} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/log-in" element={<Login />} />
            <Route path="/register" element={<Register />} />

        </Routes>
        </>

    );
};

export default Main;