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
    console.log(checkout)

    fetch('http://localhost:5000/checkout', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'

      },
      body: JSON.stringify(checkout)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
      if(data.insertedId) {
        alert('service book successfully')
      }
    })
  }

  return (
    <div className='items-center justify-center ml-80'>
      <div>Checkout {title}</div>

      <div>
        <form onSubmit={handleCheckout}>
          <div className='items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              <div className='card-body'>
                <fieldset className='fieldset'>
                  <label className='label'>Name</label>
                  <input
                    type='text'
                    name='name'
                    className='input'
                    defaultValue={user?.displayName}
                    placeholder='name'
                  />
                  <label className='label'>Date</label>
                  <input type='date' name='date' className='input' />
                  <label className='label'>Email</label>
                  <input
                    type='email'
                    name='email'
                    className='input'
                    defaultValue={user?.email}
                    placeholder='Email'
                  />
                  <label className='label'>Due Amount</label>
                  <input
                    type='text'
                    defaultValue={price}
                    className='input'
                    readOnly
                  />
                  <input
                    className='btn btn-neutral mt-4 btn-block'
                    type='submit'
                    value='Order Confirm'
                  />
                </fieldset>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
