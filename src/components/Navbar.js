import { NavLink, useNavigate } from "react-router-dom";
import React from 'react'

const Navbar = () => {
  return (
    <nav className="navbar-wrapper">
      <NavLink 
        to="/"
        className={({isActive}) => (isActive ? "link active" : "link")}
        >Home</NavLink>
      <NavLink 
        to="/store"
        className={({isActive}) => (isActive ? "link active" : "link")}
        >Store</NavLink>
      <NavLink 
        to="/login"
        className={({isActive}) => (isActive ? "link active" : "link")}
        >Login</NavLink>
    </nav>
  )
}

export default Navbar
