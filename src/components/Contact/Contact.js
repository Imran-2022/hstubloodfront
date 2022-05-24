import React from 'react';
import "./Contact.css"
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
const Contact = () => {
    return (
        <div>
            <div className="contact-header d-flex justify-content-center align-items-center">
                <h2>Contact Us</h2>
            </div>
            <section className="location w-75 m-auto py-5 my-5">
                <iframe className="w-100" title="our location in google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d920794.232923619!2d88.2824375129512!3d25.643021403543376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fcab08431748c5%3A0x8df9a73629fb8d7b!2sDinajpur%20District!5e0!3m2!1sen!2sbd!4v1622472682087!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0" }} loading="lazy"></iframe>
            </section>
            <section className="w-75 m-auto">
                <div className="mt-5 d-flex justify-content-between">
                    <div className="contact-col">
                        <div className="d-flex align-items-center mb-5">
                            <FaFacebookF className="fab " />
                            <span>
                                <h3>xyz road, abc building</h3>
                                <p>Lorem, ipsum dolor.</p>
                            </span>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                            <FaTwitter className="fab" />
                            <span>
                                <h3>xyz road, abc building</h3>
                                <p>Lorem, ipsum dolor.</p>
                            </span>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                            <FaLinkedinIn className="fab " />
                            <span>
                                <h3>xyz road, abc building</h3>
                                <p>Lorem, ipsum dolor.</p>
                            </span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <form action="">
                            <input type="text" placeholder="enter your name" required />
                            <input type="email" placeholder="enter your email" required />
                            <input type="text" placeholder="enter your subject" required />
                            <textarea rows="8" placeholder="message" required></textarea>
                            <button type="submit" className="btn btn-outline-primary w-100">Send message</button>
                        </form>
                    </div>
                </div>
            </section>

        </div>
    );
};

export default Contact;