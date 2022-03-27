import { useEffect } from "react"
import Layout from "../../components/Layout/Layout"
import PanelMain from "../../components/Custom/Leads/PanelMain"
import fondo from "../../assets/images/fondo.png"
import ItemLead from "../../components/Leads/ItemLead"

import { getConfInitial } from "../../actions/configAction"
import { useDispatch, useSelector } from 'react-redux'
import { subDays } from 'date-fns'

const defaultValues = {
    dateStart: subDays(new Date(), 1),
    dateEnd: new Date(),
    provider_id: "",
    category_provider_id: ""
}

const Home = () => {

    const dispatch = useDispatch()
    const { infoLeads  } = useSelector((state) => state.config)

    const configInitial = async () => {
        await dispatch(getConfInitial())
    }

    useEffect(()=> {
        configInitial()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    
    return (
        <Layout
            titlePanel="Example"
            modulo="leads"
            typeModulo="transparent"
            itemModulo=""
        >
            <div className="row p-0 dashboard-row">
                <div className="col-12 p-0">
                    <img src={fondo} alt="Fondo" className="dashboard-fondo" />
                </div>
            </div>
            <div className="row leads__container--row">
                <div className="col-11 mx-auto leads__container">
                    {
                        infoLeads.length>0 && infoLeads.map((item, key) => 
                            <ItemLead
                                key={key}
                                {...item}
                            />
                        )
                    }
                </div>
           </div>

            <div className="row mb-5">
                <div className="col-11 mx-auto">
                    <div className="card">
                        <div className="card-body">
                            <PanelMain defaultValues={defaultValues} hideSelect={true} />
                        </div>
                    </div>
                </div>
            </div>
            
        </Layout>
    )
}

export default Home