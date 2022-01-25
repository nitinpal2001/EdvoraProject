import React from 'react';

export default function ProductsCard(props) {
  return (<div className='products-card'>
      <div className="product-img">
          <img src={props.img}alt="not found" width="70px" height="70px" />
      </div>
      <div className="product-name">{props.productName.slice(0,20)}</div>
      <div className="brand-name">{props.brandName}</div>
      <div className="price">&#36; {props.price}</div>
      <div className="location">Location:{props.city.slice(0,11)}</div>
      <div className="date">Date:{props.date.slice(0,10)}</div>
      <div className="product-desc">Description: Its a good Product</div>
  </div>
  )
}
