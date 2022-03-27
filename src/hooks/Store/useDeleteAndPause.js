import { useState } from "react"
import {  deleteStoreById, pausedStoreById, filtereByConcessionaireStore } from "../../actions/storeAction"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom"

export const useDeleteAndPause = (toast) => {

    const dispatch = useDispatch()
    const history = useHistory()
    const [ storeData, setStoreData ]= useState({ id: 0, type: "delete"})
    const [ visibleMessage, setVisibleMessage ] = useState(false)
    const [ configMessage, setConfiMessage ] = useState("")
    const [ show, setShow ] = useState(false)


    const handleCloseOpen = (id, type, title) => {
        setStoreData({ id, type })
        setShow(show=>!show)
        setVisibleMessage(false)
        setConfiMessage({
            text: `¿Estás seguro de que quieres ${type} tu tienda?`,
            message: `Tu tienda se ha ${title} con éxito`,
            btn: `Si, ${type}`
        })
    }

    const deleteStore = async () => {

         if(storeData.type !== "eliminar"){
             await dispatch(pausedStoreById(storeData))
        }else {
            await dispatch(deleteStoreById(storeData))
        }
 
        setVisibleMessage(true)
    }

    const handleSelectedStore = (slug) => {
        const url = "/tienda/"+slug
        history.push(url)
    }

    const filteredStore = (name) => {
        dispatch(filtereByConcessionaireStore(name))
    }


    return {
        visibleMessage,
        handleCloseOpen,
        deleteStore,
        show,
        configMessage,
        handleSelectedStore,
        filteredStore
    }
}