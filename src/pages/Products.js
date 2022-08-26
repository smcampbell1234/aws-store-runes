import React from 'react';
import { Link } from "react-router-dom";
import {dummyData} from '../data/dummy'

function Products({cart}) {

  return (
    <section className="store-wrapper">
      {
        dummyData.map((item,idx) => {
          let count = 0;
          if (cart[item.id])
            count = cart[item.id]
          return (
            <Link 
              to={`/products/${item.id}`}
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
                  <img src={item.image} />
                </div>
                <div className="products-item-description">{item.description.substring(0,90)}...</div>
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
            </Link>

          )
        })
      } 
    </section>
  )
}

export default Products
