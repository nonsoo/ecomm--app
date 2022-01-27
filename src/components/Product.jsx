import React from "react";
import Product1 from "../images/image-product-1.jpg";

import Counter from "./CountProduct";

const Product = () => {
  return (
    <section className="ProductSection">
      <div className="productImgs">
        <img src={Product1} alt="main product" className="productImgs__main" />
      </div>
      <div className="productText">
        <p className="productText__Title">Sneaker Company</p>
        <p className="productText__Name">Fall limited edition sneaker</p>
        <p className="productText__Descri">
          These low profile sneakers are your perferct casual wear companion.
          Featuring a durable rubber outer sole, they'll withstand everything
          the weather can offer.
        </p>
        <p className="productText_Price">$125.00</p>
        <Counter />
      </div>
    </section>
  );
};

export default Product;
