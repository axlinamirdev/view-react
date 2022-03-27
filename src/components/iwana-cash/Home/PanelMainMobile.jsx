import Slider from '../custom/Slider'
import { SwiperSlide } from 'swiper/react'

import home_photo from "../../../assets/images/iwana-cash/home.png"

const PanelMainMobile = ({ item }) => {

	return (
		<>
		<div className="col-store">
			<p className="title-h1">Te devolvemos dinero</p>
			<p className="subtitle-h4"><span>Las marcas muestran tu amor</span> <span>cuando compras</span></p>
			<div className="btn-go-store">
				<a href="!#" className="btn btn-blue btn-go__store">Ir a la tienda</a>
			</div>
		</div>
		<div className="main-slide">
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
                                <section className="main-image">
									<img src={home_photo} alt="Te devolvemos dinero" />
								</section>
                            </SwiperSlide>
                        )
                    }
                </Slider>
                )}
       </div>
       </>
	)
}

export default PanelMainMobile