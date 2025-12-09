import React, { useContext } from 'react'
import { useLoaderData } from 'react-router-dom'
import { AuthContext } from '../../provider/Authprovider'

export const Checkout = () => {
  const service = useLoaderData()
  const { title, price, _id, img } = service
  const { user } = useContext(AuthContext)

  const handleCheckout = event => {
    event.preventDefault()
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const checkout = {
      customerName: name,
      email,
      img,
      date,
      service: title,
      service_id: _id,
      price: price
    }

    fetch('https://car-clinic-server-mu.vercel.app/checkout', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(checkout)
    })
      .then(res => res.json())
      .then(data => {
        if (data.insertedId) {
          alert('Service booked successfully!')
        }
      })
  }

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-10">
      
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-center mb-8">
        Checkout – {title}
      </h1>

      
      <div className="max-w-2xl mx-auto bg-base-200 p-6 sm:p-8 rounded-xl shadow-md">

        <form onSubmit={handleCheckout}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

            
            <div className="form-control">
              <label className="label font-medium">Name</label>
              <input
                type="text"
                name="name"
                className="input input-bordered"
                defaultValue={user?.displayName}
              />
            </div>

          
            <div className="form-control">
              <label className="label font-medium">Date</label>
              <input
                type="date"
                name="date"
                className="input input-bordered"
              />
            </div>

          
            <div className="form-control">
              <label className="label font-medium">Email</label>
              <input
                type="email"
                name="email"
                className="input input-bordered"
                defaultValue={user?.email}
                readOnly
              />
            </div>

            
            <div className="form-control">
              <label className="label font-medium">Due Amount</label>
              <input
                type="text"
                defaultValue={price}
                className="input input-bordered"
                readOnly
              />
            </div>

          </div>

          
          <button
            type="submit"
            className="btn btn-neutral w-full mt-6"
          >
            Order Confirm
          </button>
        </form>

      </div>
    </div>
  )
}
