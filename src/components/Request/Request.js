import React from 'react';
import "./Request.css"
import axios from 'axios'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Request = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("🚀");
        axios.post('http://localhost:8080/request', data)
            .then(res => {
                if (res.data) {
                    toast(`submitted , we will contact you soon !!`)
                    reset()
                }
            })
    }
    return (
        <div className="mt-5 mb-5 ">
            <form className="p-5 mb-5 rounded w-75 m-auto admin-form-adds admin-form-add d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="who are you" {...register("you", { required: true })} />
                {errors.you && <small className="text-end">This field is required</small>}

                <input placeholder="patient name" {...register("patient", { required: true })} />
                {errors.patient && <small className="text-end">This field is required</small>}

                <input placeholder="contact" type="number" {...register("contact", { required: true })} />
                {errors.contact && <small className="text-end">This field is required</small>}

                <textarea placeholder="reason in details"  {...register("reason", { required: true })} rows="6" />
                {errors.reason && <small className="text-end">This field is required</small>}

                <select {...register("bloodGroup")} className="p-1 mt-4 mb-3" >
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                </select>
                <input hidden defaultValue={"pending"} {...register("status", { required: true })} readOnly />
                {errors.status && <small className="text-end">This field is required</small>}
                <input type="submit" value="Submit your Request" className="fs-5 p-3 rounded fw-bold" />
            </form>
            <ToastContainer
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
            />
        </div>
    );
};

export default Request;
