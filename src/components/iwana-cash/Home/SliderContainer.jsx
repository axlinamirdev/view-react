import Slider from '../custom/Slider'


const SliderContainer = ({ classSliderContainer, options, children}) => {

	return (
		<div className={classSliderContainer}>
                <Slider
                    options= {options}
                    
                >
                    {children} 
                </Slider>
       </div>
	)
}

export default SliderContainer