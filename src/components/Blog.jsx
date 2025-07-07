import React from "react";
import { blog } from "../Data";
const Blog = () => {
  return (
    <>
      <section className="blogs" id="blogs">
        <h1 className="heading">
          Our <span>Blogs</span>
        </h1>
        <div className="box-container">
          {blog.map((item, index) => (
            <div className="box" key={index}>
              <div className="image">
                <img src={item.img} alt="item-Image" />
              </div>
              <div className="content">
                <a href="/" className="title">
                  {item.name}
                </a>
                <span>{item.currentDate}</span>
                <p>{item.originalDes}</p>
                <a
                  href="https://tandoorirestaurants.pk/g8-islamabad/"
                  target="_blank"
                  className="btn"
                  rel="noreferrer"
                >
                  read more...
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
