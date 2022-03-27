import { useEffect } from 'react'
import { getDataInitial, updateInfiniteScrollAcquisition, updateInfiniteScrollPage, getFormatDashboard } from "../../actions/dashboardAction"
import { useDispatch, useSelector } from 'react-redux'
import { useDownload } from "../useDownload"

export const useDashboard = () => {
    
    const dispatch = useDispatch()
    const { processDownloadXLSX, processDownloadCSV, loadingXLSX, loadingCSV } = useDownload()
    const { infoAnalytics, hasMorePage, listPageMoreVisited, listAcquisition, 
        hasMoreAcquisition, listLeadsInfo, loadingDashboard, dataReport } = useSelector((state) => state.dashboardMain)

    const configInitial =  async () => {
        const date = new Date()
        const vDate = {
            startDate:  new Date(date.getFullYear(), date.getMonth(), 1),
            endDate:  new Date()
        }
        const response = await dispatch(getDataInitial(vDate))

        if(response.status){
            dispatch(getFormatDashboard(response.data, []))
        }
    }

    const fetchMoreDataPage = () => {
        setTimeout(() => {
            dispatch(updateInfiniteScrollPage())
          }, 1500);
    }

    const fetchMoreDataAcquistion = () => {
        setTimeout(() => {
            dispatch(updateInfiniteScrollAcquisition())
          }, 1500);
    }

    const downloadXLSX = () => {
        processDownloadXLSX(dataReport, "Reporte_Analytics_Leads", true)
    }

    const downloadCSV = () => {
        processDownloadCSV(dataReport, "Reporte_Analytics_Leads", true)
    }

    useEffect(()=> {
        configInitial()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

	return {
		infoAnalytics,
        fetchMoreDataPage,
        hasMorePage,
        listPageMoreVisited,
        listAcquisition,
        hasMoreAcquisition,
        fetchMoreDataAcquistion,
        listLeadsInfo,
        loadingDashboard,
        downloadXLSX,
        loadingXLSX,
        loadingCSV,
        downloadCSV,
        dataReport
	}
}