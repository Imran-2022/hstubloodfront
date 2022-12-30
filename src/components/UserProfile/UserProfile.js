import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import BeATeamMemberFrom from '../DonarManageMent/BeATeamMemeber/BeATeamMemberFrom';
import "./UserProfile.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UserProfile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [profile, setProfile] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://hstu-blood-share-backend.onrender.com/donors");
            const record = await res.json();
            const user = record.filter(dt => dt.email === loggedInUser.email)
            setProfile(user)
        }
        fetchData();
    }, [])

    const handleDelete = (id) => {
        fetch(`https://hstu-blood-share-backend.onrender.com/donors/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())// or res.text()) 
            .then(res => {
                if (res.deletedCount === 1) {
                    toast(`User ${id} deleted successfully`)
                    const newUser = profile.filter(ab => ab._id != id);
                    setProfile(newUser)
                }
            })
    }

    return (
        <div className="userhere">
            <div className="userProfile my-4">
                <p className='text-center display-5'>Donor's  Profile</p>
                {
                    profile.length ? profile.map((data, i) => {
                        const { Name, age, bloodGroup, department, email, gender, label, mobile, semester, _id, lastDonateDate } = data;
                        return (
                            <div key={i} className="userInfoAll p-3 mx-2">
                                <div className='userInfoAll-in'>
                                    <div>
                                        <p>Name :{Name}</p>
                                        <p>Age :{age}</p>
                                        <p>mobile :{mobile}</p>
                                        <p>BloodGroup :{bloodGroup}</p>
                                        <p>lastDonateDate :{lastDonateDate}</p>

                                    </div>
                                    <div>
                                        <p>department :{department}</p>
                                        <p>email :{email}</p>
                                        <p>gender :{gender}</p>
                                        <p>label :{label}</p>
                                        <p>semester :{semester}</p>
                                    </div>
                                </div>
                                <div className='d-flex gap-3 flex-wrap justify-content-center'>
                                    <button className="btn btn-primary" onClick={() => handleDelete(_id)}>remove profile</button>
                                    <Link className="btn btn-primary" to={`/update-profile/${_id}`}>Update Profile ?</Link>
                                </div>

                            </div>

                        )
                    }) : <p>want to donate blood ? <Link to='/donate'>click to donate</Link> </p>
                }
                <ToastContainer
                    position="top-center"
                    autoClose={2000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />

            </div>
            <BeATeamMemberFrom />
        </div>
    );
};

export default UserProfile;