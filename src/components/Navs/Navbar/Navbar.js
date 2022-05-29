import React, { useContext } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { userContext } from '../../../Context/Context'

const Navbar = ({ toggle }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    return (
        <nav>
            <Link className="nav-link text-light" style={{ fontSize: "25px" }} to="/">HSTU'<span style={{ color: "rgb(255 211 0)", padding: "2px", fontWeight: "bolder" }}>blood</span>Share</Link>
            <div className="icons">
                <div className="menu-items">
                    <Link className="nav-link text-light" to="/donors-request">REQUEST</Link>
                    <Link className="nav-link text-light" to="/donors">DONORS</Link>
                    <Link className="nav-link text-light" to="/donate">DONATE</Link>
                    {loggedInUser.email ?<> <Link className="nav-link text-light" to="/user-profile">{loggedInUser.displayName.toUpperCase()}</Link> <Link className="nav-link text-light" to="/sign-in" onClick={()=>setLoggedInUser({})}>SIGN-OUT</Link></>: <Link className="nav-link text-light" to="/sign-in">SIGN-IN</Link>}
                    <Link className="nav-link text-light" to="/contact-us">CONTACT</Link>
                    <Link className="nav-link text-light" to="/our-team">OUR-TEAM</Link>
                    <Link className="nav-link text-light" to="/managing-team">MANAGING-TEAM</Link>
                </div>
                <div className="mobile-menu-icon">
                    <FaBars onClick={toggle} />
                </div>
            </div>
        </nav>
    )
}

export default Navbar
