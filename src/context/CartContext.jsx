import { createContext, useState } from "react";
import React from 'react'
import Swal from "sweetalert2";
export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  let [totalItems, setTotalItems] = useState(0)

  function addItem(item) {
    if (cartList.some(cartItem => cartItem.id == item.id)) {
      Swal.fire({
        icon: 'info',
        title: 'Este producto ya está en el carrito'
      })
    } else {
      setCartList([...cartList, item])
      setTotalItems(totalItems += item.quantity)
    }
  }

  function removeItem(item) {
    setCartList(cartList.filter(cartItem => item.id != cartItem.id))
    setTotalItems(totalItems -= item.quantity)
  }

  function cleanCart () {
    setCartList([])
    setTotalItems(0)
  }
  return (
    <CartContext.Provider value={{cartList, totalItems, addItem, removeItem, cleanCart}}>
      {children}
    </CartContext.Provider> 
  )
}

export default CartContextProvider