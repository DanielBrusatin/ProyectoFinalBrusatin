import React, { useEffect, useState } from 'react'
import { getProductById } from '../asyncMock'
import ItemDetail from './ItemDetail'
import '../styles-sheets/ItemListContainer.css'

const ItemDetailContainer = () => {
  const [product, setProduct] = useState()
  useEffect(() => { 
    getProductById(8)
      .then (response => setProduct(response))
  }, [])
  
	return (
    <div className='item-detail-container'>
      {product ? <ItemDetail {...product}/> : <h6>Cargando productos...</h6>}
    </div>
  )
}

export default ItemDetailContainer