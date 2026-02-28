import React from "react"
export default function ProductCard({product,addToCart}){
return(<div className="card">
<img src={product.image} width="100%"/>
<h3>{product.name}</h3><p>₹{product.price}</p>
<button onClick={()=>addToCart(product)}>Add to Cart</button>
</div>)}