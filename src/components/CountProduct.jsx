import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { incrementQty, decreaseQty } from "../redux/counter";

const CountProduct = () => {
  const dispatch = useDispatch();

  const currentQty = useSelector((state) => state.CounterReducer.qty);

  return (
    <div className="counter">
      <button
        className="counter__Neg btn"
        onClick={() => dispatch(decreaseQty())}
      >
        -
      </button>
      <p className="counter__count">{currentQty}</p>
      <button
        className="counter__Pos btn"
        onClick={() => dispatch(incrementQty())}
      >
        +
      </button>
    </div>
  );
};

export default CountProduct;
