import React, {useContext } from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'

import { RootContext } from '../../App'

export default function Product() {
  const {helloString} = useContext(RootContext);

  return (
    <> 
      <h1>Product Manage {helloString}</h1>
      
      {/* Add Product và Product Picture */}
      <ProductForm></ProductForm>


      {/* Render Product List */}
      <ProductList></ProductList>

    </>
  )
}
