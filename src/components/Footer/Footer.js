import React from 'react';
import "./Footer.css"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="footer-cta pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-map-marker-alt"></i>
                                <div className="cta-text">
                                    <h4>Find us</h4>
                                    <span>HSTU, Dinajpur-5200, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="fas fa-phone"></i>
                                <div className="cta-text">
                                    <h4>Call us</h4>
                                    <span>+880 1771207845</span>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-md-4 mb-30">
                            <div className="single-cta">
                                <i className="far fa-envelope-open"></i>
                                <div className="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mdimranulhaque.202@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-content pt-5 pb-5">
                    <div className="row">
                        <div className="col-xl-4 col-lg-4 mb-50">
                            <div className="footer-widget">
                                <div className="footer-logo display-1">
                                    HSTU
                                </div>
                                <div className="footer-text">
                                    <p>Hajee Mohammad Danesh Science and Technology University is a government-financed public university of Bangladesh. Locally it is known as Hajee Danesh University.</p>
                                </div>
                                <div className="footer-social-icon">
                                    <span>Follow us</span>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/imran.cse.hstu.20"><FaFacebookSquare /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCF7WyIjmmYdD1l3fp4egycQ/featured"><FaYoutube /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/md-imranul-haque/"><FaLinkedin /></a>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/imranul22"><FaTwitterSquare /></a>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div className="footer-widget">
                                <div className="footer-widget-heading">
                                    <h3>Useful Links</h3>
                                </div>
                                <ul>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/">HSTU</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://en.wikipedia.org/wiki/Hajee_Mohammad_Danesh_Science_%26_Technology_University">HSTU Wikipedia</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="http://www.hstusaad.com/">HSTUSAAD</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd//it_cell"> IT CELL</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/library">LIBRARY</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/page/muktijuddho_corner">MUKTIJUDDHO CORNER</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/page/regent_board">REGENT_BOARD</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/page/medical">MEDICAL</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/page/academic_calender/">ACADEMIC CALENDAR</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/page/office_section/">OFFICE & SECTION</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/page/living/">LIVING & CULTURE</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://jst.hstu.ac.bd/"> JST</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://iqac.hstu.ac.bd/">IQAC</a></li>
                                    <li><a target="_blank" rel="noreferrer" href="https://hstu.ac.bd/page/tsc">TSC</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div className="footer-widget">
                                <img src="images/hstu_correct_logo.png" width="100%" style={{maxHeight:"370px"}} alt="hstu" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="copyright-area bg-primary ">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div className="copyright-text">
                                <p className='text-light'>&copy; 2021 - {year} , Copyright & All Rights Reserved by<strong > ( NOOB 1.0) </strong></p>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-none d-lg-block text-center">
                            <div className="footer-menu">
                                <ul>
                                    <li><a className='text-light' target="_blank" rel="noreferrer"href="https://www.linkedin.com/in/md-imranul-haque/">CREATED BY @ NOOB 1.0 </a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>


    );
};

export default Footer;