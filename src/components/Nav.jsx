import React from 'react'
import { NavLink } from 'react-router-dom'
import{FiShoppingCart} from "react-icons/fi"
import "./Nav.css"


const Nav = () => {
 
  return (
   
  <div className='navu'>
     <ul className='navu1' >
       
        <NavLink to = "/" className="abhay" style={{color:"white"}}>Home</NavLink>
       
        <NavLink to = "/about" style={{color:"white"}}>About</NavLink>
       
        <NavLink to = "/products" style={{color:"white"}}>Products</NavLink>
       
        <NavLink to = "/contact" style={{color:"white"}}>Contact</NavLink>
       
        <NavLink to="/cart" className="navbar-link cart-trolley--link" style={{color:"white"}}><FiShoppingCart className="cart-trolley" /><span className='cart-tatol--item'>10</span></NavLink>
     </ul>
     </div>
  )
}
export default Nav
