import React from 'react';
import Divider from "@mui/material/Divider";
import ProductsList from './ProductsList';


export default function MainContainer() {
    return <>
  <div className='main-container'>
      <div className="titles">
      <div className="main-title">Edvora</div>
      <div className="sub-title">Products</div>
      <div className="subsub-title">Product Name</div>
      </div>
      <Divider className='productDivider' variant='inset' style={{marginLeft:"0px"}} />
      <ProductsList/>
      <div className="subsub-title">Product Name</div>
      <Divider className='productDivider' variant='inset' style={{marginLeft:"0px"}}/>
      <ProductsList/>
  </div>
    </>
}
