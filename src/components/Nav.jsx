import React, { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import ImageAvatar from "../images/image-avatar.png";

import ShoppingCart from "./ShopCart";
import { useSelector } from "react-redux";

const Nav = () => {
  const [showCart, setShowCart] = useState(false);
  const currQty = useSelector((state) => state.CartReducer.cart);

  return (
    <>
      <nav className="nav">
        <div className="nav__LeftCon">
          <p className="nav__Title">sneakers</p>
          <p className="nav__NavItem">Collection</p>
          <p className="nav__NavItem">Men</p>
          <p className="nav__NavItem">Women</p>
          <p className="nav__NavItem">About</p>
          <p className="nav__NavItem">Contact</p>
        </div>
        <div className="nav__RightCon">
          <MdShoppingCart
            className="nav__Cart"
            onClick={() => setShowCart((state) => !state)}
          />
          {currQty && <p className="currQtyIndicator">{currQty.currentQty}</p>}

          <img src={ImageAvatar} alt="logged in user" className="nav__Image" />
        </div>

        {showCart && <ShoppingCart />}
      </nav>
    </>
  );
};

export default Nav;
