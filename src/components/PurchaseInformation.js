import React from "react";

const PurchaseInformation = ({ count, price, name }) => {
  const itemsprice = count * price;
  const taxprice = itemsprice * 0.21;
  const shippingprice = itemsprice > 2000 ? 0 : 50;
  const totalprice = itemsprice + taxprice + shippingprice;

  return (
    <>
    <div className="row-info">
        <div className="textalign-left col">{name}</div>
        <div className="textalign-right col">{`${count} x ${itemsprice.toFixed(2)}`}</div>
      </div>
    <hr></hr>
      <div className="row-info">
        <div className="textalign-left col">Item Price</div>
        <div className="textalign-right col">${itemsprice.toFixed(2)}</div>
      </div>
      <div className="row-info">
        <div className="textalign-left col">Tax Price</div>
        <div className="textalign-right  col">${taxprice.toFixed(2)}</div>
      </div>
      <div className="row-info">
        <div className="textalign-left col">Shipping Price</div>
        <div className="textalign-right col">${shippingprice.toFixed(2)}</div>
      </div>
      <div className="row-info">
        <div className="textalign-left col">Total Price</div>
        <div className="textalign-right col">
          <strong>${totalprice.toFixed(2)}</strong>
        </div>
      </div>
    </>
  );
};

export default PurchaseInformation;
