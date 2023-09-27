import React from 'react'
import Item from './Item'
import '../styles-sheets/ItemList.css'

const ItemList = ({products}) => {
  return (
    <div className='items-list'>
      {products.map(product => <Item key={product.id} {...product} />)}
    </div>
  )
}

export default ItemList