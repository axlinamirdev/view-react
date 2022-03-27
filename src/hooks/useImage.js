

import { useState } from 'react'
import { saveFormBanner} from "../actions/bannerAction"
import { useDispatch } from 'react-redux'
import { useForm } from "react-hook-form"

export const useImage = (toast, typeImage) => {
    
    const dispatch = useDispatch()
    const [ loading, setLoading ]= useState(false)
    const { handleSubmit, register } = useForm({})

    const onSubmit =  async (data) => {
        setLoading(true)

        const response = await dispatch(saveFormBanner({ [typeImage]: data.pictures}))
        setLoading(false)
        if(response.status){
            toast.success(response.message,{position: toast.POSITION.TOP_RIGHT})
        }else{
            toast.error(response.message, {position: toast.POSITION.TOP_RIGHT})
            return false
        }
    }

    const onChangeFile = (event, setFile, setFileName, typeImage, measures, banner) => {

        if (!event.target.files || event.target.files.length === 0) {
            //setFile(undefined)
            setFileName("Cargar imagen")
            return false
        }
        let reader = new FileReader();

        reader.readAsDataURL(event.target.files[0]);

        reader.onload = function (e) {
            let image = new Image();
            image.src = e.target.result;
            
            let nameFile = banner[typeImage]?.name
            if(typeof banner[typeImage]?.photo!=="undefined" && !banner[typeImage].photo.includes("camara-fotografica")){
                const urlSplit = banner[typeImage]?.photo.split("/")
                nameFile = urlSplit[urlSplit.length-1]
            }
                   
            //Validate the File Height and Width.
            image.onload = function () {
                let height = this.height;
                let width = this.width;

                if(width>measures.width){
                    toast.error(`Las medidas de la imagen es ${measures.title}`, {position: toast.POSITION.TOP_RIGHT})
                    setFileName(nameFile)
                    setFile(banner[typeImage]?.photo)
                    event.target.value=null
                    return false
                }

                if(height>measures.height){
                    toast.error(`Las medidas de la imagen es ${measures.title}`, {position: toast.POSITION.TOP_RIGHT})
                    setFileName(nameFile)
                    setFile(banner[typeImage]?.photo)
                    event.target.value=null
                    return false
                }

                /**const data = {
                    id: vPhoto[index].id,
                    value: URL.createObjectURL(event.target.files[0]),
                    photo: event.target.files,
                    name: event.target.files[0].name
                }   
        
                let body = vPhoto
                body[index] = data**/
                setFile(URL.createObjectURL(event.target.files[0]))
                setFileName(event.target.files[0].name)
                //setValue('vPhoto', body)
                //dispatch(updatePictures(body))
                return true;
            };
        } 
        
    }


	return {
		onChangeFile,
        handleSubmit, 
        register,
        onSubmit,
        loading
	}
}