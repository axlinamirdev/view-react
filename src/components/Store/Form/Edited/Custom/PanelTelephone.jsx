import { useState, useEffect } from "react"
import InputArray from "../../InputArray"
import FormButtonOptions from "../../FormButtonOptions"

import { formatArrayTelephone } from "../../../../../utils/toolStore"
import { useForm, useFieldArray } from "react-hook-form"
import { useEditStore } from "../../../../../hooks/Store/useEditStore"


const PanelTelephone = ({ defaulValues, toast, status, disabledPanel }) => {

    const {
		editStoreForm
	} = useEditStore(toast)

	const { handleSubmit, register, reset, control, getValues } = useForm({defaulValues})
    const { fields: vTelephone, append: addTelephone,  remove: removeTelephone } = useFieldArray({ control, name: "iTelephone" })
    
	const [ loading, setLoading ]= useState(false)

	const onSubmit =  async (data, type) => {
        const verifyLength = formatArrayTelephone(data.iTelephone).length===0 ? true : false
        if(verifyLength){
            toast.error("Debe ingresar un número de teléfono",{position: toast.POSITION.TOP_RIGHT})
            return false
        }
		await editStoreForm(data, type, setLoading)     
    }

    const addFieldsForm = (type, status) => {
        if(!status){
            addTelephone({ telephone1: "", telephone2: "", telephone3: "" })
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const removeFieldsForm = (type, index, status) => {
        if(!status){
            removeTelephone(index)
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const onBlurInput = (event, type) => {
        event.preventDefault()
        
        let data = getValues()
        const { value } = event.target
        let message = "", error = false

        let regex=/^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\./0-9]*$/g; //eslint-disable-line
 
        const isValid = regex.test(value)
        if(isValid){
            let listado = formatArrayTelephone(data[type]).filter(item => item===value)
            if(listado.length>1){
                event.target.value=""
                error = true
                message = `El teléfono ${value} lo ingreso anteriormente`
            }
        }  else {
            error = true
            message = `El formato del teléfono ${value} es inválido`
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
    }, [defaulValues?.iTelephone])


    return (
        <FormButtonOptions
            status={status}
            disabledPanel={disabledPanelForm}
            type="telephone"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loading={loading}
            title="Teléfono de contacto"
        >
            <InputArray
                placeholder="+56"
                register={register}
                nameInput={vTelephone}
                addFieldsForm={addFieldsForm}
                removeFieldsForm={removeFieldsForm}
                type={{ main: "iTelephone", item1: "telephone1", item2: "telephone2", item3: "telephone3"}}
                status={status}	
                onBlurInput={onBlurInput}					
            />
        </FormButtonOptions>
    )
}

export default PanelTelephone

