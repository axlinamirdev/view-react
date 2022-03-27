
import { useState } from "react"
import { useForm } from "react-hook-form"
import { useEditStore } from "../../../../../hooks/Store/useEditStore"
import FormButtonOptions from "../../FormButtonOptions"

const FormDescription = ({ description, icon_edit, icon_save, status, disabledPanel, toast }) => {

	const {
		editStoreForm
	} = useEditStore(toast)

	const { handleSubmit, register, setValue, errors } = useForm({defaultValues: {
		description
	}})
	const [ loading, setLoading ]= useState(false)

	const onSubmit =  async (data, type) => {
		await editStoreForm(data, type, setLoading)     
		setValue("description", data?.description)
    }

	const disabledPanelForm = (name, value) => {
        if(value===true){
            setValue("description", description)
        }        
        disabledPanel(name, value)
    }

	return (
		<FormButtonOptions
            status={status}
            disabledPanel={disabledPanelForm}
            type="description"
            handleSubmit={handleSubmit}
            onSubmit={onSubmit}
            loading={loading}
            title="Descripción"
        >
			<textarea 
				rows="3" 
				cols="3"
				className="form-control" 
				placeholder="Escribe aquí"
				id="description"
				name="description"
				ref={register({required: {value: true, message: 'Requerido'}})}
				disabled={status}
			/>
			{errors.description && (
				<span className="text-danger">
					{errors?.description?.message}
				</span>
			)}
		</FormButtonOptions>
	)
}

export default FormDescription