import Slider from '../../Custom/Slider/Slider'
import { SwiperSlide } from 'swiper/react'

const ItemCar = ({ item, handleEditCar, deleteCar }) => {

    return (
        <div className="card card-cars pt-4 pb-4 mr-5">
            <div className="card-body pl-0 pr-0">
                <div className="car-slide">
                    {
                        item.photos.length >0 && (
                        <Slider
                            options= {{
                                className: 'car-slide__container',
                                navigation: true,
                                pagination: false,
                                spaceBetween: 15,
                                slidesPerView: 1,
                            }}
                            
                        >
                            {
                                item.photos.length>0 && 
                                item.photos.map((photo, index) => 
                                    <SwiperSlide key={index}>
                                        <div className="car-slid__item">
                                            <img src={photo} alt="Car" />
                                        </div>
                                    </SwiperSlide>
                                )
                            }
                        </Slider>
                        )}
                </div>
                <div className="car-item">
                    <p className="car-item__title">Modelo</p>
                    <p className="car-item__value">{item.model}</p>
                </div>
                <div className="car-item">
                    <p className="car-item__title">Precio financiamiento</p>
                    <p className="car-item__value">{item.priceFormat}</p>
                </div>
                {
                    item.type==="Nuevos" && (
                        <div className="car-item car-item--none">
                            <p className="car-item__title">Precio lista</p>
                            <p className="car-item__value">{item.listPriceFormat}</p>
                        </div>
                    )
                }
                <div className="car-item__link">
                    { item.type==="Nuevos" && 
                        <button 
                            className="item-link link--orange" 
                            onClick={()=>handleEditCar(item)}
                        >Editar</button>}
                    <button 
                        className="item-link link--grey"  
                        onClick={()=>deleteCar(item.id, (item.status_id===3  ? 'reanudar' : 'pausar'), (item.status_id===3  ? 'reanudar' : 'pausar'))}
                    >
                        {item.status_id===3  ? 'Reanudar' : 'Pausar' }
                    </button>
                    <button 
                        className="item-link link--red" 
                        onClick={()=>deleteCar(item.id, "eliminar", "eliminado")}
                    >Eliminar</button>
                </div>
            </div>
        </div>
    )
}

export default ItemCar