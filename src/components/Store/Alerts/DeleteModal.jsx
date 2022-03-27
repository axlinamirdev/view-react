import { Modal } from "react-bootstrap"
import QuestionDelete from "./Message/QuestionDelete"
import ExitMessage from "./Message/ExitMessage"
import closeIcon from "../../../assets/images/delete.svg"

const DeleteModal = ({ show, handleClose, visibleMessage, deleteStore, configMessage }) => {

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header>
                <div className="icon-delete w-100 pr-5" onClick={handleClose}><img src={closeIcon} alt="Cerrar" /></div>
            </Modal.Header>
            {
                !visibleMessage ? (
                    <QuestionDelete handleClose={handleClose} deleteStore={deleteStore} configMessage={configMessage} />
                ) : <ExitMessage handleClose={handleClose} message={configMessage.message} />
            }
        </Modal>
    )
}

export default DeleteModal