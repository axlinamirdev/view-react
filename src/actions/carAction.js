import API from '../context/api'
import { 
	LOADING_INITIAL_CAR,
	LIST_CARS_OF_STORE,
	UPDATE_INFINITE_SCROLL_CAR,
	ADD_CARS_TO_STORE,
	PAUSED_DELETE_CAR,
	SELECT_CAR_BY_EDIT,
	UPDATE_CARS_TO_STORE,
	UPDATE_PICTURE_CAR
} from "../types/carType"
import { formatResultCars, formatSaveCar, preFormatCarSend, formatPicturesCar, formatCar, formatPhotosCar } from "../utils/toolCar"
import { initialState } from "../data/initialState"

export const requestSuccess = (type, payload) => {
    return { type, payload }
}

export const getListCarsOfStore = (name) => async (dispatch, getState) => {
	const { carCreated } = initialState()

	try{

		dispatch(requestSuccess(LOADING_INITIAL_CAR, { hasMoreCar: true, initialViewCar: true }))
	
		let response = await API.get(`store/getStoreCars/${name}`)
		const { data, isSuccessFull, message } = response.data

		let cars =  []

		if(data!==null && data.length>0){
			cars = formatResultCars(data)
		}	

		let initialCarList = cars.slice(0, 21)

		let payload = { 
			cars, 
			initialCarList, 
			hasMoreCar: initialCarList.length >= cars.length ? false : true, 
			initialViewCar: false, 
			carCreated
		}

		dispatch(requestSuccess(LIST_CARS_OF_STORE, payload))

		return { status: isSuccessFull, message }
		
	}catch(error){
		let payload = { 
			cars: [], 
			initialCarList: [], 
			hasMoreCar: false, 
			initialViewCar: false, 
			carCreated
		}

		dispatch(requestSuccess(LIST_CARS_OF_STORE, payload))
      	return { status: false, message: error }
    }
}

export const updateInfiniteScrollCar = () => (dispatch, getState) => {
	try{
		let { listCarsOfStore, listInitialCarStore, initialViewCar } = getState().carsOfStore

		if(!initialViewCar){
			const maxScroll = listInitialCarStore.length + 24
			const minScroll = listInitialCarStore.length

			const newListCars = listCarsOfStore
			let listado = newListCars.slice(minScroll, maxScroll)
			const updateListCars = [...listInitialCarStore, ...listado ]

			const payload = {
				listCarItem: updateListCars,
				hasMoreCar: updateListCars.length >= listCarsOfStore.length ? false : true 
			} 

			dispatch(requestSuccess(UPDATE_INFINITE_SCROLL_CAR, payload))
		}
		
    }catch(error){
      return {status: false, message:error}
    }
} 

