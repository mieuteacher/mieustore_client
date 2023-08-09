import React, { useEffect, useState } from 'react'
import api from '@api'
export default function ProductList() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        api.products.findMany()
        .then(res => {
            if(res.status == 200) {
                setProducts(res.data.data)
            }else {
                alert(res.data.message)
            }
        })
        .catch(err => {
            alert("Lỗi server")
        })
    }, [])
  return (
    <div>
        <h1>Product List</h1>
        <ul>
            {
                products.map((product, index) => (
                    <li key={Date.now() * Math.random()}>
                        <div>
                         Product Name: {product.name} ___   Product Price: {product.price}   ___  Product des: {product.des}
                        </div>
                        {
                            product.product_pictures.map((picture) => (
                                <img key={Date.now() * Math.random()} style={{width: '50px', height: '50px'}} src={`${picture.url}`}/>                           
                            ))
                        }
                        <button type="button" className="btn btn-primary">Buy</button>
                    </li>
                ))
            }
        </ul>
    </div>
  )
}
