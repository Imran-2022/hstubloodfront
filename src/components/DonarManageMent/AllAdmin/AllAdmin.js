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

    const handleDelete = (id) => {
        console.log(id)
            fetch(`http://localhost:8080/managingTeam/${id}`, {
                method: 'DELETE',
            })
                .then(res => res.json())// or res.text()) 
                .then(res => {
                    if (res.deletedCount === 1) {
                        alert(`User ${id} deleted successfully`)
                        const newUser = admin.filter(ab => ab._id != id);
                        setAdmin(newUser)
                    }
                })
    }

    return (
        <div>
            <small className=" text-primary d-flex flex-wrap gap-1 ">
                {
                    admin.map(admin => {
                        return (
                            <div className="p-3 bg-dark m-5" key={admin._id}>
                                <p>Name: {admin.name}</p>
                                <p>Email: {admin.email}</p>
                                <p>Phone: {admin.contact}</p>
                                <button onClick={()=>handleDelete(admin._id)}>remove admin</button>
                            </div>
                        )
                    })
                }
            </small>
        </div>
    );
};

export default AllAdmin;