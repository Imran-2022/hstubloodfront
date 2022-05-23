import React from 'react';
import "./Footer.css"
import { FaFacebookSquare, FaLinkedin, FaTwitterSquare, FaYoutube } from "react-icons/fa";
const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer class="footer-section">
            <div class="container">
                <div class="footer-cta pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-map-marker-alt"></i>
                                <div class="cta-text">
                                    <h4>Find us</h4>
                                    <span>HSTU, Dinajpur-5200, Bangladesh</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="fas fa-phone"></i>
                                <div class="cta-text">
                                    <h4>Call us</h4>
                                    <span>+880 1771207845</span>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-md-4 mb-30">
                            <div class="single-cta">
                                <i class="far fa-envelope-open"></i>
                                <div class="cta-text">
                                    <h4>Mail us</h4>
                                    <span>mdimranulhaque.202@gmail.com</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="footer-content pt-5 pb-5">
                    <div class="row">
                        <div class="col-xl-4 col-lg-4 mb-50">
                            <div class="footer-widget">
                                <div class="footer-logo text-danger display-1">
                                    HSTU
                                </div>
                                <div class="footer-text">
                                    <p>Hajee Mohammad Danesh Science and Technology University is a government-financed public university of Bangladesh. Locally it is known as Hajee Danesh University.</p>
                                </div>
                                <div class="footer-social-icon">
                                    <span>Follow us</span>
                                    <a target="_blank" rel="noreferrer" href="https://www.facebook.com/imran.cse.hstu.20"><FaFacebookSquare /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.youtube.com/channel/UCF7WyIjmmYdD1l3fp4egycQ/featured"><FaYoutube /></a>
                                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/md-imranul-haque/"><FaLinkedin /></a>
                                    <a target="_blank" rel="noreferrer" href="https://twitter.com/imranul22"><FaTwitterSquare /></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-30">
                            <div class="footer-widget">
                                <div class="footer-widget-heading">
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
                        <div class="col-xl-4 col-lg-4 col-md-6 mb-50">
                            <div class="footer-widget">
                                <img src="images/hstu_correct_logo.png" width="100%" height="370px" alt="hstu" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="copyright-area">
                <div class="container">
                    <div class="row">
                        <div class="col-xl-6 col-lg-6 text-center text-lg-left">
                            <div class="copyright-text">
                                <p>&copy; 2021 - {year} , Copyright & All Rights Reserved by HSTU <strong> ( HSTU'bloodShare ) </strong></p>
                            </div>
                        </div>
                        <div class="col-xl-6 col-lg-6 d-none d-lg-block text-center">
                            <div class="footer-menu">
                                <ul>
                                    <li><a target="_blank" rel="noreferrer"href="https://www.linkedin.com/in/md-imranul-haque/">CREATED BY @ MD IMRANUL HAQUE </a></li>
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