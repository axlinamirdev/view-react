import { Modal, Image } from "react-bootstrap"
import closeIcon from "../../assets/images/delete.svg"

const ModalPreview = ({ show, handleClose, item }) => {

    return (
        <Modal show={show} onHide={handleClose} size="lg">
            <Modal.Header>
                <Modal.Title className="pl-4 pr-5 pt-3">
                    
                </Modal.Title>
                <div className="icon-delete mr-5" onClick={handleClose}><img src={closeIcon} alt="Cerrar" /></div>
            </Modal.Header>
            <Modal.Body className="pl-5 pr-5 pb-5 text-center">
                    <Image 
                        src={item?.url}
                        fluid 
                    />
            </Modal.Body>
        </Modal>
    )
}

export default ModalPreview
