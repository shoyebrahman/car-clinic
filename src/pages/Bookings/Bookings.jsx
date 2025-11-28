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
    <div>
      <h2 className='text-2xl font-bold mb-4'>
        Your Bookings ({bookings.length})
      </h2>

      {
        bookings.map(booking => (
          <Bookingcard
            key={booking._id}
            booking={booking}
            handleBookingConform={handleBookingConform}
            handleDelete={handleDelete}
          />
        ))
      }
    </div>
  )
}
