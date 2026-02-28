import React from "react"
import ProductCard from "../components/ProductCard"
import products from "../components/products"
export default function Home({addToCart}){
return <div className="container">{products.map(p=><ProductCard key={p.id} product={p} addToCart={addToCart}/>)}</div>}