import React, { useEffect, useState } from 'react'

export const useServices = () => {
           const [services, setServices] = useState([]);

           useEffect( () => {
            fetch('https://car-clinic-server-mu.vercel.app/services')
                .then(res => res.json())
                .then(data => setServices(data))
           }, [])

           return services;
}
