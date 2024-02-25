// import { testimonials } from '../data/data';
// // import 'react-responsive-carousel/lib/styles/carousel.min.css';
// // // import { Carousel } from 'react-responsive-carousel';

// // import { useState } from 'react';
// // import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
// // import '../styles/testimonials.scss';

// // const Testimonials = () => {
// //   const [sliderIndex, setSliderIndex] = useState(0);
// //   // console.log(testimonials);

// //   const DATA = testimonials;

// //   // left and right click handlers
// //   const handleRightSlider = () => {
// //     setSliderIndex((index) => {
// //       if (index === DATA.length - 1) return 0;
// //       return index + 1;
// //     });
// //   };

// //   const handleLeftSlider = () => {
// //     setSliderIndex((index) => {
// //       if (index === 0) return DATA.length - 1;
// //       return index - 1;
// //     });
// //   };

// //   return (
// //     <>
// //       <div style={{ width: '100%', height: '100%', position: 'relative' }}>
// //         <div style={{ width: '100%', height: '100%', overflow: 'hidden' }}>
// //           {DATA.map((item, index) => {
// //             return (
// //               <div key={index} className='carousel-card'>
// //                 <img src={item.image} alt='' />
// //                 <h3>{item.name}</h3>
// //                 <h4>{item.profession}</h4>
// //                 <p>{item.message}</p>
// //               </div>
// //             );
// //           })}
// //         </div>

// //         {/* <div className='slider-btn-wrapper'> */}
// //         <button
// //           className='slider-btn left'
// //           onClick={handleLeftSlider}
// //           style={{ left: '0' }}>
// //           <FaArrowAltCircleLeft />
// //         </button>
// //         <button
// //           className='slider-btn right'
// //           onClick={handleRightSlider}
// //           style={{ right: '0' }}>
// //           <FaArrowAltCircleRight />
// //         </button>
// //         {/* </div> */}
// //         {/* </div> */}
// //       </div>
// //     </>
// //   );
// // };

// // export default Testimonials;

// // {
// //   /* <img src={DATA[sliderIndex].image} alt='' />
// // <h3>{DATA[sliderIndex].name}</h3>
// // <h4>{DATA[sliderIndex].profession}</h4>
// // <p>{DATA[sliderIndex].message}</p> */
// // }

// // import React from "react";
// // import avatarIImg from "./assets/1.jpg";
// // import avatarIIImg from "./assets/2.jpg";
// // import avatarIIIImg from "./assets/3.jpg";
// // import avatarIVImg from "./assets/4.png";
// // import avatarVImg from "./assets/5.jpg";
// // Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Autoplay } from 'swiper';

// // Import Swiper styles
// import 'swiper/css';
// import 'swiper/css/effect-coverflow';
// import 'swiper/css/pagination';

// import '../styles/testimonials.scss';

// // import required modules
// import { EffectCoverflow, Navigation, Pagination } from 'swiper';

// SwiperCore.use([Autoplay]);
// export default function Testimonials() {
//   return (
//     <>
//       <section>
//         <div className='main'>
//           <div className='head-p'>
//             <span style={{ paddingRight: '5px' }}>GET AN </span>
//             <span style={{ color: '#1D8BA0' }}> OPINION</span>
//           </div>
//           <div className='head'>TESTIMONIALS</div>
//           <Swiper
//             loop={true}
//             loopFillGroupWithBlank={true}
//             pagination={{
//               clickable: true,
//             }}
//             autoplay={{ delay: 3000 }}
//             navigation={true}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className='mySwiper'
//             effect={'coverflow'}
//             coverflowEffect={{
//               rotate: 10,
//               stretch: 50,
//               depth: 200,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 1,
//                 spaceBetween: 20,
//               },
//               768: {
//                 slidesPerView: 2,
//                 spaceBetween: 30,
//               },
//               1024: {
//                 slidesPerView: 3,
//                 spaceBetween: 150,
//               },
//             }}>
//             <SwiperSlide className='swiper-slide'>
//               {testimonials.map((item, index) => {
//                 return (
//                   <>
//                     <div
//                       key={index}
//                       style={{
//                         paddingRight: 20,
//                         paddingLeft: 20,
//                       }}>
//                       <div className='testimonials-profile-circle'>
//                         <img
//                           src={item.image}
//                           alt='testimonial-avatar'
//                           className='testimonial-avatar'
//                         />
//                       </div>
//                       <p>{item.message}</p>
//                       <h6 className='review-by'>{item.name}</h6>
//                     </div>
//                   </>
//                 );
//               })}
//             </SwiperSlide>
//           </Swiper>
//         </div>
//       </section>
//     </>
//   );
// }
