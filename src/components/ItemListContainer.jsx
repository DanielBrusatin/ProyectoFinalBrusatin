import React, { useEffect, useState } from 'react'
import ItemList from './ItemList'
import { getProducts } from '../asyncMock'

const ItemListContainer = ({greeting}) => {
  const [products, setProducts] = useState()
  useEffect(() => { 
    getProducts()
      .then (response => setProducts(response))
  }, [])
  
	return (
    <div className='item-list-container'>
      <h2>{greeting}</h2>
      {products ? <ItemList products={products}/> : <h6>Cargando productos...</h6>}
    </div>
  )
}

export default ItemListContainer