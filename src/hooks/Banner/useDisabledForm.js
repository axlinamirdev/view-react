

import { disabledForm } from "../../actions/bannerAction"
import { useDispatch } from 'react-redux'


export const useDisabledForm = () => {
    
    const dispatch = useDispatch()

    const changeFormStatus = (id, type, value) => {
        dispatch(disabledForm(id, type, value))
    }

    return {
        changeFormStatus
    }
}