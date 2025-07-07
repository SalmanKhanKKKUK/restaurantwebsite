// import React from 'react'
// import { menu } from '../Data'
// const Photo = () => {
//   return (
//     <>
//       <section className='menu' id='menu'>
//         <div className='heading'>
//           our <span>menu</span>
//         </div>
//         <div className='box-container'>
//           {
//             menu.map((item, index) => (
//               <div className='box'>
//                 <img src={item.img} />
//                 <h3>Karahi Special</h3>
//                 <div className='price'>
//                   $15.99<span>20.99</span>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </section>
//     </>
//   )
// }

// export default Photo


import React from 'react';
import { menu } from '../Data';

const Photo = () => {
  return (
    <>
      <section className='menu' id='menu'>
        <div className='heading'>
          our <span>menu</span>
        </div>
        <div className='box-container'>
          {
            menu.map((item, index) => (
              <div className='box' key={index}>
                {/* Dynamic image */}
                <img src={item.img} alt='item_image' />
                
                {/* Dynamic title */}
                <h3>{item.name}</h3>
                
                {/* Dynamic price */}
                <div className='price'>
                  PKR {item.currentPrice} <span>PKR {item.originalPrice}</span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </>
  );
};

export default Photo;
