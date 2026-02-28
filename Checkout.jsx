import React from "react"
export default function Checkout({cart}){
const total=cart.reduce((s,i)=>s+i.price,0)
const pay=()=>{
const options={key:"rzp_test_1234567890",amount:total*100,currency:"INR",name:"ShopEasy",description:"Order",handler:()=>alert("Payment Success")}
new window.Razorpay(options).open()
}
return<div className="cart-container"><h2>Checkout</h2><h3>Total ₹{total}</h3><button onClick={pay}>Pay Now</button></div>}