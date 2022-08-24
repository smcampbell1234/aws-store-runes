import React from 'react'

function Cart({cart,clearCart}) {
  console.log(".... cart ; ",cart)
  return (
    <div style={{"textAlign":"center"}}>
      <h2>Shopping Cart</h2>
      {
        Object.keys(cart).map((key,idx) => {
          return (
            <div key={idx}>item #{key}, count {cart[key]}</div>
          )
        })
      }
      <div className="cart-clear-cart" onClick={clearCart}>
        <h3>clear cart</h3>
      </div>
    </div>
  )
}

export default Cart
