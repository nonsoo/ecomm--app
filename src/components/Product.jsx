import React from "react";
import Product1 from "../images/image-product-1.jpg";
import { MdShoppingCart } from "react-icons/md";

import CounterProd from "./CountProduct";

import { useSelector, useDispatch } from "react-redux";

import { addItem } from "../redux/Shopingcart";

const Product = () => {
  const dispatch = useDispatch();
  const currentQty = useSelector((state) => state.CounterReducer.qty);
  const Product = {
    cName: "Sneaker Company",
    ProdName: "Fall limited edition sneaker",
    ProdDescri: `These low profile sneakers are your perferct casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.`,
    ProdPrice: 125,
  };

  const addItemFunc = () => {
    dispatch(addItem({ ...Product, currentQty }));
  };
  return (
    <section className="ProductSection">
      <div className="productImgs">
        <img src={Product1} alt="main product" className="productImgs__main" />
      </div>
      <div className="productText">
        <p className="productText__Title">{Product.cName}</p>
        <p className="productText__Name">{Product.ProdName}</p>
        <p className="productText__Descri">{Product.ProdDescri}</p>
        <p className="productText_Price">
          {`$${Product.ProdPrice}`} <span>50%</span>
        </p>
        <p className="productText_Price-cancel">$250.00</p>
        <div className="productQ">
          <CounterProd />
          <button className="product__Btn" onClick={() => addItemFunc()}>
            <MdShoppingCart /> Add to cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Product;
