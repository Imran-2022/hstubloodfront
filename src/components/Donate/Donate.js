import React, { useContext, useEffect, useState } from 'react';
import "./Donate.css"
import { useForm } from "react-hook-form";
import axios from 'axios'
import { userContext } from '../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Donate = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [profile, setProfile] = useState(false);

    const onSubmit = (data) => {
        axios.post('http://hstu-blood-share.herokuapp.com/donors', data)
            .then(res => {
                if (res.data) {
                    toast(`data added successfully !!!`)
                    setProfile(true)
                    reset()
                }
            })
    };
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    useEffect(() => {
        async function fetchData() {
            const res = await fetch("http://hstu-blood-share.herokuapp.com/donors");
            const record = await res.json();
            const user = record.filter(dt => dt.email === loggedInUser.email)
            if (user.length) {
                setProfile(true)
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={loggedInUser.displayName || "your Name"} {...register("Name", { required: true })} autoComplete="off" readOnly />
                {errors.Name && <p>This field is required</p>}
                <input defaultValue={loggedInUser.email || "your email"} {...register("email", { required: true })} autoComplete="off" readOnly />
                {errors.email && <p>This field is required</p>}
                <input className="form-number-mobile" type='number' placeholder="Phone Number" {...register("mobile", { required: true })} />
                {errors.mobile && <p>This field is required</p>}
                <input type='number' min={18} placeholder="Your Age" {...register("age", { required: true })} />
                {errors.age && <p>This field is required</p>}
                <select {...register("bloodGroup")} className="p-1 mb-3" >
                    <option value="A+">A+</option>
                    <option value="B+">B+</option>
                    <option value="AB+">AB+</option>
                    <option value="O+">O+</option>
                    <option value="A-">A-</option>
                    <option value="B-">B-</option>
                    <option value="AB-">AB-</option>
                    <option value="O-">O-</option>
                </select>
                <select {...register("gender")} defaultValue={'male'} className="p-1 mb-3">
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>
                <input placeholder="Your DepartMent" {...register("department", { required: true })} autoComplete="off" />
                {errors.department && <p>This field is required</p>}
                <div> Label :
                    <select {...register("label")} defaultValue={'1'} className="m-1 px-5">
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> &&
                    Semester :
                    <select {...register("semester")} defaultValue={'I'} className="m-1 px-5">
                        <option value="I">I</option>
                        <option value="II">II</option>
                    </select>
                </div>
                last Donate date (ignore if you don't yet.)
                <input className="form-number-mobile" type='date' {...register("lastDonateDate")} />
                {errors.lastDonateDate && <p>This field is required</p>}
                {
                    profile ? <input className="my-3" type="submit" value="ALREADY HAVE A REQUEST" disabled={true} /> : <input className="my-3" type="submit" value="REQUEST TO DONATE" />
                }
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
        </>
    );
};

export default Donate;