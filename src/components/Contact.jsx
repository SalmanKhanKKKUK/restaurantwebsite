import React from 'react'

const Contact = () => {
  return (
    <>
      <section className='contact' id='contact'>
        <h1 className='heading'>
          Contact <span>Us</span>
        </h1>
        <div className='row'>
          <iframe className='map' src='https://www.google.com/maps/@33.1276138,71.0973058,12z?entry=ttu&g_ep=EgoyMDI0MTExMy4xIKXMDSoASAFQAw%3D%3D'></iframe>
          <form>
            <h3>get in touch</h3>
            <div className='inputBox'>
              <span className='fas fa-user'></span>
              <input type='text' placeholder='name' />
            </div>
            <div className='inputBox'>
              <span className='fas fa-envelope'></span>
              <input type='email' placeholder='email' />
            </div>
            <div className='inputBox'>
              <span className='fas fa-phone'></span>
              <input type='number' placeholder='phone' />
            </div>
            <input type='submit' value="contact now" className='btn' />
          </form>
        </div>
      </section>
    </>
  )
}

export default Contact
