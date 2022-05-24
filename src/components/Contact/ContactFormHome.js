import React from 'react';
import { Link } from 'react-router-dom';
import "./ContactFormHome.css"
const ContactFormHome = () => {
    return (
        <div>
            <section className="contact-form-home  w-75 rounded text-center">
                <h1 className="text-light mb-5 p-0 contact-home-H1 fs-3">Enroll For Our Verious Online Courses <br /> Anywhere From Fhe World</h1>
                <Link to="/contact" className="btn-link btn btn-outline-warning text-light">CONTACT US</Link>
            </section>
        </div>
    );
};

export default ContactFormHome;