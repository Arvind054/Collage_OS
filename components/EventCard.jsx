import React from 'react'



/**
 @dev Important params we required for DB model are:
    1. Hall Name
    2. Status
    3. Date 
    4. Event Name
    5. Time Slot
    6. Club Name
 */

const EventCard = (  /* { hallName,status,date,eventName,time,clubName } */   ) => {
    return (
        <div className="card bg-base-300 w-96 shadow-sm border">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" 
                />
            </figure>
            <div className="card-body">
                <h1 className="card-title">
                    Web Dev Club Orientation Session
                    <div className="badge badge-success">Active</div>
                </h1>
                <p className='text-white'>Sudha Murthy Hall</p>
                <div className="card-actions justify-end mt-2">
                    <div className="badge badge-outline">19 Jan'25</div>
                    <div className="badge badge-outline">4:30 to 5:30</div>
                    <div className="badge badge-outline">P.M.</div>
                </div>
            </div>
        </div>
    )
}

export { EventCard }
