import React from "react";
import { MdShoppingCart } from "react-icons/md";
import ImageAvatar from "../images/image-avatar.png";

import ShoppingCart from "./ShopCart";

const Nav = () => {
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
          <MdShoppingCart className="nav__Cart" />
          <img src={ImageAvatar} alt="logged in user" className="nav__Image" />
        </div>
      </nav>
      <ShoppingCart />
    </>
  );
};

export default Nav;
