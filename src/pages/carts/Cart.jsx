import React, { useEffect, useState } from 'react'
import api from '@api'
import { useSelector } from 'react-redux'
export default function Cart() {
  const cartStore = useSelector(store => store.cartStore)
  const [cartItems, setCartItems] = useState(null);

  useEffect(() => {
    if (cartStore.data) {
      setCartItems(cartStore.data.cart_details)
    }
  }, [cartStore.data])
  return (
    <div>
      <h1>Cart {cartItems ? cartItems[0].cart_id : <></>}</h1>
      <ul>
        {
          cartItems?.map((item, index) => (
            <li key={Date.now() * Math.random()}>
              <div>
                STT: {index + 1} - Product Name: {item.product.name} - Product Quantity: {item.quantity} - Note: {item.note}
              </div>
              <img style={{width: '50px', height: '50px', borderRadius: '50%'}} src={`${item.product.avatar}`}/>
            </li>
          ))
        }
      </ul>
    </div>
  )
}
