import React, { useContext } from 'react';
import "./BeATeamMemberFrom.css"
import { useForm } from "react-hook-form";
import axios from 'axios'
import { userContext } from '../../../Context/Context';
const BeATeamMemberFrom = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const onSubmit = (data) => {
        axios.post('http://localhost:8080/beApart', data)
            .then(res => {
                if (res) {
                    alert("we received your request !!!");
                    reset()
                }
            })
        console.log(data)
    }
    return (
        <div>
            <div className="mt-5 mb-5 ">
                <form className="p-5 mb-5 rounded  w-75 m-auto admin-form-addd d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
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
                    <input type="submit" value="BE A PART OF US ?" className="fs-5 p-3 rounded fw-bold" />
                </form>
            </div>
        </div>
    );
};

export default BeATeamMemberFrom;