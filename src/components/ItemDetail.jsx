import React from 'react'
import Card from 'react-bootstrap/Card'
import '../styles-sheets/Item.css'
import ItemCount from './ItemCount'

const ItemDetail = ({id, name, img, price, stock, description, category}) => {
  return (
    <Card id={id} style={{ width: '16rem' }} className="text-center">
      <Card.Header>Categoría: {category.toUpperCase()}</Card.Header>
      <Card.Img variant="top" src={`/img/${img}.png`} className='card-img'/>
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Precio: ${price}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <ItemCount initial={1} stock={stock} onAdd={quantity => console.log(`Se añadieron al carrito ${quantity} items.`)}/>
      <Card.Footer className="text-muted">Stock disponible: {stock} unidades</Card.Footer>
    </Card>  
  )
}

export default ItemDetail