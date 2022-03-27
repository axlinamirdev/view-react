import { useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import CardTable from "../../components/Store/CardTable"
import DeleteModal from "../../components/Store/Alerts/DeleteModal"
import FormInitial from "../../components/Store/Form/Created/FormInitial"

import { ToastContainer, toast } from 'react-toastify'
import { getConfInitial } from "../../actions/configAction"
import { getLitStoreCreated, updateInfiniteScrollStore } from "../../actions/storeAction"
import { useDispatch, useSelector } from 'react-redux'
import { useDeleteAndPause } from '../../hooks/Store/useDeleteAndPause'

const Home = () => {

    const dispatch = useDispatch()       
    
    const { 
        visibleMessage,
        handleCloseOpen,
        deleteStore,
        show,
        configMessage,
        handleSelectedStore,
        filteredStore
     } = useDeleteAndPause(toast)
  
    const { config, storeAll } = useSelector((state) => {
        return {
            config: state.config,
            storeAll: state.storeAll
        }
    })
    const { concessionaires, categories } = config
    const { listStore, initialStoreList, hasMoreStore } = storeAll

    const fetchMoreData = () => {
        
        setTimeout(() => {
            dispatch(updateInfiniteScrollStore())
          }, 1500);
    }

    const configInitial = async () => {
        if(concessionaires.length===0){
            await dispatch(getConfInitial())
        }
        await dispatch(getLitStoreCreated())
    }

    useEffect(()=> {
        configInitial()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <Layout
            titlePanel="Example"
            modulo="tiendas"
            itemModulo=""
        >
            <div className="row">
                <div className="col-11  mx-auto mt-5">
                    <h1 className="mt-5 panel-title__main">Creador Tiendas</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="card pt-4 pb-4">
                        <div className="card-body">
                            <FormInitial categories={categories} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="row  mb-5">
                <div className="col-11  mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <div className="card__header">
                                <h1 className="card__title mb-4 mt-5">Tiendas creadas</h1>
                            </div>
                            <CardTable 
                                concessionaires={concessionaires}
                                listStore={initialStoreList}
                                fetchMoreData={fetchMoreData}
                                handleCloseOpen={handleCloseOpen}
                                handleSelectedStore={handleSelectedStore}
                                filteredStore={filteredStore}
                                hasMoreStore={hasMoreStore}
                                categories={categories}
                                listDownload={listStore}
                            />
                        </div>
                    </div>
                </div>
            </div>
            
            {show && 
                <DeleteModal 
                    show={show} 
                    handleClose={handleCloseOpen} 
                    visibleMessage={visibleMessage} 
                    deleteStore={deleteStore}
                    configMessage={configMessage}
                /> 
            }
            <ToastContainer />
        </Layout>
    )
}

export default Home