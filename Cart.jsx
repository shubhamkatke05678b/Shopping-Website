import React from "react"
import {useNavigate} from "react-router-dom"
export default function Cart({cart,removeFromCart}){
const nav=useNavigate()
const total=cart.reduce((s,i)=>s+i.price,0)
return<div className="cart-container"><h2>Your Cart</h2>
{cart.map((i,idx)=><div key={idx}>{i.name} ₹{i.price}<button onClick={()=>removeFromCart(idx)}>Remove</button></div>)}
<h3>Total ₹{total}</h3><button onClick={()=>nav("/checkout")}>Checkout</button></div>}