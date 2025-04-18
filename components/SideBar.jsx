import React from 'react'
import { AiFillMacCommand } from "react-icons/ai";
import Link from "next/link";

const SideBar = () => {
  return (
    <div>

      <Link href='/'>
        <div className='flex flex-row items-center gap-5 mb-16'>
          <AiFillMacCommand className='text-5xl' />
          <h1 className='text-xl'>College OS</h1>
        </div>
      </Link>

      {/* Here we will render all our Pages according to general and student */}
      <div className='flex flex-col items-center gap-20'>


        {/* For General Corner */}
        <div>
          <h1 className='btn btn-primary btn-lg w-full'>General Corner</h1>

          <Link href='/GeminiChat'>
            <button className="btn btn-ghost w-full capitalize">Events Listing</button>
          </Link>
          <Link href='/LangChainChat'>
            <button className="btn btn-ghost w-full capitalize">Event Management</button>
          </Link>
          <Link href='/LGpdfParser'>
            <button className="btn btn-ghost w-full capitalize">Booking campus assets</button>
          </Link>
        </div>




        {/* For Students Corner */}
        <div>
          <h1 className='btn btn-primary btn-lg w-full'>Students Corner</h1>

          <Link href='/GeminiChat'>
            <button className="btn btn-ghost w-full capitalize">Gemini ChatBot</button>
          </Link>
          <Link href='/LangChainChat'>
            <button className="btn btn-ghost w-full capitalize">Resume ATS score</button>
          </Link>
          <Link href='/LGpdfParser'>
            <button className="btn btn-ghost w-full capitalize">Complaint/Request Submission Portal</button>
          </Link>
          <Link href='#'>
            <button className="btn btn-ghost w-full capitalize">AI interview</button>
          </Link>
        </div>


      </div>



    </div>
  )
}

export { SideBar };