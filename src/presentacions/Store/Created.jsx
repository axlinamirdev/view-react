import Layout from "../../components/Layout/Layout"
import FormCreated from "../../components/Store/Form/Created/FormCreated"

import { FaPlus } from 'react-icons/fa'
import { ToastContainer, toast } from 'react-toastify'
import { useSelector } from 'react-redux'


const Created = () => {
   
    const { config, storeAll } = useSelector((state) => {
        return {
            config: state.config,
            storeAll: state.storeAll
        }
    })
    const { categories } = config
    const { storeSelected, listLocals } = storeAll

    
    const handleAddCar = () => {
        toast.error("Debe crear la tienda antes de agregarle autos",{position: toast.POSITION.TOP_RIGHT})
    }
   
    
    return (
        <Layout
            titlePanel="Example"
            modulo="tiendas"
            itemModulo=""
        >
             
            <div className="row">
                <div className="col-11 mx-auto mt-5">
                   
                    <h1 className="mt-5 panel-title__main">Crear Tienda</h1>
                    {/**<div className="progress">
                        <div className="progress-bar progress-bar--orange" role="progressbar" style={{width: '20%'}} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100">20%</div>
                    </div>**/}
                    <FormCreated 
                        storeSelected={storeSelected} 
                        toast={toast} 
                        categories={categories}
                        listLocals={listLocals}
                    />
                </div>
            </div>

            <div className="row mb-5">
                <div className="col-11 mx-auto mt-5 card-cars-flex">
                    <p className="cars-flex__title">Crear Autos</p>
                </div>
                <div className="col-11 mx-auto mt-3 card-cars-flex">
                    <div className="card card-cars pt-4 pb-4">
                        <div className="card-body pl-0 pr-0">
                            <div className="card-cars__add">
                                    <button 
                                        type="button" 
                                        className="btn mr-2 btn-circle-danger"
                                        onClick={handleAddCar}
                                    ><FaPlus /></button>
                                    <p className="cars__add--text">Agregar</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
           
            <ToastContainer />
        </Layout>
    )
}

export default Created