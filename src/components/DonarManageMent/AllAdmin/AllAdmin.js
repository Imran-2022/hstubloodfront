import React, { useEffect, useState } from 'react';
import "./AllAdmin.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AllAdmin = () => {

    const [admin, setAdmin] = useState([])
    useEffect(() => {
        fetch('https://hstu-blood-share.herokuapp.com/managingTeam')
            .then(response => response.json())
            .then(data => setAdmin(data));
    }, [])


    const handleDelete = (id) => {
        fetch(`https://hstu-blood-share.herokuapp.com/managingTeam/${id}`, {
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
            <small className=" text-primary d-flex flex-wrap gap-1 ">
                {
                    admin.map(admin => {
                        return (
                            <div className="p-3 bg-dark m-5" key={admin._id}>
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
            </small>
        </div>
    );
};

export default AllAdmin;