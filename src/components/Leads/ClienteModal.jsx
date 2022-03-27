import { Modal } from "react-bootstrap"
import closeIcon from "../../assets/images/delete.svg"

const ClienteModal = ({ show, handleClose, cliente }) => {

    return (
        <Modal show={show} onHide={handleClose} backdropClassName="backdrop-leads" backdrop="static">
            <Modal.Header>
                <Modal.Title className="pl-4 pr-5 pt-3">Información de cliente</Modal.Title>
                <div className="icon-delete" onClick={handleClose}><img src={closeIcon} alt="Cerrar" /></div>
            </Modal.Header>
            <Modal.Body className="pl-5 pr-5">
                <div className="infor-client">
                    <p className="info__title">Nombre</p>
                    <p className="info__subtitle">{cliente.name}</p>
                </div>
                <div className="infor-client">
                    <p className="info__title">Correo</p>
                    <p className="info__subtitle">{cliente.email}</p>
                </div>
                <div className="infor-client">
                    <p className="info__title">Teléfono</p>
                    <p className="info__subtitle">{cliente.telephone}</p>
                </div>
                <div className="infor-client">
                    <p className="info__title">Mensaje</p>
                    <p className="info__subtitle">{cliente.message}</p>
                </div>
            </Modal.Body>
            <Modal.Footer className="pl-5 pr-5">
            <button className="w-100 btn-modal btn btn-orange" onClick={handleClose}>
                Ok
            </button>
            </Modal.Footer>
        </Modal>
    )
}

export default ClienteModal