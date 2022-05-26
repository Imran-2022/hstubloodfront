import React from 'react';
import "./AddData.css"
import axios from 'axios'
import { useForm } from "react-hook-form";
const AddData = () => {

    const { register, reset, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = (data) => {
        console.log("🚀");
        axios.post('https://learn-onlinee.herokuapp.com/data', data)
            .then(res => {
                if (res.data) {
                    alert("data added successfully !!!");
                    reset()
                }
            })
    }
    return (
        <div className="mt-5 mb-5 ">
            <p>this is just a cool webite  i build ✌</p>
            <form className="p-5 mb-5 rounded w-75 m-auto admin-form-adds admin-form-add d-flex flex-column justify-content-center align-content-center" onSubmit={handleSubmit(onSubmit)}>
                <input placeholder="Image url"   {...register("img", { required: true })} autoComplete="off" />
                {errors.img && <small className="text-end">This field is required</small>}

                <input placeholder="Title" {...register("title", { required: true })} />
                {errors.title && <small className="text-end">This field is required</small>}

                <input placeholder="Total Cost" {...register("cost", { required: true })} />
                {errors.cost && <small className="text-end">This field is required</small>}

                <input placeholder="Durations" {...register("durations", { required: true })} />
                {errors.durations && <small className="text-end">This field is required</small>}

                <textarea placeholder="definitions"  {...register("definitions", { required: true })} rows="6" />
                {errors.definitions && <small className="text-end">This field is required</small>}

                <input placeholder="difficulty-label" {...register("difficulty", { required: true })} />
                {errors.difficulty && <small className="text-end">This field is required</small>}

                <input type="submit" value="Upload NEW one" className="fs-5 p-3 rounded fw-bold" />
            </form>
        </div>
    );
};

export default AddData;