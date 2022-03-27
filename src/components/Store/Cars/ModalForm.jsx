import { Modal } from "react-bootstrap"
import PictureLoad from "./PictureLoad"
import PanelMain from "./Form/PanelMain"
import PanelDetails from "./Form/PanelDetails"
import PanelOptions from "./Form/PanelOptions"

import {initialState} from "../../../data/initialState"
import closeIcon from "../../../assets/images/delete.svg"
import { useCar } from '../../../hooks/Cars/useCar'

const ModalForm = ({ show, handleClose, toast, carSelected, typeActionCar, categories, picturesCar }) => {
    
    const { 
        handleSubmit, 
        register, 
        errors,
        onSubmit,
        loading,
        addRowPhoto,
        deleteRowPhoto,
        vPhoto,
        control,
        onChangeFile,
        movePicture,
        setValue
     } = useCar(carSelected, toast, handleClose, typeActionCar, picturesCar)
    

    const { typeOrigin, typeTransmission, typeFuel, typeSeatMove, 
            typePerformance, typeTraction, listYear, listAirbags, listDoor,
            typeBodyWork, typeColor
    } = initialState()

    return (
        <Modal show={show} onHide={handleClose} dialogClassName="modal-50w">
            <Modal.Header>
                <Modal.Title className="pl-4 pr-5 pt-3">
                    {Object.keys(carSelected).length===0 ? 'Crear Auto' : 'Editar Auto' }
                </Modal.Title>
                <div className="icon-delete mr-5" onClick={handleClose}><img src={closeIcon} alt="Cerrar" /></div>
            </Modal.Header>
            <Modal.Body className="pl-5 pr-5">
                <form onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data"> 
                    <div className="row">
                        <div className="col">
                            <PictureLoad 
                                register={register} 
                                addRowPhoto={addRowPhoto}
                                listPhoto={vPhoto}
                                deleteRowPhoto={deleteRowPhoto}
                                onChangeFile={onChangeFile}
                                movePicture={movePicture}
                            />
                            
                        </div>
                    </div>
                   <PanelMain
                        register={register}
                        errors={errors}
                        categories={categories}
                        control={control}
                        typeTransmission={typeTransmission}
                        typeFuel={typeFuel}
                   />
                    <PanelDetails 
                        register={register}
                        errors={errors}
                        listYear={listYear}
                        typeOrigin={typeOrigin}
                        typeTraction={typeTraction}
                        typePerformance={typePerformance}
                        typeSeatMove={typeSeatMove}
                        typeBodyWork={typeBodyWork}
                        typeColor={typeColor}
                        control={control}
                    />

                    <PanelOptions
                        register={register}
                        listDoor={listDoor}
                        listAirbags={listAirbags}
                        setValue={setValue}
                    />
                    <div className="row">
                        <div className="col text-right mt-5 mb-5">
                            <button className="btn-modal btn  color-grey form-btn" onClick={()=>handleClose()}>
                                Cancelar
                            </button>
                            <button type="submit" className="btn-modal btn btn-orange form-btn" disabled={loading}>
                                { loading ? 'Procesando...' : 'Guardar' }
                            </button>
                        </div>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}

export default ModalForm