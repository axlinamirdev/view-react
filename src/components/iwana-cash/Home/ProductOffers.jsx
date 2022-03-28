import SliderContainer from "./SliderContainer";
import { SwiperSlide } from "swiper/react";
import icon_featured from "../../../assets/images/iwana-cash/featured.png" 
import icon_dafiti from "../../../assets/images/iwana-cash/brand-featured/dafiti.png" 


const ProductOffers = ({ item }) => {

	return (
		<SliderContainer
			classSliderContainer="" 
			options={{
                className: 'offers-slide__container',
                navigation: false,
                pagination: true,
                spaceBetween: 15,
                slidesPerView: 1,
            }}
		>
			{
                item.length>0 && 
                item.map((photo, index) => 
                    <SwiperSlide key={index}>
                        <div className="offers-item offers-w__item">
							<div className="offers-price">
								<div className="offers__item-price featured__item-price">
									<img src={icon_featured} alt="Price" />
									<div className="offers_price-container">
										<p className="featured_price-span">20%</p>
										<p className="featured_price-h4">Cashback</p>
									</div>
								</div>
							</div>
							<div className="featured-logo">
								<img src={icon_dafiti} alt="Dafity" className="featured__item-imagen" />
							</div>
							<p className="featured-footer__title">Dafity</p>
							<div className="offers_buy">
								<button type="button" className="btn btn-featured btn-sm">COMPRAR </button>
							</div>
						</div>
                    </SwiperSlide>
                )
            }
		</SliderContainer>
	)
}

export default ProductOffers