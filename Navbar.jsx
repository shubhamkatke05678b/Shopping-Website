import React from "react"
import {Link,useNavigate} from "react-router-dom"
export default function Navbar({cartCount}){
const nav=useNavigate()
const user=localStorage.getItem("user")
const logout=()=>{localStorage.removeItem("user");nav("/login")}
return(<nav className="navbar"><h2>ShopEasy</h2><div>
<Link to="/">Home</Link><Link to="/cart">Cart({cartCount})</Link>
{user?<button onClick={logout}>Logout</button>:<>
<Link to="/login">Login</Link><Link to="/signup">Signup</Link></>}
</div></nav>)}