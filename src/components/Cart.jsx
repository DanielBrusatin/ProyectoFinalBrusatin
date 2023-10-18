import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { NavLink } from 'react-router-dom'
import { Button, Col, Container, Row, Table } from 'react-bootstrap'
import CartItem from './CartItem'
import { BsTrashFill } from 'react-icons/bs'

const Cart = () => {
  const  {cartList, totalItems, totalPrice, removeItem, cleanCart}  = useContext(CartContext)

  if (!totalItems) {
    return (
      <>
        <h2>Aun no hay productos en el carrito</h2>
        <Button variant="success" as={NavLink} to={'/'}>Ir a la tienda</Button>
      </>
    )
  }
  return (
    <>
      <h2>Carrito</h2>
      <Container fluid>
        {cartList.map(item => <CartItem key={item.id} {...item}/>)}
        <Row style={{margin: 20, display: 'flex', justifyContent: 'center'}}>
          <h4 style={{textAlign: 'center'}}>TOTAL: ${totalPrice}</h4>
            <button className="btn btn-success remove-from-cart" onClick={cleanCart} style={{width: 'fit-content'}}>
              <BsTrashFill className='remove-from-cart-button'/>
              <span>Vaciar carrito</span>
            </button>
        </Row>
        <Row>
          <Button variant="success" as={NavLink} to={'/checkout'}>Finalizar compra</Button>
        </Row>
      </Container>
    </>
  )
}

export default Cart