import { createContext, useEffect, useState } from 'react';
import React from 'react'
import Swal from 'sweetalert2';
export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([])
  let [totalItems, setTotalItems] = useState(0)
  let [totalPrice, setTotalPrice] = useState(0)
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem('cartList'))
    if (savedCart) {
      setCartList(savedCart)
      setTotalItems(JSON.parse(localStorage.getItem('totalItems')))
      setTotalPrice(JSON.parse(localStorage.getItem('totalPrice')))
    } 
  }, [])
  

  function addItem(item) {
    if (cartList.some(cartItem => cartItem.id == item.id)) {
      Swal.fire({
        icon: 'info',
        title: 'Este producto ya está en el carrito'
      })
    } else {
      const newCart = [...cartList, item]
      setCartList(newCart)
      localStorage.setItem('cartList', JSON.stringify(newCart))
      setTotalItems(totalItems += item.quantity)
      localStorage.setItem('totalItems', totalItems)
      setTotalPrice(totalPrice += item.quantity * item.price)
      localStorage.setItem('totalPrice', totalPrice)
    }
  }

  function removeItem(item) {
    const newCart = cartList.filter(cartItem => item.id != cartItem.id)
    setCartList(newCart)
    localStorage.setItem('cartList', JSON.stringify(newCart))
    setTotalItems(totalItems -= item.quantity)
    localStorage.setItem('totalItems', totalItems)
    setTotalPrice(totalPrice -= item.quantity * item.price)     
    localStorage.setItem('totalPrice', totalPrice)
  }

  function cleanCart () {
    setCartList([])
    localStorage.setItem('cartList', '[]')
    setTotalItems(0)
    localStorage.setItem('totalItems', 0)
    setTotalPrice(0)
    localStorage.setItem('totalPrice', 0)
  }
  
  return (
    <CartContext.Provider value={{cartList, totalItems, totalPrice, addItem, removeItem, cleanCart}}>
      {children}
    </CartContext.Provider> 
  )
}

export default CartContextProvider