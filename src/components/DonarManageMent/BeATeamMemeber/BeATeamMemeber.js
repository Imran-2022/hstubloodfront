import React, { useContext } from 'react';
import "./BeATeamMemeber.css"
import { BsArrowUpRight } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { userContext } from '../../../Context/Context';

const BeATeamMemeber = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return (
        <div>

            <div className="home">
                <div className="container text-center">
                    <p className="text-primary readingbooks h1 py-2">become a part of our  management team</p>
                    <blockquote>
                    we are welcome you all to become a part of our 'hstu blood share, management team ' help people, the greatest work ❕
                    </blockquote>
                    <button className="btn btn-primary"><Link className="muted readingbooks" to="/user-profile">REQUST TO BECOME A PART OF US <BsArrowUpRight /> </Link></button>
                </div>
            </div>
        </div>
    );
};

export default BeATeamMemeber;