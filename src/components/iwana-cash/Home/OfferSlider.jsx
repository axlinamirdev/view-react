import Slider from '../custom/Slider'
import { SwiperSlide } from 'swiper/react'
import ItemOffer from "./ItemOffer"

const OfferSlider = ({ item }) => {

	return (
		<div className="car-slide">
            {
                item.length >0 && (
                <Slider
                    options= {{
                        className: 'featured-slide__container',
                        navigation: true,
                        pagination: true,
                        spaceBetween: 15,
                        slidesPerView: 1,
                    }}
                    
                >
                    {
                        item.length>0 && 
                        item.map((photo, index) => 
                            <SwiperSlide key={index}>
                                <ItemOffer />
                            </SwiperSlide>
                        )
                    }
                </Slider>
                )}
       </div>
	)
}

export default OfferSlider