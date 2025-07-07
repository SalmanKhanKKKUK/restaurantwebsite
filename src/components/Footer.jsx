import React from "react";

const Footer = () => {
  return (
    <>
      <section className="footer">
        <div className="share">
          <a
            href="https://facebook.com/yourpage"
            className="fab fa-facebook-f"
            aria-label="Facebook"
          ></a>
          <a
            href="https://facebook.com/yourpage"
            className="fab fa-twitter"
            aria-label="Facebook"
          ></a>
          <a
            href="https://facebook.com/yourpage"
            className="fab fa-instagram"
            aria-label="Facebook"
          ></a>
        </div>
        <div className="links">
          <a href="/home">home</a>
          <a href="/about">about</a>
          <a href="/menu">menu</a>
          <a href="/products">products</a>
          <a href="/review">review</a>
          <a href="/contact">contact</a>
          <a href="/blog">blogs</a>
        </div>
        <div className="creadite">
          @ CopyRight 2024,Design & Developed By <span>Salman Khan</span>
        </div>
      </section>
    </>
  );
};

export default Footer;
