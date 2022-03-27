
import { useState } from 'react'
import { getCarsById, deletePausedCarToStore } from "../../actions/carAction"
import { useDispatch } from 'react-redux'

export const useDeleteEditCar = (toast) => {
	
	const dispatch = useDispatch()
    const [show, setShow] = useState(false)
    const [showDelete, setShowDelete] = useState(false)
    const [ carData, setCarData ]= useState({ id: 0, type: "delete"})
    const [ visibleMessage, setVisibleMessage ] = useState(false)
    const [ configMessage, setConfiMessage ] = useState("")

    const handleCloseOpen = () => {
        setShow(!show)
        dispatch(getCarsById(null, "add"))
    }

    const handleEditCar = (item) => {

        const response = dispatch(getCarsById(item,"edit"))
        if(response.status){
            setShow(true)
        }
    }

    const handleCloseDelete = (id, type, title) => {
        setCarData({ id, type })
        setShowDelete(showDelete=>!showDelete)
        setVisibleMessage(false)
        setConfiMessage({
            text: `¿Estás seguro de que quieres ${type} el auto?`,
            message: `El auto se ha ${title} con éxito`,
            btn: `Si, ${type}`
        })       
    }

    const deleteCar = async () => {
        await dispatch(deletePausedCarToStore(carData))
        setVisibleMessage(true)
    }

    


	return {
		handleCloseOpen, 
        handleEditCar,
        show,
        deleteCar,
        handleCloseDelete,
        visibleMessage,
        configMessage,
        showDelete
	}
}