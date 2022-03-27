import Layout from "../../components/Layout/Layout"
import fondo from "../../assets/images/fondo.png"
import ItemLead from "../../components/Leads/ItemLead"
import TablePageMoreVisited from "../../components/Analytics/TablePageMoreVisited"
import TableAcquisition from "../../components/Analytics/TableAcquisition"
import PanelFilterRange from "../../components/Analytics/PanelFilterRange"
import TableLeads from "../../components/Analytics/TableLeads"
import LoadingLeads from "../../components/Analytics/Loading/LoadingLeads"
import { Spinner } from "react-bootstrap"
import download from "../../assets/images/icon-download.svg"
import { useDashboard } from "../../hooks/Dashboard/useDashboard"

const Home = () => {

    const {
		infoAnalytics,
        fetchMoreDataPage,
        hasMorePage,
        listPageMoreVisited,
        listAcquisition,
        hasMoreAcquisition,
        fetchMoreDataAcquistion,
        listLeadsInfo,
        loadingDashboard,
        loadingXLSX,
        loadingCSV,
        downloadXLSX,
        downloadCSV,
        dataReport
	} = useDashboard()

   

    return (
        <Layout
            titlePanel="Example"
            modulo="dashboard"
            typeModulo="transparent"
            itemModulo=""
        >
            <div className="row p-0 dashboard-row">
                <div className="col-12 p-0">
                    <img src={fondo} alt="Fondo" className="dashboard-fondo" />
                </div>
            </div>
            <div className="row leads__container--row">
                <div className="col-11 mx-auto">
                    <PanelFilterRange />
                </div>
                {
                    loadingDashboard && Array.from([1, 2, 3]).map((key) => <LoadingLeads key={key} />)
                }
                {
                    (!loadingDashboard && infoAnalytics.length>0) &&
                         infoAnalytics.map((item, key) => (
                            <div className="col-11 mx-auto leads__container" key={key}>
                                {
                                item.map((data, index) => <ItemLead
                                    key={index}
                                    {...data}
                                    isVisible={false}
                                />)
                                }
                            </div>
                        ))
                }
           </div>
            <div className="row mb-5">
                <div className="col-11 col-md-5 mx-auto">
                    <TableAcquisition
                        listAcquisition={listAcquisition}
                        hasMoreAcquisition={hasMoreAcquisition} 
                        fetchMoreDataAcquistion={fetchMoreDataAcquistion}
                    />
                </div>
                <div className="col-11 col-md-5 mx-auto">
                    <TablePageMoreVisited
                        listPageMore={listPageMoreVisited}
                        hasMorePage={hasMorePage} 
                        fetchMoreDataPage={fetchMoreDataPage}
                    />
                </div>
                <div className="col-11 mx-auto">
                    <TableLeads
                        listLeadsInfo={listLeadsInfo}
                    />
                </div>
                <div className="col-11 mx-auto d-flex mt-5 justify-content-end">
                    <button 
                            type="button" 
                            className="btn btn-outline-orange mr-2 mb-2"
                            onClick={()=>downloadCSV()}
                            disabled={!loadingXLSX ? dataReport.length>0 ? false : true : loadingXLSX}
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
                            disabled={!loadingCSV ? dataReport.length>0 ? false : true : loadingCSV}
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
        </Layout>
    )
}

export default Home