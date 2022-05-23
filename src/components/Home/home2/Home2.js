import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import { BsArrowUpRight } from 'react-icons/bs';
const Home2 = () => {
    
    return (
        <>

        <div className="home" style={{backgroundImage: 'linear-gradient(rgb(6 11 37 / 56%), rgb(4 9 30 / 76%)),url(https://media.istockphoto.com/photos/dark-red-grungy-background-with-spotlight-background-picture-id1157181209?k=20&m=1157181209&s=612x612&w=0&h=MoScekCPMElde1y9Pl3WXY_I2HOvU-UVl6YDnVWKPKM=)'}}>
            <div className="container text-center">
            <p className="text-primary readingbooks h1 py-2">Why is <small style={{color:"yellow"}}>donating bloods</small> so important?</p>
            <blockquote  className="text-whitee readingbooksp h4 my-5" cite="https://www.oberlo.com/blog/benefits-of-reading-books">
            Blood is essential to help patients survive surgeries, cancer treatment, chronic illnesses, and traumatic injuries. This lifesaving care starts with one person making a generous donation. The need for blood is constant. But only about 3% of age-eligible people donate blood yearly.
            </blockquote>
            <button className="btn btn-primary"><Link className="muted readingbooks" to="/donate">Donate Blood,Save Life <BsArrowUpRight/> </Link></button>
            </div>
        </div>
        <div className="demo-weidth">

        </div>
       
        </>
    );
};

export default Home2;