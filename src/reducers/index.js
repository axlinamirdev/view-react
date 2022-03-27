import { combineReducers } from "redux"
import config from "./configReducer"
import storeAll from "./storeReducer"
import carsOfStore from "./carReducer"
import bannerAdmin from "./bannerReducer"
import dashboardMain from "./dashboardReducer"

export default combineReducers({
	config,
	storeAll,
	carsOfStore,
	bannerAdmin,
	dashboardMain
})