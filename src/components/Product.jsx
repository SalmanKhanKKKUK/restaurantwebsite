import React from "react";
import { product } from "../Data";
const Product = () => {
  return (
    <>
      <section className="products" id="products">
        <h1 className="heading">
          our <span>Products</span>
        </h1>
        <div className="box-container">
          {product.map((item, index) => (
            <div className="box">
              <div className="icons">
                <a
                  className="fas fa-shopping-cart"
                  href="/cart"
                  aria-label="View Cart"
                />
                <a
                  className="fas fa-heart"
                  href="/favorites"
                  aria-label="View Favorites"
                />
                <a
                  className="fas fa-eye"
                  href="/product-preview"
                  aria-label="View Product"
                />
              </div>
              <div className="image">
                <img src={item.img} alt="item_image" />
              </div>
              <div className="content">
                <h3>{item.name}</h3>
                <div className="stars">
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star" />
                  <i className="fas fa-star-half-alt" />
                </div>
                <div className="price">
                  PKR {item.currentPrice}
                  <span> PKR {item.originalPrice}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Product;
