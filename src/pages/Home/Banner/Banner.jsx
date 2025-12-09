import React from 'react';

import img1 from "../../../../public/asset/images/banner/1.jpg"; 
import img2 from "../../../../public/asset/images/banner/2.jpg"; 
import img3 from "../../../../public/asset/images/banner/3.jpg"; 
import img4 from "../../../../public/asset/images/banner/4.jpg"; 

const slides = [img1, img2, img3, img4];

const Banner = () => {
  return (
    <div className="w-full">
      <div className="carousel w-full h-[300px] sm:h-[500px] md:h-[550px] lg:h-[600px]">
        {slides.map((img, index) => (
          <div
            key={index}
            id={`slide${index + 1}`}
            className="carousel-item relative w-full"
          >
            <img src={img} className="w-full object-cover rounded-xl" />

            {/* Gradient & Content */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/0 flex items-center">
              <div className="text-white px-4 sm:px-8 lg:px-12 space-y-4 sm:space-y-6 md:space-y-7 max-w-lg sm:max-w-xl lg:max-w-2xl">
                <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold">
                  Affordable Price Of Every Service
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl">
                  Get the most satisfying service. Solve your car problems and feel better.
                </p>
                <div className="flex flex-wrap gap-2 sm:gap-4">
                  <button className="btn btn-outline">Outline</button>
                  <button className="btn btn-accent">Accent</button>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a
                href={`#slide${index === 0 ? slides.length : index}`}
                className="btn btn-circle"
              >
                ❮
              </a>
              <a
                href={`#slide${index === slides.length - 1 ? 1 : index + 2}`}
                className="btn btn-circle"
              >
                ❯
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
