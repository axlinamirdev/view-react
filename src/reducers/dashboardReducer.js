import { 
	LIST_DATA_INITIAL,
    UPDATE_INFINITE_SCROLL_ACQUISION,
    UPDATE_INFINITE_SCROLL_PAGE,
    LOADING_DASHBOARD
} from "../types/dashboardType"

const INITIAL_STATE = {
    infoAnalytics: [],
    listPageGlobal: [],
    listPageMoreVisited: [],
    hasMorePage: false,
    listAcquisitionGlobal: [],
    listAcquisition: [],    
    hasMoreAcquisition: false,
    listLeadsInfo: [],
    loadingDashboard: false,
    dataReport: []
}

const dashboardReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case LIST_DATA_INITIAL:
			return {
				...state,
                infoAnalytics: action.payload.infoAnalytics,
                listPageGlobal: action.payload.listPageGlobal,
                listPageMoreVisited: action.payload.listPageMoreVisited,
                hasMorePage: action.payload.hasMorePage,
                listAcquisitionGlobal: action.payload.listAcquisitionGlobal,
                listAcquisition: action.payload.listAcquisition,
                hasMoreAcquisition: action.payload.hasMoreAcquisition,
                listLeadsInfo: action.payload.listLeadsInfo,
                loadingDashboard: action.payload.loadingDashboard,
                dataReport: action.payload.dataReport
			}
        case UPDATE_INFINITE_SCROLL_ACQUISION:
            return {
                ...state,
                listAcquisition: action.payload.listAcquisitionItem,
                hasMoreAcquisition: action.payload.hasMoreAcquision
            }
        case UPDATE_INFINITE_SCROLL_PAGE:
            return {
                ...state,
                listPageMoreVisited: action.payload.listPageItem,
                hasMorePage: action.payload.hasMorePage
            }
        case LOADING_DASHBOARD:
            return {
                ...state,
                loadingDashboard: action.payload
            }
		default: return state
	}
}

export default dashboardReducer