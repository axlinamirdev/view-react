import API from '../context/api'
import { 
	LIST_DATA_INITIAL,
    UPDATE_INFINITE_SCROLL_ACQUISION,
    UPDATE_INFINITE_SCROLL_PAGE,
    LOADING_DASHBOARD
} from "../types/dashboardType"
import { initialState } from "../data/initialState"
import { formatDataDashoard, compareDataDashboard, generateDataReport } from "../utils/toolDashboard"
import { format } from 'date-fns'


export const requestSuccess = (type, payload) => {
    return { type, payload }
}

export const getDataInitial = (body) => async (dispatch, getState) => {

    const { listMetricsAnalytics } = initialState()

    let payload = { 
        infoAnalytics: [],
        listPageGlobal: [],
        listPageMoreVisited: [],
        hasMorePage: false,
        listAcquisitionGlobal: [],
        listAcquisition: [],
        hasMoreAcquisition: false,
        listLeadsInfo: [],
        loadingDashboard: true,
        dataReport: []
    }

	try{
        let status = true, message = "", response: {}

        dispatch(requestSuccess(LIST_DATA_INITIAL, payload))

        let dataInitial = new Date(body.startDate)
        let dataInitialValue = format(dataInitial.setMinutes(dataInitial.getMinutes() + dataInitial.getTimezoneOffset()), 'yyyy-MM-dd')
        
        let dataEnd = new Date(body.endDate)
        let dataEndValue = format(dataEnd.setMinutes(dataEnd.getMinutes() + dataEnd.getTimezoneOffset()), 'yyyy-MM-dd') 
        
        const data = {
            startDate: dataInitialValue,
            endDate: dataEndValue,
            metricIndividual: listMetricsAnalytics,
            todayDate: dataEndValue === format(new Date(), 'yyyy-MM-dd') ? "today" : dataEndValue,
            textStartDate: format(dataInitial.setMinutes(dataEnd.getMinutes() + dataEnd.getTimezoneOffset()), 'dd-MM-yyyy'),
            textEndDate: format(dataEnd.setMinutes(dataEnd.getMinutes() + dataEnd.getTimezoneOffset()), 'dd-MM-yyyy')
        }
  
        const responseLeads = await getDataLeads(data)
        
        const responseAnalytics = await getDataAnalytics(data)

        if(Object.keys(responseAnalytics).includes("status")){
            message = "Error en los datos de google analytics"
            status = false
            dispatch(requestSuccess(LOADING_DASHBOARD, true))

        }else{
            let dataLeads = { ...responseLeads.data, textStartDate: data.textStartDate, textEndDate: data.textEndDate }
            let dataAnalytics = { ...responseAnalytics.data, textStartDate: data.textStartDate, textEndDate: data.textEndDate }

            response = { leads: dataLeads, analytics: dataAnalytics }
        }

 		return { status, message, data: response }
		
	}catch(error){

		dispatch(requestSuccess(LIST_DATA_INITIAL, payload))
      	return { status: false, message: error }
    }
}

const getDataLeads = async (body) => {
    const data = {
         vDate : {
             from: body.startDate,
             to: body.endDate
        }
    }
    let response = await API.post(`contact/getDashboardLeads`, data)
	return response.data
}

const getDataAnalytics = async (body) => {
    const data = {
        info: body.metricIndividual,
        startDate: body.startDate,
        endDate: body.todayDate
    }
    let response = await API.post(`analytics/getAnalytics`, data)
	return response.data
}


export const getFormatDashboard = (dataCurrent, dataLast) =>  (dispatch, getState) => {
	try{

        const dataDashboard = compareDataDashboard(dataCurrent, dataLast)
 
        const { leads, listLeads, tableAcquisition, tablePages } = formatDataDashoard(dataDashboard, dataCurrent.leads)
                
        const listPageMoreVisited = tablePages
        const listAcquisition = tableAcquisition

        let dataReport = generateDataReport(leads, tableAcquisition, tablePages, listLeads)

        const payload = { 
            infoAnalytics: leads,
            listPageGlobal: tablePages,
            listPageMoreVisited,
            hasMorePage: false,
            listAcquisitionGlobal: tableAcquisition,
            listAcquisition,
            hasMoreAcquisition: false,
            listLeadsInfo: listLeads,
            loadingDashboard: false,
            dataReport
        }
   
		dispatch(requestSuccess(LIST_DATA_INITIAL, payload))

		return { status: true, message: "" }
		
	}catch(error){
		dispatch(requestSuccess(LOADING_DASHBOARD, true))
      	return { status: false, message: error }
    }
}

export const updateInfiniteScrollAcquisition = () => (dispatch, getState) => {
	try{
		let { listAcquisition, listAcquisitionGlobal, initialViewStore } = getState().storeAll
		
		if(!initialViewStore){
			const maxScroll = listAcquisition.length + 20
			const minScroll = listAcquisition.length

			const newListAcquisition = listAcquisitionGlobal
			let listado = newListAcquisition.slice(minScroll, maxScroll)
			const updateListAcquisition = [...listAcquisition, ...listado ]

			const payload = {
				listAcquisitionItem: updateListAcquisition,
				hasMoreAcquision: updateListAcquisition.length >= listAcquisitionGlobal.length ? false : true 
			} 

			dispatch(requestSuccess(UPDATE_INFINITE_SCROLL_ACQUISION, payload))
		}
		
    }catch(error){
      return {status: false, message:error}
    }
}   

export const updateInfiniteScrollPage = () => (dispatch, getState) => {
	try{
		let { listPageMoreVisited, listPageGlobal, initialViewStore } = getState().storeAll
		
		if(!initialViewStore){
			const maxScroll = listPageMoreVisited.length + 20
			const minScroll = listPageMoreVisited.length

			const newListPage = listPageGlobal
			let listado = newListPage.slice(minScroll, maxScroll)
			const updateListPage = [...listPageMoreVisited, ...listado ]

			const payload = {
				listPageItem: updateListPage,
				hasMorePage: updateListPage.length >= listPageGlobal.length ? false : true 
			} 

			dispatch(requestSuccess(UPDATE_INFINITE_SCROLL_PAGE, payload))
		}
		
    }catch(error){
      return {status: false, message:error}
    }
}  