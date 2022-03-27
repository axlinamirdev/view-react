import { useState } from "react"
import { editStore, disabledPanelEditStore } from "../../actions/storeAction"
import { useDispatch } from 'react-redux'


export const useEditStore = (toast) => {

    const dispatch = useDispatch()
    const [fileNameLogo, setFileNameLogo] = useState("Cargar imagen")
    const [fileNameCover, setFileNameCover] = useState("Cargar imagen")
    const [ fileNameCoverMobile, setFileNameCoverMobile ] = useState("Cargar imagen")

    const editStoreForm = async (data, type, setLoading) => {
        try{
            setLoading(true)

            let response = await dispatch(editStore(data, type))
            if(response.status){
                toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
            }else{
                toast.error(response.message,{position: toast.POSITION.TOP_RIGHT})
            }

            setLoading(false) 
        }catch(error){
            setLoading(false) 
            toast.error(error.message,{position: toast.POSITION.TOP_RIGHT})
        }        
    }

    const disabledPanel = (name, value) => {
        dispatch(disabledPanelEditStore(name, value))
    }

    return {
        editStoreForm,
        disabledPanel,
        fileNameLogo, 
		setFileNameLogo,
		fileNameCover, 
		setFileNameCover,
        fileNameCoverMobile,
        setFileNameCoverMobile
    }
}