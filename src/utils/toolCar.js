import { verifyPrice } from "./formatNumber"
import { initialState } from "../data/initialState"

export const formatResultCars = (cars) => {
	
	const results = cars.map(item => {
		let car = formatCar({...item, photos: JSON.parse(item?.photos)})
		return car		
	})
	
	return results
}

export const formatCar = (item) => {
	let car = item 
	const type = (car.type==="api_destacados" || car.type==="api_gema") ? 'Usados' : 'Nuevos'
		
	let transmission = car.transmission
	if(car.transmission.toLowerCase()==="transmisión automática" || 
		car.transmission.toLowerCase()==="automática" ||
		car.transmission.toLowerCase()==="automatica" 
	){
		transmission = "Automática"
	}else if(car.transmission.toLowerCase()==="transmisión mecánico" || 
				car.transmission.toLowerCase()==="mecánica" ||
				car.transmission.toLowerCase()==="mecanica"
		){
		transmission = "Mecánica"
	}

	let fuel = car.fuel
	if(car.fuel.toLowerCase()==="gasolina" || car.fuel.toLowerCase()==="bencina"){
		fuel = "Bencina"
	}else if(car.fuel.toLowerCase()==="diesel"){
		fuel = "Diesel"
	}else if(car.fuel.toLowerCase()==="hibrido"){
		fuel = "Hibrido"
	}

	const { typeBodyWork } = initialState()

	let body_work = ""
	
	if(typeof car.body_work!=='undefined' && car.body_work!==null){
		let verify_body_work = typeBodyWork.find(body => body.title.toLowerCase()===car.body_work.toLowerCase())
		if(verify_body_work){
			body_work= verify_body_work?.title
		}
	}	

	let airbags = false
	if(typeof car.amount_airbags!=='undefined' && car.amount_airbags!==null){
		airbags = car.amount_airbags>0 ? true : false
	}	

	let list_price_format = (typeof car.list_price!=='undefined' && car.list_price!==null) ? car?.list_price : 0
	let price_format = (typeof car.price!=='undefined' && car.price!==null) ? car?.price : 0
	
	let list_price = list_price_format===0 ? price_format : list_price_format
	let price = price_format===0 ? list_price_format : price_format

	let listPriceFormat = verifyPrice(list_price)
	let priceFormat = verifyPrice(price)

	let performance = (car.performance==="Sin información" || car.performance===null) ? "" : car.performance
	
	return {
		...car,
		type,
		list_price,
		price,
		transmission,
		fuel,
		listPriceFormat,
		priceFormat,
		body_work,
		category: (typeof car.category==='undefined' && car.category===null) ? "" : car.category,
		color: (typeof car.color==='undefined' && car.color===null) ? "" : car.color,
		traction: (typeof car.traction==='undefined' && car.traction===null) ? "" : car.traction,
		airbags,
		sPhotos: formatPhoto(car?.photos),
		performance,
		adjustable_steering_wheel: verifyFormatBoolean(car.adjustable_steering_wheel),
		air_conditioner: verifyFormatBoolean(car.air_conditioner),
		alarm: verifyFormatBoolean(car.alarm),
		central_lock: verifyFormatBoolean(car.central_lock),
		digital_radio: verifyFormatBoolean(car.digital_radio),
		electric_mirrors: verifyFormatBoolean(car.electric_mirrors),
		glassswing: verifyFormatBoolean(car.glassswing),
		mobile_connectivity: verifyFormatBoolean(car.mobile_connectivity),
		steering_wheel_controls: verifyFormatBoolean(car.steering_wheel_controls),
		sunroof: verifyFormatBoolean(car.sunroof),
	}
}

const formatPhoto = (photos) => {
	let listPhotos = photos.map(item => { 
		const urlSplit = item.split("/")
		return { 
			photo: "", 
			value: item, 
			name: urlSplit[urlSplit.length-1]
		}
	})
	return listPhotos
}

export const formatSaveCar = (data, nameKey) => {
	let formData = new FormData()

	for(let key in data) {
		formData.append(key, data[key])
	}
	return formData
}

export const formatPicturesCar = (data, nameKey, formData) => {
	for(let i=0; i<data.length; i++) {
		formData.append(nameKey, data[i][0])
	}
	return formData
}

export const formatPhotosCar = (data, nameKey, formData) => {
	for(let i=0; i<data.length; i++) {
		formData.append(nameKey, data[i])
	}
	return formData
}

export const preFormatCarSend = (body, storeSelected, dataInitial) => {

	let sPhotosInitial = body.sPhotos.filter(item => !item.value.includes("blob:"))
	let sPhotos = sPhotosInitial.length>0 ? sPhotosInitial.map(item => item.value) : []

	const picturesInitial = body.sPhotos.filter(item => item.value.includes("blob:"))
	
	let pictures = picturesInitial.length>0 ? picturesInitial.map(item => item.photo) : []

	let picturesDeleted = []
	let photos = []

	for(let index in dataInitial.sPhotos){
		if(dataInitial.sPhotos[index].value!==""){
			const verifyPhoto = sPhotos.find(photo => photo===dataInitial.sPhotos[index].value)
			if(!verifyPhoto){
				picturesDeleted.push(dataInitial.sPhotos[index].value)
			}else{
				photos.push(dataInitial.sPhotos[index].value.toString())
			}
		}		
	}
	
	let photoSortable =[]
	if(sPhotos.length>0){
		for(let index in sPhotos){
			const verifyPhoto = photos.find(photo => photo===sPhotos[index])
			if(verifyPhoto){
				photoSortable.push(sPhotos[index])
			}
		}
	}

	photos=photoSortable

	let dataFormat = { 
		adjustable_steering_wheel: verifyFormatBoolean(body.adjustable_steering_wheel),
		air_conditioner: verifyFormatBoolean(body.air_conditioner),
		alarm: verifyFormatBoolean(body.alarm),
		amount_airbags: body.amount_airbags,
		automatic_transmission: body.transmission==="Automática" ? true : false,
		body_work: body.body_work,
		brand: body.brand,
		category: body.category,
		central_lock: verifyFormatBoolean(body.central_lock),
		cilindrada: body.cilindrada,
		color: body.color,
		concessionaire_id: storeSelected.id,
		country: body.country,
		digital_radio: verifyFormatBoolean(body.digital_radio),
		electric_mirrors: verifyFormatBoolean(body.electric_mirrors),
		fuel: body.fuel,
		glassswing: verifyFormatBoolean(body.glassswing),
		list_price: body.list_price,
		mileage:  body.mileage,
		mobile_connectivity: verifyFormatBoolean(body.mobile_connectivity),
		model: body.model,
		name: `${body.year} ${body.brand} ${body.model}`,
		performance: 10,
		price: body.price,
		published_by: "Administrador Movicenter",
		seat_amount: body?.seat_amount,
		seat_cumshots: body.seat_cumshots,
		seller: body.seller,
		steering_wheel_controls: verifyFormatBoolean(body.steering_wheel_controls),
		sunroof: verifyFormatBoolean(body.sunroof),
		tire_type: 16,
		traction: body.traction,
		transmission: body.transmission,
		type: "api_nuevos",
		version: body.version,
		year: Number(body.year)
	}

	if(dataInitial?.id){
		dataFormat.id=dataInitial.id
		dataFormat.key=dataInitial.key
	}

	return { dataFormat, pictures, picturesDeleted, photos }
}

const verifyFormatBoolean = (prop) => {
	if(prop==="false" || prop===false){
		return false
	}
	return true
}