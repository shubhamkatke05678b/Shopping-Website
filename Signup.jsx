import React,{useState} from "react"
import {useNavigate} from "react-router-dom"
export default function Signup(){
const nav=useNavigate()
const [email,setEmail]=useState("");const [pass,setPass]=useState("")
const submit=e=>{e.preventDefault()
const u=JSON.parse(localStorage.getItem("users")||"[]")
u.push({email,pass})
localStorage.setItem("users",JSON.stringify(u))
nav("/login")}
return<form onSubmit={submit} className="cart-container">
<h2>Signup</h2>
<input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
<input placeholder="Password" type="password" onChange={e=>setPass(e.target.value)}/>
<button>Signup</button></form>}