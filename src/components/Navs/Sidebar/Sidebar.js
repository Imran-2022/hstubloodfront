import React, { useContext, useEffect, useState } from 'react'
import './Sidebar.css'
import navbarItems from '../Navbar/NavbarItems'
import { FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { userContext } from '../../../Context/Context'

const Sidebar = ({ isopen, toggle }) => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [validManage, setValidManage] = useState(false)
    // const [admin, setAdmin] = useState([])
    useEffect(() => {
        setValidManage(false)
        fetch('https://hstu-blood-share-backend.onrender.com/managingTeam')
            .then(response => response.json())
            .then(data => {
                for (var i = 0; i < data.length; ++i) {
                    // data[i].email
                    console.log(data[i].email)
                    if (data[i].email == loggedInUser.email) {
                        setValidManage(true)
                        console.log(data[i].email, "included", loggedInUser.email)
                    }
                }
            });
    }, [loggedInUser])
    console.log(validManage)
    let opacityClasses = ['sidebar-container'];
    if (isopen) {
        opacityClasses.push('opacity-on')
    } else {
        opacityClasses.push('opacity-off')
    }
    return (
        <div className={opacityClasses.join(' ')} isopen={isopen.toString()} onClick={toggle}>
            <div className="icon">
                <FaTimes className="close-icon" onClick={toggle} />
            </div>
            <div className="sidebar-wrapper">
                <div className="sidebar-menu">
                    <Link className="nav-link text-light" to="/donors-request">REQUEST</Link>
                    <Link className="nav-link text-light" to="/donors">DONORS</Link>
                    <Link className="nav-link text-light" to="/donate">DONATE</Link>
                    {loggedInUser.email ? <> <Link className="nav-link text-light" to="/user-profile">{loggedInUser.displayName.toUpperCase()}</Link> <Link className="nav-link text-light" to="/sign-in" onClick={() => setLoggedInUser({})}>SIGN-OUT</Link></> : <Link className="nav-link text-light" to="/sign-in">SIGN-IN</Link>}
                    <Link className="nav-link text-light" to="/contact-us">CONTACT</Link>
                    <Link className="nav-link text-light" to="/our-team">OUR-TEAM</Link>
                    {
                        validManage && <Link className="nav-link text-light" to="/managing-team">MANAGING-TEAM</Link>
                    }

                </div>
            </div>
        </div>

    )
}

export default Sidebar
