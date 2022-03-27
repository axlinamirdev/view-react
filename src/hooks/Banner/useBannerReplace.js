import { useState } from "react"
import { useForm } from "react-hook-form"
import { changeIsCheduled, saveFormBanner, updateStatusScheduled } from "../../actions/bannerAction"
import { useDispatch } from "react-redux"

export const useBannerReplace = (toast) => {
    
    const dispatch = useDispatch()
    const [ loading, setLoading] = useState(false)
    
    const { handleSubmit, register, control, errors } = useForm({})

    const onSubmit =   async (data, e) => {
        e.preventDefault()
        
        setLoading(true)
  

        const body = {
            end_date: data.end_date,
            is_scheduled: data.is_scheduled,
            start_date: data.start_date,
            ic_desktop_scheduled: data.pictures.length>0 ? data.pictures[0] : "",
            ic_mobile_scheduled: data.pictures.length>0 ? data.pictures[1] : ""
        }
        
        const response = await dispatch(saveFormBanner(body))

        setLoading(false)
        if(response.status){
            toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
        }else{
            toast.error("Hubo un error al actualizar la url", {position: toast.POSITION.TOP_RIGHT})
            return false
        }
        
    }

    const changeScheduled = async (event, position, item) => {
        const { value } = event.target
        const valueData = value==="false" ? false : value
        dispatch(changeIsCheduled(valueData, position, item))
        
        if(valueData===false){
            await dispatch(updateStatusScheduled())
        }
    }

    const updateUrlBanner = async (event, valueLast) => {

        if(event.target.value!==valueLast){
            const body = { url_banner: event.target.value }
        
            const response = await dispatch(saveFormBanner(body))
            if(response.status){
                toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
            }else{
                toast.error("Hubo un error al actualizar la url", {position: toast.POSITION.TOP_RIGHT})
                return false
            }
        }        
    }

   

    return {
        handleSubmit,
        onSubmit,
        register,
        control,
        errors,
        changeScheduled,
        updateUrlBanner,
        loading
    }
}