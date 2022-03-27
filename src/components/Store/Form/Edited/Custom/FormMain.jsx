import { useState } from "react"
import { useForm } from "react-hook-form"
import { useEditStore } from "../../../../../hooks/Store/useEditStore"
import FormButtonOptions from "../../FormButtonOptions"

const FormMain = ({ storeSelected, status, disabledPanel, toast }) => {
    
    const {
		editStoreForm
	} = useEditStore(toast)

    const { handleSubmit, register, errors, setValue } = useForm({ defaultValues: {
        brand: storeSelected?.brand
    }})
    const [ loading, setLoading ]= useState(false)

	const onSubmit =  async (data, type) => {
		await editStoreForm(data, type, setLoading)    
        setValue("brand", data?.brand)
    }

    const disabledPanelForm = (name, value) => {
        if(value===true){
            setValue("brand", storeSelected?.brand)
        }        
        disabledPanel(name, value)
    }
   

    return (
        <FormButtonOptions
            status={status}
            disabledPanel={disabledPanelForm}
            type="main"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loading={loading}
            title="Nombre"
        >
            <input 
                type="text" 
                className="form-control" 
                placeholder="Nombre"
                id="brand"
                name="brand"
                readOnly={status}
                ref={register({required: {value: true, message: 'Requerido'}})}
            />
            {errors.brand && (
                <span className="text-danger">
                    {errors?.brand?.message}
                </span>
            )}
        </FormButtonOptions>
    )
}

export default FormMain