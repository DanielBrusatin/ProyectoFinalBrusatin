import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import '../styles-sheets/Item.css'
import ItemCount from './ItemCount'
import { NavLink } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import { useContext } from 'react'
import { CartContext } from '../context/CartContext'

const ItemDetail = ({id, name, img, price, stock, description, category}) => {
  const [added, setAdded] = useState(false)
  const { addItem }= useContext(CartContext)
  const handleOnAdd = (quantity) => {
    const item = {id, name, price, quantity}
    addItem(item)
    setAdded(true)
  }

  return (
    <Card id={id} style={{ width: '16rem' }} className="text-center">
      <Card.Header>Categoría: {category.toUpperCase()}</Card.Header>
      <Card.Img variant="top" src={`/img/${img}.png`} alt={name} className='card-img'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio: ${price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      { 
        !added ?
        <ItemCount initial={1} stock={stock} onAdd={(quantity) => handleOnAdd(quantity)}/>
        : 
        <Button as={NavLink} to={`/cart`} variant="success" className='card-button'>Terminar compra</Button>
      }
      <Card.Footer className="text-muted">Stock disponible: {stock} unidades</Card.Footer>
    </Card>  
  )
}

export default ItemDetail