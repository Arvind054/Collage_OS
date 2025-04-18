'use client';
import React from 'react';

import { useForm } from "react-hook-form";

const CreateEvent = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    // Here data struct will be destructured -> Stored in DB
    const onSubmit = data => console.log(data);

    return (
        <div>

            {/* Here we will create a simple form to Create the Events */}
            {/* Here in forms -> Implement the Validation */}
            <div className='m-12 p-16'>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-10'>
                    <input 
                        type="text" 
                        placeholder="Enter Hall Name" 
                        className="input bg-base-300 border-gray-600" 
                        {...register("HallName", { required: true })} 
                    />
                    {errors.HallName && <span>This field is required</span>}

                    <input 
                        type="text" 
                        placeholder="Enter club Name" 
                        className="input bg-base-300 border-gray-600" 
                        {...register("ClubName", { required: true })} 
                    />
                    {errors.ClubName && <span>This field is required</span>}

                    <input type="submit" className='btn btn-sm btn-success' />
                </form>

            </div>

        </div>
    )
}

export { CreateEvent };
