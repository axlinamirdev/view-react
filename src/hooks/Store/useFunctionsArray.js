import { removeArraySelect, addArraySelect } from "../../actions/storeAction"
import { useDispatch } from 'react-redux'


export const useFunctionsArray = (toast) => {

    const dispatch = useDispatch()

    const addRowSelect = (type, status) => {
        if(!status){
            dispatch(addArraySelect(type))   
        } else{
            toast.error("Debe darle click en el botón editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const deleteRowSelect = (index, type, status, reset) => {
        if(!status){
            let response = dispatch(removeArraySelect(index, type))
            reset({...response.defaultValues})
        } else{
            toast.error("Debe darle click en el botón editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    return {
        addRowSelect,
        deleteRowSelect
    }

}