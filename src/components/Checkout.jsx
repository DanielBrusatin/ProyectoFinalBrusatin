import React, { useContext, useState } from 'react'
import { db } from '../firebaseConfig';
import { Timestamp, addDoc, collection, doc, writeBatch } from 'firebase/firestore'
import { CartContext } from '../context/CartContext';
import '../styles-sheets/Checkout.css';

const Checkout = () => {
  const {cartList, totalPrice, cleanCart} = useContext(CartContext)
  const [orderId, setOrderId] = useState('')
  const [name, setName] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  async function handleForm(ev) {
    ev.preventDefault()
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

    const batch = writeBatch(db)
    cartList.forEach(item => {
      const itemRef = doc(db, 'items', item.id)
      batch.update(itemRef, {stock: item.newStock})
    })
    await batch.commit()

    const ordersCollection = collection(db, 'orders')
    await addDoc(ordersCollection, order).then(({id}) => setOrderId(id))
    cleanCart()
  }
  
  return (
    orderId
    ?
      <h2>Orden generada con ID: {orderId}</h2>
    :
      <>
        <h2>Checkout</h2>
        <form onSubmit={handleForm}>
          <label htmlFor='name'>Nombre</label>
          <input type='text' id='name' placeholder='Escribe tu nombre...' className='casillas' onChange={(ev) => setName(ev.target.value)} required/>
          <label htmlFor='lastname'>Apellido</label>
          <input type='text' id='lastname' placeholder='Escribe tu apellido...' className='casillas' onChange={(ev) => setLastname(ev.target.value)} required/>
          <label htmlFor='phone'>Telefono <span style={{color: 'gray'}}>(solo números)</span></label>
          <input type='tel' id='phone' placeholder='Escribe tu telefono...' className='casillas' pattern='[0-9]*' onChange={(ev) => setPhone(ev.target.value)} required/>
          <label htmlFor='email'>Email <span style={{color: 'gray'}}>(ejemplo@ejemplo.com)</span></label>
          <input type='email' id='email' placeholder='Escribe tu email...' className='casillas' onChange={(ev) => setEmail(ev.target.value)} required/>
          <button type='submit' className='btn btn-success'>ENVIAR</button>
        </form>
      </>
  )
}

export default Checkout