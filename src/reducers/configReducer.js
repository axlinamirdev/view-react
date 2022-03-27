import { 
	LOAD_CONFIG_INITIAL,
	FILTER_LEADS,
	UPDATE_INFINITE_SCROLL_RESULT,
	LOAD_SERVICES_INITIAL
} from "../types/configType"

const INITIAL_STATE = {
	infoLeads: {},
    concessionaires: [],
	listLeads: [],
	listLeadsInitial: [],
	listDownloadLeads: [],
	services: [],
	categories: []
}

const configReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case LOAD_CONFIG_INITIAL:
			return {
				...state,
				infoLeads: action.payload.infoLeads,
				concessionaires: action.payload.concessionaire,
				services: action.payload.services,
				categories: action.payload.categories
			}
		case FILTER_LEADS:
			return {
				...state,
				listLeads: action.payload.listLeads,
				listDownloadLeads: action.payload.listDownloadLeads,
				listLeadsInitial: action.payload.itemsLeads
			}
		case UPDATE_INFINITE_SCROLL_RESULT:
			return {
				...state,
				listLeadsInitial: action.payload
			}
		case LOAD_SERVICES_INITIAL:
			return {
				...state,
				categories: action.payload.categories
			}
		default: return state
	}
}

export default configReducer