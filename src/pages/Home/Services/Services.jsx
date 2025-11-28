//import React, { useEffect, useState } from 'react'
import { ServiceCard } from './ServiceCard'
import { useServices } from '../../../Hooks/useServices'
//rafcp

const Services = () => {
  const services = useServices()
    // const [services, setServices]= useState([])
    // useEffect( () => {
    //     fetch('https://car-clinic-server-mu.vercel.app/services')
    //     .then( res => res.json())
    //     .then(data => setServices(data))
    // }, [])
  return (
    <div className='mt-4'> 
      <div className='text-center'>
          <h1 className='text-5xl text-orange-600'>Our Services</h1>
        <p> the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
         <h1> {services.length} </h1>
      </div >
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            
      {
        services.map(service => <ServiceCard key={ service._id } service={service}>  </ServiceCard> )
      }
        </div>
    </div>
  )
}

export default Services;