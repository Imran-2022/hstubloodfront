import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import "./UserProfile.css"
const UserProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://localhost:8080/donors");
            const record = await res.json();
            const user = record.filter(dt => dt.email === loggedInUser.email)
            setProfile(user)
        }
        fetchData();
    }, [])
    return (
        <div className="userProfile">
            <p>user Profile</p>
            {
               profile.length ? profile.map((data, i) => {
                    const { Name, age, bloodGroup, department, email, gender, label, mobile, semester } = data;
                    console.log(Name, age, bloodGroup, department, email, gender, label, mobile, semester)
                    return (
                        <div key={i}>
                            <p>Name :{Name}</p>
                            <p>Age :{age}</p>
                            <p>mobile :{mobile}</p>
                            <p>BloodGroup :{bloodGroup}</p>
                            <p>department :{department}</p>
                            <p>email :{email}</p>
                            <p>gender :{gender}</p>
                            <p>label :{label}</p>
                            <p>mobile :{label}</p>
                            <p>semester :{semester}</p>
                        </div>
                        ) 
                   }):<p>want to donate blood ? <Link to='/donate'>click to donate</Link> </p>
            }

        </div>
    );
};

export default UserProfile;