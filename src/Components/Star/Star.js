// import React from 'react'
// import { FaStar, FaStarHalfAlt } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";
// export default function Star({ stars, ratingsAverage }) {
//   console.log('dddd' + ratingsAverage);
//   const ratingStar = Array.from({ length: 5 }, (ele, index) => {

//     let number = index + 0.5;
//     return (
//       <span key={index}>
//         {stars > index + 1 ? (
//           <FaStar className='icon' />
//         ) : stars > number ? (
//           <FaStarHalfAlt className='icon' />
//         ) : (
//           <AiOutlineStar className='icon' />
//         )}
//       </span>
//     )
//   })
//   return (
// <div>
//   <div className='icon-style'>
//     {ratingStar}
//     <p>{ratingsAverage} customer reviews</p>
//   </div>
// </div>
//     )
// }


