import React from 'react'
import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper'
import ProductCard from '../ProductCard'
import phone_1 from '../../Assets/Images/phone_1.jpg'
import phone_2 from '../../Assets/Images/phone_2.jpg'
import phone_3 from '../../Assets/Images/phone_3.jpg'

// Swiper CSS
import 'swiper/swiper.min.css'
import 'swiper/modules/navigation/navigation.min.css'
import 'swiper/modules/pagination/pagination.min.css'
import 'swiper/modules/scrollbar/scrollbar.min.css'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y])

const cards = {
  category: 'Bestsellers',
  data: [
    { image: phone_1, name: 'phone A', price: '199.99' },
    { image: phone_2, name: 'phone B', price: '439.99' },
    { image: phone_3, name: 'phone C', price: '549.99' },
    { image: phone_1, name: 'phone D', price: '499.99' },
    { image: phone_2, name: 'phone E', price: '79.99' },
    { image: phone_3, name: 'phone F', price: '649.99' },
    { image: phone_1, name: 'phone G', price: '999.99' },
    { image: phone_2, name: 'phone H', price: '1499.99' },
    { image: phone_3, name: 'phone I', price: '349.99' },
    { image: phone_1, name: 'phone J', price: '999.99' },
  ],
}

const Slider = () => {
  return (
    <div className="container">
      <h4 className="category">{cards.category}</h4>
      <div className="slider_container">
        <Swiper
          navigation={true}
          grabCursor={true}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          className="mySwiper"
          slidesPerView={4}
          spaceBetween={15}
        >
          {cards.data.map((card, index) => {
            return (
              <SwiperSlide>
                <ProductCard
                  className="my_slider"
                  key={index}
                  name={card.name}
                  image={card.image}
                  price={card.price}
                />
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </div>
  )
}

export default Slider
