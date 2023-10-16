import React, { useContext } from 'react'
import { Col, Row } from 'react-bootstrap'
import { BsTrashFill } from 'react-icons/bs'
import { CartContext } from '../context/CartContext'
import '../styles-sheets/CartItem.css'

const CartItem = ({id, name, price, quantity}) => {
  const { removeItem } = useContext(CartContext)
  return (
    <Row className='cart-row'>
      <Col md={1} style={{textAlign: 'center'}}>{quantity}</Col>
      <Col md={5}>{name}</Col>
      <Col md={1} style={{textAlign: 'right'}}>${price}</Col>
      <Col md={2} style={{textAlign: 'right'}}>${quantity * price}</Col>
      <Col md={3}>
        <button className="btn btn-success remove-from-cart" onClick={() => removeItem({id, quantity, price})}>
          <BsTrashFill className='remove-from-cart-button'/>
          <p>Eliminar producto</p>
        </button>
      </Col>
    </Row>
  )
}

export default CartItem