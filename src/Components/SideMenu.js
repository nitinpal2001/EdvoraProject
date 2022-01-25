import React from 'react';
import Divider from "@mui/material/Divider";
import Dropdowns from './Dropdowns';

export default function SideMenu() {
  return <div className="side-menu">
  <div className='filter-menu'>
      <div className='filter-heading'>
        Filters
      </div>
      <div className="divider">
      <Divider variant='inset'/>
      <Dropdowns title="Products"/>
      <Dropdowns title="State"/>
      <Dropdowns title="City"/>
      </div>
  </div>;
  </div> 
}
