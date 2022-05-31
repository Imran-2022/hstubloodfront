import React from 'react';
import { Link } from 'react-router-dom';
import "./Home.css"
import { BsArrowUpRight } from 'react-icons/bs';
const Home2 = () => {
    
    return (
        <>
        <div className="home home2" style={{background:"#fff"}}>
            <div className="container text-center">
            <p className=" readingbooks h1 py-2">Why is <small style={{color:"red"}}>donating bloods</small> so important?</p>
            <blockquote  className="readingbooksp h4 my-5" cite="https://www.oberlo.com/blog/benefits-of-reading-books">
            Blood is essential to help patients survive surgeries, cancer treatment, chronic illnesses, and traumatic injuries. This lifesaving care starts with one person making a generous donation. The need for blood is constant. But only about 3% of age-eligible people donate blood yearly.
            </blockquote>
            <button className="btn btn-primary"><Link className="muted readingbooks" to="/donate">Donate Blood,Save Life <BsArrowUpRight/> </Link></button>
            </div>
        </div>
        </>
    );
};

export default Home2;