import { useState, useEffect } from "react"
import { Spinner } from "react-bootstrap"
import TableData from "../../Leads/TableData"
import FormFilter from "../../Leads/FormFilter"
import ClienteModal from "../../Leads/ClienteModal"
import download from "../../../assets/images/icon-download.svg"

import XLSX from 'xlsx'
import {saveAs} from 'file-saver'

import { getListLeadsFilter, updateInfiniteScrollLeads } from "../../../actions/configAction"
import { useDispatch, useSelector } from 'react-redux'



const PanelMain = ({ defaultValues, hideSelect }) => {

    const dispatch = useDispatch()
    const { listLeadsInitial, listDownloadLeads, listLeads  } = useSelector((state) => state.config)
    
    const [ loadingXLSX, setLoadingXLSX ] = useState(false)
    const [ loadingCSV, setLoadingCSV ] = useState(false)
    const [ infoClient, setInfoClient ] = useState({})
    const [ hasMore, setHasMore ] = useState(true)
    const [show, setShow] = useState(false)
    
    const handleClose = () => setShow(false);
    
    const handleMoreInfoClient = (cliente) => {
        setInfoClient(cliente)
        setShow(true)
    }

    const fetchMoreData = () => {
        if (listLeadsInitial.length >= listLeads.length) {
            setHasMore(false)
            return;
        }

        setTimeout(() => {
            dispatch(updateInfiniteScrollLeads(listLeadsInitial))
          }, 1500);
    }

    const downloadXLSX = () => {
        try{
            setLoadingXLSX(true)
            if(listDownloadLeads.length>0){
                let ws = XLSX.utils.json_to_sheet(listDownloadLeads)
                
                let wb = XLSX.utils.book_new()
                XLSX.utils.book_append_sheet(wb, ws, "Leads")
                const dateStart = document.querySelector("#dateStart").value.replaceAll("/","")
                const dateEnd = document.querySelector("#dateEnd").value.replaceAll("/","")
                const nameFile = `Leads_${dateStart}_${dateEnd}.xlsx`
                XLSX.writeFile(wb, nameFile)
            }
            setLoadingXLSX(false)
        }catch(err){
            setLoadingXLSX(false)
        }     
    }

    const downloadCSV = () => {
        try{
            setLoadingCSV(true)
            if(listDownloadLeads.length>0){
                const ws = XLSX.utils.json_to_sheet(listDownloadLeads)

                const csv = XLSX.utils.sheet_to_csv(ws, {FS: ';'})
        
                const blob = new Blob([csv], {type: 'text/plain;charset=UTF-8'})
                const dateStart = document.querySelector("#dateStart").value.replaceAll("/","")
                const dateEnd = document.querySelector("#dateEnd").value.replaceAll("/","")
                const nameFile = `Leads_${dateStart}_${dateEnd}.csv`
                saveAs(blob, nameFile)
            }        
            setLoadingCSV(false)
        }catch(err){
            setLoadingCSV(false)
        }
    }

    const configInitialLeads = async () => {
        const response = await dispatch(getListLeadsFilter(defaultValues, true)) 
        setHasMore((response.listLeadsInitial.length>= response.listLeads.length) ? false : true)
    }

    useEffect(()=> {
        configInitialLeads()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <div className="card__header">
                <h1 className="card__title mb-4 mt-5">Leads totales</h1>
                <div className="d-flex">
                    <button 
                        type="button" 
                        className="btn btn-outline-orange mr-2 mb-2"
                        onClick={()=>downloadCSV()}
                        disabled={!loadingXLSX ? listDownloadLeads.length>0 ? false : true : loadingXLSX}
                    >
                        {
                            loadingXLSX ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span className="visually-hidden">Descargando...</span>
                                </>
                            ) : <><img src={download} alt="Descargar" /> Descargar csv</>
                        }                                        
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-outline-orange mb-2"
                        onClick={()=>downloadXLSX()}
                        disabled={!loadingCSV ? listDownloadLeads.length>0 ? false : true : loadingCSV}
                    >
                            {
                            loadingCSV ? (
                                <>
                                    <Spinner
                                        as="span"
                                        animation="border"
                                        size="sm"
                                        role="status"
                                        aria-hidden="true"
                                    />
                                    <span className="visually-hidden">Descargando...</span>
                                </>
                            ) : <><img src={download} alt="Descargar" /> Descargar XLSX</>
                        } 
                        
                    </button>
                </div>
            </div>
            <div className="card__form">
                <FormFilter 
                    setHasMore={setHasMore} 
                    listLeadsInitial={listLeadsInitial}
                    listLeads={listLeads}
                    defaultValues={defaultValues}
                    hideSelect={hideSelect}
                />
            </div>
            <div className="card__container">
                <TableData 
                    listLeads={listLeadsInitial} 
                    handleMoreInfoClient={handleMoreInfoClient} 
                    fetchMoreData={fetchMoreData} 
                    hasMore={hasMore}
                />
            </div>

            {show && <ClienteModal show={show} handleClose={handleClose} cliente={infoClient} /> }
        </>
    )
}

export default PanelMain