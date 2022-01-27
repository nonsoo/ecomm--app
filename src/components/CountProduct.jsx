import React, { useState } from "react";

const CountProduct = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="counter">
      <button
        className="counter__Neg"
        onClick={() => setCount((prevCount) => prevCount - 1)}
      >
        -
      </button>
      <p className="counter__count">{count}</p>
      <button
        className="counter__Pos"
        onClick={() => setCount((prevCount) => prevCount + 1)}
      >
        +
      </button>
    </div>
  );
};

export default CountProduct;
