import React from 'react';
import { Link } from "react-router-dom";
import {dummyData} from '../data/dummy'

function Products() {
  return (
    <section className="store-wrapper">
      {
        dummyData.map((item,idx) => {
          return (
            <Link 
              to={`/products/${item.prodId}`}
              className="product"
              key={idx}
            >
              <div className="prod-title">{item.title}</div>
              <div className="item-image">
                <img src={item.image} />
              </div>
              <div className="item-description">{item.description.substring(0,90)}...</div>
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
                  <div class="in-stock">{parseInt(item.quantity)} left in stock</div>
                  :
                  <div className="out-of-stock">out Of stock</div>
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
