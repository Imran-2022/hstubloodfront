import React from 'react';
import { Link } from "react-router-dom";
import Faq from '../Faq/Faq';
import Testimonials from '../testimonials/Testimonials';
import "./Home.css"
import Home2 from './home2/Home2';
const Home = () => {
    return (
        <>
            <div>
                {/* <video autoPlay={true} muted loop playsInline src="doocuments/blood.mp4"></video> */}
                <div className="overlay-content ">
                    <p>
                        DONATING BLOOD IS ONE OF THE NOBLEST <br /> THINGS YOU CAN DO.
                    </p>
                    <div>
                        <Link to="/donors"><button className="btn btn-primary me-3 px-5 py-2">Search Donar</button></Link>
                        <Link to="/donate"><button className="btn btn-primary px-5 py-2">Donate Blood</button></Link>
                    </div>
                </div>
            </div>
            <Home2 />
            <Faq/>
            <div className="p-4 bg-primary authorsays " style={{ backgroundImage: 'linear-gradient(rgba(6, 11, 37, 0.89), rgba(4, 9, 30, 0.92)), url(https://alifeofproductivity.com/wp-content/uploads/2016/09/bookRZ.jpg)' }}>
                <div className="container pb-5">
                    <h1 className="pb-5">Here's what <span>STUDENTS</span> say ?</h1>
                </div>
                <Testimonials />
            </div>
            <div style={{minHeight:"70vh"}}>

            </div>
        </>
    );
};

export default Home;