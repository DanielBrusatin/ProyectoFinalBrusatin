import React from 'react'
import '../styles-sheets/Checkout.css';

const Checkout = () => {
  return (
    <>
      <h2>Checkout</h2>
      <form>
        <label htmlFor="nombre">Nombre</label>
        <input type="text" id="nombre" placeholder="Escribe tu nombre..." className="casillas"/>
        <label htmlFor="telefono">Telefono</label>
        <input type="text" id="telefono" placeholder="Escribe tu telefono..." className="casillas"/>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" placeholder="Escribe tu email..." className="casillas"/>
        <button type="submit" className="btn btn-success">ENVIAR</button>
      </form>
    </>
  )
}

export default Checkout