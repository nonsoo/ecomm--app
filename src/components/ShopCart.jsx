import React from "react";
import CartItem from "./CartItem";
import ImageThumb from "../images/image-product-1-thumbnail.jpg";

import { useSelector } from "react-redux";

const ShopCart = () => {
  const currCart = useSelector((state) => state.CartReducer.cart);
  return (
    <div className="CartCont">
      <p className="cartTitle">Cart</p>
      <div className="cartItems">
        {currCart ? (
          <CartItem
            imgName={ImageThumb}
            itemName={currCart.ProdName}
            itemPrice={currCart.ProdPrice}
            itemQty={currCart.currentQty}
            itemSubTotal={currCart.ProdPrice * currCart.currentQty}
          />
        ) : (
          <p>nothing to show</p>
        )}
      </div>
      {currCart && <button className="checkoutBtn">Checkout</button>}
    </div>
  );
};

export default ShopCart;
