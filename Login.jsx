import React,{useState} from "react"
import {useNavigate} from "react-router-dom"
export default function Login(){
const nav=useNavigate()
const [email,setEmail]=useState("");const [pass,setPass]=useState("")
const submit=e=>{e.preventDefault()
const u=JSON.parse(localStorage.getItem("users")||"[]")
const ok=u.find(x=>x.email===email&&x.pass===pass)
if(ok){localStorage.setItem("user",email);nav("/")}
else alert("Invalid")}
return<form onSubmit={submit} className="cart-container">
<h2>Login</h2>
<input placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
<input placeholder="Password" type="password" onChange={e=>setPass(e.target.value)}/>
<button>Login</button></form>}