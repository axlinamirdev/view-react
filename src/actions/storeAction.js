import API from '../context/api'
import { 
	LOADING_LIST_STORE,
	LIST_STORE_INITIAL,	
	UPDATE_INFINITE_SCROLL_STORE,
	FILTERED_STORE,
	INITIAL_ADD_STORE,
	ADD_STORE,
	PAUSED_STORE,
	DELETE_STORE,
	SEARCH_LOADING_STORE,
	SELECT_STORE,
	EDIT_STORE,
	UPDATE_PANEL_STORE,
	UPDATE_CATEGORY_STORE,
	SELECT_STORE_MAP,
	LOADING_STORE_MAP,
	VISIBLE_MAPA,
	FILTERED_STORE_BY_CATEGORY
} from "../types/storeType"
import {  preFormatStore, formatSendStore, formatSaveStore, formatListInitial, sortSearch } from "../utils/toolStore"
import { generateJsonMapa, listLocal } from "../utils/toolLocal"
import { initialState } from "../data/initialState"
import { getParamsInitial } from "../utils/dateUtil"

const folder_cover_front = process.env.REACT_APP_COVER_FRONT
const folder_cover_front_mobile = process.env.REACT_APP_COVER_FRONT_MOBILE
const folder_icon_logo = process.env.REACT_APP_ICON_LOGO


export const requestSuccess = (type, payload) => {
    return { type, payload }
}

