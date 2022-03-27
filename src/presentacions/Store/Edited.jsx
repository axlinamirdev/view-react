
import { useEffect, useState } from "react"
import Layout from "../../components/Layout/Layout"
import FormEdited from "../../components/Store/Form/Edited/FormEdited"
import ItemLead from "../../components/Leads/ItemLead"
import PanelCar from "../../components/Store/Cars/PanelCar"
import ModalLead from "../../components/Store/Leads/ModalLead"
import FormEditLoading from "../../components/Store/Form/Skeleton/FormEditLoading"
import ItemLeadLoading from "../../components/Store/Form/Skeleton/ItemLeadLoading"

import { ToastContainer, toast } from 'react-toastify'

import { getStoreById } from "../../actions/storeAction"
import { getServicesGlobal } from "../../actions/configAction"
import { getListCarsOfStore, updateInfiniteScrollCar } from "../../actions/carAction"
import { useParams, useHistory } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { subDays } from 'date-fns'

const Edited = () => {

	const dispatch = useDispatch()
	const { slug } = useParams()
    const history = useHistory()

    const { storeAll, carsOfStore, config } = useSelector((state) => {
        return {
            storeAll: state.storeAll,
            carsOfStore: state.carsOfStore,
            config: state.config
        }
    })

    const { categories } = config
    const { storeSelected, leads, loadingStore  } = storeAll
    const { listInitialCarStore, hasMoreCar, carSelected, typeActionCar, picturesCar } = carsOfStore

    const [ visibleLead, setVisibleLead ] = useState(false)
    const [ defaultValues, setDefaultValues ] = useState({})
    
    const closeLead = () => {
        setDefaultValues({
            dateStart: subDays(new Date(), 1),
            dateEnd: new Date(),
            provider_id: storeSelected?.id,
            category_provider_id: storeSelected?.category
        })
        setVisibleLead(visibleLead=>!visibleLead)
    }
	
	const getDataInitial = async (slug) => {
		const response = await dispatch(getStoreById(slug))
        if(response.status && typeof response.name !== "undefined"){
            await dispatch(getListCarsOfStore(response.name))
        }else{
            history.push("/tienda")
        }
        if(categories.length===0){
            dispatch(getServicesGlobal())
        }
	}

    const fetchMoreData = () => {
        
        setTimeout(() => {
            dispatch(updateInfiniteScrollCar())
          }, 1500);
    }


	useEffect(() => {
		getDataInitial(slug)
        // eslint-disable-next-line react-hooks/exhaustive-deps
	}, [slug])

	return (
		<Layout
            titlePanel="Example"
            modulo="tiendas"
            itemModulo=""
        >
        	<div className="row">
                <div className="col-11 mx-auto mt-5">
                   
                    <h1 className="mt-5 panel-title__main">Tienda</h1>
                </div>
            </div>
            <div className="row">

                <div className="col-11 mx-auto leads__store">
                    {
                        loadingStore ?	Array.from([1, 2, 3]).map((item, key) => 
                    		<ItemLeadLoading
		                        key={key}                               
		                    />
                    	) : (
                            <>
                                {leads.length>0 && leads.map((item, key) => 
                                    <ItemLead
                                        key={key}
                                        {...item}
                                       
                                    />
                                )}
                                <button 
                                    type="submit" 
                                    className="btn btn-orange leads__store-btn"
                                    onClick={()=>closeLead()}
                                    >
                                    Ver leads
                                </button>
                            </>
                        )
                    }
                </div>
           </div>

           <div className="row">
                <div className="col-11 mx-auto mt-5">
                    {
                        loadingStore && <FormEditLoading />
                    }
                    {
                        (!loadingStore && Object.keys(storeSelected).length>0) &&
                            <FormEdited toast={toast} />
                    }
                </div>
           </div>
            
           <PanelCar
                listCarStore={listInitialCarStore} 
                toast={toast} 
                typeActionCar={typeActionCar} 
                carSelected={carSelected}
                hasMoreCar={hasMoreCar}
                fetchMoreData={fetchMoreData}
                categories={categories}
                picturesCar={picturesCar}
            />

            <ToastContainer />

            {visibleLead && <ModalLead visible={visibleLead} closeLead={closeLead} defaultValues={defaultValues} />}
        </Layout>
	)
}

export default Edited