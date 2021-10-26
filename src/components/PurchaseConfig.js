import React, { useState } from "react";
import PurchaseInformation from './PurchaseInformation'
import "./style/purchaseconfig.css";

const PurchaseConfig = ({price, name}) => {
  const [count, setCount] = useState(1);

  const handleSubtraction = () => {
      ( count > 1) ? setCount(count - 1) : setCount(1);
  }


  return (
    <div className= 'quantitysection'>
      <h5>Choose Quantity</h5>

      <div className="quantityselect">
        <button className="controllers" onClick={handleSubtraction}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            class="bi bi-dash-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1h-7z" />
          </svg>{" "}
        </button>

        <input name="quantity" type="text" value={count} />

        <button className="controllers" onClick={() => setCount(count + 1)}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="var(--secondary)"
            class="bi bi-plus-circle-fill"
            viewBox="0 0 16 16"
          >
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
          </svg>{" "}
        </button>
      </div>
      < PurchaseInformation count= {count} price= {price} name= {name}/>
    </div>
  );
};

export default PurchaseConfig;
