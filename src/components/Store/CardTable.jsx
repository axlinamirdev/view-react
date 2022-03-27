import { Spinner } from "react-bootstrap"
import LoadingTable from "../Custom/Spinner/LoadingTable"
import download from "../../assets/images/icon-download.svg"
import Select from 'react-select'
import RowStore from "./RowStore"
import InfiniteScroll from 'react-infinite-scroll-component'
import { useDownload } from "../../hooks/useDownload"
import { formatDowload } from "../../utils/toolStore"

const CardTable = ({ concessionaires, listStore, fetchMoreData, handleCloseOpen, 
    handleSelectedStore, filteredStore, hasMoreStore, categories, listDownload }) => {

    const { processDownloadXLSX, loadingXLSX, processDownloadCSV, loadingCSV } = useDownload()

    const downloadXLSX = () => {
        try{
            const dataExport = formatDowload(listDownload, categories)            
            
            processDownloadXLSX(dataExport, "Tiendas")
        }catch(err){
            console.error(err)
        }   
    }

    const downloadCSV = () => {
        try{
            const dataExport = formatDowload(listDownload, categories)  

            processDownloadCSV(dataExport, "Tiendas")
        }catch(err){
            console.error(err)
        }
    }

    const filterByConcessionaire = (event) => {
        filteredStore((event.value!==null) ? event.label : "")
    }

    return (
        <>
            <div className="card__form--store mt-5">
                <Select 
                    options={concessionaires} 
                    placeholder="Buscar concesionario..."
                    id="provider_id" 
                    name="provider_id"
                    className="select-provider mb-4"
                    onChange={(event)=>filterByConcessionaire(event)}
                />
                <div className="d-flex">
                    <button 
                        type="button" 
                        className="btn btn-outline-orange mr-2 mb-2"
                        onClick={()=>downloadCSV()}
                        disabled={!loadingXLSX ?  false : true }
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
                        disabled={!loadingCSV ?  false : true }
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
            <div className="card__container mt-5">
                <InfiniteScroll
                    dataLength={listStore.length}
                    next={fetchMoreData}
                    hasMore={hasMoreStore}
                    loader={hasMoreStore && <LoadingTable />}
                >        
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">N° de local</th>
                            <th scope="col">Marca / Concesionario</th>
                            <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                listStore.length>0 && (listStore.map((item, key) => 
                                    <RowStore
                                        key={key}
                                        {...item}
                                        handleCloseOpen={handleCloseOpen}
                                        handleSelectedStore={handleSelectedStore}
                                    />
                                ) )
                            }   
                            { (!hasMoreStore && listStore.length===0) && (
                                <tr><td colSpan={4}>No hay información disponible</td></tr>
                            )}                     
                        </tbody>
                    </table>
                </InfiniteScroll>
            </div>
        </>
    )
}

export default CardTable