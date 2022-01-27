import React from "react";
import { IoTrashOutline } from "react-icons/io5";

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
      <IoTrashOutline className="cartItem__Trash" />
    </div>
  );
};

export default CartItem;
