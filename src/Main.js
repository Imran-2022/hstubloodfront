import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import Donate from './components/Donate/Donate';
import Donors from './components/Donors/Donors';
import Home from './components/Home/Home';
import Navigation from './components/Navigation/Navigation';
import NoMatch from './components/NoMatch/NoMatch';
import JsonData from "./components/Donors/FakeData.json";
import SignIn from './components/Login/SignIn';
import SignUp from './components/Login/SignUp';
const Main = () => {
    const [len,setLen]=useState(0);
    const [users, setUsers] = useState(JsonData.slice(0, 200));
    useEffect(() => {
        setLen(users.length);
    },[users.length])
    return (
        <>
        <Navigation len={len}/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
            <Route path="/donors" element={<Donors/>} />
            <Route path="/donate" element={<Donate />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/sign-up" element={<SignUp />} />

        </Routes>
        </>

    );
};

export default Main;