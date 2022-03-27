
import { Modal } from "react-bootstrap"
import icon_warning from "../../../../assets/images/icon-delete.png"

const ExitMessage = ({ handleClose, message }) => {

    return (
        <Modal.Body className="pl-5 pr-5 text-center">
            <div>
                <img src={icon_warning} alt="Atención" />
            </div>
            <p className="text-d-subtitle mt-4">{message}</p>
            <button 
                type="submit" 
                className="btn-modal btn btn-outline-orange pt-3 pb-3 mt-4 btn-delete"
                onClick={handleClose}
            >
                Ok
            </button>
        </Modal.Body>
    )
}

export default ExitMessage