import React, { useState, useEffect } from 'react'

let url = "https://iu02eobxgk.execute-api.us-east-1.amazonaws.com/dev/products";
function EditItem() {
  const [items,setItems] = useState([])

  const fetchProducts = async () => {
    try {
      let response = await fetch(url);
      const data = await response.json();
      console.log(data.Items)
      setItems(data.Items)
    } catch (err) {
      console.log("Failed to retrieve items to edit.")
    }
  }

  useEffect(() => {
    fetchProducts()
  },[])

  console.log(".... Items : ",items)
  return (
    <div>
      {
        items.map((item,idx) => {
          return (
            <div className="item-wrapper" key={idx}>
              <div className="item-quantity">
                <div>{item.quantity}</div>
                <div className="item-quantity-txt">in stock</div>
                </div>
              <div className="item-picture"><img src={item.image} alt={item.image} /></div>
              <div className="item-info">
                <div className="item-title">{item.title}</div>
                <div className="item-category">category: {item.category}</div>
                <div className="item-id">id: {item.prodId}</div>
              </div>
              <div className="item-price-data">
                <div className="item-price">Price: ${item.price}</div>
                <div className="sitem-ale">Sale: {item.sale}%</div>
              </div>
              <div className="item-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elementum convallis iaculis. Etiam arcu nibh, sagittis sit amet scelerisque non, scelerisque auctor felis. Nullam non quam facilisis, dapibus velit et, scelerisque arcu. Nunc at justo libero.  </div>
              <div className="item-delete">delete</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EditItem
