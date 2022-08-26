// render helper
/**
 * 
 * @param {*} item - poroduct opbject
 * @returns jsx
 */
export const renderPrice = (item) => {
  if (parseFloat(item.sale) > 0) {
    let discountPrice = (parseFloat(item.price) - parseFloat(item.price) * parseFloat(item.sale)/100);
    return (<div className="price-line-wrapper">
        <div>Save {item.sale}%</div>
        <div>$<s>{parseFloat(item.price).toFixed(2)}</s></div>
        <div>${discountPrice.toFixed(2)}</div>
    </div>)
  } else {
    return <div>${parseFloat(item.price).toFixed(2)}</div>
  }
}