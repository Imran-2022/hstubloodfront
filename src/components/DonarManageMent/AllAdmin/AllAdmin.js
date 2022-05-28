import React, { useEffect, useState } from 'react';
import "./AllAdmin.css"
const AllAdmin = () => {

    const [admin, setAdmin] = useState([])
    useEffect(() => {
        fetch('http://localhost:8080/managingTeam')
            .then(response => response.json())
            .then(data => setAdmin(data));
    }, [])
    
    // console.log("admin",admin);

    return (
        <div>
            <small className=" text-primary d-flex flex-wrap gap-1 ">
                {
                    admin.map(admin => {
                        return (
                            <div className="p-3 bg-dark m-5" key={admin._id}>
                                <p>Name: {admin.name}</p>
                                <p>Email: {admin.email}</p>
                                <p>Phone: {admin.email}</p>
                            </div>
                        )
                    })
                }
            </small>
        </div>
    );
};

export default AllAdmin;