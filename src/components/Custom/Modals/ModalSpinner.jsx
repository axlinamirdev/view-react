import { Modal } from 'react-bootstrap'
import Lottie from 'react-lottie'
import animationData from './loading.json'

const ModalSpinner = ({ message, width=500, height=300 }) => {

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return (
        <Modal
            show={true}
            backdrop="static"
            keyboard={false}
            className="modal-content-spinner"
            dialogClassName="modal-spinner"
        >
            <div className="row">
                <div className="col-12">
                    <div >
                    <Lottie options={defaultOptions}
                            height={height}
                            width={width}
                            />
                        <p className="loading-car__text">{message}</p>
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default ModalSpinner