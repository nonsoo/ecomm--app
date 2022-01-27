import React from "react";

const CartItem = ({ imgName, itemName, itemPrice, itemQty, itemSubTotal }) => {
  return (
    <div className="cartItem">
      <img src={imgName} alt="thumnail" className="cartItem__img" />
      <div>
        <p className="cartItem__Name">{itemName}</p>
        <p className="cartItem__Qty">
          {`$${itemPrice}`} x {itemQty} <span>$ {`$${itemSubTotal}`}</span>
        </p>
      </div>
    </div>
  );
};

export default CartItem;
