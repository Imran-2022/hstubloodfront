import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './components/Home/Home';
import NoMatch from './components/NoMatch/NoMatch';
const Main = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default Main;