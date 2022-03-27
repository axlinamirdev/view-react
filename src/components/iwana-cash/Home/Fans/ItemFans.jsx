import SliderContainer from "../SliderContainer";
import { SwiperSlide } from "swiper/react";
import fans1 from "../../../../assets/images/iwana-cash/fans/martha-comment.png"; 

const ItemFans = ({ item }) => {

	return (
		<SliderContainer
			classSliderContainer="" 
			options={{
                className: 'fans-slide__container',
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
                        <div className="card-fans__container">
							<div className="card-fans__image">
								<img src={fans1} alt="Martha Robertson" />
							</div>
							<p className="card-fans__h3">Martha Robertson</p>
							<p className="card-fans__description">
								"Me gusta, es súper cómoda. La experiencia es buena, porque es plata que no tenía considerada, así que “bkn” y puedo sacarlas como un regalo de mi yo del pasado por haber comprado cosas."  
							</p>
						</div>
                    </SwiperSlide>
                )
            }
		</SliderContainer>
	)
}

export default ItemFans