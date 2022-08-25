import React from 'react'
import {useNavigate} from "react-router-dom";

function Cart({cart,clearCart}) {
  const navigate = useNavigate();
  const isEmpty = Object.keys(cart).length === 0;
  return (
    <div style={{"textAlign":"center"}}>
      <h2>Shopping Cart</h2>
      
      {
        isEmpty ?
        <h2>No Items Found In Cart</h2>
        :
        <div>
          {
            Object.keys(cart).map((key,idx) => {
              return (
                <div key={idx}>item #{key}, count {cart[key]}</div>
              )
            })
          }       
        </div>
      }


      <div className="back-to-store-wrapper">
        <span className="cart-back-to-store-btn" onClick={() => navigate("/store")}>&#8592; back to store</span>
      </div>
      <div className="cart-clear-cart" onClick={clearCart}>
        <h3>clear cart</h3>
      </div>
    </div>
  )
}

export default Cart
