import React from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import '../styles-sheets/Item.css'
import { NavLink } from 'react-router-dom'

const Item = ({id, name, img, price, stock}) => {
  return (
    <Card id={id} style={{ width: '16rem' }} className="text-center">
      <Card.Img variant="top" src={`/img/${img}.png`} alt={name} className='card-img'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio: ${price}</Card.Subtitle>
      </Card.Body>
      <Button as={NavLink} to={`/item/${id}`} variant="primary" className='card-button'>Ver detalles</Button>
      <Card.Footer className="text-muted">Stock disponible: {stock} unidades</Card.Footer>
    </Card>  
  )
}

export default Item