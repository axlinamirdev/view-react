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

const INITIAL_STATE = {
	listCarsOfStore: [],
	listInitialCarStore: [],
	hasMoreCar: true,
	initialViewCar: true,
	carSelected: {},
	typeActionCar: "add",
	picturesCar: []
}

const storeReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case LOADING_INITIAL_CAR:
			return {
				...state,
				hasMoreCar: action.payload.hasMoreCar,
				initialViewCar: action.payload.initialViewCar
			}
		case LIST_CARS_OF_STORE:
			return {
				...state,
				listCarsOfStore: action.payload.cars,
				listInitialCarStore: action.payload.initialCarList,
				hasMoreCar: action.payload.hasMoreCar,
				initialViewCar: action.payload.initialViewCar,
				carSelected: action.payload.carCreated
			}
		case UPDATE_INFINITE_SCROLL_CAR:
			return {
				...state,
				listInitialCarStore: action.payload.listCarItem,
				hasMoreCar: action.payload.hasMoreCar
			}			
		case ADD_CARS_TO_STORE:
			return {
				...state,
				listCarsOfStore: action.payload.listCars,
				carSelected: action.payload.carSelected,
				listInitialCarStore: action.payload.initialCars
			}
		case PAUSED_DELETE_CAR:
			return {
				...state,
				listCarsOfStore: action.payload.listCarsUpdate,
				listInitialCarStore: action.payload.initialCarList
			}

		case UPDATE_CARS_TO_STORE:
			return {
				...state,
				listCarsOfStore: action.payload.listCarEdit,
				carSelected: action.payload.carCreated,
				listInitialCarStore: action.payload.listInitialCarEdit
			}
			
		case SELECT_CAR_BY_EDIT:
			return {
				...state,
				carSelected: action.payload.carSelected,
				typeActionCar: action.payload.typeAction,
				picturesCar: action.payload.picturesCar
			}
		case UPDATE_PICTURE_CAR:
			return {
				...state,
				picturesCar: action.payload.picturesCar
			}
		default: return state
	}
}

export default storeReducer