import API from '../context/api'
import { LOAD_CONFIG_INITIAL, FILTER_LEADS, UPDATE_INFINITE_SCROLL_RESULT, LOAD_SERVICES_INITIAL } from '../types/configType'
import { getParamsInitial } from "../utils/dateUtil"
import { format } from 'date-fns'

export const requestSuccess = (type, payload) => {
    return { type, payload }
}

export const getConfInitial = () => async (dispatch, getState) => {
    try{
		let response = await API.get(`webconfig/getDataConfig`)
	  	const { data } = response.data

		if(Object.keys(data).length>0){
			const params = getParamsInitial()
			const { currentDay, currentMonth, last24Hour, concessionaires } = data

			const leads = [
				{
					title: "Mes actual",
					count: currentMonth,
					subtitle: params.month,
					classColor: "leads--orange"
				},
				{
					title: "últimas 24 hrs",
					count: last24Hour,
					subtitle: params.hours,
					classColor: "leads--grey"
				},
				{
					title: "Hoy",
					count: currentDay,
					subtitle: params.today,
					classColor: "leads--dark-grey"
				}
			]

			let listConcessionaires = concessionaires.map(item => {
				return { value: item.id, label: item.name }
			})

			listConcessionaires.unshift({ value: null, label: "Buscar concesionario..." })

			const services = [
				{ value: null, label: "Servicio..."},
				{ value: 1, label: "Nuevos"},
				{ value: 2, label: "Usados"},
				{ value: 3, label: "Neumáticos"}
			]

			const categories = [
				{ value: 1, label: "Nuevos"},
				{ value: 2, label: "Usados"},
				{ value: 3, label: "Neumáticos"}
			]

			const payload = { infoLeads: leads, concessionaire: listConcessionaires, services, categories }

			dispatch(requestSuccess(LOAD_CONFIG_INITIAL, payload))
		}
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const getServicesGlobal = () => (dispatch, getState) => {
    const categories = [
		{ value: 1, label: "Nuevos"},
		{ value: 2, label: "Usados"},
		{ value: 3, label: "Neumáticos"}
	]

	const payload = { categories }

	dispatch(requestSuccess(LOAD_SERVICES_INITIAL, payload))
}

export const getListLeadsFilter = (body, initial) => async (dispatch, getState) => {
    try{
		
		const information = {
			vDate:{
				from:  format(new Date(body.dateStart), 'yyyy-MM-dd'),
				to:  format(new Date(body.dateEnd), 'yyyy-MM-dd')
			},
			provider_id: body.provider_id==="" ? null : body.provider_id,
			category_provider_id: body.category_provider_id==="" ? null : body.category_provider_id
		}
		
		let response = await API.post(`contact/getLeadsByFilter`, information)

	  	const { data } = response.data

		let listDownload = []
		let listData = []
		let itemsLeads = []

		if(data!==null && data?.length>0){

			let listDataResult = data
			listDataResult.sort((a, b) => {
			    if(a.createdAt > b.createdAt) return 1;
			    if(a.createdAt < b.createdAt) return -1;

			    return 0;
			})

			listData = listDataResult.map(info => {
				return {
					...info,
					date: format(new Date(info.createdAt), 'dd/MM/yy'),
					hours: format(new Date(info.createdAt), 'HH:mm'),
					my_route: info.my_route ? "Si" : "No",
					concessionaire: info.store
				}
			})

			listDownload = listData.map(item => {
				return {
					fecha: item.date,
					hora: item.hours,
					concesionario: item.store,
					servicio: item.service,
					mi_ruta: item.my_route,
					marca: item.brand,
					modelo: item.model,
					year: item.year,
					nombre_cliente: item.cliente.name,
					email_cliente: item.cliente.email,
					telephone_cliente: item.cliente.telephone,
					mensaje: item.cliente.message
				}
			})	

			itemsLeads = listData.slice(0, 20)
		}	

		const payload = {
			listDownloadLeads: listDownload, listLeads: listData, itemsLeads
		}

		dispatch(requestSuccess(FILTER_LEADS, payload))

		return { listLeads: listData, listLeadsInitial: itemsLeads }
		
	}catch(error){
      	return { status: false, message: error }
    }
}

export const updateInfiniteScrollLeads = (listLeadsUpdate) => (dispatch, getState) => {
	try{
		let { listLeadsInitial, listLeads } = getState().config

		const maxScroll = listLeadsUpdate.length + 20
		const minScroll = listLeadsUpdate.length

		const newListLeads = listLeads
		let listado = newListLeads.slice(minScroll, maxScroll)
		const listLeadsItem = [...listLeadsInitial, ...listado ]

		dispatch(requestSuccess(UPDATE_INFINITE_SCROLL_RESULT, listLeadsItem))
    }catch(error){
      return {status: false, message:error}
    }
}   


