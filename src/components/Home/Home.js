import React from 'react';
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <div>
            <p>this is home</p>
            <Link to="*">No Match *</Link>
        </div>
    );
};

export default Home;