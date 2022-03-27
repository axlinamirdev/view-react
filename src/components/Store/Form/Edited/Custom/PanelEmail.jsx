import { useState, useEffect } from "react"
import InputArray from "../../InputArray"
import FormButtonOptions from "../../FormButtonOptions"

import { formatArrayEmail } from "../../../../../utils/toolStore"
import { useForm, useFieldArray } from "react-hook-form"
import { useEditStore } from "../../../../../hooks/Store/useEditStore"

const PanelEmail = ({ defaulValues, toast, status, disabledPanel }) => {

    const {
		editStoreForm
	} = useEditStore(toast)

	const { handleSubmit, register, reset, control, getValues } = useForm({defaulValues})
    const { fields: vEmail, append: addEmail,  remove: removeEmail } = useFieldArray({ control, name: "iEmail" })
    
	const [ loading, setLoading ]= useState(false)

	const onSubmit =  async (data, type) => {
        const verifyLength = formatArrayEmail(data.iEmail).length===0 ? true : false
        if(verifyLength){
            toast.error("Debe ingresar un e-mail",{position: toast.POSITION.TOP_RIGHT})
            return false
        }
		await editStoreForm(data, type, setLoading)     
    }

    const addFieldsForm = (type, status) => {
        if(!status){
            addEmail({ email1: "", email2: "", email3: "" })
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const removeFieldsForm = (type, index, status) => {
        if(!status){
            removeEmail(index)
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const onBlurInput = (event, type) => {
        event.preventDefault()
        
        let data = getValues()
        const { value } = event.target
        let message = "", error = false

        let regex = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; //eslint-disable-line
        const isValid = regex.test(value)
        if(isValid){
            let listado = formatArrayEmail(data[type]).filter(item => item===value)
            if(listado.length>1){
                event.target.value=""
                error = true
                message = `El e-mail ${value} lo ingreso anteriormente`
            }
        }else{
            error = true
            message = `El e-mail ${value} es inválido`  
            event.target.value=""
        }           

        if(error){
            toast.error(message, {position: toast.POSITION.TOP_RIGHT})
            return false
        }        
    }

    const disabledPanelForm = (name, value) => {
        if(value===true){
            reset(defaulValues)
        }        
        disabledPanel(name, value)
    }

    useEffect(()=> {
        reset(defaulValues)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [defaulValues?.iEmail])


    return (
        <FormButtonOptions
            status={status}
            disabledPanel={disabledPanelForm}
            type="email"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loading={loading}
            title="Correo recepción de leads"
        >
            <InputArray
                placeholder="tienda@corrreo.cl"
                register={register}
                nameInput={vEmail}
                addFieldsForm={addFieldsForm}
                removeFieldsForm={removeFieldsForm}
                type={{ main: "iEmail", item1: "email1", item2: "email2", item3: "email3"}}
                status={status}	
                onBlurInput={onBlurInput}					
            />
        </FormButtonOptions>

    )
}

export default PanelEmail
