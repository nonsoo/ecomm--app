import React from "react";
import CartItem from "./CartItem";
import ImageThumb from "../images/image-product-1-thumbnail.jpg";

import { useSelector, useDispatch } from "react-redux";
import { removeItem } from "../redux/Shopingcart";

const ShopCart = () => {
  const currCart = useSelector((state) => state.CartReducer.cart);
  const dispatch = useDispatch();
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
          <div className="emptyCartSign">
            <p>Your cart is empty.</p>
          </div>
        )}
      </div>
      {currCart && (
        <button className="checkoutBtn" onClick={() => dispatch(removeItem())}>
          Checkout
        </button>
      )}
    </div>
  );
};

export default ShopCart;
