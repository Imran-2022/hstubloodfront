import React from 'react';
import "./Donate.css"
import { useForm } from "react-hook-form";
const Donate = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => console.log(data);
    return (
        <>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>

                <input placeholder="Your Name" {...register("Name", { required: true })} />
                {errors.Name && <p>This field is required</p>}
                <input className="form-number-mobile" type='number' placeholder="Phone Number" {...register("mobile", { required: true })} />
                {errors.mobile && <p>This field is required</p>}
                <input type='number' min={18} placeholder="Your Age" {...register("age", { required: true })} />
                {errors.age && <p>This field is required</p>}
                <select {...register("blood-group")} className="p-1 mb-3" >
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
                <input placeholder="Your DepartMent" {...register("department", { required: true })} />
                {errors.department && <p>This field is required</p>}
                <div> Label :
                <select {...register("label")} defaultValue={'1'} className="m-1">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select> &&
                Semester :
                <select {...register("semester")} defaultValue={'I'} className="m-1">
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