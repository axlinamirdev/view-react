import { createStoreInitial } from "../../../../actions/storeAction"
import { useForm, Controller } from "react-hook-form"
import { useDispatch } from 'react-redux'
import { useHistory } from "react-router-dom"

const FormInitial = ({ categories }) => {

    const history = useHistory()
    const dispatch = useDispatch()
    const { handleSubmit, register, errors, control } = useForm({})

    const onSubmit =  async (data, e) => {

        const response =await dispatch(createStoreInitial(data))
        if(response.status){
            history.push("/tienda/crear")
        }      
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="row">
                <div className="col-xs-12 col-md-4 mb-4">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Nombre"
                        name="brand"
                        id="brand"
                        ref={register({required: {value: true, message: 'Requerido'}})}
                    />
                    {errors.brand && (
                        <span className="text-danger">
                            {errors?.brand?.message}
                        </span>
                    )}
                </div>
                <div className="col-xs-12 col-md-4 mb-4">
                        <Controller
                            control={control}
                            name="sCategories[0].category"
                            rules={{ required: {value: true, message: 'Requerido'} }}
                            defaultValue={""}
                            as = {
                                <select 
                                    id="sCategories[0].category"
                                    className="form-control"
                                >
                                    <option value="">Seleccionar Categoría</option>
                                    {
                                        categories.length>0 && 
                                        categories.map((item, key) => <option key={key} value={item.value}>{item.label}</option>)
                                    }
                                </select>
                            }
                        />
                        {errors.category_id && (
                            <span className="text-danger">
                                {errors?.category_id?.message}
                            </span>
                        )}
                </div>
                <div className="col-xs-12 col-md-4 mb-4">
                    <button type="submit" className="btn btn-orange pl-5 pr-5 pt-2 pb-2">Crear tienda</button>
                </div>
            </div>
        </form>
    )
}

export default FormInitial