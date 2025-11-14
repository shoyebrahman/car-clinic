import React from 'react'

import img1 from "../../../../public/asset/images/banner/1.jpg" 
import img2 from "../../../../public/asset/images/banner/2.jpg" 
import img3 from "../../../../public/asset/images/banner/3.jpg" 
import img4 from "../../../../public/asset/images/banner/4.jpg" 
import img5 from "../../../../public/asset/images/banner/5.jpg" 
import img6 from "../../../../public/asset/images/banner/6.jpg" 

const Banner = () => {
  return (
    <div>
     <div className="carousel w-full h-[600px] pb-18">
  <div id="slide1" className="carousel-item rounded-xl relative w-full">
    <img
      src={img1}
      className="w-full rounded-xl" />
    <div className="absolute left-0 top-0 mr-2 h-full rounded-xl bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className=' text-white space-y-7 mt-40 rounded-xl pl-12 w-1/2'>
          <h2 className='text-6xl '>Apordable Price Of Every Services</h2>
          <p>Get the Most Satisfying Service . Solve your car Problem and feel better satisfy</p>

          <div className=''>
            <button className="btn btn-outline mr-2">Accent</button>

            <button className="btn btn-accent">Accent</button>

          </div>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-4/5 mr-2 flex -translate-y-1/2 transform justify-end">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src={img2}
      className="w-full rounded-xl" />
   <div className="absolute left-0 top-0 mr-2 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className=' text-white space-y-7 mt-40 rounded-xl pl-12 w-1/2'>
          <h2 className='text-6xl '>Apordable Price Of Every Services</h2>
          <p>Get the Most Satisfying Service . Solve your car Problem and feel better satisfy</p>

          <div className=''>
            <button className="btn btn-outline mr-2">Accent</button>

            <button className="btn btn-accent">Accent</button>

          </div>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-4/5 mr-2 flex -translate-y-1/2 transform justify-end">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src={img3}
      className="w-full rounded-xl" />
   <div className="absolute left-0 top-0 mr-2 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className=' text-white space-y-7 mt-40 rounded-xl pl-12 w-1/2'>
          <h2 className='text-6xl '>Apordable Price Of Every Services</h2>
          <p>Get the Most Satisfying Service . Solve your car Problem and feel better satisfy</p>

          <div className=''>
            <button className="btn btn-outline mr-2">Accent</button>

            <button className="btn btn-accent">Accent</button>

          </div>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-4/5 mr-2 flex -translate-y-1/2 transform justify-end">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
    <img
      src={img4}
      className="w-full rounded-xl" />
   <div className="absolute left-0 top-0 mr-2 h-full bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
        <div className=' text-white space-y-7 mt-40 rounded-xl pl-12 w-1/2'>
          <h2 className='text-6xl '>Apordable Price Of Every Services</h2>
          <p>Get the Most Satisfying Service . Solve your car Problem and feel better satisfy</p>

          <div className=''>
            <button className="btn btn-outline mr-2">Accent</button>

            <button className="btn btn-accent">Accent</button>

          </div>
        </div>
    </div>
    <div className="absolute left-5 right-5 top-4/5 mr-2 flex -translate-y-1/2 transform justify-end">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    </div>
  )
}

export default Banner;
