import React from 'react'
import "./navbar.css"
import BeerWidget from '../BeerWidget/BeerWidget'
import CartWidget from '../CartWidget/CartWidget'
import DrinksWidget from '../DrinksWidget/DrinksWidget'
import FoodWidget from '../FoodWidget/FoodWidget'
import PromoWidget from '../PromoWidget/PromoWidget'

function Navbar() {
  return (
    <nav className='navbar'>
        <ul className='flex justify-between items-center'>
          <li> <BeerWidget /> </li>
          <li> <DrinksWidget /> </li>
          <li> <CartWidget/> </li>
          <li> <FoodWidget/> </li>
          <li> <PromoWidget/> </li>
        </ul>
    </nav>
  )
}

export default Navbar