import React, { useContext } from 'react';
import "./Donate.css"
import { useForm } from "react-hook-form";
import axios from 'axios'
import { userContext } from '../../Context/Context';
const Donate = () => {
    const { register, handleSubmit, formState: { errors },reset } = useForm();
    const onSubmit = (data) => {
        console.table(data)
        axios.post('http://localhost:8080/donors', data)
        .then(res => {
            if (res.data) {
                alert("data added successfully !!!");
                reset()
            }
        })
    };
    const [loggedInUser, setLoggedInUser] = useContext(userContext)

    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input defaultValue={loggedInUser.displayName ||"your Name"} {...register("Name", { required: true })}  autoComplete="off" readOnly/>
                {errors.Name && <p>This field is required</p>}
                <input defaultValue={loggedInUser.email ||"your email"} {...register("email", { required: true })}  autoComplete="off" readOnly/>
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
                <input placeholder="Your DepartMent" {...register("department", { required: true })}  autoComplete="off"  />
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
                <input className="my-3" type="submit" value="REQUEST TO DONATE" />
            </form>
        </>
    );
};

export default Donate;