import { NavLink } from "react-router-dom";
import React, {useState,useEffect} from 'react'
import { FaShoppingCart } from "react-icons/fa";

const Navbar = ({cart,user,handleLogout}) => {
  const [count,setCount] = useState(0)
  const getItemCount = () => {
    return Object.values(cart).reduce((acumulator,val) => acumulator + val,0)
  }

  useEffect(() => {
    setCount(getItemCount);
  },[cart])


  let isLoggedIn = !!user.name && !!user.email;

  return (
    <nav className="navbar-wrapper">
      <NavLink 
        to="/"
        className={({isActive}) => (isActive ? "link active" : "link")}
        >Home</NavLink>
      <NavLink 
        to="/store"
        className={({isActive}) => isActive ? "link active" : "link"}
        >Store</NavLink>

      {
        !!user.name && !!user.email &&
        <NavLink
          to="/dashboard"
          className={({isActive}) => isActive ? "link active" : "link"}
        >
          Dashboard
        </NavLink>
      }
        
      <div className="nav-login-cart link">
        
      {
        !isLoggedIn ?
        <NavLink 
        to="/login"
        className={({isActive}) => (isActive ? "link-login active" : "link-login-inactive")}
        >Login</NavLink>
        :
        <span >{user.name} / <span className="logout-button" onClick={handleLogout}>Logout</span></span>
      }


        




        {
          !!count &&
          <NavLink 
          to="/cart"
          className={({isActive}) => (isActive ? "icon-active" : "icon-link")}
          >
            <FaShoppingCart />
            <div className="cart-count-badge">{count}</div>
          </NavLink>
        }
      </div>

    </nav>
  )
}

export default Navbar
