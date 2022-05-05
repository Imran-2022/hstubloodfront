import React from 'react';
import { Link } from "react-router-dom";
import "./Home.css"
const Home = () => {
    return (
        <div>
            <video autoPlay={true} muted loop playsInline src="doocuments/blood.mp4"></video>
            <div className="overlay-content ">
                <p>
                    DONATING BLOOD IS ONE OF THE NOBLEST <br/> THINGS YOU CAN DO.
                </p>

                <div>

                    <Link to="/donors"><button className="btn btn-primary me-3 px-5 py-2">Search Donar</button></Link>
                    <Link to="/donate"><button className="btn btn-primary px-5 py-2">Donate Blood</button></Link>
                </div>

            </div>

        </div>
    );
};

export default Home;