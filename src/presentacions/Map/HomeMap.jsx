import { useEffect, useState, useRef } from "react"
import Layout from "../../components/Layout/Layout"
import TableStore from "../../components/Mapa/TableStore"
import PanelMapa from "../../components/Mapa/PanelMapa"
import InfoMapa from "../../components/Mapa/InfoMapa"
import InfoMapLoading from "../../components/Mapa/Loading/InfoMapLoading"
import PanelMapLoading from "../../components/Mapa/Loading/PanelMapLoading"

import { getServicesGlobal } from "../../actions/configAction"
import { getLitStoreCreated, updateInfiniteScrollStore, selectedStoreByMapa, 
    getStoreByName, filtereByCategoryStore, sortableByBrandStore, getJsonMapa } from "../../actions/storeAction"
import { useDispatch, useSelector } from 'react-redux'

const HomeMap = () => {

    const dispatch = useDispatch()   
    const [ typeSort, setTypeSort ] = useState("ascending_order") 
    const mapVector = useRef()
    const { config, storeAll } = useSelector((state) => {
        return {
            config: state.config,
            storeAll: state.storeAll
        }
    })
    const { categories } = config
    const { initialStoreList, hasMoreStore, storeMapSelect, loadingMapa, 
        localNotAssign, jsonLayerMap, isVisibleMap, nameCategory } = storeAll

    const configInitial = async () => {
        if(categories.length===0){
            dispatch(getServicesGlobal())
        }
        const response = await dispatch(getLitStoreCreated())
        if(response.status){
            dispatch(getJsonMapa())
        }
    }

    const fetchMoreData = () => {
        setTimeout(() => {
            dispatch(updateInfiniteScrollStore())
          }, 1500);
    }

    const selectedStore = (store) => {
        dispatch(selectedStoreByMapa(store))
        paintFillLocals(store)
        //window.scrollTo(0, 0)
    }

    const selectedStoreByLocal = (local) => {

        const storeResponse = dispatch(getStoreByName(local))
        paintFillLocals(storeResponse.store)
        //window.scrollTo(0, 0)
    }

    const filterByCategories = (category) => {
        dispatch(filtereByCategoryStore(category.label))
        selectedByCategoryMap(category.label)
    }

    const selectedByCategoryMap = (category) => {
        jsonLayerMap?.layers.forEach(element => {
            let checkedLocal = false
            element.categories.forEach(item => {
                if(item===category){
                    checkedLocal=true
                    mapVector.current.querySelector("svg").querySelector('path[id='+element.id+']').setAttribute("class","map__category-new") 
                }else if(!checkedLocal){
                    mapVector.current.querySelector("svg").querySelector('path[id='+element.id+']').setAttribute("class","locals") 
                }               
            })
        })
    }

    const paintFillLocals = (store) => {
        if(typeof store !== "undefined" && Object.keys(store).length>0){
            const { mapaIdLocals } = store
            selectedByCategoryMap(nameCategory)
            for(let key in mapaIdLocals){
                mapVector.current.querySelector("svg").querySelector('path[id='+mapaIdLocals[key]+']').setAttribute("class","selected")
            }
        }
    }

    const sortBrandStore = () => {
        const type = typeSort==="ascending_order" ? "descending_order" : "ascending_order"
        setTypeSort(type)
        dispatch(sortableByBrandStore(type))
    }

    useEffect(()=> {
        configInitial()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    return (
        <Layout
            titlePanel="Example"
            modulo="mapa"
            itemModulo=""
        >
            <div className="row">
                <div className="col-11  mx-auto mt-5">
                    <h1 className="mt-5 panel-title__main">Mapa</h1>
                </div>
            </div>
            
            <div className="row">
                <div className="col-11 mx-auto">
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            {
                                isVisibleMap ? (Object.keys(jsonLayerMap).length>0 && (
                                    <PanelMapa 
                                        store={storeMapSelect} 
                                        loadingMapa={loadingMapa} 
                                        selectedStoreByLocal={selectedStoreByLocal}
                                        jsonLayerMap={jsonLayerMap} 
                                        isVisibleMap={isVisibleMap}
                                        mapVector={mapVector}
                                    />
                                )) : <PanelMapLoading /> 
                            }
                            
                            {
                                !loadingMapa ?
                                    <InfoMapa store={storeMapSelect} loadingMapa={loadingMapa} localNotAssign={localNotAssign} />
                                : <InfoMapLoading />
                            }
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <TableStore 
                                categories={categories} 
                                hasMoreStore={hasMoreStore}
                                listStore={initialStoreList}
                                fetchMoreData={fetchMoreData}
                                selectedStore={selectedStore}
                                filterByCategories={filterByCategories}
                                sortBrandStore={sortBrandStore}
                                typeSort={typeSort}
                            />
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}

export default HomeMap