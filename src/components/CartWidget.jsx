import React from 'react'
import CartIcon from '../Images/CartIcon.svg'
import '../styles-sheets/CartWidget.css'
const CartWidget = () => {
  return (
    <div className='cart-widget'>
      <img src={CartIcon} alt="Carrito de compras" />
      <p>4</p>
    </div>
  )
}

export default CartWidget