import React, { useState } from "react";

const CountProduct = () => {
  const [count, setCount] = useState(0);

  const decrementCount = () => {
    if (count <= 0) {
      setCount(0);
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };
  return (
    <div className="counter">
      <button className="counter__Neg btn" onClick={() => decrementCount()}>
        -
      </button>
      <p className="counter__count">{count}</p>
      <button
        className="counter__Pos btn"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CountProduct;
