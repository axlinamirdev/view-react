import { Spinner } from "react-bootstrap"

const LoadingTable = () => {

    return (
        <div className="spinner-table">
            <Spinner animation="grow" className="mr-1" />
            <Spinner animation="grow" className="mr-1" />
            <Spinner animation="grow" className="mr-1" />
            <Spinner animation="grow" className="mr-1" />
            <Spinner animation="grow" className="mr-1" />
            <Spinner animation="grow" />
        </div>
    )
}

export default LoadingTable