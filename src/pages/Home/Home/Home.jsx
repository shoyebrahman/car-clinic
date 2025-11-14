import React from 'react'
import Banner from '../Banner/Banner'
import { About } from '../About/About'
import Services from '../Services/Services'
import { Info } from '../Info/Info'

export default function Home() {
  return (
    <div> 
      <Banner></Banner> 
      <About></About>
      <Services></Services>
      <Info></Info>
    
    </div>
  )
}
