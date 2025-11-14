import React from 'react'
import parts from "../../../../public/asset/images/about_us/parts.jpg"
import person from "../../../../public/asset/images/about_us/person.jpg"

export const About = () => {
  return (
    <div className=''>
        <div className="hero bg-base-200 min-h-screen">
  <div className=" hero-content flex-col lg:flex-row">
   <div className='w-1/2 relative'>
     <img
      src={person}
      className="w-3/4 * rounded-lg shadow-2xl"
    />
     <img
      src={parts}
      className="w-1/2 rounded-lg absolute border-8 border-white right-5 top-1/2 shadow-2xl"
    />
   </div>
    <div className='lg:w-1/2'>
       <h1 className='text-3xl font-bold text-orange-500'>About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">
       here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
      </p>
      <button className="btn btn-primary">Get More info </button>
    </div>
  </div>
</div>
    </div>
  )
}



