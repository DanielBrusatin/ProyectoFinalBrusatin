import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Cart = () => {
  const  {cartList, totalItems, removeItem, cleanCart}  = useContext(CartContext)

  if (!totalItems) {
    return (
      <>
        <h2>Aun no hay productos en el carrito</h2>
        <Button as={NavLink} to={'/'}>Ir a la tienda</Button>
      </>
    )
  }
  return (
    cartList.map(producto => <div>
      <h2>{producto.name}</h2><button onClick={() => removeItem(producto)}></button>
    </div>)
  )
}

export default Cart