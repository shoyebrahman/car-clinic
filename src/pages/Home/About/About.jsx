import React from 'react';
import parts from "../../../../public/asset/images/about_us/parts.jpg";
import person from "../../../../public/asset/images/about_us/person.jpg";

export const About = () => {
  return (
    <div className="bg-base-200">
      <div className="container mx-auto px-4 py-12 lg:py-24">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          
          {/* Images */}
          <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
            <img
              src={person}
              className="w-3/4 sm:w-2/3 lg:w-3/4 rounded-lg shadow-2xl"
              alt="Person"
            />
            <img
              src={parts}
              className="w-1/2 sm:w-1/3 lg:w-1/2 rounded-lg absolute border-4 sm:border-8 border-white right-0 lg:right-12 top-1/2 transform -translate-y-1/2 shadow-2xl"
              alt="Parts"
            />
          </div>

          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl font-bold text-orange-500 mb-2">About Us</h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-bold mb-4">
              We are qualified & experienced in this field
            </h1>
            <p className="text-sm sm:text-base md:text-lg mb-6">
              There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
            </p>
            <button className="btn btn-primary">Get More Info</button>
          </div>

        </div>
      </div>
    </div>
  );
};
