import React from 'react'
import ProductForm from './components/ProductForm'
import ProductList from './components/ProductList'
export default function Product() {
  return (
    <> 
      <h1>Product Manage</h1>
      
      {/* Add Product và Product Picture */}
      <ProductForm></ProductForm>


      {/* Render Product List */}
      <ProductList></ProductList>

    </>
  )
}
