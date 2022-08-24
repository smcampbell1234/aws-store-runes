import { NavLink } from "react-router-dom";
import React, {useState,useEffect} from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({cart}) => {
  const [count,setCount] = useState(0)
  const getItemCount = () => {
    return Object.values(cart).reduce((acumulator,val) => acumulator + val,0)
  }

  useEffect(() => {
    setCount(getItemCount);
  },[cart])

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
      {
        !!count &&
        <NavLink 
        to="/cart"
        className={({isActive}) => (isActive ? "icon-active" : "icon-link")}
        >
          <FaShoppingCart />
          {/* <span className="cart-count-badge">{count}</span> */}
          {count}
        </NavLink>
      }
    </nav>
  )
}

export default Navbar
