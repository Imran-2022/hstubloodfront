import React, { useContext } from 'react';
import "./BeATeamMemberFrom.css"
import { useForm } from "react-hook-form";
import axios from 'axios'
import { userContext } from '../../../Context/Context';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const BeATeamMemberFrom = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('https://hstu-blood-share.herokuapp.com/beApart', data)
            .then(res => {
                if (res) {
                    toast("we received your request !!!")
                    reset()
                }
            })
    }
    return (
        <div>
            <div className="mt-5 mb-5 ">
                <p className="text-center display-6">BE A PART OF MANAGEMENT TEAM?</p>
                <form className="p-form mb-5 rounded  wu-75 m-auto admin-form-addd d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" defaultValue={loggedInUser.displayName}    {...register("name", { required: true })} autoComplete="off" readOnly />
                    {errors.name && <small className="text-end">This field is required</small>}

                    <input type="email" defaultValue={loggedInUser.email}  {...register("email", { required: true })} autoComplete="off" readOnly />
                    {errors.email && <small className="text-end">This field is required</small>}


                    <input placeholder="CONTACT" type="number" {...register("contact", { required: true })} />
                    {errors.contact && <small className="text-end">This field is required</small>}

                    <input placeholder="Your DepartMent" {...register("department", { required: true })} autoComplete="off" />
                    {errors.department && <p>This field is required</p>}
                    <div className='mt-3'> Label :
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
                    <input hidden defaultValue={"pending"} {...register("status", { required: true })} readOnly />
                    {errors.status && <small className="text-end">This field is required</small>}
                    <input type="submit" value="request" className="fs-5 p-3 rounded fw-bold" />
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
        </div>
    );
};

export default BeATeamMemberFrom;