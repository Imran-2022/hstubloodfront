import React from 'react';
import "./Contact.css"
import {BiCurrentLocation } from "react-icons/bi";
const Contact = () => {
    return (
        <div >
            <div className="contact-header d-flex justify-content-center align-items-center">
                <h2>Contact Us</h2>
            </div>
            <section className="location www-75 m-auto py-5 my-5">
                <iframe className="w-100" title="our location in google map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3595.1734626403168!2d88.65398201497212!3d25.698680183665378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39e4ad0b5d200fa7%3A0x2e0c8f8bb049efa2!2sHajee%20Mohammad%20Danesh%20Science%20%26%20Technology%20University!5e0!3m2!1sen!2sbd!4v1653392894239!5m2!1sen!2sbd" width="600" height="450" style={{ border: "0" }} loading="lazy"></iframe>
            </section>
            <section className="www-75 m-auto ">
                <div className="mt-5 d-flex justify-content-between contactUSS">
                    <div className="contact-col">
                        <div className="d-flex align-items-center mb-5">
                            <BiCurrentLocation className="fab " />
                            <span>
                                <h3>HSTU Academic Building 01</h3>
                                <a href="https://www.google.com/maps/dir/25.6280512,88.6391824/hstu+academic+building/@25.6637808,88.6128367,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39e4ad0b7d989b57:0x45a99cd9f3d3672f!2m2!1d88.6550599!2d25.6981826" target="_blank" rel="noreferrer"><p>location Direction</p></a>
                            </span>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                            <BiCurrentLocation className="fab" />
                            <span>
                                <h3>Teacher Student Center</h3>
                                <a href="https://www.google.com/maps/dir/25.6279344,88.6390505/Teacher+Student+Center,+MMX4%2BF8P,+D+Box+Rd/@25.6637808,88.612822,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39e4ad0b9acabefd:0xced04ac9c49572e0!2m2!1d88.6558398!2d25.6987148" target="_blank" rel="noreferrer"><p>location Direction</p></a>
                            </span>
                        </div>
                        <div className="d-flex align-items-center mb-5">
                            <BiCurrentLocation className="fab " />
                            <span>
                                <h3>HSTU Medical Center</h3>
                                <a href="https://www.google.com/maps/dir/25.6279344,88.6390505/HSTU+Medical+Center,+N508/@25.6637808,88.6128219,13z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x39e4ad0b436050f7:0x6fa9fbf761c4aacd!2m2!1d88.6539417!2d25.6989597" target="_blank" rel="noreferrer"><p>location Direction</p></a>
                            </span>
                        </div>
                    </div>
                    <div className="contact-col">
                        <form action="">
                            <input type="text" placeholder="enter your name" required />
                            <input type="email" placeholder="enter your email" required />
                            <input type="text" placeholder="enter your subject" required />
                            <textarea rows="6" placeholder="message" required></textarea>
                            <button type="submit" className="btn btn-outline-primary w-100">Send message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;