import React from 'react'

function ItemCard( props ) {
  return (
    <div>
      <img src={props.image} alt="" />
      <h3>{props.name}</h3>
      <p>{props.price}</p>
    </div>
  )
}

export default ItemCard