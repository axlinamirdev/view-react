import { useState } from "react"
import { useForm } from "react-hook-form"
import { saveFormBanner, changeActionTypeBanner } from "../../actions/bannerAction"
import { useDispatch } from "react-redux"
//import { useHistory } from "react-router-dom"

export const useBannerUrl = (toast) => {
    
    const dispatch = useDispatch()
    const [ loading, setLoading ]= useState(false)
    
    const { handleSubmit, register } = useForm({})

    const onSubmit =   async (data, valueLast) => {
        setLoading(true)
        
        if(data?.url_banner){
            if(data.url_banner.startsWith("https://") || data.url_banner.startsWith("http://") || data.url_banner.startsWith("//")){
                toast.error("La ruta no puede tener dominio", {position: toast.POSITION.TOP_RIGHT})
                setLoading(false)
                return false
            }
        }
        
        const response = await dispatch(saveFormBanner(data))
        setLoading(false)
        if(response.status){
            toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
        }else{
            toast.error("Hubo un error al actualizar la ruta", {position: toast.POSITION.TOP_RIGHT})
            return false
        }     
    }

    const changeFormFunction =  (event, position, banner) => {

        if(banner.action_type!==event.target.value){
            dispatch(changeActionTypeBanner(event.target.value, position, banner))
        } 
    }
   

    return {
        handleSubmit,
        onSubmit,
        register,
        loading,
        changeFormFunction
    }
}