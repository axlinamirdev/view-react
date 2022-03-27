import { useState } from "react"
import FormButtonOptions from "../../FormButtonOptions"
import PictureLoad from "../../PictureLoad"
import { useForm } from "react-hook-form"
import { useEditStore } from "../../../../../hooks/Store/useEditStore"
import pictureDefault from "../../../../../assets/images/camara-fotografica.svg"


const FormaLoadPicture = ({ pictureMain, status, disabledPanel, toast, 
    title, fileNameLogo, setFileNameLogo, name, typePicture, measure
}) => {
    
    const {
		editStoreForm
	} = useEditStore(toast)

	const { handleSubmit, register, errors } = useForm({})
	const [ loading, setLoading ]= useState(false)

    const saveFormPicture =  async (data, type) => {
   
        if(data[name].length===0){
            toast.error("Debe selecionar una imagen", {position: toast.POSITION.TOP_RIGHT})
            return false 
        }

        if(data[name][0].size>122880){
            toast.error("El tamaño máximo del documento es 120KB", {position: toast.POSITION.TOP_RIGHT})
            return false
        }      

        let nameInput = ""
        if(name==="cover_mobile_file"){
            nameInput="front_cover_mobile"
        }else if(name==="cover_desktop_file"){
            nameInput="front_cover"
        }else if(name==="icon_logo_file"){
            nameInput="icon_logo"
        }

        const body = {
            ...data, 
            [nameInput]: data[name][0]
        }

        delete body[name]
        
		await editStoreForm(body, type, setLoading) 
    }

    return (
        <FormButtonOptions
            status={status}
            disabledPanel={disabledPanel}
            type={typePicture}
            handleSubmit={handleSubmit}
            onSubmit={saveFormPicture}
            loading={loading}
            title={title}
        >
            <PictureLoad
                pictureDefault={pictureMain || pictureDefault}
                name={name}
                register={register}
                fileName={fileNameLogo}
                setFileName={setFileNameLogo}
                status={status}
                errors={errors}
                measures={measure}
                toast={toast}                                            
            />
        </FormButtonOptions>
    )
}

export default FormaLoadPicture