export const addCarsToStore = (body) => async (dispatch, getState) => {
    try{
		const { storeSelected } = getState().storeAll
		const { listCarsOfStore, listInitialCarStore } = getState().carsOfStore
		const { carCreated } = initialState()
		
		let message = ""
		
		let { dataFormat, pictures } = preFormatCarSend(body, storeSelected, carCreated)

		let formData = formatSaveCar(dataFormat)

		let dataCar = formatPicturesCar(pictures, "pictures", formData)
	
		let response = await API.postFiles(`car/create`, dataCar)
		const { data, isSuccessFull } = response.data
		
		if(isSuccessFull){

			let initialCars =  listInitialCarStore 
			let carNew = formatCar({...data, listPrice: data.list_price})

			if(listInitialCarStore.length === listCarsOfStore.length){
				initialCars = [...listInitialCarStore, carNew ]
			}

			const listCars = [...listCarsOfStore, carNew ]
			
			const payload = { listCars, carSelected: carCreated, initialCars }

			dispatch(requestSuccess(ADD_CARS_TO_STORE, payload))
			message = "Se ha agregado con éxito"
		}else{
			message = "Error al agregar el auto"
		}

		return { status: isSuccessFull, message }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const deletePausedCarToStore = ({ id, type }) => async (dispatch, getState) => {
    try{
		const { listCarsOfStore, listInitialCarStore } = getState().carsOfStore

		let messageEnd = ""
		
		const body = { id, status_id: type==="pausar" ? 3 : type==="eliminar" ? 4 : 1  }

		let response = await API.put(`car/updateState`, body)

		const { isSuccessFull } = response.data

		if(isSuccessFull){
			messageEnd = `Se ha ${type} con éxito`

			let carsList = [], listInitialCar = []
			if(type!=="eliminar"){
				carsList = listCarsOfStore.map(item => {
					if(item.id===id){
						item.status_id = body.status_id
					}
					return item
				})
	
				listInitialCar = listInitialCarStore.map(item => {
					if(item.id===id){
						item.status_id = body.status_id
					}
					return item
				})
			}else{
				carsList = listCarsOfStore.filter(item => item.id!==id)
				listInitialCar = listInitialCarStore.filter(item => item.id!==id)
			}			

			const payload = { 
				listCarsUpdate: carsList, 
				initialCarList: listInitialCar
			}

			dispatch(requestSuccess(PAUSED_DELETE_CAR, payload))
		}
		
		return { status: isSuccessFull, message: messageEnd }
	
	}catch(error){
		return { status: false, message: error }
	}
}

export const getCarsById = (item, typeAction) => (dispatch, getState) => {
    try{
		const { storeSelected } = getState().storeAll
		const { carCreated } = initialState()

		const carSelectedItem = typeAction==="add" ? carCreated : item

		let dataCar = {
			...carSelectedItem,
			brand: storeSelected.brand,
			seller: storeSelected.brand
		}
		const payload = { carSelected: dataCar, typeAction, picturesCar: carSelectedItem.sPhotos }

		dispatch(requestSuccess(SELECT_CAR_BY_EDIT, payload))
			
         return { status: true }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const editCarToStore = (body, id) => async (dispatch, getState) => {
    try{
		const { storeSelected } = getState().storeAll
		const { listCarsOfStore, listInitialCarStore, carSelected } = getState().carsOfStore
		const { carCreated } = initialState()
		
		let message = ""

		let { dataFormat, pictures, photos } = preFormatCarSend(body, storeSelected, carSelected)
		
		let formData = formatSaveCar(dataFormat)

		let dataCarPictures = formatPicturesCar(pictures, "pictures", formData)

		//let dataCarPictureDeleted = formatPicturesCar(picturesDeleted, "picturesDeleted", dataCarPictures)
		let dataCarPhoto = formatPhotosCar(photos, "photos", dataCarPictures)

		let response = await API.putFiles(`car/update`, dataCarPhoto)
		const { data, isSuccessFull } = response.data
	
		if(isSuccessFull){
			let carNew = formatCar({...data, listPrice: data.list_price})

			const listInitialCarEdit = listInitialCarStore.map(car => {
				if(car.id===carSelected.id){
					return carNew
				}
				return car
			})

			const listCarEdit = listCarsOfStore.map(car => {
				if(car.id===carSelected.id){
					return carNew
				}
				return car
			})

			const payload = { listCarEdit, carCreated, listInitialCarEdit }
			
			dispatch(requestSuccess(UPDATE_CARS_TO_STORE, payload))

			message = "Se ha editado con éxito"
		}else{
			message = "Error al editar el auto"
		}
	
		return { status: isSuccessFull, message }
	
	}catch(error){
		return { status: false, message: error }
	}
}

export const updatePictures = (pictures) => (dispatch, getState) => {
	const payload = { picturesCar: pictures }
	dispatch(requestSuccess(UPDATE_PICTURE_CAR, payload))
}

export const deletePicture = (index) => (dispatch, getState) => {

	let { picturesCar } = getState().carsOfStore
	let pictures = []

	for(let key in picturesCar){
		if(parseInt(key)!==parseInt(index)){
			pictures.push({...picturesCar[key]})
		}
	}

	const payload = { picturesCar: pictures }
	dispatch(requestSuccess(UPDATE_PICTURE_CAR, payload))
}