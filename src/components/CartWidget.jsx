import React, { useContext } from 'react'
import CartIcon from '../Images/CartIcon.svg'
import '../styles-sheets/CartWidget.css'
import { CartContext } from '../context/CartContext'
const CartWidget = () => {
  const { totalItems } = useContext(CartContext)
  
  return (
    !totalItems ?
      <></>
    :
      <div className='cart-widget'>
        <img src={CartIcon} alt="Carrito de compras" />
        <p>{totalItems}</p>
      </div>
  )
}

export default CartWidget