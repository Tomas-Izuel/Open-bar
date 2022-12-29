import React from 'react'

function DrinksWidget() {
  return (
    <button className='navButton selected flex justify-center items-center flex-col'>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M20.832 4.555A1 1 0 0 0 20 3H4a1 1 0 0 0-.832 1.554L11 16.303V20H8v2h8v-2h-3v-3.697l7.832-11.748zm-2.7.445-2 3H7.868l-2-3h12.264z"/></svg>
        <p>Drinks</p>
    </button>
  )
}

export default DrinksWidget