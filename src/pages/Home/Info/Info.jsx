import React from 'react'
import { BsCalendar2DateFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdAddCall } from "react-icons/md";

export const Info = () => {
  return (
    <div className='mt-25'>
        <div className='bg-black h-60 flex'>
        <div className='p-2  ml-5 flex gap-12'>
            <div className='flex mt-16'>
                <div className='text-3xl mt-4 mr-2'>
                    <BsCalendar2DateFill />
                </div>
                <div>
                    <h1 className='text-2xl'>We are open monday-friday</h1>
                    <h1 className='text-3xl font-bold'>7:00 am - 9:00 pm</h1>
                </div>

            </div>
            <div className='flex mt-16'>
                <div className='text-3xl mt-4 mr-2'>
                    <MdAddCall></MdAddCall>
                </div>
                <div>
                    <h1 className='text-2xl'>Have you any question</h1>
                    <h1 className='text-3xl font-bold'>+880234245234</h1>
                </div>

            </div>
            <div className='flex mt-16'>
                <div className='text-3xl mt-4 mr-2'>
                   <SlLocationPin />
                </div>
                <div>
                    <h1 className='text-2xl'>Need a repair? Our address</h1>
                    <h1 className='text-3xl font-bold'>Live Street, Dhaka</h1>
                </div>

            </div>
        </div>

    </div>
    </div>
  )
}
