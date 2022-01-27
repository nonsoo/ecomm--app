import React from "react";
import { IoTrashOutline } from "react-icons/io5";

import { useDispatch } from "react-redux";
import { removeItem } from "../redux/Shopingcart";

const CartItem = ({ imgName, itemName, itemPrice, itemQty, itemSubTotal }) => {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img src={imgName} alt="thumnail" className="cartItem__img" />
      <div>
        <p className="cartItem__Name">{itemName}</p>
        <p className="cartItem__Qty">
          {`$${itemPrice}`} x {itemQty} <span>$ {`$${itemSubTotal}`}</span>
        </p>
      </div>
      <IoTrashOutline
        className="cartItem__Trash"
        onClick={() => dispatch(removeItem())}
      />
    </div>
  );
};

export default CartItem;
