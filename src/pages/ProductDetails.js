import React, {useState} from 'react'
import {useNavigate, useParams} from "react-router-dom";
import {dummyData} from '../data/dummy'

function ProductDetails({cart,setCart,removeItem}) {
  let {prodId} = useParams();
  const navigate = useNavigate();

  const [count, setCount] = useState(() => !!cart[prodId] ? cart[prodId] : 1);
  // const [rating, setRating] = useState(0)
  const [isSaved, setIsSaved] = useState(!!cart[prodId]);
  let item = dummyData.find((product) => (product.id).toString() === (prodId).toString())
  const isCartEmpty = Object.keys(cart).length === 0;

  // handlers
  const handleCounter = (which) => {
    if (which === 'inc') {
      if (count < item.quantity) {
        setCount(prev => prev + 1)
        setIsSaved(false)
      }
    } else {
      if (count > 1){
        let newCart = {...cart}
        newCart[item.id] = count -1;
        setCart(newCart)
        setCount(prev => prev - 1)
        setIsSaved(true)
      } else {
        // remove iten
        removeItem(item.id)
        setIsSaved(false)
      }
    }
  }

  const handleCart = () => {
    // since we override one key-value pare, 
    // we don't need to chick if item already exists
    let newCart = {...cart}
    newCart[item.id] = count;
    setCart(newCart)
    setIsSaved(true)
    navigate("/store")
  }

  return (
    <section className="detail-wrapper">
        <div className="detail-img-wrapper">
          <div className="item-image">
            <img src={item.image} />
          </div>
        </div>
        <div className="detail-details-wrapper">
          <div className="detail-title">{item.title}</div>
          <div className="detail-description">{item.description.substring(0,90)}...</div>
          <div className="itemPrice">
            {
              !!item.sale &&
              <div><s>{(parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.sale)/100).toFixed(2)}</s></div>
            }
            <div>{item.price}</div>
          </div>
          <div className="products-item-quantity">
            {
              !!parseInt(item.quantity) ?
              <div className="in-stock">{parseInt(item.quantity)} left in stock</div>
              :
              <div className="out-of-stock">out of stock</div>
            }
          </div>
          {
            !!parseInt(item.quantity) &&
            <div className="add-to-cart-wrapper">
              <div className="counter">
              <div className="count-button"  onClick={()=>handleCounter("dec")}>&#x2193;</div>
                <span className="number">{count}</span>
                <div className="count-button" onClick={()=>handleCounter("inc")}>&#x2191;</div>
              </div>
              <div className={!isSaved ? "add-to-cart-btn btn-warning" : "add-to-cart-btn"} onClick={handleCart}>Add To Cart</div>
            </div>
          }
          {
            !isCartEmpty &&
            <div className="checkout-btn-wrapper">
              <span className="checkout-btn" onClick={() => navigate("/cart")}>CHECK OUT</span>
            </div>
          }
          <div className="back-to-store-wrapper">
            <span className="back-to-store-btn" onClick={() => navigate("/store")}>&#8592; back to store</span>
          </div>
        </div>
    </section>
  )
}

export default ProductDetails
