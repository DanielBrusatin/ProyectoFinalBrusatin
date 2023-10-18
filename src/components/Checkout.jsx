import React, { useContext, useState } from 'react'
import '../styles-sheets/Checkout.css';
import { CartContext } from '../context/CartContext';
import { Timestamp, addDoc, collection } from 'firebase/firestore'
import { db } from '../firebaseConfig';

const Checkout = () => {
  const {cartList, totalPrice, cleanCart} = useContext(CartContext)
  const [orderId, setOrderId] = useState('')

  async function handleForm(ev) {
    ev.preventDefault()
    const name = document.getElementById('name').value
    const lastname = document.getElementById('lastname').value
    const phone = document.getElementById('phone').value
    const email = document.getElementById('email').value
    const order = {
      buyer: {
        name: name,
        lastname: lastname,
        phone: phone,
        email: email
      },
      items: cartList,
      total: totalPrice,
      date: Timestamp.fromDate(new Date())
    }
    const ordersCollection = collection(db, 'orders')
    await addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    cleanCart()
  }

  if (orderId) {
    return (<h2>Orden generada con ID: {orderId}</h2>)
  } 
  
  return (
    <>
      <h2>Checkout</h2>
      <form onSubmit={handleForm}>
        <label htmlFor="name">Nombre</label>
        <input type="text" id="name" placeholder="Escribe tu nombre..." className="casillas"/>
        <label htmlFor="lastname">Apellido</label>
        <input type="text" id="lastname" placeholder="Escribe tu apellido..." className="casillas"/>
        <label htmlFor="phone">Telefono</label>
        <input type="text" id="phone" placeholder="Escribe tu telefono..." className="casillas"/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Escribe tu email..." className="casillas"/>
        <button type="submit" className="btn btn-success">ENVIAR</button>
      </form>
    </>
  )
}

export default Checkout