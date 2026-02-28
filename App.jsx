import React,{useState} from "react"
import {BrowserRouter as Router,Routes,Route,Navigate} from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Checkout from "./pages/Checkout"
export default function App(){
const [cart,setCart]=useState([])
const user=localStorage.getItem("user")
const add=p=>setCart([...cart,p])
const rem=i=>{const c=[...cart];c.splice(i,1);setCart(c)}
return(<Router><Navbar cartCount={cart.length}/>
<Routes>
<Route path="/" element={<Home addToCart={add}/>}/>
<Route path="/cart" element={user?<Cart cart={cart} removeFromCart={rem}/>:<Navigate to="/login"/>}/>
<Route path="/checkout" element={user?<Checkout cart={cart}/>:<Navigate to="/login"/>}/>
<Route path="/login" element={<Login/>}/>
<Route path="/signup" element={<Signup/>}/>
</Routes></Router>)}