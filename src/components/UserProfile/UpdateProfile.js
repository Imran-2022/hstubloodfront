import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams, useNavigate } from 'react-router-dom';
import { userContext } from '../../Context/Context';
import "./UserProfile.css"
const UpdateProfile = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: { department:"abc"},
      });
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [profile, setProfile] = useState({});
    const { abc } = useParams()
    const navigate = useNavigate()
    const onSubmit = (data) => {
        console.table("data", data)
        const url = `http://localhost:8080/donors/${abc}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(response => response.json())
            .then(result => {
                if (result.modifiedCount > 0) {
                    alert('Updated')
                }
            })
    };

    useEffect(() => {
        reset()
        async function fetchData() {
            const res = await fetch("http://localhost:8080/donors");
            const record = await res.json();
            const user = record.filter(dt => dt._id === abc)
            reset(...user)
        }
        fetchData();
    }, [reset])

    // important link - https://stackoverflow.com/questions/64306943/defaultvalues-of-react-hook-form-is-not-setting-the-values-to-the-input-fields-i
    return (
        <div>
            <button className="btn btn-primary mx-5 mt-2 " onClick={() => navigate(-1)}>Go back</button>
            <form className="form" onSubmit={handleSubmit(onSubmit)}>
                
                <input  defaultValue={loggedInUser.displayName || "your Name"} {...register("Name")} autoComplete="off" readOnly />
                {errors.Name && <p>This field is required</p>}

                <input defaultValue={loggedInUser.email || "your email"} {...register("email")} autoComplete="off" readOnly />
                {errors.email && <p>This field is required</p>}

                <input className="form-number-mobile"  type='number' defaultValue={profile.mobile} {...register("mobile")} />
                {errors.mobile && <p>This field is required</p>}

                <input type='number' min={18} defaultValue={profile.age} {...register("age")} />
                {errors.age && <p>This field is required</p>}
                <select {...register("bloodGroup")} className="p-1 mb-3" >
                    <option value={profile.bloodGroup} selected disabled hidden>{profile.bloodGroup}</option>
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
                    <option value={profile.gender} selected disabled hidden>{profile.gender}</option>
                    <option value="female">female</option>
                    <option value="male">male</option>
                    <option value="other">other</option>
                </select>

                <input {...register("department")} autoComplete="off" />
                {errors.department && <p>This field is required</p>}
                <div> Label :
                    <select {...register("label")} className="m-1 px-5">
                        <option value={profile.label} selected disabled hidden>{profile.label}</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                    </select> &&
                    Semester :
                    <select {...register("semester")}  className="m-1 px-5">
                        <option value={profile.semester} selected disabled hidden>{profile.semester}</option>
                        <option value="I">I</option>
                        <option value="II">II</option>
                    </select>
                </div>
                last Donate date (ignore if you don't yet.)
                <input className="form-number-mobile" type='date' defaultValue={profile.lastDonateDate} {...register("lastDonateDate")} />
                {errors.lastDonateDate && <p>This field is required</p>}
                <input className="my-3" type="submit" value="UPDATE YOUR DONATE PROFILE"/>
            </form>
        </div>
    );
};

export default UpdateProfile;