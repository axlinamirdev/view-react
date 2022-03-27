import { useState, useEffect } from "react"

import SelectArray from "../../SelectArray"
import FormButtonOptions from "../../FormButtonOptions"

import { formatArrayCategory } from "../../../../../utils/toolStore"
import { useForm, useFieldArray } from "react-hook-form"
import { useEditStore } from "../../../../../hooks/Store/useEditStore"

const PanelCategory = ({ defaulValues, toast, status, listado, disabledPanel }) => {

    const {
		editStoreForm
	} = useEditStore(toast)

	const { handleSubmit, reset, control, getValues } = useForm({defaulValues })
    const { fields: vCategories, append: addCategories,  remove: removeCategories } = useFieldArray({ control, name: "sCategories" })
    
	const [ loading, setLoading ]= useState(false)

	const onSubmit =  async (data, type) => {
        const verifyLength = formatArrayCategory(data.sCategories).length===0 ? true : false
        if(verifyLength){
            toast.error("Debe seleccionar una categoría",{position: toast.POSITION.TOP_RIGHT})
            return false
        }
		await editStoreForm(data, type, setLoading)     
    }

    const addFieldsForm = (type, status) => {
		if(!status){
            addCategories({ category: "" })
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const removeFieldsForm = (type, index, status) => {
		if(!status){
            removeCategories(index)
        }else{
            toast.error("Debe seleccionar el icono de editar",{position: toast.POSITION.TOP_RIGHT})
        }
    }

    const onChangeSelect = (event, type) => {
        let data = getValues()
        const { value } = event.target
        let message = "", error = false

        let isExiste = data[type.main].filter(item => Number(item.category)===Number(value))
        if(isExiste.length>1){
            error = true
            message = `La categoría ${value} ya se encuentra seleccionado`
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
    }, [defaulValues?.sCategories])


    return (
        <FormButtonOptions
            status={status}
            disabledPanel={disabledPanelForm}
            type="category"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loading={loading}
            title="Categoría"
        >
            <SelectArray                           
                control={control}
                nameInput={vCategories}
                addFieldsForm={addFieldsForm}
                removeFieldsForm={removeFieldsForm}
                type={{ main: "sCategories", item: "category"}}
                status={status}
                list={listado}
                onChangeSelect={onChangeSelect}
            />
        </FormButtonOptions>
    )
}

export default PanelCategory
