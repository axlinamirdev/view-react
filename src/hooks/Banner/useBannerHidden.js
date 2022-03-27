import { useForm } from "react-hook-form"
import { saveFormBanner } from "../../actions/bannerAction"
import { useDispatch } from "react-redux"

export const useBannerHidden = (banner, toast) => {
    
    const dispatch = useDispatch()
    
    const { register } = useForm({ })

    const changeHidden = async (event, banner) => {
        const { value } = event.target
        const body = {
            is_banner_hidden_id: value==="false" ? false : true
        }
        const response = await dispatch(saveFormBanner(body))

        if(response.status){
            toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
        }else{
            toast.error("Hubo un error al actualizar  el banner", {position: toast.POSITION.TOP_RIGHT})
            return false
        }
    }

    return {
        register,
        changeHidden
    }
}