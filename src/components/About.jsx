import React from 'react'
import AboutImg from "../assets/Images/about-img.b50db0fa2bfd668b3a06"
const About = () => {
  return (
    <>
      <section className='about' id='about'>
        <div className='heading'>
          about <span>us</span>
        </div>
        <div className='row'>
          <div className='image'>
            <img src={AboutImg} />
          </div>
          <div className='content'>
            <h3>What Make Our Food  Special!</h3>
            <p>Restaurant is known for its delicious food, including its famous Dumpukht dish, which is made with tender meat and fragrant rice that's slow-cooked. also offers a unique mix of desi and fast food dishes in a luxurious setting.</p>
            <p>Rich flavors food is known for its rich flavors and unique cooking style.
              Warm spices food is made with spices that warm the soul.
              Great atmosphere atmosphere makes it a great place to enjoy tasty food.
              Wedding venue is also a dream wedding venue where you can celebrate your love, joy, and traditions.</p>
            <a href='https://tandoorirestaurants.pk/about-us/' target='_blank' className='btn'>Read More...</a>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
