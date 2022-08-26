import React from 'react';
import { Link } from "react-router-dom";
import {renderPrice} from "../utils/renderPrice"

function Products({cart, items}) {
  return (
    <section className="store-wrapper">
      {
        items.map((item,idx) => {
          let count = 0;
          if (cart[item.prodId])
            count = cart[item.prodId]
          return (
            <Link 
              to={`/products/${item.prodId}`}
              className="product"
              key={idx}
            >
              {!!count &&
                <div className="product-inner-wrapper">
                 <div className="count-badge">{count}</div>
                </div>
              }
              <div className="prod-title">{item.title}</div>
                
                <div className="item-image">
                <div className="item-image-wrapper">
                  <div className="item-stamp">{item.stamp}</div>
                </div>
                  <img src={item.image} />
                  
                </div>
                 
                
                <div className="products-item-description">{item.description.substring(0,90)}...</div>
                <div className="itemPrice">
                  <div>{renderPrice(item)}</div>
                </div>
                <div className="products-category">
                    Category: {item.category}
                </div>
                <div className="products-item-quantity">
                  {
                    !!parseInt(item.quantity) ?
                    <div className="in-stock">{parseInt(item.quantity)} left in stock</div>
                    :
                    <div className="out-of-stock">out of stock</div>
                  }
                </div>
            </Link>
          )
        })
      } 
    </section>
  )
}

export default Products
