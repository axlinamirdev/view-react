import Slider from '../custom/Slider'
import { SwiperSlide } from 'swiper/react'
import ItemMainDsk from "./ItemMainDsk"

const PanelMainDsk = ({ item }) => {
	
	return (
		<div className="featured-slide">
            {
                item.length >0 && (
                <Slider
                    options= {{
                        className: 'main-slide__container',
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
                                <ItemMainDsk />
                            </SwiperSlide>
                        )
                    }
                </Slider>
                )}
       </div>
	)
}

export default PanelMainDsk