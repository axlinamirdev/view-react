import { Modal } from "react-bootstrap"
import icon_warning from "../../../../assets/images/icon-warning.png"

const QuestionDelete = ({ handleClose, deleteStore, configMessage }) => {

    return (
        <>
            <Modal.Body className="pl-5 pr-5 text-center">
                <div>
                    <img src={icon_warning} alt="Atención" />
                </div>
                <p className="text-call-action mt-4">Atención</p>
                <p className="text-d-subtitle">{configMessage.text}</p>
            </Modal.Body>
            <Modal.Footer>
                <div className="row">
                    <div className="col text-right d-flex">
                        <button className="btn-modal btn  color-grey form-btn" onClick={()=>handleClose()}>
                            Cancelar
                        </button>
                        <button 
                            type="submit" 
                            className="btn-modal btn btn-outline-orange btn-delete"
                            onClick={deleteStore}
                        >
                            {configMessage.btn}
                        </button>
                    </div>
                </div>
            </Modal.Footer>
        </>
    )
}

export default QuestionDelete