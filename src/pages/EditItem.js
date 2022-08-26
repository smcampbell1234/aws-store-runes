import React from 'react'
import {url} from '../api/storeApi';

function EditItem({items,setItems}) {
  const deleteItem = async (id) => {
    try {
      const urlDelete = url + `/${id}`
      const response = await fetch(urlDelete,{
        method: 'DELETE'
      })
      const data = await response.json();
      // remove from list
      let newList = items.filter((item) => item.prodId !== id)
      setItems(newList);

    } catch (err) {
      console.log(`Failed to delete item with id ${id}`)
    }
  }

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
                <div className="item-category">Category: {item.category}</div>
                <div className="item-id">id: {item.prodId}</div>
              </div>
              <div className="item-price-data">
                <div className="item-price">Price: ${item.price}</div>
                <div className="sitem-ale">Sale: {item.sale}%</div>
              </div>
              <div className="item-description">{item.description}</div>
              <div className="item-delete" onClick={() => deleteItem(item.prodId)}>delete</div>
            </div>
          )
        })
      }
    </div>
  )
}

export default EditItem
