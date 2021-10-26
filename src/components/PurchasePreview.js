import React, {useState} from "react";
import './style/purchasepreview.css';
import PurchaseConfig from './PurchaseConfig';

const PurchasePreview = ({price, name, img}) => {

  return (
    <>
      <div className= 'previewcontainer'> 
        <img src={img} />
        < PurchaseConfig price= {price} name= {name} />
      </div>
    </>
  );
};

export default PurchasePreview;
