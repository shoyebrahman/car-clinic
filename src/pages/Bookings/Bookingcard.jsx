import React from 'react'

export const Bookingcard = ({ booking, handleDelete, handleBookingConform }) => {
  const { price, img, customerName, email, date, service, _id, status } = booking;

  

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th></th>
            <th>Customer</th>
            <th>Service</th>
            <th>Date</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <input type="checkbox" className="checkbox" />
            </td>

            <td>
              <div className="flex items-center gap-3">
                <div className="avatar">
                  <div className="mask mask-squircle h-12 w-12">
                    <img src={img} alt={customerName} />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{customerName}</div>
                  <div className="text-sm opacity-50">{email}</div>
                </div>
              </div>
            </td>

            <td>{service}</td>
            <td>{date}</td>
            <td>${price}</td>

            <td>
              <button onClick={ () => handleDelete(_id)} className="btn btn-ghost bg-red-600">Cancel</button>
           { 
             status === 'confirm' ? <span className='font-bold text-primary'> confirmed</span> :
            <button onClick={ () => handleBookingConform(_id)} className="btn btn-ghost bg-red-600">Confirm</button> }
              
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
