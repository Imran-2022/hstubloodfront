import React, { useEffect, useState } from 'react';
import "./MakeAdmin.css"
import { useForm } from "react-hook-form";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const MakeAdmin = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [requestToBeApart, setrequestToBeApart] = useState([])
    const onSubmit = (data) => {
        axios.post('http://localhost:8080/managingTeam', data)
            .then(res => {
                if (res.data) {
                    toast("new admin added !!!")
                    reset()
                }
            })
    }

    useEffect(() => {
        fetch('http://localhost:8080/beAPart')
            .then(response => response.json())
            .then(data => setrequestToBeApart(data));
    }, [])

    const handleDelete = (id) => {
        fetch(`http://localhost:8080/beAPart/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())// or res.text()) 
            .then(res => {
                if (res.deletedCount === 1) {
                    toast(`User ${id} deleted successfully`)
                    const newUser = requestToBeApart.filter(ab => ab._id != id);
                    setrequestToBeApart(newUser)
                }
            })
    }

    return (
        <>
            <div className='d-flex gap-5 '>
                {
                    requestToBeApart.length && requestToBeApart.map(dt => {
                        const { contact, department, email, label, name, semester, status, _id } = dt

                        return (
                            <div className="p-3 w-25 bg-primary mt-5" key={dt._id}>
                                <p>Name: {name}</p>
                                <p>Email: {email}</p>
                                <p>Phone: {contact}</p>
                                <p>department: {department}</p>
                                <p>label: {label}</p>
                                <p>semester :{semester}</p>
                                <p>status: {status}</p>
                                <button onClick={() => handleDelete(_id)}>Delete Req?</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className="mt-5 mb-5 ">
                <form className="p-5 mb-5 rounded  w-75 m-auto admin-form-addd d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" placeholder="OUR NEW ADMIN NAME"   {...register("name", { required: true })} autoComplete="off" />
                    {errors.name && <small className="text-end">This field is required</small>}

                    <input type="email" placeholder="OUR NEW ADMIN EMAIL"   {...register("email", { required: true })} autoComplete="off" />
                    {errors.email && <small className="text-end">This field is required</small>}


                    <input placeholder="CONTACT" type="number" {...register("contact", { required: true })} />
                    {errors.contact && <small className="text-end">This field is required</small>}


                    <input type="submit" value="MAKE ADMIN" className="fs-5 p-3 rounded fw-bold" />
                </form>
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
        </>
    );
};

export default MakeAdmin;