import React, {useState, useEffect} from 'react'
import { Navigate, NavLink, useNavigate, useParams } from "react-router-dom";
import {dummyData} from '../data/dummy'

function ProductDetails() {
  let {prodId} = useParams();
  const navigate = useNavigate();

  const [quantity,setQuantity] = useState(0);
  const [count, setCount] = useState(0);
  const [rating, setRating] = useState(0)
  let item = dummyData.find((product) => (product.id).toString() === (prodId).toString())
  useEffect(() => {
    setQuantity(parseInt(item.quantity))
    setRating(parseInt(item.rating))
  },[])

  const handleCounter = (which) => {
    if (which === 'inc') {
      if (count < quantity)
        setCount(prev => prev + 1)
    } else {
      if (count > 0)
        setCount(prev => prev - 1)
    }
  }
  
  const handleBackClick = () => {
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
          <div className="item-quantity">
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
              <div className="add-to-cart-btn">Add To Cart</div>
            </div>
          }
          <div className="back-to-store-wrapper">
            <span className="back-to-store-btn" onClick={() => handleBackClick()}>&#8592; back to store</span>
          </div>
        </div>
    </section>
  )
}

export default ProductDetails
