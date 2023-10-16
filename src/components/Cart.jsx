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
        <Button as={NavLink} to={'/'}>Ir a la tienda</Button>
      </>
    )
  }
  return (
    <>
      <h2>Carrito</h2>
      <Container fluid>
        {cartList.map(item => <CartItem key={item.id} {...item}/>)}
        <Row style={{margin: 20}}>
          <Col md={7} style={{textAlign: 'right'}}>TOTAL</Col>
          <Col md={2} style={{textAlign: 'right'}}>${totalPrice}</Col>
          <Col md={3}>
            <button className="btn btn-success remove-from-cart" onClick={cleanCart}>
              <BsTrashFill className='remove-from-cart-button'/>
              <p>Vaciar carrito</p>
            </button>
          </Col>
        </Row>
        <Row>
          <Button variant="success" as={NavLink} to={'/checkout'}>Checkout</Button>
        </Row>
      </Container>
    </>
  )
}

export default Cart