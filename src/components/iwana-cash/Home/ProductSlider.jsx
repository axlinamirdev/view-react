import Slider from '../custom/Slider'
import { SwiperSlide } from 'swiper/react'
import ProductOffer from "./ProductOffer"

const ProductSlider = ({item}) => {

	return (
		<div className="featured-slide">
            {
                item.length >0 && (
                <Slider
                    options= {{
                        className: 'product-slide__container',
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
                                <ProductOffer />
                            </SwiperSlide>
                        )
                    }
                </Slider>
                )}
       </div>
	)
}

export default ProductSlider