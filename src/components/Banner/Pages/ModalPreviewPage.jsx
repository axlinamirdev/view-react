import { useEffect, useState } from "react"
import { Modal, Image } from "react-bootstrap"
import closeIcon from "../../../assets/images/delete.svg"


const ModalPreviewPage = ({ data, handleClose }) => {
    const [ imagen, setImagen ] = useState("")

    useEffect(()=> {
        setImagen(data.item?.preview?.url)

    }, [data])

    return (
        <Modal show={data.status} onHide={handleClose} size="lg">
            <Modal.Header>
                <Modal.Title className="pl-4 pr-5 pt-3">
                    
                </Modal.Title>
                <div className="icon-delete mr-5" onClick={handleClose}><img src={closeIcon} alt="Cerrar" /></div>
            </Modal.Header>
            <Modal.Body className="pl-5 pr-5 pb-5 text-center">
                <section className="banner-selected__container">
                    <Image 
                        src={imagen}
                        fluid 
                    />
                    <div className={`banner-selected ${data.item?.preview?.style}`}>
                        <Image 
                            src={data.item?.ic_desktop_main?.photo}
                        />
                    </div>
                </section>
            </Modal.Body>
        </Modal>
    )
}

export default ModalPreviewPage