import React from 'react'
import './HomeContainer.css'
import brand from '../../../assets/media/OpenBarLogo.png'

const HomeContainer = () => {
  return (
    <div className='flex homeContainer'>
        <img src={brand} alt="" className='homeBrand' />
        <h3>Disfruta de lo que mas te gusta</h3>
        <p className='text-gray-700'>Maded by Tomas Izuel - 2023</p>
    </div>
  )
}

export default HomeContainer