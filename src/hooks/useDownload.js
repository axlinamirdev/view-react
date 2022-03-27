import { useState } from "react"
import XLSX from 'xlsx'
import {saveAs} from 'file-saver'
import { format } from 'date-fns'

export const useDownload = () => {

    const [ loadingXLSX, setLoadingXLSX ] = useState(false)
    const [ loadingCSV, setLoadingCSV ] = useState(false)

    const processDownloadXLSX = (dataExport, title, skipHeader=false) => {
        try{
            setLoadingXLSX(true)
            
            if(dataExport.length>0){
                let ws = XLSX.utils.json_to_sheet(dataExport, { skipHeader })
                
                let wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, ws, title)
                const dateCurrent = format(new Date(), 'yyyy_MM_dd')
                const nameFile = `${title}_${dateCurrent}.xlsx`
                XLSX.writeFile(wb, nameFile)
            }
            setLoadingXLSX(false)
        }catch(err){
            setLoadingXLSX(false)
        }   
    }

    const processDownloadCSV = (dataExport, title, skipHeader=false) => {
        try{
            setLoadingCSV(true)
            if(dataExport.length>0){
                const ws = XLSX.utils.json_to_sheet(dataExport, { skipHeader })

                const csv = XLSX.utils.sheet_to_csv(ws, {FS: ';'})
        
                const blob = new Blob([csv], {type: 'text/plain;charset=UTF-8'})
                const dateCurrent = format(new Date(), 'yyyy_MM_dd')
                const nameFile = `${title}_${dateCurrent}.csv`
                saveAs(blob, nameFile)
            }
            setLoadingCSV(false)
        }catch(err){
            setLoadingCSV(false)
        }   
    }

    return {
        processDownloadXLSX,
        loadingXLSX,
        processDownloadCSV,
        loadingCSV
    }
}