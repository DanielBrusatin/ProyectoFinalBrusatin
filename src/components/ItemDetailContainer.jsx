import React, { useEffect, useState } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'
import '../styles-sheets/ItemListContainer.css'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
  const {id} = useParams()
  const [product, setProduct] = useState()
  useEffect(() => { 
    getProductById(id)
      .then (response => setProduct(response))
  }, [])
  
	return (
    <div className='item-detail-container'>
      <h2>Detalle de producto</h2>
      {product ? <ItemDetail {...product}/> : <h6>Cargando producto...</h6>}
    </div>
  )
}

export default ItemDetailContainer