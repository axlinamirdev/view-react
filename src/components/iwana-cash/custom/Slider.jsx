import { Swiper } from 'swiper/react'

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/components/pagination/pagination.min.css'
import 'swiper/components/navigation/navigation.min.css'

// import Swiper core and required modules
import SwiperCore, {
  Pagination, Navigation
} from 'swiper/core'

// install Swiper modules
SwiperCore.use([Pagination, Navigation])


const Slider = ({ options, children }) => {

	return (
		<Swiper
	        {...options}
	    >
	  		{children}
	  	</Swiper>
	)
}

export default Slider