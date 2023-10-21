import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
import { BsCartPlus } from 'react-icons/bs';
import '../styles-sheets/ItemCount.css'

const ItemCount = ({initial, stock, onAdd}) => {
  const [quantity, setQuantity] = useState(stock && initial)
  const minus = () => setQuantity(quantity > 1 ? quantity - 1 : quantity)
  const plus = () => setQuantity(quantity < stock ? quantity + 1 : quantity)
  
  return (
    <div className='item-count-container'>
      <div className='item-count'>
        <AiFillMinusCircle onClick={minus} className='item-count-button'/>
        <p>{quantity}</p>
        <AiFillPlusCircle onClick={plus} className='item-count-button'/>
      </div>
        <button className='btn btn-success add-to-cart' onClick={() => onAdd(quantity)} disabled={!stock}>
          <BsCartPlus className='add-to-cart-button'/>
          <p>Add to cart</p>
        </button>
    </div>
  )
}

export default ItemCount