import React from 'react'
import { NavLink } from 'react-router-dom'
import Nav from "./Nav"

const Header = () => {
  return (<div style={{
    border:"1px solid black",
   padding:"10px",
   backgroundColor:"#52521f"
  }}>
     <NavLink to = "/">
      <img style={
        {
          width:"15%",
      height:"60px",
      marginTop:"15px",
      padding:"auto" ,
      }
      } src='./images/looogooo.png' alt ="pic"/>
     </NavLink>
     <Nav/>
     </div>
  )
}
export default Header
 








