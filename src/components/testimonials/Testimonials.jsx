import React from 'react';
import './testimonials.css';
import Avt1 from '../../assetl/avatar1.jpg';
import Avt2 from '../../assetl/avatar2.jpg';
import Avt3 from '../../assetl/avatar3.jpg';
import Avt4 from '../../assetl/avatar4.jpg';

// import Swiper core and required modules
import { Swiper, SwiperSlide, Pagination } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data1 = [
  {
    image: Avt1,
    name: "Juana",
    description: "lorem",
  },
  {
    image: Avt2,
    name: "Enmanuel",
    description: "lorem",
  },
  {
    image: Avt3,
    name: "Luis",
    description: "lorem",
  },
  {
    image: Avt4,
    name: "Loida",
    description: "lorem",
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className='container testimonials__container'
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data1.map(({ image, name, description }, index) => (
          <SwiperSlide key={index} className='testimonial'>
            <div className='client__avatar'>
              <img src={image} alt={name} />
            </div>
            <h5 className='client__name'>{name}</h5>
            <small className='client__review'>{description}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