export const getLitStoreCreated = () => async (dispatch, getState) => {
    try{
			const { storeCreated } = initialState()
			let { categories } = getState().config
            
			dispatch(requestSuccess(LOADING_LIST_STORE, { hasMoreStore: true, initialViewStore: true}))

			let payload = { 
				listStore: [], 
				initialStoreList: [], 
				storeSelected: storeCreated, 
				hasMoreStore: false,
				initialViewStore: false 
			}
			
			let response = await API.get(`store/getStores`)
			const { data, isSuccessFull, message } = response.data

			if(data.length>0){
				let listStoreAll = data.map(item => {
					let concesionaire = formatSaveStore(item, categories)
					return concesionaire
				})

				let { listStoreGlobal, initialStoreList } = formatListInitial(listStoreAll)

				let listLocals = listLocal()			

				payload = { 
					listStore: listStoreGlobal, 
					initialStoreList, 
					storeSelected: storeCreated, 
					hasMoreStore: initialStoreList.length >= listStoreGlobal.length ? false : true,
					initialViewStore: false,
					listLocals: listLocals,
					loadingStore: false
				}
			}
			dispatch(requestSuccess(LIST_STORE_INITIAL, payload))

            return { status: isSuccessFull, message }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const filtereByConcessionaireStore = (name) => (dispatch, getState) => {
	try{
		let { listStoreOriginal } = getState().storeAll

		const filtered = name==="" ? 
							listStoreOriginal : 
							listStoreOriginal.filter(item => item.brand.toLowerCase()===name.toLowerCase())

		let listAllStore = filtered
		let initialStoreList = listAllStore.slice(0, 20)

		const payload = { 
			listStore: listAllStore, 
			listInitial: initialStoreList,
			hasMoreStore: initialStoreList.length >= listAllStore.length ? false : true  
		}

		dispatch(requestSuccess(FILTERED_STORE, payload))

    }catch(error){
      return {status: false, message:error}
    }
}   

export const updateInfiniteScrollStore = () => (dispatch, getState) => {
	try{
		let { initialStoreList, listStore, initialViewStore } = getState().storeAll
		
		if(!initialViewStore){
			const maxScroll = initialStoreList.length + 20
			const minScroll = initialStoreList.length

			const newListStore = listStore
			let listado = newListStore.slice(minScroll, maxScroll)
			const updateListStore = [...initialStoreList, ...listado ]

			const payload = {
				listStoreItem: updateListStore,
				hasMoreStore: updateListStore.length >= listStore.length ? false : true 
			} 

			dispatch(requestSuccess(UPDATE_INFINITE_SCROLL_STORE, payload))
		}
		
    }catch(error){
      return {status: false, message:error}
    }
}   

export const createStoreInitial = (body) => async (dispatch, getState) => {
	try{
		const { storeCreated } = initialState()
		
		let storeDataInitial = storeCreated

		const store = {
			...storeDataInitial,
			sCategories: [{category: Number(body.sCategories[0].category)}],
			brand: body.brand
		}

		const payload = { infoStore: store  }

		dispatch(requestSuccess(INITIAL_ADD_STORE, payload))

		return {  status: true, message: "Se ha configurado la tienda" }
		
    }catch(error){
      return {status: false, message:error}
    }
} 

export const createStore = (body) => async (dispatch, getState) => {
	try{
		const { listStoreOriginal } = getState().storeAll
		let { categories } = getState().config
		
		let dataSave = {} 
		let message = ""
		let slug = ""
		
		let dataFormat = preFormatStore(body)
		
		let dataSend = formatSendStore(dataFormat)
		
		let formData = new FormData()
        formData.append('brand', dataSend.brand)
		formData.append('telephone', dataSend.telephone)
		formData.append('email', dataSend.email)
		formData.append('nro_local', dataSend.nroLocal)
		formData.append('pictures', dataSend.front_cover[0])
		formData.append('pictures', dataSend.front_cover_mobile[0])
		formData.append('pictures', dataSend.icon_logo[0])
		formData.append('description', dataSend.description)
		formData.append('category', dataSend.category)
	
		let response = await API.postFiles(`store/create`, formData)
		const { data, isSuccessFull } = response.data

		if(isSuccessFull){
			let information = data
			dataSave = formatSaveStore({...information, nrolocal: data.nro_local, status_id: 1}, categories)
			slug = data.slug

			let listStoreAll = [...listStoreOriginal, dataSave ]
			let { listStoreGlobal, initialStoreList } = formatListInitial(listStoreAll)

			message = "Se ha creado con éxito"

			const payload = { 
				infoStore: dataSave, 
				listStore: listStoreGlobal, 
				initialStoreList
			}
			
			dispatch(requestSuccess(ADD_STORE, payload))
		}

		return { 
			status: isSuccessFull, 
			infoStore: dataSave, 
			message,
			slug
		}
		
    }catch(error){
      return {status: false, message:error}
    }
}  

export const deleteStoreById = ({ id, type }) => async (dispatch, getState) => {
    try{
		const { listStoreOriginal, initialStoreList } = getState().storeAll
	
		const body = { id }
		let response = await API.put(`store/remove`, body)
		const { isSuccessFull } = response.data
		
		let status = isSuccessFull
		let messageEnd = (isSuccessFull===false) ? "Error al eliminar la tienda" : "Se ha eliminado correctamente"
		
		if(isSuccessFull){
	
			const storeList = listStoreOriginal.filter(item => item.id!==Number(id))
		
			if(storeList){
				const listInfinite = initialStoreList.filter(item => item.id!==Number(id))
				
				const payload = { listStore: storeList, initialStoreList: listInfinite }
			
				dispatch(requestSuccess(DELETE_STORE, payload))
			}
		}				
		
		return { status, message: messageEnd }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const pausedStoreById = ({ id, type }) => async (dispatch, getState) => {
    try{
		const { listStoreOriginal, initialStoreList, listStore } = getState().storeAll
		let status = false
		let messageEnd = ""

		const body = { id, status_id: type==="pausar" ? 3 : 1 }

		let response = await API.put(`store/pause`, body)

		const { isSuccessFull } = response.data

		if(isSuccessFull){
			const storeList = listStoreOriginal.map(item => {
				if(item.id===id){
					item.status_id = body.status_id
				}
				return item
			})

			const listInitialStore = initialStoreList.map(item => {
				if(item.id===id){
					item.status_id = body.status_id
				}
				return item
			})

			const listStoreAll = listStore.map(item => {
				if(item.id===id){
					item.status_id = body.status_id
				}
				return item
			})

			const payload = { 
				listStoreOriginal: storeList, 
				initialStoreList: listInitialStore, 
				listStore: listStoreAll 
			}
			
			dispatch(requestSuccess(PAUSED_STORE, payload))
		}

		return { status, message: messageEnd }
		
	}catch(error){
      	return { status: false, message: error }
    }
}
 
export const getStoreById = (slug) => async (dispatch, getState) => {
    try{

		dispatch(requestSuccess(SEARCH_LOADING_STORE, true))

		const { panelEditStore  } = getState().storeAll
		let { categories } = getState().config
		
		let response = await API.get(`store/getEditStoreConfigBySlug/${slug}`)
		const { data, isSuccessFull } = response.data

		let name = ""
		
		if(Object.keys(data).length>0){
	
			const params = getParamsInitial()

			const leads = [
				{
					title: "Mes actual",
					count: data.currentMonth,
					subtitle: params.month,
					classColor: "leads--orange"
				},
				{
					title: "Durante el año",
					count: data.currentYear,
					subtitle: `Año ${params.year}`,
					classColor: "leads--grey"
				}
			]

			let panelEdit = {}
			for(let index in panelEditStore){
				panelEdit = {...panelEdit, [index]: true}
			}

			let information = data.store!== null ? formatSaveStore(data.store[0], categories) : {}
			name = information?.brand

			let listLocals = listLocal()

			const payload = { 
					infoStore: information, 
					leads,
					panelEdit,
					loadingStore: false,
					listLocals: listLocals
			}

			dispatch(requestSuccess(SELECT_STORE, payload))
		}
		
		return { status: isSuccessFull, name }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const editStore = (body, type) => async (dispatch, getState) => {
    try{
		
    	const { storeSelected, panelEditStore, listStoreOriginal } = getState().storeAll
		let { categories } = getState().config

    	let storeCurrent = storeSelected
		let payload = {}
		let dataSave={}

		if(type==="category" ){
			let messageError = "La categoría por ahora no se puede editar"

			let panelEdit = {}
			for(let index in panelEditStore){
				panelEdit = {...panelEdit, [index]: true}
			}
			
			payload = { 
				store: storeCurrent, 
				panelEdit
			}

			dispatch(requestSuccess(UPDATE_CATEGORY_STORE, payload))
			return { status: false, message: messageError }
		}
		
    	const dataStore = {
    		...storeCurrent,
    		...body
    	}

		let dataFormat = preFormatStore(dataStore)

		let dataSend = formatSendStore(dataFormat)

		let formData = new FormData()
		formData.append('id', storeSelected.id)
        formData.append('brand', dataSend.brand)
		formData.append('telephone', dataSend.telephone)
		formData.append('email', dataSend.email)
		formData.append('nro_local', dataSend.nroLocal)
		formData.append('photos', storeSelected.front_cover)//Url anteriores
		formData.append('photos', storeSelected.front_cover_mobile)//Url anteriores
		formData.append('photos', storeSelected.icon_logo)//Url anteriores
		formData.append('description', dataSend.description)
		formData.append('category', dataSend.category)
		if(typeof dataSend.front_cover !== "string"){
			formData.append('pictures', dataSend.front_cover)
			formData.append('folders', folder_cover_front)
		}
		
		if(typeof dataSend.front_cover_mobile !== "string"){
			formData.append('pictures', dataSend.front_cover_mobile)
			formData.append('folders', folder_cover_front_mobile)
		}
		
		if(typeof dataSend.icon_logo !== "string"){
			formData.append('pictures', dataSend.icon_logo)
			formData.append('folders', folder_icon_logo)
		}

		let response = await API.putFiles(`store/update`, formData)
		const { isSuccessFull, data } = response.data

		if(isSuccessFull){
			dataSave = formatSaveStore({...data, nrolocal: data.nro_local}, categories)

			let panelEdit = {}
			for(let index in panelEditStore){
				panelEdit = {...panelEdit, [index]: true}
			}

			const listStoreEdit = listStoreOriginal.map(store => {
				if(store.id===storeSelected.id){
					return dataSave
				}
				return store
			})
	
			let { listStoreGlobal, initialStoreList } = formatListInitial(listStoreEdit)

			payload = { 
				store: dataSave, 
				panelEdit, 
				listStore: listStoreGlobal, 
				initialStoreList
			}

			dispatch(requestSuccess(EDIT_STORE, payload))
		}

		return { status: true, message: "Se ha editado con éxito" }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const disabledPanelEditStore = (name, value) => (dispatch, getState) => {
	const { panelEditStore } = getState().storeAll
	
	let panelEdit = {}
	for(let index in panelEditStore){
		panelEdit = { ...panelEdit, [index]: index===name ? value : true}
	}
	
    const payload = { ...panelEdit }

    dispatch(requestSuccess(UPDATE_PANEL_STORE, payload))
}

export const selectedStoreByMapa = (store) => (dispatch, getState) => {
	
	dispatch(requestSuccess(LOADING_STORE_MAP, {loadingMapa: true}))
	
	let statusLocal = (typeof store !== "undefined" && Object.keys(store).length===0) ? 'Local no asignado' : ""
	
	setTimeout(() => {
		
		const payload = { storeMapSelect: [store], loadingMapa: false, localNotAssign: statusLocal }

    	dispatch(requestSuccess(SELECT_STORE_MAP, payload))
	  }, 1000)
}

export const getStoreByName = (local) => (dispatch, getState) => {
	const { listStoreOriginal, jsonLayerMap } = getState().storeAll
	
	dispatch(requestSuccess(LOADING_STORE_MAP, {loadingMapa: true}))

	let storeSelected = []
	
	listStoreOriginal.forEach(store => {
		const verifyLocal = store.mapaIdLocals.find(item => item.toLowerCase()===local.toLowerCase())
		if(verifyLocal){
			storeSelected.push(store)
		}		
	})

	let infoLocal = jsonLayerMap.layers.find(item => item.id.toLowerCase()===local.toLowerCase())

	const store = storeSelected.length>0 ? storeSelected : {}
	let statusLocal = storeSelected.length===0 ? `Local <strong>${infoLocal?.namelayer}</strong> no asignado` : ""

    const payload = { storeMapSelect: store, loadingMapa: false, localNotAssign: statusLocal }
	
    dispatch(requestSuccess(SELECT_STORE_MAP, payload))

	return { store: storeSelected[0] }
}

export const filtereByCategoryStore = (category) => (dispatch, getState) => {
	try{
		let { listStoreOriginal } = getState().storeAll

		let filtered = category!=="Seleccione..." ? [] : listStoreOriginal

		if(category!==""){
			listStoreOriginal.forEach(item => {
				let categories = item.categoryName.toString().split(",").find(cat => 
						cat.toLowerCase()===category.toLowerCase()
					)
				if(categories){
					filtered.push(item)
				}								
			})
		}
		
		let listAllStore = filtered
		let initialStoreList = listAllStore.slice(0, 20)

		const payload = { 
			listStoreFilter: listAllStore, 
			listInitialFilter: initialStoreList,
			hasMoreStore: initialStoreList.length >= listAllStore.length ? false : true,
			nameCategory: category,
			storeMapSelect: []
		}
		
		dispatch(requestSuccess(FILTERED_STORE_BY_CATEGORY, payload))

    }catch(error){
      return {status: false, message:error}
    }
}   

export const sortableByBrandStore = (typeSort) => (dispatch, getState) => {
	try{
		let { listStoreOriginal } = getState().storeAll

		let  filtered = sortSearch(typeSort, listStoreOriginal)

		let listAllStore = filtered
		let initialStoreList = listAllStore.slice(0, 20)

		const payload = { 
			listStore: listAllStore, 
			listInitial: initialStoreList,
			hasMoreStore: initialStoreList.length >= listAllStore.length ? false : true  
		}

		dispatch(requestSuccess(FILTERED_STORE, payload))

    }catch(error){
      return {status: false, message:error}
    }
} 

export const getJsonMapa = () => (dispatch, getState) => {
	try{
		let { listStoreOriginal } = getState().storeAll

		let layerMapa = generateJsonMapa(listStoreOriginal)
		
		const payload = { 
			jsonLayerMap: layerMapa, 
			isVisibleMap: true
		}

		dispatch(requestSuccess(VISIBLE_MAPA, payload))
    }catch(error){
		const payload = { 
			jsonLayerMap: {}, 
			isVisibleMap: true
		}
		dispatch(requestSuccess(VISIBLE_MAPA, payload))
    }
} 
