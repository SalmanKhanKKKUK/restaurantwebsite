import React, { useRef } from 'react'
import logo from '../assets/Images/logo.png'
import { cart } from '../Data';
import userEvent from '@testing-library/user-event'
const Navbar = () => {
  const searchRef = useRef();
  const cartRef = useRef();
  const navbarRef = useRef();
  const searchHandler = () => {
    searchRef.current.classList.toggle("active");
    cartRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
  }
   const cartHandler=()=>{
    cartRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    navbarRef.current.classList.remove("active");
   }
   const navbarHandler=()=>{
    navbarRef.current.classList.toggle("active");
    searchRef.current.classList.remove("active");
    cartRef.current.classList.remove("active");
   }
  return (
    <>
      <header className="header">
        <a href='#' className='logo'>
          <img src={logo} />
        </a>
        <nav className='navbar' ref={navbarRef}>
          <a href='#home'>home</a>
          <a href='#about'>about</a>
          <a href='#menu'>menu</a>
          <a href='#products'>products</a>
          <a href='#review'>review</a>
          <a href='#contact'>contact</a>
          <a href='#blogs'>blog</a>
        </nav>
        <div className='icons'>
          <div className='fas fa-search' onClick={searchHandler}></div>
          <div className='fas fa-shopping-cart' onClick={cartHandler}></div>
          <div className='fas fa-bars' id='menu-btn' onClick={navbarHandler}></div>
        </div>
        <div className='search-form' ref={searchRef}>
          <input type='text' placeholder='Search Here...' id='search-box' />
          <label htmlFor='search-box' className='fas fa-search'></label>
        </div>
        <div className='cart-items-container' ref={cartRef}>
          {cart.map((item, index) => (
            <div className='cart-item' key={index}>
              <span className='fas fa-times'></span>
              <img src={item.img} />
              <div className='content'>
                <h3>cart Item 01</h3>
                <div className='price'>$15.99/-</div>
              </div>
            </div>
          ))}
          <a className='btn' href='#'></a>
        </div>
      </header>
    </>
  )
}

export default Navbar
