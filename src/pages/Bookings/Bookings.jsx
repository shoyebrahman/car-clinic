import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../../provider/Authprovider'
import { Bookingcard } from './Bookingcard'

export const Bookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:5000/checkout?email=${user.email}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)
          setBookings(data)
        })
    }
  }, [user])

  const handleDelete = id => {
    const proceed = confirm('Are you sure?');
    if (proceed) {
      fetch(`http://localhost:5000/checkout/${id}`, {
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
    fetch(`http://localhost:5000/checkout/${id}`, {
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
