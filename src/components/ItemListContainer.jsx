import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Spinner } from 'react-bootstrap'
import { getProducts } from '../asyncMock'
import ItemList from './ItemList'

const ItemListContainer = ({greeting}) => {
  const {categoryId} = useParams()
  const [products, setProducts] = useState('')
  useEffect(() => { 
    setProducts('')
    getProducts(categoryId)
      .then (response => setProducts(response))
  }, [categoryId])
  
	return (
    <div className='item-list-container'>
    {
      (() => {
        switch (categoryId) {
          case 'baño': 
            return <h2>Baño</h2>;
          case 'cocina': 
            return <h2>Cocina & comedor</h2>;
          case 'living': 
            return <h2>Living & dormitorio</h2>;
          case 'materas': 
            return <h2>Materas y lonas</h2>;
          case 'complementos': 
            return <h2>Complementos</h2>;
          default:
            return <h2>{greeting}</h2>;
        }
      }) ()
    }
    {products 
    ? 
      <ItemList products={products}/> 
    : 
      <h6><Spinner animation='border' size='sm' /> Cargando productos...</h6>}
    </div>
  )
}

export default ItemListContainer