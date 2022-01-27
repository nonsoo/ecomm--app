import React from "react";
import CartItem from "./CartItem";
import ImageThumb from "../images/image-product-1-thumbnail.jpg";

const ShopCart = () => {
  return (
    <div className="CartCont">
      <p className="cartTitle">Cart</p>
      <div className="cartItems">
        <CartItem
          imgName={ImageThumb}
          itemName="fall limited edition sneakers"
          itemPrice="125.00"
          itemQty="3"
          itemSubTotal="375.00"
        />
      </div>
      <button className="checkoutBtn">Checkout</button>
    </div>
  );
};

export default ShopCart;
