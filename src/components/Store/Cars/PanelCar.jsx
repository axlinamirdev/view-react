import ItemCar from "./ItemCar"
import DeleteModal from "../Alerts/DeleteModal"
import ModalForm from "./ModalForm"
import { FaPlus } from 'react-icons/fa'
import InfiniteScroll from 'react-infinite-scroll-component'
import ItemCarSkeleton from "./Skeleton/ItemCarSkeleton"

import { useDeleteEditCar } from "../../../hooks/Cars/useDeleteEditCar"

const PanelCar = ({ listCarStore, toast, typeActionCar, carSelected, hasMoreCar, fetchMoreData, categories, picturesCar }) => {

    const {
        handleCloseOpen, 
        handleEditCar,
        show,
        showDelete,
        handleCloseDelete,
        visibleMessage,
        configMessage,
        deleteCar
    } = useDeleteEditCar(toast)

    return (
        <>
            <div className="row mb-5">
                <div className="col-11 mx-auto mt-5 card-cars-flex">
                    <p className="cars-flex__title">Crear Autos</p>
                </div>
                <InfiniteScroll
                    className="col-11 mx-auto"
                    dataLength={listCarStore.length}
                    next={fetchMoreData}
                    hasMore={hasMoreCar}
                    loader={hasMoreCar && (
                        <div className="card-cars-flex">
                            {Array.from([1, 2, 3, 4, 5, 6, 7, 8, 9]).map(x => <ItemCarSkeleton key={`item-${x}`}/>)}
                        </div>
                        )
                    }
                >     
                    <div className={`card-cars-flex ${listCarStore.length===0 ? "col-11 mx-auto" : ""}`}>
                        {
                            listCarStore?.length>0 &&
                            listCarStore?.map((item, key) => 
                                <ItemCar key={key} item={item} handleEditCar={handleEditCar} deleteCar={handleCloseDelete} />
                            )
                        }                       
                        { !hasMoreCar && (
                            <div className="card card-cars pt-4 pb-4 mr-5">
                                <div className="card-body pl-0 pr-0">
                                    <div className="card-cars__add">
                                            <button 
                                                type="button" 
                                                className="btn mr-2 btn-circle-danger"
                                                onClick={handleCloseOpen}
                                            ><FaPlus /></button>
                                            <p className="cars__add--text">Agregar</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </InfiniteScroll>
            </div>
            {show && <ModalForm 
                        show={show} 
                        handleClose={handleCloseOpen} 
                        toast={toast} 
                        carSelected={carSelected}
                        typeActionCar={typeActionCar}
                        categories={categories}
                        picturesCar={picturesCar}
                        /> 
            }
            {showDelete && 
                <DeleteModal 
                    show={showDelete} 
                    handleClose={handleCloseDelete} 
                    visibleMessage={visibleMessage} 
                    deleteStore={deleteCar}
                    configMessage={configMessage}
                /> 
            }
            
        </>
    )
}

export default PanelCar