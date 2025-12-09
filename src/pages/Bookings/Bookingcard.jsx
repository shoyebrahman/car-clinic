import React from 'react'

export const Bookingcard = ({ booking, handleDelete, handleBookingConform }) => {
  const { price, img, customerName, email, date, service, _id, status } = booking;

  return (
    <div className="bg-base-100 shadow-md rounded-lg p-4 mb-4">

      {/* Desktop / Tablet Table */}
      <div className="hidden md:block overflow-x-auto">
        <table className="table w-full">
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
              <td><input type="checkbox" className="checkbox" /></td>

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
              <td className="flex flex-col gap-2">
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost bg-red-600">
                  Cancel
                </button>
                {status === 'confirm' ? (
                  <span className='font-bold text-primary'>Confirmed</span>
                ) : (
                  <button onClick={() => handleBookingConform(_id)} className="btn btn-ghost bg-green-600">
                    Confirm
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/*  mobilepart */}
      <div className="md:hidden flex flex-col gap-3 border-b pb-4">
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

        <div>
          <p><span className="font-semibold">Service:</span> {service}</p>
          <p><span className="font-semibold">Date:</span> {date}</p>
          <p><span className="font-semibold">Price:</span> ${price}</p>
        </div>

        <div className="flex gap-2 flex-wrap">
          <button onClick={() => handleDelete(_id)} className="btn btn-sm btn-error">
            Cancel
          </button>
          {status === 'confirm' ? (
            <span className='font-bold text-primary self-center'>Confirmed</span>
          ) : (
            <button onClick={() => handleBookingConform(_id)} className="btn btn-sm btn-success">
              Confirm
            </button>
          )}
        </div>
      </div>

    </div>
  )
}
