import React, { useEffect, useState } from 'react';
import "./AllAdmin.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllAdmin = () => {
    // https://hstu-blood-share-backend.onrender.com
    const [admin, setAdmin] = useState([])
    useEffect(() => {
        fetch('https://hstu-blood-share-backend.onrender.com/managingTeam')
            .then(response => response.json())
            .then(data => setAdmin(data));
    }, [])


    const handleDelete = (id) => {
        fetch(`https://hstu-blood-share-backend.onrender.com/managingTeam/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())// or res.text()) 
            .then(res => {
                if (res.deletedCount === 1) {
                    toast(`User ${id} deleted successfully`)
                    const newUser = admin.filter(ab => ab._id != id);
                    setAdmin(newUser)
                }
            })
    }

    return (
        <div>
            <div className="reqAdmin ">
                {
                    admin.map(admin => {
                        return (
                            <div className="p-3 reqAdmin-in" key={admin._id}>
                                <p>Name: {admin.name}</p>
                                <p>Email: {admin.email}</p>
                                <p>Phone: {admin.contact}</p>
                                <button onClick={() => handleDelete(admin._id)}>remove admin</button>
                            </div>
                        )
                    })
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
        </div>
    );
};

export default AllAdmin;