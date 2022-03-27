import { 
	LOADING_LIST_STORE,
	LIST_STORE_INITIAL,	
	UPDATE_INFINITE_SCROLL_STORE,
	FILTERED_STORE,
	INITIAL_ADD_STORE,
	ADD_STORE,
	SELECT_STORE,
	PAUSED_STORE,
	DELETE_STORE,
	EDIT_STORE,
	SEARCH_LOADING_STORE,
	UPDATE_CATEGORY_STORE,
	UPDATE_PANEL_STORE,
	SELECT_STORE_MAP,
	LOADING_STORE_MAP,
	VISIBLE_MAPA,
	FILTERED_STORE_BY_CATEGORY
} from "../types/storeType"

const INITIAL_STATE = {
	initialViewStore: false,
	listLocals: [],
	listStoreOriginal: [],
	listStore: [],
	initialStoreList: [],
	hasMoreStore: true,
    storeSelected: {},
	arrayInputEmail: [],
	arrayInputTelephone: [],
	arraySelectCategory: [],
	arraySelectLocal: [],
	leads: [],
	panelEditStore: { 
		icon: true, 
		cover_desktop: true, 
		cover_mobile: true,
		description: true, 
		main: true, 
		telephone: true, 
		email: true, 
		category: true, 
		local: true 
	},
	loadingStore: false,
	storeMapSelect: {},
	loadingMapa: false,
	localNotAssign: "",
	isVisibleMap: false,
	jsonLayerMap: {},
	nameCategory: ""
}

const storeReducer = (state=INITIAL_STATE, action) => {
	switch(action.type){
		case LOADING_LIST_STORE:
			return {
				...state,
				hasMoreStore: action.payload.hasMoreStore,
				initialViewStore: action.payload.initialViewStore
			}
		case LIST_STORE_INITIAL:
			return {
				...state,
				listStoreOriginal: action.payload.listStore,
				listStore: action.payload.listStore,
				initialStoreList: action.payload.initialStoreList,
				storeSelected: action.payload.storeSelected,
				hasMoreStore: action.payload.hasMoreStore,
				initialViewStore: action.payload.initialViewStore,
				listLocals: action.payload.listLocals,
				loadingStore: action.payload.loadingStore
			}
		case FILTERED_STORE:
			return {
				...state,
				listStore: action.payload.listStore,
				initialStoreList: action.payload.listInitial,
				hasMoreStore: action.payload.hasMoreStore
			}	
		case UPDATE_INFINITE_SCROLL_STORE:
			return {
				...state,
				initialStoreList: action.payload.listStoreItem,
				hasMoreStore: action.payload.hasMoreStore
			}	
		case INITIAL_ADD_STORE:
				return {
					...state,
					storeSelected: action.payload.infoStore,
				}
		case ADD_STORE:
			return {
				...state,
				storeSelected: action.payload.infoStore,
				listStoreOriginal: action.payload.listStore,
				listStore: action.payload.listStore,
				initialStoreList: action.payload.initialStoreList
			}
		case PAUSED_STORE:
			return {
				...state,
				listStore: action.payload.listStore,
				initialStoreList: action.payload.initialStoreList,
				listStoreOriginal: action.payload.listStoreOriginal
			}
		case DELETE_STORE:
			return {
				...state,
				listStore: action.payload.listStore,
				initialStoreList: action.payload.initialStoreList
			}
		case SELECT_STORE:
			return {
				...state,
				storeSelected: action.payload.infoStore,
				leads: action.payload.leads,
				panelEditStore: action.payload.panelEdit,
				loadingStore: action.payload.loadingStore,
				listLocals: action.payload.listLocals
			}
		case EDIT_STORE: 
			return {
				...state,
				storeSelected: action.payload.store,
				panelEditStore: action.payload.panelEdit,
				listStoreOriginal: action.payload.listStore,
				listStore: action.payload.listStore,
				initialStoreList: action.payload.initialStoreList
			}
		case UPDATE_CATEGORY_STORE: 
			return {
				...state,
				storeSelected: action.payload.store,
				panelEditStore: action.payload.panelEdit
			}
		case SEARCH_LOADING_STORE:
			return {
				...state,
				loadingStore: action.payload
			}
		case UPDATE_PANEL_STORE:
			return {
				...state,
				panelEditStore: action.payload
			}	
		case SELECT_STORE_MAP:
			return {
				...state,
				storeMapSelect: action.payload.storeMapSelect,
				loadingMapa: action.payload.loadingMapa,
				localNotAssign: action.payload.localNotAssign
			}	
		case LOADING_STORE_MAP:
			return {
				...state,
				loadingMapa: action.payload.loadingMapa
			}
		case VISIBLE_MAPA:
			return {
				...state,
				isVisibleMap: action.payload.isVisibleMap,
				jsonLayerMap: action.payload.jsonLayerMap
			}
		case FILTERED_STORE_BY_CATEGORY:
			return {
				...state,
				listStore: action.payload.listStoreFilter,
				initialStoreList: action.payload.listInitialFilter,
				hasMoreStore: action.payload.hasMoreStore,
				nameCategory: action.payload.nameCategory,
				storeMapSelect: action.payload.storeMapSelect
			}
		default: return state
	}
}

export default storeReducer