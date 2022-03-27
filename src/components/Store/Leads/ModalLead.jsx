import { Modal } from "react-bootstrap"
import PanelMain from "../../Custom/Leads/PanelMain"
import closeIcon from "../../../assets/images/delete.svg"

const ModalLead = ({ visible, closeLead, defaultValues }) => {

    return (
        <Modal show={visible} onHide={closeLead} dialogClassName="modal-90w">
            <Modal.Header>
                <div className="icon-delete w-100 pr-5" onClick={closeLead}><img src={closeIcon} alt="Cerrar" /></div>
            </Modal.Header>
            <Modal.Body className="pl-5 pr-5">
                <PanelMain defaultValues={defaultValues} hideSelect={false} />
            </Modal.Body>
        </Modal>
    )
}

export default ModalLead