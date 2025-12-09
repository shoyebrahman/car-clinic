import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/Authprovider'
import { Bookingcard } from './Bookingcard'
import axios from 'axios'
import { useAxiosSecure } from '../../Hooks/useAxiosSecure'

export const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])
  const asiosSecure = useAxiosSecure()
  const url = `/checkout?email=${user.email}`
  useEffect(() => {
    if (user?.email) {
        asiosSecure.get(url)
        .then(res => setBookings(res.data))
        // axios.get(`https://car-clinic-server-mu.vercel.app/checkout?email=${user.email}`, {withCredentials: true})
        // .then(res => {
        //   setBookings(res.data)
        // })
      // fetch(`https://car-clinic-server-mu.vercel.app/checkout?email=${user.email}`)
      //   .then(res => res.json())
      //   .then(data => {
      //     console.log(data)
      //     setBookings(data)
      //   })
    }
  }, [user, asiosSecure, url])

  const handleDelete = id => {
    const proceed = confirm('Are you sure?');
    if (proceed) {
      fetch(`https://car-clinic-server-mu.vercel.app/checkout/${id}`, {
        method: 'DELETE'
      })
        .then(res => res.json())
        .then(data => {
          console.log(data)
          
          if (data.deletedCount > 0) {
            alert('Deleted Successfully')
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
          }
        })
    }
  }

  const handleBookingConform = id => {
    fetch(`https://car-clinic-server-mu.vercel.app/checkout/${id}`, {
      method: 'PATCH',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
      if(data.modifiedCount > 0) {
        //update state
        const remaining = bookings.filter(booking => booking._id !== id );
        const updated = bookings.find(booking => booking._id === id);
        updated.status = 'confirm'
        const newBookings = [updated, ...remaining];
        setBookings(newBookings)
      }
    })
  }

  return (
   <div className="px-4 sm:px-6 lg:px-12 py-10">
      
      
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center">
        Your Bookings ({bookings.length})
      </h2>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {bookings.map(booking => (
          <Bookingcard
            key={booking._id}
            booking={booking}
            handleBookingConform={handleBookingConform}
            handleDelete={handleDelete}
          />
        ))}
      </div>

      
      {bookings.length === 0 && (
        <p className="text-center text-gray-500 mt-6">
          You have no bookings yet.
        </p>
      )}
    </div>
  )
}
