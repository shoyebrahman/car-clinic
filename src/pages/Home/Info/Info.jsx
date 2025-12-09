import React from 'react';
import { BsCalendar2DateFill } from "react-icons/bs";
import { SlLocationPin } from "react-icons/sl";
import { MdAddCall } from "react-icons/md";

export const Info = () => {
  return (
    <div className="mt-12">
      <div className="bg-black text-white py-12">
        <div className="container mx-auto grid 
                        grid-cols-1 
                        sm:grid-cols-2 
                        lg:grid-cols-3 
                        gap-8 px-4">

          {/* Opening Hours */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="text-4xl sm:text-5xl text-primary mt-1">
              <BsCalendar2DateFill />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl">We are open monday-friday</h2>
              <p className="text-2xl sm:text-3xl font-bold">7:00 am - 9:00 pm</p>
            </div>
          </div>

          {/* Contact */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="text-4xl sm:text-5xl text-primary mt-1">
              <MdAddCall />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl">Have you any question</h2>
              <p className="text-2xl sm:text-3xl font-bold">+880234245234</p>
            </div>
          </div>

          {/* Address */}
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="text-4xl sm:text-5xl text-primary mt-1">
              <SlLocationPin />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl">Need a repair? Our address</h2>
              <p className="text-2xl sm:text-3xl font-bold">Live Street, Dhaka</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
