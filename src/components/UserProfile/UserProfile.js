import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import BeATeamMemberFrom from '../DonarManageMent/BeATeamMemeber/BeATeamMemberFrom';
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

    const handleDelete = (id) => {
        console.log(id)
            fetch(`http://localhost:8080/donors/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())// or res.text()) 
                .then(res => {
                    if (res.deletedCount === 1) {
                        alert(`User ${id} deleted successfully`)
                        const newUser = profile.filter(ab => ab._id != id);
                        setProfile(newUser)
                    }
                })
    }
    
    return (
        <>
            <div className="userProfile">
                <p>user Profile</p>
                {
                    profile.length ? profile.map((data, i) => {
                        const { Name, age, bloodGroup, department, email, gender, label, mobile, semester ,_id,lastDonateDate} = data;
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
                                <p>lastDonateDate :{lastDonateDate}</p>
                                <button className="btn btn-primary" onClick={()=>handleDelete(_id)}>remove profile</button>
                                <button>Update Profile ?</button>
                            </div>
                        )
                    }) : <p>want to donate blood ? <Link to='/donate'>click to donate</Link> </p>
                }

            </div>
            <BeATeamMemberFrom />
        </>
    );
};

export default UserProfile;