import React from 'react'
const product = {
    name : "Laptop",
    price : 1200,
    available : "In stock"
}
const ProductInfo = () => {
  return (
    <div>
        <h1>Name : {product.name}</h1>
        <h1>Price : ${product.price}</h1>
        <h1>Available : {product.available}</h1>
    </div>
  )
}

export default ProductInfo