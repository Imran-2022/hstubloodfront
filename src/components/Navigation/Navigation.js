import React from 'react';
import "./Navigation.css"
import { Link } from "react-router-dom";

const Navigation = ({len}) => {
    const [show,setSuow]=React.useState(true)
    return (
       <>
         <nav className="navbar navbar-expand-lg navbar-dark bg-primary py-3">
                <div className="container">
                    <Link className="nav-link text-light" to="/">BLOOD | HSTU</Link>
                    <button className="navbar-toggler border border-info text-info" 
                    onClick={ ()=>{ setSuow(!show) } } >
                        {show ? "<MenuIcon />" : "<CloseIcon />"}
                    </button>
                        <div className={show ? 'collapse navbar-collapse' : 'collapse navbar-collapse active'}>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                            <Link className="nav-link text-light" to="/donors">DONORS <span className="donors-num px-2">{len||"0"}</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/donate">DONATE</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link text-light" to="/log-in">LOGIN</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
       </>
    );
};

export default Navigation;