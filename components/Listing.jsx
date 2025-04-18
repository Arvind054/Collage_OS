'use server';
import React from 'react'

import { EventCard } from './EventCard';

const Listing = async () => {

  return (
    <div>
      <h1 className='text-2xl text-white'>Here contains all the list</h1>

      {/* List all the events here */}
      {/* Pass all the */}
      <div className='mt-10 sm:mr-10 grid sm:grid-cols-1 lg:grid-cols-2 gap-3'>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
        <EventCard></EventCard>
      </div>


    </div>
  )
}

export {Listing};
