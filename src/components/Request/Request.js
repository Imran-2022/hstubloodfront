import React, { useContext, useRef } from 'react';
import "./Request.css"
import axios from 'axios'
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from 'emailjs-com';
import { userContext } from '../../Context/Context';

const Request = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext);

    const form = useRef();
    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:8080/request', data)
            .then(res => {
                if (res.data) {
                    toast(`submitted , we will contact you soon !!`)
                    reset()
                }
            })
            const serviceID = 'service_o90hmbu';
            const templateID = 'template_ikf1axn';
            const USER_ID = '8ugCrIsnh4sGlS8-n'
            emailjs.sendForm(serviceID, templateID, form.current, USER_ID)
                .then((result) => {
                  
                }, (error) => {
                    alert(error.text);
                });
    }
    return (
        <div className="mt-5 mb-5 ">
            <form ref={form} className="p-5 mb-5 rounded w-75 m-auto admin-form-adds admin-form-add d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue={loggedInUser.displayName || "your Name"} readOnly  {...register("you", { required: true })} />
                {errors.you && <small className="text-end">This field is required</small>}

                <input placeholder="patient name" {...register("patient", { required: true })} />
                {errors.patient && <small className="text-end">This field is required</small>}

                <input placeholder="contact" type="number" {...register("contact", { required: true })} />
                {errors.contact && <small className="text-end">This field is required</small>}

                <textarea placeholder="reason in details" {...register("reason", { required: true })} rows="6" />
                {errors.reason && <small className="text-end">This field is required</small>}

                <select  {...register("bloodGroup")} className="p-1 mt-4 mb-3" >
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
    );
};

export default Request;
