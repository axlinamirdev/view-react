
import { useState, useEffect } from "react"
import SelectArray from "../../SelectArray"
import FormButtonOptions from "../../FormButtonOptions"

import { formatArrayLocal } from "../../../../../utils/toolStore"
import { useForm, useFieldArray } from "react-hook-form"
import { useEditStore } from "../../../../../hooks/Store/useEditStore"

const PanelLocals = ({ defaulValues, toast, status, listado, disabledPanel}) => {
    
    const {
		editStoreForm
	} = useEditStore(toast)

	const { handleSubmit, reset, control, getValues } = useForm({defaulValues})
    const { fields: vLocals, append: addLocals, remove: removeLocals } = useFieldArray({ control, name: "sLocals" })
    
	const [ loading, setLoading ]= useState(false)

	const onSubmit =  async (data, type) => {
        
        const verifyLength = formatArrayLocal(data.sLocals).length===0 ? true : false
        if(verifyLength){
            toast.error("Debe seleccionar un local",{position: toast.POSITION.TOP_RIGHT})
            return false
        }
		await editStoreForm(data, type, setLoading)     
    }

    const addFieldsForm = (type, status) => {
		if(!status){
            addLocals({ local: "" })
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const removeFieldsForm = (type, index, status) => {
		if(!status){
            removeLocals(index)
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const onChangeSelect = (event, type) => {
        let data = getValues()
        const { value } = event.target
        let message = "", error = false

        let isExiste = data[type.main].filter(item => item.local===value)
        if(isExiste.length>1){
            error = true
            message = `El local ${value} ya se encuentra seleccionado`
        }

        if(error){
            removeFieldsForm(type.item, (data[type.main].length-1), false)
            addFieldsForm(type.item, false)
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
    }, [defaulValues?.sLocals])


    return (
        <FormButtonOptions
            status={status}
            disabledPanel={disabledPanelForm}
            type="local"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loading={loading}
            title="Número local"
        >
            <SelectArray                           
                control={control}
                nameInput={vLocals}
                addFieldsForm={addFieldsForm}
                removeFieldsForm={removeFieldsForm}
                type={{ main: "sLocals", item: "local"}}
                status={status}
                list={listado}
                onChangeSelect={onChangeSelect}
            />
        </FormButtonOptions>

    )
}

export default PanelLocals
