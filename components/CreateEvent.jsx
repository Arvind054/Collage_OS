'use client';
import React from 'react';

import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

/**
 * This are the required Params:
    1. Hall Name//
    2. Status
    3. Date 
    4. Event Name //
    5. Time Slot
    6. Club Name //
 */


const CreateEvent = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();

    // Here {data} struct will be destructured -> Stored in DB
    const onSubmit = (data) => {
        console.log(data);
        
        toast.success("form submitted");
    }

    return (
        <div>

            {/* Here we will create a simple form to Create the Events */}
            {/* Here in forms -> Implement the Validation */}
            <div className='m-12 p-16'>

                <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-5'>

                    {/* Hall Name */}
                    <input 
                        type="text" 
                        placeholder="Enter Hall Name" 
                        className="input bg-base-300 border-gray-600" 
                        {...register("HallName", { required: true })} 
                    />
                    {errors.HallName && <span>This field is required</span>}

                    {/* Club Name */}
                    <input 
                        type="text" 
                        placeholder="Enter Club Name" 
                        className="input bg-base-300 border-gray-600" 
                        {...register("ClubName", { required: true })} 
                    />
                    {errors.ClubName && <span>This field is required</span>}

                    {/* Event Name */}
                    <input 
                        type="text" 
                        placeholder="Enter Event Name" 
                        className="input bg-base-300 border-gray-600" 
                        {...register("EventName", { required: true })} 
                    />
                    {errors.EventName && <span>This field is required</span>}

                    {/* Date */}
                    <input 
                        type="text" 
                        placeholder="Enter Date of Event" 
                        className="input bg-base-300 border-gray-600" 
                        {...register("Date", { required: true })} 
                    />
                    {errors.Date && <span>This field is required</span>}

                    {/* Time Slot */}
                    <input 
                        type="text" 
                        placeholder="Enter Time Slot of Event" 
                        className="input bg-base-300 border-gray-600" 
                        {...register("TimeSlot", { required: true })} 
                    />
                    {errors.TimeSlot && <span>This field is required</span>}


                    <input type="submit" className='btn btn-sm btn-success' />
                </form>

            </div>

        </div>
    )
}

export { CreateEvent };
