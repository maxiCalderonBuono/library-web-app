import React, { useState } from "react";

function BottomItem({ title, list = [] }) {
  const [isActive, setActive] = useState(false);

  const Condition = () => {
    if (isActive) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="item">
      <p onClick={() => setActive(Condition)}>{title}</p>
      <ul>
        {list.map((item) => {
          return (
            <li className={isActive ? "visible" : "none"} key={item}>
              {" "}
              {item}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BottomItem;
