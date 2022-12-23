import React from 'react'
import CartWidget from '../CartWidget/CartWidget'

function Navbar() {
  return (
    <nav className='navbar flex justify-between items-center p-10'>
        <ul className='flex gap-5 items-center'>
            <li className='text-xl font-semibold'><a href="">Open Bar</a></li>
            <li className=''><a href="">Comidas</a></li>
            <li className=''><a href="">Tragos</a></li>
            <li className=''><a href="">Cervezas</a></li>
            <li className=''><a href="">Promos</a></li>
        </ul>
        <CartWidget />
    </nav>
  )
}

export default Navbar